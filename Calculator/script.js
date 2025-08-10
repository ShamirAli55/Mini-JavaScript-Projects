const show = document.getElementById("input");
const Storagekey = "Answer";
let checked = false;
const AppendtoDisplay = (input)=>
{   
    if(checked)  
    {
        show.value = ' ';
        checked = false;
    }
    show.value += input
    console.log(show)
}
const ClearDisplay = ()=>
{
    show.value = '';
}

const Toggle = ()=>
{
    show.value  *= -1;
}

const SaveMem = ()=>
{
    const Lastanswer =  show.value
    localStorage.setItem(Storagekey,Lastanswer);
}
const LoadAns = ()=>
{
    checked = true;
    const result ="Ans : "+ localStorage.getItem(Storagekey);
    show.value = result;

}
const Calculate = ()=>
{
    try {
        show.value = eval(show.value);
        SaveMem()
    }
     catch (error) 
    {
        show.value = 'Error';
    }
}
