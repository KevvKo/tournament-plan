import React from 'react';
// Components
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const GroupCard = (props) => {

    const { group, stageIndex, groupIndex, tournamentData} = props
    const {plan, setPlan } = tournamentData;

    const handleChange = (e, stageIndex, groupIndex, participantIndex ) => {
        
        const value = parseInt(e.target.value);
        if(plan[stageIndex][groupIndex]){
            plan[stageIndex][groupIndex][participantIndex].score = value;
            setPlan(plan);
        }     
    };

    const participantList = group.map(( participant, i  ) => {
        return (
            <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                <Typography align='left' component='span' variant="body2" sx={{marginRight: '15px'}}>
                    {participant.name}
                </Typography>
                <TextField 
                    type='number' 
                    size="small" 
                    InputProps={{ inputProps: { min: 0, max: 3 } }}
                    defaultValue={participant.score} 
                    onChange={ (e) => { handleChange(e, stageIndex, groupIndex , i)}}
                    sx={{ width: '70px', marginLeft: 'auto'}}
                />
            </Grid>
        )
    })

    return(
        <Card className='group-card' variant="outlined" sx={{ marginBottom: '20px', width: 'fit-content'}}>
            <CardContent>
                <Box sx={{display: 'inline'}}>
                    <Grid container>
                        <Grid item>
                            <Grid container direction='column'>
                                {participantList}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}


export default GroupCard;
