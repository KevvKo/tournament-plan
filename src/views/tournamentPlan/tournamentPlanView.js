import React, { useContext, useState } from "react";
import './tournamentPlanView.css';
// Components
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import GroupCard from "../../components/groupCard";
import ParticipantContext from "../../context/ParticipantContext";
import { Typography } from "@mui/material";
import CreatePlan from "../../components/CreatePlan";

const TournamentPlanView = () => {
    
    const { participants } = useContext(ParticipantContext);
    const [ planCreated, setPlanCreated ] = useState(false);
    
    // const groupCards = groups.map((e, i) => {
    //     return <GroupCard group={e} key={i} groupId={i}/>
    // })

    if( !planCreated ) return <CreatePlan onClick={ setPlanCreated } />

    return (
        <Box></Box>
    )
    
}

export default TournamentPlanView;