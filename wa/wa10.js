const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = ":insertx: and :inserty:. Your biometer indicated that it was 72 degrees fahrenheit, nice weather. The display also informed you that you weighed 50lbs, something's not right. It doesn't take you long to realize that you have no memories, besides your own name, Bob. You like your name, it's familiarity comforts you. You examine your body, but all you have to see is your feet to dedeuce that you are not human. After all, you are a :insertz:";
let insertX = ["The air was still", "The night was dark", "The sun was punishing"];
let insertY = ["the frogs were a'croaking", "the village was quiet", "the birds were stirred"];
let insertZ = ["Beaver", "Lynx", "Giant Otter", "Wombat", "Broodle-Neckle"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(3.57) + " stone";
    const temperature =  Math.round(22.2) + " degrees celcius";
    newStory = newStory.replace("72 degrees fahrenheit", temperature);
    newStory = newStory.replace("50lbs", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}