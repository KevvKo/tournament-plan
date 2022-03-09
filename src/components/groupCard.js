import React from 'react';
// Components
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const GroupCard = (props) => {

    const { group, groupId } = props
    
    const participantList = group.map((e) => {
        return (
            <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                <Typography align='left' component='span' variant="body2" sx={{marginRight: '15px'}}>
                    {e}
                </Typography>
                <TextField type='number' size="small" defaultValue={0} sx={{ width: '70px', marginLeft: 'auto   '}}/>
            </Grid>
        )
    })

    return(
        <Card className='group-card' variant="outlined" sx={{ marginBottom: '70px', width: 'fit-content'}}>
            <CardContent>
                <Typography gutterBottom variant="h6" align="left" >
                    { `Gruppe ${groupId}` }
                </Typography>
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
