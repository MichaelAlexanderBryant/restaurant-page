function addMenu() {
    const menuImg1 = document.createElement("img");
    menuImg1.id = "menu1";
    menuImg1.src = "./img/menu1.jpg";
    const menuImg2 = document.createElement("img");
    menuImg2.id = "menu2";
    menuImg2.src = "./img/menu2.jpg";
    return [menuImg1, menuImg2];
};

function loadMenu() {
    const contentDiv = document.getElementById("content");
    console.log(addMenu())
    contentDiv.appendChild(addMenu()[0]);
    contentDiv.appendChild(addMenu()[1]);
};

export {loadMenu};