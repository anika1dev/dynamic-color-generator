const btn = document.getElementById("child");
const container = document.getElementById("element");
const colorName = document.getElementById("colorName");

btn.addEventListener("click", ()=>{
  const bgColor = getRandomColor();
  const btnColor = getRandomColor();
  container.style.backgroundColor = bgColor;
  document.documentElement.style.setProperty("--random-color", btnColor);
  colorName.innerHTML = "Background color : " + bgColor + "<br>" + "Button color : " + btnColor;

  const rBackground = parseInt(bgColor.slice(1,3), 16);
  const gBackground = parseInt(bgColor.slice(3,5), 16);
  const bBackground = parseInt(bgColor.slice(5,7), 16);
  const backgroundBrightness = getBrightness(rBackground, gBackground, bBackground);
  if(backgroundBrightness < 128){
    colorName.style.color = "white";
  }else{
    colorName.style.color = "black";
  }

  const rBtn = parseInt(btnColor.slice(1,3), 16);
  const gBtn = parseInt(btnColor.slice(3,5), 16);
  const bBtn = parseInt(btnColor.slice(5,7), 16);
  const btnBrightness = getBrightness(rBtn,gBtn,bBtn);

  if(btnBrightness < 128){
    btn.style.color = "white";
  }else{
    btn.style.color = "black";
  }
});


function getRandomColor(){
  const letters = "0123456789ABCDEF"
  let color = "#";
  for(let i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function getBrightness(r,g,b){
  return (r*299 + g*587 + b*114)/1000;
}