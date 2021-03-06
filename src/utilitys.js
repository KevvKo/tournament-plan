

/**
 * @summary receiving a list of participants for the tournament and 
 * assigning them into into stages and groups
 * @param {*} participants 
 * @returns {Array}
 */
export const createGroups = ( participants ) => {
    
    const tournamentPlan = [];
    const groupStage = [];
    const participantCount = participants.length;
    const restParticipantCount = participantCount%4;

    for(let i = 0, l = participantCount - restParticipantCount; i < l ; i+=4){
        // 2 remaining participants, they will be assigned to the other groups
        groupStage.push([]);
    }

    if( restParticipantCount === 3) {
        groupStage.push([]);
    }

    participants.forEach( participant => {
        
        while(true){
            const randomGroupIndex = Math.floor(Math.random() * (groupStage.length));

            // assigning 3 remaining participants to the last group
            if(restParticipantCount === 3 || restParticipantCount === 0) {
                if( groupStage[ randomGroupIndex ].length < 4 ){
                    groupStage[ randomGroupIndex ].push({
                        name: participant, 
                        score: 0
                    });
                    break;
                }
            }

            // remaining participants one ore two 2, increasing the size for groups by one
            if(restParticipantCount < 3 && restParticipantCount !== 0) {
                if( groupStage[ randomGroupIndex ].length < 5 ){
                    groupStage[ randomGroupIndex ].push({
                        name: participant, 
                        score: 0
                    });
                    break;
                }
            }
        }
    });

    // push the first groupstage
    tournamentPlan.push(groupStage);

    return tournamentPlan;
};

/**
 * @summary reveices a data structure, presenting the tournament, and
 * assigning the candidates according to there scores to the new stage into groups
 * @param {Array} tournamentData 
 * @returns {Array} 
 */

export const assignNewStage = ( tournamentData ) => {

    // find the first stage from the tournament, where the first group hast
    // no member. Refers this stage has no me   mbers currently
    const stagesCount = tournamentData.length;
    const stage = tournamentData[ stagesCount - 1 ];
    const newStage = [];

    // loop through the previous stage to assign the first and second placed winner
    // cross for the next stage for the second stage
    if( stagesCount === 1 ){
        for( let j = 0, k = stage.length; j < k; j++){

            const group = [...stage[j]];
            const oppositeGroup = [...stage[ k - j - 1]];

            // create the first stage cross assignment
            const candidate1 = {...group.sort(( a,b ) => b.score - a.score )[0]};
            const candidate2 = {...oppositeGroup.sort(( a,b ) => b.score - a.score)[1]};
            
            candidate1.score = 0;
            candidate2.score = 0;

            newStage.push([
                candidate1,
                candidate2
            ]);
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
            ]);
        }

        tournamentData.push(newStage);
        return tournamentData;
    }

    // assigning the remaining candidates if the count of group is odd
    for( let j = 0, k = stage.length; j <= (k-1)/2; j++){   
        const group = [...stage[j]];
        const oppositeGroup = [...stage[ k - j - 1]];

        if( j === (k-1)/2 ){
            newStage.push(group);
            continue;
        }
        const candidate1 = {...group.sort(( a,b ) =>  b.score - a.score )[0]};  
        const candidate2 = {...oppositeGroup.sort(( a,b ) => b.score - a.score )[0]};

        candidate1.score = 0;
        candidate2.score = 0;

        newStage.push([
            candidate1,
            candidate2
        ]);
    }

    tournamentData.push(newStage);
    return tournamentData;
};

