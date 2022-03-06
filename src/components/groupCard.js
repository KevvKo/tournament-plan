import React from 'react';
// Components
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GroupCard = (props) => {

    const { group, groupId } = props
    
    const participantList = group.map((e) => {
        return (
            <Typography align='left' component='span' sx={{marginRight: '15px'}}>
                {e}
            </Typography>
        )
    })

    return(
        <Card className='group-card' variant="outlined" sx={{ marginBottom: '70px', maxWidth: '350px'}}>
            <CardContent>
                <Typography gutterBottom variant="h6" align="left" >
                    { `Group ${groupId}` }
                </Typography>
                <Box sx={{display: 'inline'}}>
                   {participantList}
                </Box>
            </CardContent>
        </Card>
    )
}


export default GroupCard;
