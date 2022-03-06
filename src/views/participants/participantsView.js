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
import ParticiantItem from "../../components/ParticipantItem";

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
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        <ParticipantContext.Consumer>
                            { ({ participants }) => (
                                participants.map((e, i) => {
                                return <ParticiantItem participant={ e } id={ i } callback={setOpen} />
                                })
                            )}
                        </ParticipantContext.Consumer>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                    <TextField 
                        id="outlined-basic" 
                        label="Vorname" 
                        variant="outlined" 
                        sx={{marginRight: '15px'}}
                        onChange={ handleChange }    
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Nachname" 
                        variant="outlined" 
                        sx={{marginRight: '15px'}}
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