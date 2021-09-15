/* This file will hold all variables that represent DOM Elements within an object called domElements  */
function loadVars (){
    /* HTML ELEMENT DOM VARIABLES */
    window.errorMessage = document.getElementById("errorMessage")
    window.city = document.getElementById("city")
    window.area = document.getElementById("area")
    window.salariesOptions = document.getElementById("salariesOptions")
    window.detailsOptions = document.getElementById("detailsOptions")
    window.scoresOptionsElements = document.getElementsByClassName("scoresOptions")
    window.salariesButton = document.getElementById("salariesButton")
    window.scoresButton = document.getElementById("scoresButton")
    window.detailsButton = document.getElementById("detailsButton")

    /* XMLHTTP REQUEST VARIABLES */
    window.urbanAreasRequest = new XMLHttpRequest();
    window.locationRequest = new XMLHttpRequest();
    window.scoresRequest = new XMLHttpRequest();
    window.salariesRequest = new XMLHttpRequest();
    window.detailsRequest = new XMLHttpRequest();

    /* Values of user inputs - used to query JSON response from Teleport */
    window.detailsUserChoice = detailsOptions.value;
    window.salariesUserChoice = salariesOptions.value;
    window.scoreChoices = [];
    for(let i = 0; i<scoresOptionsElements.length; i++){
        scoreChoices[i] = scoresOptionsElements[i].value
    }

    /* List arrays will hold all results obtained from the initial request. This is so subsequent API requests will not be necessary. If a user changes a filter, the list can be searched for data, rather than sending a new request for that specific filter value  */
    window.scoresList = [];
    window.detailsList = [];
    window.salariesList = [];

    /* The Lists are searched for the user's preferred filters. Data is stored in 'Data' arrays.*/
    window.scoresData = [];
    window.detailsData = [];
    window.salariesData = [];
    window.mainCities = [];
    /* Get details report div by id */
    window.detailsReport = document.getElementById("detailsReport");
    /* Get chart canvas by id */
    window.mainChart = document.getElementById("myChart");
}
