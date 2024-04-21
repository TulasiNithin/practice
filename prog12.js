//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
/* b=products.forEach(pro=>console.log(pro[1])) */

//2. display product whose price < Rs.50
/* c=products.filter(pro=>pro[2]<50).forEach(ele=>console.log(ele[1])) */
/* console.log(c); */

//3. print price of oreo
/* b=products.filter(pro=>pro[1]=='oreo').forEach(ele=>console.log(ele[2])) */

//4. print costly product name
/* b=products.reduce((c1,c2)=>c1[2]>c2[2]?c1:c2)
console.log(b[1]);
 */



//5. display out of stock product
/* products.filter(pro=>pro[3]==0).forEach(ele=>console.log(ele[1])) */


//6. sort products based on stock in decsending order
/* s=products.sort((a,b)=>b[3]-a[3]).forEach(ele=>console.log(ele[1])) */
/* console.log(s); */

//7. print product having maximum available stock
/* s=products.reduce((num1,num2)=>num1[3]>num2[3]?num1:num2)
console.log(s[1]);
 */
//8. is there any product can be purchased by Rs. 10
/* s=products.some(pro=>pro[2]<=10)
console.log(s?'yes':'no');
 */
//9. Is there any product in the range of 10 to 30
d=products.some(ele=>(ele[2]>=10)&&(ele[2]<=30))
console.log(d?'yes':'no');
//10. print all products in the range of 10 to 30
products.filter(emp=>(emp[2]>=10)&&(emp[2]<=30)).forEach(pro=>console.log(pro[1]))
