// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);

//     handleLocation();
// }

// window.route = route;

// const routes = {
//     404: "<h1> 404 </h1>",
//     "/": "<h1> Home </h1>",
//     "/about": "<h1> about </h1>",
//     "/lorem": "<h1> lorem</h1>",
// }

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404]


//     document.getElementById("main-view").innerHTML = route;



// }

// window.onpopstate = handleLocation
// window.route = route
// handleLocation();

function gSwap(url,target){
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            document.getElementById(target).innerHTML = data.html;
        })
        .catch(error => console.log(error))
}

