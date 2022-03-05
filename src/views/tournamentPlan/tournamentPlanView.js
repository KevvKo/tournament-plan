import React from "react";
import './tournamentPlanView.css';
// Components
import Box from '@mui/material/Box';
import GroupCard from "../../components/groupCard/groupCard";

const TournamentPlanView = () => {
    
    const groups = [
        [
            'kevin',
            'duncan',
            'dennis',
            'lisa',  
        ],
        [
            '221331',
            'ddwdw',
            'ggggg',
            'hhhh',  
        ],
        [
            'jjjj',
            'kkkk',
            'lllll',
            'vvvvv',  
        ],
        [
            'uuuuu',
            'oooo',
            'aaaaaa',
            'xxxxxx',  
        ],      
    ]

    const groupCards = groups.map((e, i) => {
        return <GroupCard group={e} key={i} groupId={i}/>
    })

    return (
        <Box component='div'>
            { groupCards }
        </Box>
    )
}

export default TournamentPlanView;