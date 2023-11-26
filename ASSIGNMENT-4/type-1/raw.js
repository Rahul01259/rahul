const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var textarray = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised :insertx: weighs 300 pounds, and it was a hot day.";

var insertx= ["Willy the Goblin","Big Daddy","Father Christmas"];

var inserty = ["the soup kitchen","Disneyland","the White House"];

var insertz = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
   var result = textarray;

var x, y, z;

x= randomValueFromArray(insertx);
y= randomValueFromArray(inserty);
z = randomValueFromArray(insertz);

result= result.replace(":insertx:",x);
result = result.replace(":inserty:",y);
result = result.replace(":insertz:",z);
result=result.replace(":insertx:",x);

  
  if(customName.value != '') {
    var name = customName.value;
    result = result.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    
    var temperature =  Math.round((94-32)*5/9)+'celcius';
    result= result.replace("94 farenheit", temperature);  
    result = result.replace("300 pounds", weight); 
  }
  
  story.textContent = result;
  story.style.visibility = 'visible';
}