import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export function InfoDialog (props) {

    const { title, children, open, setOpen } = props;
    return (
        <Dialog fullWidth
                style={{width: 800}}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
            maxWidth={false}
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="default"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}