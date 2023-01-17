function addMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Burrito: $5.99";
    return menuDiv;
};

function initializeMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addMenu());
};

export {initializeMenu};