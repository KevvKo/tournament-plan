module.exports = {
    createGroups: ( participants ) => {
        
        const tournamentPlan = [];
        const groupStage = []
        let group = [];

        participants.forEach( participant => {
            group.push({
                name: participant, 
                score: 0
            });

            if( group.length === 4 ){
                groupStage.push(group)
                group = [];
            }
        });

        if(group.length > 0) groupStage.push(group);

        // push the first groupstage
        tournamentPlan.push(groupStage);
        
        for(let i = groupStage.length; i >= 1; i=i/2){
            const stage = Array(i).fill([])
            tournamentPlan.push(stage);
        }

        return tournamentPlan;
    }
}