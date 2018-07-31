// GET THE REFERENCES
const container = document.querySelector(".container");
const links = document.querySelectorAll("a");
let url = "./partials/home.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent(url) {
    // RUN THE fetch(urlFeed).then().then().catch()
    fetch(url)
    .then(function (response) {
        console.log(response);
        return response.text();
    })
    .then(function (data) {
        // update container with html data
        container.innerHTML = data;
    })
    .catch(function (error) {
        console.log(error.message);
    });
// CLOSE YOUR FUNCTION loadContent HERE
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
function handleLink(e) {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    e.preventDefault();
    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    let hrefSplit = e.target.href.split("/");
    let newUrl = "./partials/" + hrefSplit[hrefSplit.length-1];
    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    loadContent(newUrl);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (link of links) {
    link.addEventListener("click", handleLink);
}

