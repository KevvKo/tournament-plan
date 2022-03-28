import React from 'react';
// Components
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import GroupCardItem from './GroupCardItem';

const GroupCard = (props) => {

    const { group, stageIndex, groupIndex, tournamentData} = props
    const {plan, setPlan } = tournamentData;

    const handleChange = (e, stageIndex, groupIndex, participantIndex ) => {   

        const value = parseInt(e.target.value);
        
        if(plan[stageIndex][groupIndex]){

            const update = [...plan]
            update[ stageIndex ][ groupIndex ][ participantIndex ].score = value;
            update[ stageIndex ][ groupIndex ].sort(( a,b ) => b.score - a.score )

            setPlan(update);
        }     
    };

    const GroupCardItemList = group.map(( participant, i  ) => {
        return (
            <GroupCardItem 
                participant={ participant }
                onChange={ handleChange}
                stageIndex={ stageIndex }
                groupIndex={ groupIndex }
                participantIndex={ i }
            />
        )
    })

    return(
        <Card className='group-card' variant="outlined" sx={{ marginBottom: '20px'}}>
            <CardContent>
                <Box sx={{display: 'inline'}}>
                    <Grid container>
                        <Grid item sx={{width: '100%'}}>
                            <Grid container direction='column'>
                                {GroupCardItemList}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}


export default GroupCard;
