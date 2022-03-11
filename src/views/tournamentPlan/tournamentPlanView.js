import React, { useContext, useState, useEffect } from "react";
import './tournamentPlanView.css';
// Components
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import GroupCard from "../../components/groupCard";
import ParticipantContext from "../../context/ParticipantContext";
import { Grid } from "@mui/material";
import CreatePlan from "../../components/CreatePlan";
// General
import { createGroups, assignNewStage } from "../../utilitys";

const TournamentPlanView = () => {
    
    const { participants } = useContext(ParticipantContext);
    const [ planCreated, setPlanCreated ] = useState(false);
    const [ tournamentPlan, setTournamentPlan ] = useState([]);
    
    const handleClick = () => {
        const update = assignNewStage(tournamentPlan)
        setTournamentPlan([...update]);
    };

    useEffect(() => {

        if(planCreated){
            const assignment = createGroups(participants)
            setTournamentPlan( assignment )
        };

    }, [planCreated]);

    if( !planCreated ) return <CreatePlan onClick={ setPlanCreated } />

    const groupCards = tournamentPlan.map(( stage, i) => {
        const grouping = stage.map( ( group, j) => {

            if(group.length >= 2){

                return (
                    <GroupCard 
                        group={group} 
                        key={i+j} 
                        stageIndex={i} 
                        groupIndex={j}
                        tournamentData={{ 
                            plan: tournamentPlan,
                            setPlan: setTournamentPlan 
                        }}
                    />
                )
            }
        });

        return (
            <Grid item sx={{marginRight: '100px'}}>            
                { grouping }
            </Grid>
        )
    })

    return (
        <Box>
            <Grid container direction='column'>
                <Grid item>
                    <Button onClick={handleClick}>
                        Neue Phase
                    </Button>
                </Grid>
                <Grid item></Grid>
                { 
                    groupCards
                }
            </Grid>
        </Box>
    )
    
}

export default TournamentPlanView;