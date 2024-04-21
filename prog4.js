array=[4,5,6]
array2=[11,10,9]
sum=0
output=[]
for(let i of array)
{
    sum=sum+i
}
output=[]
for(let num of array)
{
    number=sum-num
    output.push(number)
    
}
console.log(output);