/* This file will hold all variables that represent DOM Elements within an object called domElements  */
function loadVars(){
    /* HTML ELEMENT DOM VARIABLES */
    window.errorMessage = document.getElementById("errorMessage")
    window.city = document.getElementById("city")
    window.area = document.getElementById("area")
    window.salariesOptions = document.getElementById("salariesOptions")
    window.detailsOptions = document.getElementById("detailsOptions")
    window.scoresOptions = document.getElementsByClassName("scoresOptions")
    window.salariesButton = document.getElementById("salariesButton")
    window.scoresButton = document.getElementById("scoresButton")
    window.detailsButton = document.getElementById("detailsButton")
    window.detailsReport = document.getElementById("detailsReport");
    window.mainChart = document.getElementById("myChart");

    /* List arrays will hold all results obtained from the initial request. This is so subsequent API requests will not be necessary. If a user changes a filter, the list can be searched for data, rather than sending a new request for that specific filter value  */
    window.scoresList = [];
    window.detailsList = [];
    window.salariesList = [];

    /* The Lists are searched for the user's preferred filters. Data is stored in 'Data' arrays.*/
    window.scoresData = [];
    window.detailsData = [];
    window.salariesData = [];
    window.mainCities = [];
}
