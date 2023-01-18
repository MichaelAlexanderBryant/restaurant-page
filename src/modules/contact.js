function addContactInfo() {
    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";

    const addressDiv = document.createElement("div");
    addressDiv.id = "address";
    const addressHeader = document.createElement("h1");
    addressHeader.textContent = "Address:";
    addressDiv.appendChild(addressHeader);
    const address = document.createElement("div");
    address.textContent = "3772 Mission Ave #13, Oceanside, CA 922058";
    addressDiv.append(address);
    contactDiv.appendChild(addressDiv);

    const phoneDiv = document.createElement("div");
    phoneDiv.id = "phone";
    const phoneHeader = document.createElement("h1");
    phoneHeader.textContent = "Phone:";
    phoneDiv.appendChild(phoneHeader);
    const phone = document.createElement("div");
    phone.textContent = "(760) 721-7829"
    phoneDiv.appendChild(phone);
    contactDiv.appendChild(phoneDiv);

    const hoursDiv = document.createElement("div");
    hoursDiv.id = "hours";
    const hoursHeader = document.createElement("h1");
    hoursHeader.textContent = "Hours:";
    hoursDiv.appendChild(hoursHeader);
    const monday = document.createElement("p");
    monday.textContent = "Monday: 8AM - 9PM"
    hoursDiv.appendChild(monday);
    const tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday: CLOSED"
    hoursDiv.appendChild(tuesday);
    const wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday: 8AM - 9PM"
    hoursDiv.appendChild(wednesday);
    const thursday = document.createElement("p");
    thursday.textContent = "Thursday: 8AM - 9PM"
    hoursDiv.appendChild(thursday);
    const friday = document.createElement("p");
    friday.textContent = "Friday: 8AM - 9PM"
    hoursDiv.appendChild(friday);
    const saturday = document.createElement("p");
    saturday.textContent = "Saturday: 8AM - 9PM"
    hoursDiv.appendChild(saturday);
    const sunday = document.createElement("p");
    sunday.textContent = "Sunday: 8AM - 9PM"
    hoursDiv.appendChild(sunday);
    contactDiv.appendChild(hoursDiv);
    
    return contactDiv;
};

function loadContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addContactInfo());
};

export {loadContact};