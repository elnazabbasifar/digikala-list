var url = "http://127.0.0.1:5000/bing";
var config = {
    origin: "http://127.0.0.1:5000/",
    crossDomain: 'true',
    headers: {
        'wildcard':'*',
        'Access-Control-Allow-Origin': 'wildcard',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,HEAD,POST',
        "Access-Control-Request-Headers":'Content-Type',
        'Vary': 'Origin',
        'Access-Control-Allow-Credentials': 'true',
    },
    credentials: true,
    enablePreflight: true
  };
function setBackground(){
    // Make a request for the image url.
    axios.get(url, config)
    .then(function (response) {
        // handle success
        console.log(response);
        var imageUrl = response.data["result"];
        console.log(imageUrl);
        // Set a background image for a document.
        document.body.style.backgroundImage = "url("+imageUrl+")";
    })
    .catch(function (error) {
        // handle error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}
setBackground();