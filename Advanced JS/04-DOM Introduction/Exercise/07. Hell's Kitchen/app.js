/**
["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
 */
function solve() {
   document.getElementById('btnSend').addEventListener('click', (e) => {
      const restaurants = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      const bestRest = bestRestaurant(restaurants);
      document.querySelector('#bestRestaurant p').textContent = printBestRest(bestRest);
      document.querySelector('#workers p').textContent = printBestWorkers(bestRest);
   });

   function bestRestaurant(arr) {
      console.log(arr);
      const result = arr
         //make an array from the input string with 2 parameters - restaurant name and workers
         .map(str => str.split(' - '))
         // merger equal restaurant with same name
         .sort((a, b) => {
            if (a[0] == b[0]) {
               a[1] += ', ' + b[1];
               b.length = 0;
            }
         })
         // remove empty array after the concatenation
         .filter(arr => arr.length > 0)
         // return new array with restaurant name, average salary of the workers, highest salary worker and all the workers
         .map(([name, workers]) => {
            const workersAndSalaries = workers
               .split(', ')
               .map(line => line.split(' '))
               .sort((a, b) => b[1] - a[1])
               .filter(n => !isNaN(n[1]));
            const salaries = workersAndSalaries.map(line => Number(line[1]));
            const avgSalary = salaries.reduce((acc, cur, inx, arr) => acc + (cur / arr.length), 0);
            const topSalary = salaries[0];
            return [name, avgSalary, topSalary, workersAndSalaries];
         })
         //keep the restaurant with highest average salary
         .sort((a, b) => b[1] - a[1])[0];
      //* .shift();
      //return as object
      return { name: result[0], avgSalary: result[1], topSalary: result[2], topWorkers: result[3] };
   }

   function printBestRest(obj) {
      return `Name: ${obj.name} Average Salary: ${(obj.avgSalary).toFixed(2)} Best Salary: ${(obj.topSalary).toFixed(2)}`;
   }

   function printBestWorkers(obj) {
      return obj.topWorkers.map(([name, salary]) => `Name: ${name} With Salary: ${Number(salary)}`).join(' ');
   }
}
