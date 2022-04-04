import React, { useContext, useState } from "react";
import ParticipantContext from "../context/ParticipantContext";
// Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ParticiantItem from "../components/ParticipantItem";
import SnackbarAction from "../components/SnackbarAction";
import { Typography } from "@mui/material";
import Badge from '@mui/material/Badge';

const ParticipantsView = () => {

    const {participants, setParticipants } = useContext(ParticipantContext);
    const [ removedParticipant, setRemovedParticipant ] = useState('');
    const [ prename, setPrename ] = useState('');
    const [ subname, setSubname ] = useState('');
    const [ open, setOpen ] = useState(false);

    const handleClickAddParticipant = () => {

        if(participants.length === 80){
            return;
        }

        if(prename && subname ){
            setParticipants([
                ...participants,
                prename + ' ' + subname
            ]);
            setPrename('');
            setSubname('');
        }
    };

    const handleUndo = () => {
        participants.splice( 
            removedParticipant.index, 
            0, 
            removedParticipant.name 
        );

        setParticipants(participants);
    };

    const handleChangePrename = (e) => {
        if( e.target.value ){
            setPrename(e.target.value);
        }
    };  

    const handleChangeSubname = (e) => {
        if( e.target.value ){
            setSubname(e.target.value);
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
                        { participants.length === 0 &&
                            <Grid item>
                                <Typography variant="overline">
                                    Bisher sind keine Teilnehmer eingetragen.
                                </Typography>
                            </Grid>
                        }
                        <ParticipantContext.Consumer>
                            { ({ participants }) => (
                                participants.map((e, i) => {
                                    return <ParticiantItem 
                                                participant={ e } 
                                                id={ i } 
                                                key={ i }
                                                setOpen={setOpen} 
                                                setRemovedParticipant={ setRemovedParticipant }
                                            />;
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
                        value={ prename }
                        onChange={ handleChangePrename }    
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Nachname" 
                        variant="outlined" 
                        sx={{marginRight: '15px'}}
                        value={ subname }
                        onChange={ handleChangeSubname }    
                        onKeyDown={ (e) => {
                            if(e.key === 'Enter'){
                                handleClickAddParticipant()
                            }
                        }}
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
            <Badge color="primary" sx={{ position: 'fixed', right: '50px', bottom: '50px'}}>
                <Typography variant="overline"> 
                    Aktuelle Teilnehmeranzahl: {participants.length}
                </Typography>
            </Badge>
        </Box>
    );
};

export default ParticipantsView;