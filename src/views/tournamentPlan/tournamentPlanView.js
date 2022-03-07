import React, { useContext, useState, useEffect } from "react";
import './tournamentPlanView.css';
// Components
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import GroupCard from "../../components/groupCard";
import ParticipantContext from "../../context/ParticipantContext";
import { Typography } from "@mui/material";
import CreatePlan from "../../components/CreatePlan";
// General
import { createGroups } from "../../utilitys";

const TournamentPlanView = () => {
    
    const { participants } = useContext(ParticipantContext);
    const [ planCreated, setPlanCreated ] = useState(false);
    const [ groups, setGroups ] = useState([]);

    useEffect(() => {

        if(planCreated){
            const assignment = createGroups(participants)
            setGroups( assignment )
        };

    }, [planCreated]);

    if( !planCreated ) return <CreatePlan onClick={ setPlanCreated } />

    const groupCards = groups.map((e, i) => {
        console.log(e)
        return <GroupCard group={e} key={i} groupId={i+1}/>
    })

    return (
        <Box>
            { groupCards }
        </Box>
    )
    
}

export default TournamentPlanView;