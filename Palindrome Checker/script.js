let data = document.getElementById('input_data');
let heading = document.getElementById("result");

const CheckPalindrome = ()=>
{
    let value = data.value
    ReverseString(value)
}


const ReverseString = (str)=>
{
    str = str.toLowerCase();

    let char = [...str].reverse();

    let result = ""

    char.forEach((c)=>
    {
        result += c;
    })

    if(result === str)
    {
        heading.style.display = "block";
        heading.textContent = "It is a Palindrome ! ";
    }
    else
    {
        heading.style.display = "block";
        heading.textContent = "It is not a Palindrome ! ";  
    }
}