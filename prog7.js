p=[10,11,12,20,30]
q=[11,20,25,30,33]
istrue=false
b=[]
for(let i of p)
{
for(let j of q)
{
if(i==j)
{
    istrue=true
    b.push(i)
}
}
}
istrue?console.log(b):console.log('no common numbers');
