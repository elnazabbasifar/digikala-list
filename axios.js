// get Bing's today url from Flask app to set it as background.
function setBackground(path) {
    document.body.onload = function () { 
        //make Get Request
        axios.get(path).then( 
            (response) => { 
                var imageUrl = response.data;
                console.log(imageUrl);
                // Set a background image for a document.
                document.body.style.backgroundImage = "url("+imageUrl+")";
                setTheme(imageUrl); //located in theme.js
            }, 
            (error) => { 
                console.log(error); 
            } 
        ); 
    } 
}
var url = "http://127.0.0.1:5000/bing";
setBackground(url); 
