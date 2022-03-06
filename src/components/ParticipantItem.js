import React, { useContext } from "react";
// Componrnts
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import ParticipantContext from "../context/ParticipantContext";
import Grid from '@mui/material/Grid';

const ParticiantItem = (props) => {
    
    const { participant, id, callback } = props;
    const {  participants, setParticipants } = useContext(ParticipantContext);
 
    const handleClick = (i) => {
                                
        const update = participants.filter(( e, j) =>  i !== j )
        setParticipants(update)
        callback(true);
    }

    return (
        <Grid item key={id} sx={{ display: 'flex'}} alignItems='center'>
            <Typography component='span'>
                { participant }
            </Typography>
            <Button 
                variant='contained' 
                onClick={ () => { handleClick(id) }}
                sx={{marginLeft: 'auto'}}
            >
                Entfernen
            </Button>
        </Grid>
    )
}

export default ParticiantItem;