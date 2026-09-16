function searchNews(event) {

    event.preventDefault();

    let search = document.getElementById("searchBox").value;

    if (search == "") {
        alert("সংবাদের নাম লিখুন!");
    } 
    else {
        alert("আপনি খুঁজছেন: " + search);
    }
}