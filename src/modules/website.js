import { loadHomepage } from "./homepage";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

function addHeader() {
    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "Los Kompadres Mexican Food";
    return header;
};

function addNavigation() {
    const nav = document.createElement("div");
    nav.id = "navigation";
    const home = document.createElement("span");
    home.addEventListener("click", () => {
        document.getElementById("content").textContent = '';
        loadHomepage();
    });
    const contact = document.createElement("span");
    contact.addEventListener("click", () => {
        document.getElementById("content").textContent = '';
        loadContact();
    });
    const menu = document.createElement("span");
    menu.addEventListener("click", () => {
        document.getElementById("content").textContent = '';
        loadMenu();
    });
    home.textContent = "Home";
    contact.textContent = "Contact";
    menu.textContent = "Menu";
    nav.appendChild(home);
    nav.appendChild(contact);
    nav.appendChild(menu);
    return nav;
};

function initializeWebsite() {
    const contentDiv = document.getElementById("header-nav");
    contentDiv.appendChild(addHeader());
    contentDiv.appendChild(addNavigation());
    loadHomepage();
};

export {initializeWebsite};