function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


   function onClick () {
      let textArea = Array.from(JSON.parse(document.querySelector("textarea").value));
      let outputBestRest = document.querySelector("#bestRestaurant p");
      let outputWorkers = document.querySelector("#workers p");

      let res = [];
      for (let restaurant of textArea) {
         let [restName, workerList] = restaurant.split(' - ');

         let currWorkers = [];
         let salarySum = 0;
         for (let worker of workerList.split(', ')) {
            let [workerName, workerSalary] = worker.split(' ');
            if(Object.values(res)[0] === restName)
            {
               res['restName'].workers.push({name: workerName, salary: Number(workerSalary)})
               res['restName'].salarySum += Number(workerSalary);
               debugger;
            }
            else
            {
               salarySum += Number(workerSalary);
               currWorkers.push({name: workerName, salary: Number(workerSalary)})
            }
         }

         let avgSalary = salarySum / currWorkers.length;
         if (Object.values(res)[0] === restName) {
            res['restName'].avgSalary = Number(avgSalary.toFixed(2));
            res['restName'].bestSalary = Number(currWorkers.sort((a, b) => b.salary - a.salary)[0].salary.toFixed(2));
      }
         else{
            res.push({
               nameRest: restName,
               workers:currWorkers,
               avgSalary: Number(avgSalary.toFixed(2)),
              bestSalary: Number(currWorkers.sort((a, b) =>  b.salary - a.salary)[0].salary.toFixed(2))});
         }
      }

     let bestRest =  res.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      outputBestRest.textContent = `Name: ${bestRest.nameRest} Average Salary: ${bestRest.avgSalary.toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`

      for(let worker of bestRest.workers.sort((a, b) => b -a))
      {
         outputWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      outputWorkers.textContent.trim();
   }
}