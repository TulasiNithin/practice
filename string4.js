sentence='good morning all'
//print all vowels in the given sentence
vowels=['a','e','i','o','u','A','E','I','O','U']
vow=[]
character=sentence.split('')
console.log(character);
for(let char of character)
{
    if(vowels.includes(char))
    {
        vow.push(char)
    }
}
vow.forEach(ele=>console.log(ele))