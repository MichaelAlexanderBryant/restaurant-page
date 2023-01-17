function addContactInfo() {
    const contactDiv = document.createElement("div");
    contactDiv.textContent = "Miguel Bryant (760) 908-0133";
    return contactDiv;
};

function loadContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addContactInfo());
};

export {loadContact};