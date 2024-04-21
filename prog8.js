arr=[10,11,12,3,4,2,100]
searchitem=2
low=0
up=arr.length-1
ispresent=false
arr.sort((a,b)=>a-b)
console.log(arr);

while(low<=up)
{
    mid=Math.floor((low+up)/2)
    if(arr[mid]>searchitem)
    {
        up=mid-1
    }
    else if(arr[mid]==searchitem)
    {
        ispresent=true
        break
    }
    else
        {
            low=mid+1
        }
    }

console.log(ispresent?'present':'not present')