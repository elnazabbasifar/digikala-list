function modeHandler(){

    var element = document.body;
    document.body.classList.toggle("dark-mode");
    document.getElementById("formSet").classList.toggle("dark-mode");
    document.getElementById("btnMode").classList.toggle("dark-mode");
}

//============================================================
// Auto select dark or light theme based on the dominant color of the background image.
// Run from axios.js > setBackground()
function setTheme(imageUrl){
  
  const colorThief = new ColorThief();
  var img = document.createElement("img");  // const img = document.querySelector('img');
  // imageUrl = String(document.body.style.backgroundImage.split('"')[1]);
  img.setAttribute("src", imageUrl);
  img.setAttribute("alt", "Bing's image of today");
  img.crossOrigin = 'Anonymous';
  console.log(img);
  
  // wait for loading image
  img.addEventListener("load", function() {
    // Grab the dominant color of an image.
    dominantColor = colorThief.getColor(img);
    // Call lightOrDark function to get the brightness (light or dark)
    brightness = lightOrDark(dominantColor); 
    console.log(brightness); 
    // If the background color is dark, add the light-text class to it
    if(brightness == 'dark') 
      modeHandler();
      // document.body.classList.add('dark-mode');
        // element.classList.add('light-text');
    // }else {
    //   document.body.classList.add('light-mode');
    // }
  });
}//func
//============================================================
//calculates the color’s HSP value to determine whether the color is light or dark
function lightOrDark(rgbColor) {

  //store the red, green, blue values in separate variables
  [r,g,b]=rgbColor;
  
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  var hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5)  return 'light';

  else            return 'dark';
}

// setTheme();
