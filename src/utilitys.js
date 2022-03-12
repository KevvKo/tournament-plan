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
        
        // for(let i = groupStage.length; i >= 1; i=i/2){
        //     console.log(i)
        //     const stage = Array( Math.round(i)).fill([])
        //     tournamentPlan.push(stage);
        // }

        return tournamentPlan;
    },

    /**
     * @summary reveices a data structure, presenting the tournament, and
     * assigning the candidates according to there scores to the new stage into groups
     * @param {Array} tournamentData 
     * @returns {Array} 
     */

    assignNewStage: ( tournamentData ) => {

            // find the first stage from the tournament, where the first group hast
            // no member. Refers this stage has no me   mbers currently
            const stagesCount = tournamentData.length
            const stage = tournamentData[ stagesCount - 1 ];
            const newStage = [];

            // loop through the previous stage to assign the first and second placed winner
            // cross for the next stage for the second stage
            if( stagesCount === 1 ){
                for( let j = 0, k = stage.length; j < k; j++){

                    const group = [...stage[j]];
                    const oppositeGroup = [...stage[ k - j - 1]]

                    // create the first stage cross assignment
                    const candidate1 = {...group.sort(( a,b ) => b.score - a.score )[0]};
                    const candidate2 = {...oppositeGroup.sort(( a,b ) => b.score - a.score)[1]}
                    
                    candidate1.score = 0;
                    candidate2.score = 0;

                    newStage.push([
                        candidate1,
                        candidate2
                    ]) 
                }

                tournamentData.push(newStage);
                return tournamentData;
            } 

            if( stage.length % 2 === 0){
                // assigning the remaining candidates for a even count of groups
                for( let j = 0, k = stage.length; j < k/2; j++){
                    const group = [...stage[j]];
                    const oppositeGroup = [...stage[ k - j - 1]];

                    const candidate1 = {...group.sort(( a,b ) => b.score - a.score)[0]};  
                    const candidate2 = {...oppositeGroup.sort(( a,b ) => b.score - a.score )[0]};
            
                    candidate1.score = 0;
                    candidate2.score = 0;

                    newStage.push([
                        candidate1,
                        candidate2
                    ]) 
                };

                tournamentData.push(newStage);
                return tournamentData;
            }

            // assigning the remaining candidates if the count of group is odd
            for( let j = 0, k = stage.length; j <= (k-1)/2; j++){   
                console.log(stage)
                const group = [...stage[j]];
                const oppositeGroup = [...stage[ k - j - 1]];

                if( j === (k-1)/2 ){
                    newStage.push(group);
                    continue
                }
                const candidate1 = {...group.sort(( a,b ) =>  b.score - a.score )[0]};  
                const candidate2 = {...oppositeGroup.sort(( a,b ) => b.score - a.score )[0]};
    
                candidate1.score = 0;
                candidate2.score = 0;
                
                newStage.push([
                    candidate1,
                    candidate2
                ]) 
            };

            tournamentData.push(newStage);
            return tournamentData;
        
    }
}