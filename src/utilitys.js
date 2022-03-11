module.exports = {

    /**
     * @summary receiving a list of participants for the tournament and 
     * assigning them into into stages and groups
     * @param {*} participants 
     * @returns {Array}
     */
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
    },

    /**
     * @summary reveices a data structure, presenting the tournament, and
     * assigning the candidates according to there scores to the new stage into groups
     * @param {Array} tournamentData 
     * @returns {Array} 
     */
    assignNewStage: ( group ) => {

    }
}