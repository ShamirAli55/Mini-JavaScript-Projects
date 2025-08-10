const ChangeColor = (name) =>
{
    document.body.style.backgroundColor = name 
}

const RandomColor = ()=>
{

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    const  color = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = color
    document.getElementById('random').textContent = color
}