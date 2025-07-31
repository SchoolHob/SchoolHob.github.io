const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const imageAlts = {
  'pic1.jpg': 'A human eye',
  'pic2.jpg': 'Closeup of a sea shell',
  'pic3.jpg': 'Violet flowers',
  'pic4.jpg': 'Egyptian art',
  'pic5.jpg': 'A butterfly',
};

/* Looping through images */

const touchbar = document.querySelector(".thumb-bar");

for (let i in images) {
    const img = images[i];
    console.log(img);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + img);
    newImage.setAttribute('alt', imageAlts[img]);
    touchbar.appendChild(newImage);

    newImage.addEventListener('click', () => setMainImage(img));
}

function setMainImage(img) {
    document.querySelector(".displayed-img").setAttribute('src', "images/" + img);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', darken);

function darken(){
    if(btn.className === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

