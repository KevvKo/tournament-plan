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
    assignNewStage: ( tournamentData ) => {
        for(let i = 0, l = tournamentData.length; i < l; i++){
            const stage = tournamentData[i];

            // find the first stage from the tournament, where the first group hast
            // no member. Refers this stage has no members currently
            if(stage[0].length === 0 ){
                const previousStage = tournamentData[i-1];
                const newStage = [];

                // loop through the previous stage to assign the first and second placed winner
                // cross for the next stage 
                for( let j = 0, k = previousStage.length; j < k; j++){
                    const group = previousStage[j];
                    const oppositeGroup = previousStage[ k - j - 1]

                    const firstPlaced = group.sort(( a,b ) => a.score < b.score )[0];
                    const secondPlaced = oppositeGroup.sort(( a,b ) => a.score < b.score)[1]
                    
                    newStage.push(
                        [
                            firstPlaced,
                            secondPlaced
                        ]
                    ) 
                }

                tournamentData[i] = newStage;
                return tournamentData;
            }
        }

    },
}