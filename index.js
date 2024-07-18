function getbooks(){
  document.getElementById("output").innerHTML="";
  fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
  .then(a=> a.json())
  .then(response=>{
    for(var i=0;i<10;i++){
      document.getElementById("output").innerHTML+="<h1>"+ response.docs[i].title+"</h1>"+response.docs[i].author_name[0]+"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>";

      const books = bookData.docs;
      if (books.length === 0) {
        searchResultsElement.innerHTML = "No results found.";
        return;
      }
    }
  })
}

function mybooks() {
  document.getElementById("outputbooks").innerHTML="";
  fetch("https://openlibrary.org/people/mekBot/books/already-read.json"+document.getElementsByName("my books"))
  .then(a=> a.json())
  .then(response)
}

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("The button was clicked!");
});
const input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    
    console.log("Enter key pressed!");
  }
});

const searchTermInput = document.getElementById("input");
searchTermInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const searchTerm = searchTermInput.value;
    searchBooks(searchTerm);
  }
});
