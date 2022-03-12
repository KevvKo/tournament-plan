import React, { useContext, useState, useEffect } from "react";
import './tournamentPlanView.css';
// Components
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import GroupCard from "../../components/groupCard";
import ParticipantContext from "../../context/ParticipantContext";
import { Grid } from "@mui/material";
import CreatePlan from "../../components/CreatePlan";
import Typography from '@mui/material/Typography';
// General
import { createGroups, assignNewStage } from "../../utilitys";

const TournamentPlanView = () => {
    
    const { participants } = useContext(ParticipantContext);
    const [ planCreated, setPlanCreated ] = useState(false);
    const [ tournamentPlan, setTournamentPlan ] = useState([]);
    
    const handleClickNew = () => {
        const update = assignNewStage([...tournamentPlan])
        setTournamentPlan([...update]);
    };

    const handleClickReset = () => {
        const assignment = createGroups(participants)
        setTournamentPlan([...assignment])
    };

    useEffect(() => {

        if(planCreated){
            const assignment = createGroups(participants)
            setTournamentPlan( assignment )
        };

    }, [planCreated, participants]);

    if( !planCreated ) return <CreatePlan onClick={ setPlanCreated } />

    const stages = tournamentPlan.map(( stage, i) => {

        const groupList = stage.map( ( group, j) => {

            if(group.length >= 2){
                return (
                    <Grid item>
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
                    </Grid>
                )}

            return
        });

         return (
            <Grid item sx={{marginRight: '100px'}}>
                    { stage[0]?.length > 0 &&
                        <Typography variant='h5'>
                            Phase {i + 1}
                        </Typography>
                    }
                { groupList }
            </Grid>
        )
    })

    return (
        <Box>
            <Grid container direction='column'>
                <Grid item>
                    <Button onClick={handleClickNew}>
                        Neue Phase
                    </Button>
                    <Button onClick={handleClickReset} color="error">
                        Zurücksetzen
                    </Button>
                </Grid>
                <Grid item></Grid>
                    <Grid container>
                        { stages }
                    </Grid>
            </Grid>
        </Box>
    )
    
}

export default TournamentPlanView;