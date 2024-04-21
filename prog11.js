//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
/* employee.forEach(emp=>console.log(emp[1])); */


//print total numbers of employee
/* console.log(employee.length) */

//print developer employee details
/* data=employee.filter(emp=>emp[2]=='developer')
console.log(data); */


// print details of employee Laisha
/* laisha=employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro));
/* console.log(laisha); */
 
//sort employee based on their salary in descending order
/* data=employee.sort((a,b)=>b[4]-a[4]) */



//sort employee based on their experience in ascending order
/* data1=employee.sort((a,b)=>a[5]-b[5])
console.log(data1);
 */

// print the employ name whose have the higest salary
/* highest=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highest[1]);
 */

//print employee name whose salary>30000
/* display=employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1])) */
/* console.log(display); */

//total salary expense of the company
total=employee.map(emp=>emp[4]).reduce((emp1,emp2)=>emp1+emp2)
console.log(total);
