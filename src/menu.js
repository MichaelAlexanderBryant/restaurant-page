function addMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Burrito: $5.99";
    return menuDiv;
};

function loadMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addMenu());
};

export {loadMenu};