const messages = document.querySelector("#messages");
const fragment = document.createDocumentFragment();

const createSection = secText => {
    const newSection = document.createElement("section");
    newSection.setAttribute("class", "message");
    newSection.textContent = secText;
    fragment.appendChild(newSection);
}

let section1 = createSection("Nashville, TN");
let section2 = createSection("Memphis, TN");
let section3 = createSection("Knoxville, TN");
let section4 = createSection("Chattanooga, TN");
let section5 = createSection("Johnson City, TN");

messages.appendChild(fragment);