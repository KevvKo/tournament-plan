import React, { useContext, useState } from "react";
import './participantsView';
import ParticipantContext from "../../context/ParticipantContext";
// Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

const ParticipantsView = () => {

    const { participants, setParticipants } = useContext(ParticipantContext);
    const [ inputValue, setInputValue ] = useState('');
    const [ open, setOpen ] = useState(false);

    const handleClickAddParticipant = () => {

        if(inputValue){
            setParticipants([
                ...participants,
                inputValue
            ])
        }
    }   

    const handleChange = (e) => {
        if( e.target.value ){
            setInputValue(e.target.value);
        }
    };  

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
          }
        setOpen(false);
    };

    return( 
        <Box>
            <Grid container spacing={3}>
                <ParticipantContext.Consumer>
                    { ({ participants, setParticipants }) => (
                        participants.map((e, i) => {

                            const handleClickRemove = (i) => {
                                
                                const update = participants.filter(( e, j) =>  i !== j )
                                setParticipants(update)
                                setOpen(true);
                            }

                            return (
                                <Grid item xs={12} key={i}>
                                    <Typography component='span'>
                                        { e }
                                    </Typography>
                                    <Button variant='contained' onClick={ () => { handleClickRemove(i) }}>
                                        Entfernen
                                    </Button>
                                </Grid>
                            )
                        })
                    )}
                </ParticipantContext.Consumer>
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                    <TextField 
                        id="outlined-basic" 
                        label="Vereinsname" 
                        variant="outlined" 
                        sx={{marginRight: '25px'}}
                        onChange={ handleChange }    
                    />
                    <Button variant='contained' sx={{height: '40px'}} onClick={ handleClickAddParticipant }>
                        Hinzufügen
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Teilnehmer entfernt"
            />
        </Box>
    )
}

export default ParticipantsView;