class SummerCamp{
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForCamp = {child: 150, student: 300, collegian: 500}
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money){
        if(!this.priceForCamp.hasOwnProperty(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        }
        let currParticipant = this.listOfParticipants.find(a => a.name === name);
        if(currParticipant){
            return `The ${name} is already registered at the camp.`;
        }
        if(this.priceForCamp[condition] > money){
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name){
        let curr = this.listOfParticipants.find(a=> a.name === name);
        if(!curr){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants = this.listOfParticipants.filter(a => a.name !== name);
        return `The ${name} removed successfully.`;

    }

    timeToPlay(game, nameOne, nameTwo) {

        let playerOne = this.listOfParticipants.find(a => a.name === nameOne);
        if (game === "WaterBalloonFights") {
            let playerTwo = this.listOfParticipants.find(b => b.name === nameTwo);
            if(!playerOne || !playerTwo){
                throw new Error(`Invalid entered name/s.`);
            }
            if(playerOne.condition !== playerTwo.condition){
                throw new Error(`Choose players with equal condition.`);
            }
            if(playerOne.power === playerTwo.power){
                return `There is no winner.`;
            }
            if(playerOne.power > playerTwo.power){
                playerOne.wins++;
                return `The ${playerOne.name} is winner in the game ${game}.`;
            }
            playerTwo.wins++;
            return `The ${playerTwo.name} is winner in the game ${game}.`;
        }
        if(!playerOne){
            throw new Error(`Invalid entered name/s.`)
        }
        playerOne.power += 20;
        return `The ${nameOne} successfully completed the game ${game}.`
    }

    toString(){
        let buff = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;

        for(let player of Object.values(this.listOfParticipants).sort((a,b)=> b.wins - a.wins)){
            buff += `\n${player.name} - ${player.condition} - ${player.power} - ${player.wins}`;
        }
        return buff;
    }

}






