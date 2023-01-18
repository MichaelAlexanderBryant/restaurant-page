function addMenu() {
    const menuImg = document.createElement("img");
    menuImg.id = "menu";
    menuImg.src = "./img/menu.png";
    return menuImg;
};

function loadMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addMenu());
};

export {loadMenu};