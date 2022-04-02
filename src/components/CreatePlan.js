import React, { useContext } from "react";
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
    ]
    return(
        <Box component='div'>
            <Typography>
                Aktuelle Teilnehmeranzahl: { participants.length }
            </Typography>       
            { ( participants.length !== 0  || participants.length === undefined ) &&
                <Button onClick={ handleClick }>Turnierplan erstellen</Button>
            }
        </Box>
    );
};

export default CreatePlan;