const endpoint = "https://api.artic.edu/api/v1/artworks/search?q=";

const artSearch = document.querySelector("#art-search-form");
const searchField = document.querySelector("#art-search-field");
artSearch.addEventListener('submit', function(event) {
    event.preventDefault();
    showSearch(searchField.value);
});

const background = document.querySelector(".app");
const searchBtn = document.querySelector(".submit");

// const tempButt = document.querySelector('#js-btn-1');
// tempButt.addEventListener('click', showSearch);

const nextButt = document.querySelector("#next");
nextButt.addEventListener('click', nextImage);

const prevButt = document.querySelector("#prev");
prevButt.addEventListener('click', prevImage);


const imageElement = document.querySelector('#mainImage');
const imageCount = document.querySelector('#image-count');


let results_json;
let currentImage = 0;
let maxImages = 1;

async function searchImage(search){
     try {
        const response1 = await fetch(endpoint + search + '&size=100');
        if (!response1.ok) {
            throw Error(response1.statusText);
        }

        results_json = await response1.json();

        console.log('json vvv');
        console.log(results_json);

        currentImage = 0;
        maxImages = results_json.data.length;
        return fetchImage(currentImage);
    } catch (err) {
        console.log(err);
        alert("Failed to fetch from API");
    }
}

async function fetchImage(index){
    const response2 = await fetch(results_json.data[index].api_link);
    if (!response2.ok) {
        throw Error(response2.statusText);
    }
    const current_json = await response2.json();

    console.log('fetched result vvvv');
    console.log(current_json);

    const baseurl = current_json.config.iiif_url;
    const imageurl = baseurl + '/' + current_json.data.image_id + '/full/843,/0/default.jpg';
    console.log('fetched: ' + imageurl);

    const color = current_json.data.color;
    console.log(color);

    background.style.backgroundColor = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    searchBtn.style.backgroundColor = `hsl(${color.h}, ${color.s - 20}%, ${color.l -10}%)`;

    return imageurl;
}

async function showSearch(query) {
    const imageurl = await searchImage(query);
    //fetchImage();
    updateImage(imageurl);
}

async function nextImage(){
    if (currentImage < maxImages-1) {
        currentImage++;
        const imageurl = await fetchImage(currentImage);

        updateImage(imageurl);
    }
}

async function prevImage() {
    if (currentImage > 0) {
        currentImage--;
        const imageurl = await fetchImage(currentImage);

        updateImage(imageurl);
    }
}

function updateImage (imageurl) {
    imageElement.src = imageurl;
    imageElement.style.width = "450px";
    imageElement.style.height = "auto";

    imageCount.textContent = (currentImage+1) + '/' + maxImages;
}