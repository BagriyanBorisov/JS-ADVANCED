class SmartHike{
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude){
        if(this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLvl){
        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`);
        }
        if(this.resources === 0){
            return "You don't have enough resources to start the hike";
        }
        let difference = this.resources -  Number(time) * 10;
        debugger;
        if( difference < 0){
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= Number(time) * 10;
        this.listOfHikes.push({
            peak: peak,
            time: time,
            difficultyLevel: difficultyLvl
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time){
        this.resources += Number(time) * 10;
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`;

    }

    showRecord(criteria){
        if(this.listOfHikes.length === 0){
            return `${this.username} has not done any hiking yet`;
        }
        if(criteria === "all"){
            let buff = "All hiking records:"
            for(let hike of Object.values(this.listOfHikes)){
                buff += `\n${this.username} hiked ${hike.peak} for ${hike.time} hours`
            }
            return buff;
        }
        let bestHike = this.listOfHikes.filter(a=> a.difficultyLevel === criteria).sort((a,b)=> b.time - a.time)[0];
        if(!bestHike){
            return `${this.username} has not done any ${criteria} hiking yet`
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

