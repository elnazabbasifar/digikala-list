document.getElementById("form").addEventListener("submit", function(event){
    
    event.preventDefault();
// function submitHandler(event){
    var url = document.getElementById("input_url").value;
    const expression = "^((http|https):\/\/|(http|https):\/\/?(www\.)|[wW]{3}\.|)digikala\.com\/product?(\/.*)?$"
    const regex = new RegExp(expression);
    
    if (url.match(regex)) {     
        
        // Create anchor element. 
        var a = document.createElement("a");                  
        // Create the text node for anchor element. 
        var link = document.createTextNode("This is link");        
        // Append the text node to anchor element. 
        a.appendChild(link);       
        // Set the title. 
        a.title = "This is Link";         
        // Set the href property. 
        a.href = String(url);         
        // Create list element
        var li = document.createElement("li"); 
        // Append the anchor element to the list. 
        li.innerHTML = a;
        document.getElementsById("list").appendChild(li);
        
    }else{
        alert("Type a correct url");
    }
    
});
function modeHadler(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

