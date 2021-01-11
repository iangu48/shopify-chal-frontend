import React, {useEffect, useState} from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {InfoDialog} from "./components";

function App() {

    const [list, setList] = useState([])
    const [infoOpen, setInfoOpen] = useState(false)
    const [displayedInfo, setDispInfo] = useState({})
    const [urls, setUrls] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        search({
            "field": "context",
            "value": null,
            "op": "=="
        })
    }, [])

    function search(query) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query)
        };
        fetch('https://stormy-wildwood-04842.herokuapp.com/search', requestOptions)
            .then(async response => {
                const data = await response.json();
                console.log(data)
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                setList(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    function upload() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({urls})
        };
        fetch('https://stormy-wildwood-04842.herokuapp.com/upload', requestOptions)
            .then(async response => {
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.status;
                    return Promise.reject(error);
                }
                search({
                    "field": "context",
                    "value": null,
                    "op": "=="
                })
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    function del(id, i) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        };
        fetch('https://stormy-wildwood-04842.herokuapp.com/delete', requestOptions)
            .then(async response => {
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.status;
                    return Promise.reject(error);
                }
                const copy = [...list]
                copy.splice(i, 1)
                setList(copy)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    function renderItem(item, i) {
        return <Grid item container direction={"row"} justify={"space-between"} key={item + i}>
            <Grid item xs={1}>
                <img src={item.url} height={200} width={200} style={{objectFit: "cover"}}/>
            </Grid>
            <Grid item container direction={"column"} xs={6}>
                <Grid item>

                    <Typography variant={"body1"} display={"inline"}>
                        <b>Labels: </b> {item.labels.join(', ')}

                    </Typography>
                </Grid>
                <Grid item>
                    <Button onClick={() => {
                        setDispInfo(item)
                        setInfoOpen(true)
                    }}>
                        View info
                    </Button>
                </Grid>
            </Grid>
            <Grid item>
                <Button style={{color: 'red'}} onClick={() => {del(item.id, i)}}>
                    Delete
                </Button>
            </Grid>
        </Grid>
    }

    return (
        <Grid container direction={"column"} alignItems={"center"} spacing={2}>
            <InfoDialog
                title={"Info"}
                open={infoOpen}
                setOpen={setInfoOpen}
            >
                <Grid container direction={"column"}>
                    {Object.entries(displayedInfo).map((value,i) => {
                            return <Grid container direction={"row"} justify={"center"} spacing={2} key={value + i}>
                                <Grid item xs={5}>
                                    <Typography variant={"body2"} align={"right"}>
                                        {value[0]}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant={"body2"} paragraph style={{whiteSpace: 'pre-line'}}>
                                        {JSON.stringify(value[1], null, 2)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        }
                    )}

                </Grid>

            </InfoDialog>
            <Grid item>
                <Typography variant={"h5"}>
                    Images
                </Typography>
            </Grid>

            <Grid item container direction={"row"} alignItems={"center"} justify={"space-between"}>
                <Grid item xs={3}>
                    <TextField
                        label={'search by labels (separated by newline)'}
                        fullWidth
                        rows={5}
                        multiline
                        onChange={e => {
                            const u = e.target.value.split('\n')
                            console.log(u)
                            setLabels(u)
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button onClick={() => {
                        search({
                            "field": "labels",
                            "value": labels,
                            "op": "array-contains-any"
                        })
                    }}>
                        Search
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label={'img URLS (separated by newline)'}
                        fullWidth
                        multiline
                        rows={5}
                        onChange={e => {
                            const u = e.target.value.split('\n')
                            console.log(u)
                            setUrls(u)
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button onClick={upload}>
                        Upload
                    </Button>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>

            {list.map((item, i) => renderItem(item, i))}
        </Grid>
    );
}

export default App;
