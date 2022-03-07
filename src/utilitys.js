module.exports = {
    createGroups: ( participants ) => {
        
        const tournamentGroups = [];
        let group = [];

        participants.forEach( participant => {
            group.push(participant);

            if( group.length === 4 ){
                tournamentGroups.push(group)
                group = [];
            }
        });
        return tournamentGroups;
    }
}