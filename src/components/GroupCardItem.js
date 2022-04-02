import React from "react";
// Components
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const GroupCardItem = (props) => {
    const { participant, stageIndex, groupIndex, participantIndex, onChange } = props;

    return (
        <Grid item sx={{display: 'flex', alignItems: 'center' }}>
            <Typography align='left' component='span' variant="body2" sx={{marginRight: '10px'}}>
                <b>
                    { participantIndex + 1 + '.' }
                </b>
            </Typography>
            <Typography align='left' component='span' variant="body2" sx={{marginRight: '15px'}}>
                {participant.name}
            </Typography>
            <TextField 
                type='number' 
                size="small" 
                InputProps={{ inputProps: { min: 0, max: 3 } }}
                value={participant.score} 
                onChange={ (e) => { 
                    onChange(e, stageIndex, groupIndex , participantIndex)
                }}
                sx={{ width: '70px', marginLeft: 'auto'}}
            />
        </Grid>
    );
};

export default GroupCardItem;