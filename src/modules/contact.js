function addContactInfo() {
    const contactDiv = document.createElement("div");
    contactDiv.textContent = "Miguel Bryant (760) 867-5309";
    return contactDiv;
};

function loadContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addContactInfo());
};

export {loadContact};