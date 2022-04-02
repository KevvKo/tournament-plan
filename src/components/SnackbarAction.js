import React from "react";
// Components
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

const SnackbarAction = (props) => {

    const { callback, setOpen } = props;


    const handleClose = () => {
        setOpen(false);
    };

    const handleUndo = () => {
      callback();
      setOpen(false);
    };

    return (
        <React.Fragment>
          <Button size="small" onClick={ handleUndo }>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={ handleClose }
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
};

export default SnackbarAction;