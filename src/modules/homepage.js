function addHeadline() {
const headlineDiv = document.createElement("div");
headlineDiv.id = "headline";
headlineDiv.textContent = "Serving Mexican food since 2012";
return headlineDiv;
};

function addImage() {
    const restaurantPhoto = document.createElement("img");
    restaurantPhoto.id = "front-page-image"
    restaurantPhoto.src = "./img/photo.jpg";
    return restaurantPhoto;
};

function addBio() {
    const bioDiv = document.createElement("div");
    bioDiv.id = "bio";
    bioDiv.textContent = "More than 10 years ago, this couple decided to take the biggest risk they had ever taken. They did not know the language, the outcome, or if they would be able to do it. One thing was for sure: they had a love for food and eagerness to succeed. So what did they do? From all these challenges, Los Kompadres was born. Los Kompadres marks a huge endeavor. Juan couldn't have done it without the knowledge and special touch his wife brings into the kitchen. ";
    return bioDiv;
};

function loadHomepage() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = '';
    contentDiv.appendChild(addHeadline());
    contentDiv.appendChild(addImage());
    contentDiv.appendChild(addBio());
};

export {loadHomepage};