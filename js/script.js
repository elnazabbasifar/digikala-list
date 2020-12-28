const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
// console.log(typeof(url));
document.getElementById("form").addEventListener("submit", function(event){
    var url = document.getElementById("input_url").value;
    event.preventDefault();
    const expression = "^((http|https):\/\/|(http|https):\/\/?(www\.)|[wW]{3}\.|)digikala\.com\/product?(\/.*)?$"
    const regex = new RegExp(expression);
    
    if (regex.test(url)) {     
        addLinktoList(url);
    }else{
        alert("Type a correct url");
    }
    
});
function addLinktoList(url) {
    
    // Remove whitespace from both sides of url.
    url = url.trim();
    // Get the title.                
    // and replace all - with whitespace.
    var str = getLastItem(decodeURI(url)).replace(/-/g, ' ');
    var result = str.link(url).replace('a href=', 'a target="_blank" href='); 
    // Check the new url in the list.
    isinList = checkListforUrl(result);
    if (!isinList) {
        // Create list element.
        var li = document.createElement("li"); 
        // Append the anchor element to the list. 
        li.innerHTML = result;
        document.getElementById("list").appendChild(li);
    }
    
}
function checkListforUrl(a) { 
    var ul = document.getElementById("list");   
    var items = ul.getElementsByTagName("li");
    console.log(items);
    for (var i = 0; i < items.length; i++){
        
        if(items[i]["innerHTML"] == a) return true;
    }
    return false;
} 


