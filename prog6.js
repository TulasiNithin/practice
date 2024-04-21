b=[2,3,4,5]
sum=6
istrue=false
for(i=0;i<b.length-1;i++)
{
    for(j=i+1;j<b.length-1;j++)
    {
        if(b[i]+b[j]==sum)
        {istrue=true
            console.log(`(${b[i]},${b[j]})`);

        }
    }
}
!istrue&&console.log('no such pair')
