import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@material-ui/core";

function App() {

  const [list, setList] = useState([])
  const [params, setParams] = useState({field: "", op: "", value: ""})

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "field": "context",
        "value": null,
        "op": "=="
      })
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

  function renderItem(item) {
      return <Grid item container direction={"row"} justify={"space-between"}>
          <Grid item>
              <img src={item.url} height={200} width={200} style={{objectFit: "cover"}}/>
          </Grid>
          <Grid item>
              {item.labels}
          </Grid>
          <Grid item>

          </Grid>
      </Grid>
  }

  return (
    <Grid container direction={"column"} alignItems={"center"} spacing={2}>
        <Grid item>
            <Typography>
                Images
            </Typography>
        </Grid>

        <Grid item container direction={"row"}>

        </Grid>

        {list.map(item => renderItem(item))}
    </Grid>
  );
}

export default App;
