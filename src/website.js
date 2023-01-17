import { loadHomepage } from "./homepage";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

function addHeader() {
    const header = document.createElement("div");
    header.textContent = "Miguel's Burrito Shop";
    return header;
};

function addNavigation() {
    const nav = document.createElement("div");
    const home = document.createElement("span");
    const contact = document.createElement("span");
    const menu = document.createElement("span");
    home.textContent = "Home"
    contact.textContent = "Contact"
    menu.textContent = "Menu"
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