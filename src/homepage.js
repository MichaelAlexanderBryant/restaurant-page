function addBanner() {
    const bannerDiv = document.createElement("div");
    bannerDiv.textContent = "Miguel's Burrito Shop";
    return bannerDiv;
};

function addImage() {
    const restaurantPhoto = document.createElement("img");
    restaurantPhoto.src = "./img/photo.jpg";
    return restaurantPhoto;
};

function addHeadline() {
    const headlineDiv = document.createElement("div");
    headlineDiv.textContent = "Cooking up your new burrito cravings";
    return headlineDiv;
}

function initializeHomepage() {
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addBanner());
    contentDiv.appendChild(addImage());
    contentDiv.appendChild(addHeadline());
};

export {initializeHomepage};