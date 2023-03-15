class footballTeam{
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers){

        let buff = [];
        for(let player of footballPlayers){
            let [name, age, value] = player.split('/');
            let currPlayer = this.invitedPlayers.find(a=> a.name === name);
            if(!currPlayer){
                this.invitedPlayers.push({
                    name: name,
                    age: Number(age),
                    playerValue: Number(value)
                });
                buff.push(name);
            }
            else{
                if(currPlayer.playerValue < Number(value)){
                    currPlayer.playerValue = Number(value);
                }
            }
        }
        return `You successfully invite ${buff.join(', ')}.`
    }

    signContract(selectedPlayer){
        let [name, offer] = selectedPlayer.split("/");
        let currPlayer = this.invitedPlayers.find(a => a.name === name);
        if(!currPlayer){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if(currPlayer.playerValue > Number(offer)){
            let priceDifference = currPlayer.playerValue - Number(offer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }
        currPlayer.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${currPlayer.name} for ${Number(offer)} million dollars.`
    }

    ageLimit(name, age){
        let currPlayer = this.invitedPlayers.find(a=> a.name === name);
        if(!currPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(currPlayer.age >= Number(age)){
            return `${name} is above age limit!`;
        }
        if(currPlayer.age > Number(age) - 5){
            let ageDifference = Number(age) - currPlayer.age
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        }
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
    }

    transferWindowResult(){
        let buff = `Players list:`
        for(let player of this.invitedPlayers.sort((a,b)=> a.name.localeCompare(b.name))){
            buff += `\nPlayer ${player.name}-${player.playerValue}`;
        }
        return buff;
    }
}





