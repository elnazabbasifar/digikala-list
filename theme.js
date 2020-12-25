function modeHandler(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//============================================================
// Auto select dark or light theme based on the dominant color of the background image.
function setTheme(){
  
  const colorThief = new ColorThief();
  const img = document.querySelector('img');
  img.crossOrigin = 'Anonymous';

  img.addEventListener('load', function() {

    // Grab the dominant color of an image.
    dominantColor = colorThief.getColor(img);

    // Call lightOrDark function to get the brightness (light or dark)
    brightness = lightOrDark(dominantColor);
        
    // If the background color is dark, add the light-text class to it
    if(brightness == 'dark') {
      document.body.classList.add('dark-mode');
        // element.classList.add('light-text');
    }else {
      document.body.classList.add('light-mode');
    }
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

setTheme();
