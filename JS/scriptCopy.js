window.onload = function(){
/* Steps */
/* STEP 1. Define variables from HTML tags*/
var city = document.getElementById("city");
var area = document.getElementById("area"); 
var salariesOptions = document.getElementById("salariesOptions"); 
var detailsOptions = document.getElementById("detailsOptions"); 
var scoresOptionsElements = document.getElementsByClassName("scoresOptions");
var lat = "";
var lng = "";
/* Populate drop down menus for input fields with sample JSON files */
/* Jobs for "salaries for" dropdown menu */
salariesOptions.innerHTML = generateSalaryOptions(salaries_salariesJSON);

/* Categories for 'Details' dropdown menu */
detailsOptions.innerHTML = generateDetailsOptions(details_categoriesJSON);

/* Categories for score dropdown menu */
for(let i=0; i<scoresOptionsElements.length;i++){
    scoresOptionsElements[i].innerHTML = generateScoreOptions(scores_categoriesJSON);
}

/* Salaries */
/* Scores */
/* Each dropdown list excludes choices already made in other score fields */
/* Details */
/* STEP 2. create map and add functionality for setting marker and retrieving coordinates */
}

function initMap() {
    myMap = new google.maps.Map(document.getElementById("map"), 
    {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 3,
    });

    myMap.addListener("click", updateCoordinates).then(
        /* Location Request to Teleport */
    )

    return myMap
}




//new coordinates on click using function(MapMouseEvent)
    //Set the marker if does not exist
    


