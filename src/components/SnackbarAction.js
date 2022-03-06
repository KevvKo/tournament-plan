import React from "react";
// Components
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

const SnackbarAction = (props) => {

    const { callback } = props;


    const handleClose = () => {
        callback(false)
    }

    return (
        <React.Fragment>
          <Button size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
}

export default SnackbarAction;