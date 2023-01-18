function addImage() {
    const restaurantPhoto = document.createElement("img");
    restaurantPhoto.id = "burrito-image"
    restaurantPhoto.src = "./img/photo.jpg";
    return restaurantPhoto;
};

function addHeadline() {
    const headlineDiv = document.createElement("div");
    headlineDiv.id = "headline";
    headlineDiv.textContent = "Cooking up your new burrito cravings!";
    return headlineDiv;
};

function loadHomepage() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = '';
    contentDiv.appendChild(addImage());
    contentDiv.appendChild(addHeadline());
};

export {loadHomepage};