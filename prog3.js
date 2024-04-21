arr=[10,11,12,3,4]
// w.a.p to check whaether 2 is present or not
find=2
ispresent=false
for( let num of arr)
{
    if(num==find)
    {
        ispresent=true
        break
    }
}
console.log(ispresent?'2 is presnt':'2 is absent');
    