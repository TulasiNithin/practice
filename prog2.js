expense=[12000,24000,35000,10000,54000,40000]
//console.log(typeof(expense));
//find the lowest expense


lowest=expense[0]
for(let num of expense)
{
    if(num<=lowest)
    {
        lowest=num
    }
}
console.log(lowest);
//find the highest expense
highest=expense[0]
for(let num of expense)
{
    
    if(num>=highest)
    {
        highest=num
    }
}
console.log(highest);

//find the total expense
totalexp=0
for(let num of expense)
{
    totalexp=totalexp+num

}
console.log(totalexp);