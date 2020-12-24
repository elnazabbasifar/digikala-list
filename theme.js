function modeHandler(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function getColorofBackImage(){
    const colorThief = new ColorThief();
    const img = document.querySelector('img');
    console.log(img);
    img.crossOrigin = 'Anonymous';
    // Make sure image is finished loading
    if (img.complete) {
        return colorThief.getColor(img);
    } else {
        img.addEventListener('load', function() {
            return colorThief.getColor(img);
        });
    }
}

function lightOrDark(color) {

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {

    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];
  } 
  else {

    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'
    )
             );

    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

    return 'light';
  } 
  else {

    return 'dark';
  }
}

colorofImage = getColorofBackImage();
console.log(colorofImage);
brightness = lightOrDark(colorofImage);
  
// If the background color is dark, add the light-text class to it
if(brightness == 'dark') {
    modeHandler();
    // element.classList.add('light-text');
}
// else {
//     element.classList.add('dark-text');
// }
