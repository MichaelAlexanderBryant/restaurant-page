function addImage() {
    const restaurantPhoto = document.createElement("img");
    restaurantPhoto.src = "./img/photo.jpg";
    return restaurantPhoto;
};

function addHeadline() {
    const headlineDiv = document.createElement("div");
    headlineDiv.textContent = "Cooking up your new burrito cravings";
    return headlineDiv;
};

function loadHomepage() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = '';
    contentDiv.appendChild(addImage());
    contentDiv.appendChild(addHeadline());
};

export {loadHomepage};