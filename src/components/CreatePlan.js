import React, { useContext } from "react";
import PropTypes from 'prop-types';
// Components
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ParticipantContext from "../context/ParticipantContext";

const CreatePlan = (props) => {

    const { onClick } = props;
    const { participants } = useContext(ParticipantContext);
    const handleClick = () => [
        onClick(true)
    ];
    
    return(
        <Box component='div'>
            <Typography>
                Aktuelle Teilnehmeranzahl: { participants.length }
            </Typography>       
            { ( participants.length > 6 || participants.length === undefined ) &&
                <Button onClick={ handleClick }>Turnierplan erstellen</Button>
            }
        </Box>
    );
};

CreatePlan.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default CreatePlan;