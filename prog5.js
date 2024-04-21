a=[10,20,30,20,30,40,50,60,10]

isduplicate=false
b=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j])
        {
            isduplicate=false
            for(k=0;k<=a.length-1;k++)
            {
                if(a[i]==b[k])
                {
                    isduplicate=true
                    break
                }
            }
           if(!isduplicate)
           {
            b.push(a[i])

           }
           

        }
    }
}
isduplicate