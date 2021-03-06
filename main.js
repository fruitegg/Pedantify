currReplacement = "min";

function init(){
  v = document.getElementById('percReplValue');
  i = document.getElementById('slider1');
  text_area = document.getElementById('textArea1');
  v.innerHTML = i.value + "%";

  minBtn = document.getElementById('minBtn');
  maxBtn = document.getElementById('maxBtn');
  randBtn = document.getElementById('randBtn');

  minBtn.style.color = "#e88b2e";

  resetOptionsBtn = document.getElementById('resetOptionsBtn');

  addEventListeners();

}

function addEventListeners(){
  i.addEventListener("input", function(){
    v.innerHTML = i.value + "%";
  });

  resetBtn = document.getElementById("resetBtn")
  resetBtn.addEventListener("click", function(){
    text_area.value = "";
  });

  minBtn.addEventListener('click', function(){
    selectMinButton();
  });
  maxBtn.addEventListener('click', function(){
    maxBtn.style.color = "#e88b2e";
    minBtn.style.color = "white";
    randBtn.style.color = "white";
    currReplacement = "max";
  });
  randBtn.addEventListener('click', function(){
    randBtn.style.color = "#e88b2e";
    minBtn.style.color = "white";
    maxBtn.style.color = "white";
    currReplacement = "click";
  });
  minBtn.addEventListener('mouseover', function(){
    minBtn.style.background = "purple";
  });
  maxBtn.addEventListener('mouseover', function(){
    maxBtn.style.background = "purple";
  });
  randBtn.addEventListener('mouseover', function(){
    randBtn.style.background = "purple";
  });
  minBtn.addEventListener('mouseout', function(){
    minBtn.style.background = "blue";
  });
  maxBtn.addEventListener('mouseout', function(){
    maxBtn.style.background = "blue";
  });
  randBtn.addEventListener('mouseout', function(){
    randBtn.style.background = "blue";
  });
  resetOptionsBtn.addEventListener('click', function(){
    selectMinButton();
    i.value = 50;
    v.innerHTML = i.value + "%";
  });
}
function selectMinButton()
{
  minBtn.style.color = "#e88b2e";
  maxBtn.style.color = "white";
  randBtn.style.color = "white";
  currReplacement = "min";
}
