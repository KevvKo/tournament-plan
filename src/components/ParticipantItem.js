import React, { useContext } from "react";
import PropTypes from 'prop-types';
// Componrnts
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import ParticipantContext from "../context/ParticipantContext";
import Grid from '@mui/material/Grid';

const ParticiantItem = (props) => {
    
    const { participant, id, setOpen, setRemovedParticipant } = props;
    const { participants, setParticipants } = useContext(ParticipantContext);
 
    const handleClick = (i) => {
                                
        const update = participants.filter(( e, j) =>  i !== j );
        setRemovedParticipant({
            name: participants[i],
            index: i
        });
        setParticipants(update);
        setOpen(true);
    };

    return (
        <Grid item key={id} sx={{ display: 'flex'}} alignItems='center'>
            <Typography component='span' >
                { participant }
            </Typography>
            <Button 
                variant='contained' 
                onClick={ () => { handleClick(id); }}
                sx={{marginLeft: 'auto'}}
            >
                Entfernen
            </Button>
        </Grid>
    );
};

ParticiantItem.propTypes = {
    participant: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    setOpen: PropTypes.func.isRequired,
    setRemovedParticipant: PropTypes.func.isRequired
};

export default ParticiantItem;