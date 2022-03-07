import React, { useContext, useState } from "react";
import './participantsView';
import ParticipantContext from "../../context/ParticipantContext";
// Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ParticiantItem from "../../components/ParticipantItem";
import SnackbarAction from "../../components/SnackbarAction";

const ParticipantsView = () => {

    const { participants, setParticipants } = useContext(ParticipantContext);
    const [ removedParticipant, setRemovedParticipant ] = useState('')
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

    const handleUndo = () => {
        participants.splice( 
            removedParticipant.index, 
            0, 
            removedParticipant.name 
        );

        setParticipants(participants);
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
            <Grid container alignItems='flex-start'>
                <Grid item xs={4}>
                    <Grid container spacing={4} direction='column'>
                        <ParticipantContext.Consumer>
                            { ({ participants }) => (
                                participants.map((e, i) => {
                                    return <ParticiantItem 
                                                participant={ e } 
                                                id={ i } 
                                                setOpen={setOpen} 
                                                setRemovedParticipant={ setRemovedParticipant }
                                            />
                                })
                            )}
                        </ParticipantContext.Consumer>
                    </Grid>
                </Grid>
                <Grid item xs={8} sx={{display: 'flex', alignItems: 'center', paddingLeft: '30px'}}>
                    <TextField 
                        id="outlined-basic" 
                        label="Vorname" 
                        variant="outlined" 
                        sx={{marginRight: '15px', marginLeft: 'auto'}}
                        onChange={ handleChange }    
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Nachname" 
                        variant="outlined" 
                        sx={{marginRight: '15px'}}
                        onChange={ handleChange }    
                    />
                    <Button variant='contained' sx={{height: '40px', marginRight: '70px'}} onClick={ handleClickAddParticipant }>
                        Hinzufügen
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Teilnehmer entfernt"
                action={ 
                    <SnackbarAction 
                        callback={ handleUndo } 
                        setOpen={ setOpen } 
                    />
                }
            />  
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Teilnehmer entfernt"
                action={ 
                    <SnackbarAction 
                        callback={ handleUndo } 
                        setOpen={ setOpen } 
                    />
                }
            />
        </Box>
    )
}

export default ParticipantsView;