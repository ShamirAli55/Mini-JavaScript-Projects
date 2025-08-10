let Items = [];
let itemsDiv = document.getElementById("items");
const storageKey = "Items";

const RenderItems = () => {
    itemsDiv.innerHTML = null;

    Items.forEach((item, index) => {
        const container = document.createElement("div");
        container.style.padding = ".5px";

        const text = document.createElement("p");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.backgroundColor = "red";
        button.style.color = "white";
        button.onclick = () => RemoveItem(index);

        container.appendChild(text);
        container.appendChild(button);
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.gap = "20px";

        itemsDiv.appendChild(container);
    });
};

const AddItem = () => {
    const input = document.getElementById("input_data");
    if (input.value === "") {
        return alert("Cannot Add an empty input");
    }
    Items.push(input.value);
    input.value = "";
    RenderItems();
    SaveItem();
};

const loaditems = () => {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) Items = JSON.parse(oldItems);
    RenderItems();
};

const SaveItem = () => {
    const stringItems = JSON.stringify(Items);
    localStorage.setItem(storageKey, stringItems);
};

const RemoveItem = (index) => {
    Items.splice(index, 1);
    RenderItems();
    SaveItem();
};

window.addEventListener("DOMContentLoaded", loaditems);
