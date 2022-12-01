class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(!name || !salary || salary < 0|| !position || !department){
          throw new Error("Invalid input!");
        }
        if(salary < 0){
            throw new Error("Invalid input!");
        }

        if(this.departments[department] === undefined)
        {
            this.departments[department] = {employees: [] }
        }
        this.departments[department].employees.push({name, salary: Number(salary), position});
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    bestDepartment(){
        let bestDepartment;
        let avgBest = 0;
        let departmentNameBest;
        for(let [departmentName,department] of Object.entries(this.departments)){
            let total = 0
            for (let employees of Object.values(this.departments[departmentName]))
            {
              for(let i = 0; i < employees.length; i++)
              {
                  total += employees[i].salary;
              }
            }
            if(total / department.employees.length > avgBest)
            {
                departmentNameBest  = departmentName;
                avgBest = total / department.employees.length;
                bestDepartment = department;
            }
        }
        let returnString = `Best Department is: ${departmentNameBest}\nAverage salary: ${avgBest.toFixed(2)}`
        for (let employee of bestDepartment.employees.sort((a,b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        }))
        {
            returnString += `\n${employee.name} ${employee.salary} ${employee.position}`
        }
        return returnString.trim();
    }
}

let c =new Company();
c.addEmployee("Stanimir",2000,"engineer","Construction");
c.addEmployee("Pesho",1500,"electrical engineer","Construction");
c.addEmployee("Slavi",500,"dyer","Construction");
c.addEmployee("Stan",2000,"architect","Construction");
c.addEmployee("Stanimir",1200,"digital marketing manager","Marketing");
c.addEmployee("Pesho",1000,"graphical designer","Marketing");
c.addEmployee("Gosho",1350,"HR","Human resources");
console.log(c.bestDepartment());
