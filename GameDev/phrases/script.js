var genericNames = ["Sugar","Sugarplum","Sweet Pea","Sweetheart","Sweetie","Sweetiepie","Honey","Honeybunches","Honeymuffin","Cutie","Cutiepie"];
var feeels = ["you miss me","you're alone","you're afraid","you're scared","you're lonely","you feel alone","you feel useless","you feel scared","you feel frightened","you feel worthless","you feel like no one cares","you feel pointless","you feel empty"];
var action = ["I love you","I miss you","I care about you","I worry about you","I worry for you","I always want you to be happy","I always want to see you smile"];
var quanty = ["a lot","always","tons","very much","vvvvvvvv much","loads","tons and tons","loads and loads and loads"]
var specialNames = ["Daisy","Plumb Bob","Taba","tebefa","Tabitha","tebefa","Lottie","Latte","Hannah","Hannahbanana"];
var phraseSkeletons = [
  "Hey, #1, just remember that when, #2, #3, #4",
  "I know sometimes #2, #1, but #3, #4, okay? <3",
  "#UOI, #1. #3 #4 ALRIGHT. DONT FORGET IT. <3",
  "Hey, #1, #3 #4. Have a great day!",
  "Hey, #1, Take care of yourself okay? #3 #4",
  "If you ever feel like #2, #1, pretend I'm there with you, giving you a huge huggle, because #3, #4",
  "#1 you're the best thing ever to happen to me and #3 #4"
];
var output = document.getElementById("text");
var introed,firstname = false;
var nameVal = "";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

String.prototype.toSentenceCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var g,s,a,q, phrase, name;
function genPhrase() {
  name = document.getElementById("name").value;
  nameVal = name.toSentenceCase();
  if(specialNames.indexOf(nameVal) != -1) {
    nameVal = specialNames[specialNames.indexOf(nameVal) + 1];
    if(!introed) {
      output.innerHTML = "OMG! " + nameVal + "! Hey!! Thank you for checking this out!! I love you so so so much, " + name.toSentenceCase() + " , you're the best!! <3 <3 <3";
      introed = true;
      return;
    }
  }
  if((getRandomInt(0,10) > 3) && firstname){
    g = genericNames[getRandomInt(0,genericNames.length)];
  } else {
    g = nameVal;
    firstname = true;
  }
  s = feeels[getRandomInt(0,feeels.length)];
  a = action[getRandomInt(0,action.length)];
  q = quanty[getRandomInt(0,quanty.length)];
  
  phrase = phraseSkeletons[getRandomInt(0,phraseSkeletons.length)];
  if(phrase.indexOf("#U") != -1) {
    g = g.toUpperCase();
    s = s.toUpperCase();
    a = a.toUpperCase();
    q = q.toUpperCase();
    phrase = phrase.replace("#U","");
  }
  phrase = phrase.replace("#1",g);
  phrase = phrase.replace("#2",s);
  phrase = phrase.replace("#3",a);
  phrase = phrase.replace("#4",q);
  
  output.innerHTML = phrase;
}

