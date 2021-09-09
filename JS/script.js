function initMap() {
    /* STEP 1. create map and add functionality for setting marker and retrieving coordinates */
    myMap = new google.maps.Map(document.getElementById("map"), 
    {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 7,
    });

    /* Steps */
    /* STEP 2. Define variables from HTML tags*/
    let city = document.getElementById("city");
    let area = document.getElementById("area"); 
    let salariesOptions = document.getElementById("salariesOptions"); 
    let detailsOptions = document.getElementById("detailsOptions"); 
    let scoresOptionsElements = document.getElementsByClassName("scoresOptions");
    let salariesButton = document.getElementById("salariesButton");
    let scoresButton = document.getElementById("scoresButton");
    let detailsButton = document.getElementById("detailsButton");

    /* Populate drop down menus for input fields with sample JSON files */
    /* Jobs for "salaries for" dropdown menu */
    salariesOptions.innerHTML = generateSalaryOptions(salaries_salariesJSON);
    /* Categories for 'Details' dropdown menu */
    detailsOptions.innerHTML = generateDetailsOptions(details_categoriesJSON);
    /* Categories for score dropdown menu */
    for(let i=0; i<scoresOptionsElements.length;i++){
        scoresOptionsElements[i].innerHTML = generateScoreOptions(scores_categoriesJSON);
    }

    /* Initially empty variables for Scores, Details and Salaries */
    let scoresList = [];
    let detailsList = [];
    let salariesList = [];
    let overallScore = "";

    /* Values of user inputs - used to query JSON response from Teleport */
    let detailsUserChoice = detailsOptions.value;
    let salariesUserChoice = salariesOptions.value;
    let scoreChoices = [];
    for(let i = 0; i<scoresOptionsElements.length; i++){
        scoreChoices[i] = scoresOptionsElements[i].value
    }

    /* Initial data values for results of user choices - initially empty */
    let scoresData = [];
    let detailsData = [];
    let salariesData = [];

    /* Event listeners to update chart/report on input change */
    salariesOptions.addEventListener('input', function(){
       /* update user choice */
        salariesUserChoice = salariesOptions.value;
       /* update the data by querying the salariesList*/
        salariesObject = salariesList.find(function(object, index){
            if(object.job.id == salariesUserChoice){
                return true;
            }
        })
        /* update the salaries data*/
        salariesData = salariesObject;

        /* Update the report and show it */
        updateGraphSalaries(salariesData)
        toggle("showGraph");
    });

    detailsOptions.addEventListener('input', function(){
        /* update user choice */
        detailsUserChoice = detailsOptions.value;
        /*  update the data by querying the detailsList*/
        detailsObject = detailsList.find(function(object, index){
            if(object.id == detailsUserChoice){
                return true;
            }
        });
        /* update the details data */
        detailsData = detailsObject.data
        /* Update the report and show it */
        updateDetailsReport(detailsData)
        toggle("showReport");
    })
    
    /* Update the scores on input value change */
    for(let i=0; i<scoresOptionsElements.length;i++){
        scoresOptionsElements[i].addEventListener('input', function (){
            /* Update the user score choices*/
            for(let i = 0; i<scoresOptionsElements.length; i++){
                scoreChoices[i] = scoresOptionsElements[i].value
            }

            /* update the scores data acoording to the new choice */
            for(let i=0; i<scoreChoices.length;i++){
                scoresObject = scoresList.find(function(object, index){
                    if(object.name == scoreChoices[i]){
                        return true;
                    }
                })
                scoresData[i] = scoresObject
            }
            /* Update and show the graph */
            updateGraphScores(scoresData)
            toggle("showGraph"); 
        })

    }

    /* On click listeners to change graph/report displayed when buttons are clicked */
    scoresButton.onclick = function(){
        updateGraphScores(scoresData)
        toggle("showGraph"); 
    }

    salariesButton.onclick = function(){
        updateGraphSalaries(salariesData)
        toggle("showGraph");
    }

    detailsButton.onclick = function(){
        updateDetailsReport(detailsData)
        toggle("showReport");
    }

    //new coordinates on click using function(MapMouseEvent)
    myMap.addListener("click", function (MapMouseEvent){
        //Set the marker if does not exist
        if(typeof marker === 'undefined'){
            marker = new google.maps.Marker({
                position: (MapMouseEvent.latLng),
                map: myMap,
            });
        }
        //if does exist, update location
        else{
            marker.setPosition(MapMouseEvent.latLng);
        }

        //update the user choices changed
        salariesUserChoice = salariesOptions.value;
        detailsUserChoice = detailsOptions.value;
        for(let i = 0; i<scoresOptionsElements.length; i++){
            scoreChoices[i] = scoresOptionsElements[i].value
        }

        //Update the center with LatLng of click location
        myMap.setCenter(MapMouseEvent.latLng);
        var lat = MapMouseEvent.latLng.toJSON()["lat"];
        var lng = MapMouseEvent.latLng.toJSON()["lng"];
        console.log(lat, lng);
        
       /*STEP 3 - With these lat and lng coordinates, send a get request for the nearest city and urban area to the Teleport API */
        var url = "https://api.teleport.org/api/locations/"+lat+","+lng+"/"
        /* Assistance from stack overflow: https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript */
        var json = "";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                /* Get response */
                response = JSON.parse(this.responseText);
                //Define arrays that hold city and urban area info
                cityList = response._embedded["location:nearest-cities"];
                areaList = response._embedded["location:nearest-urban-areas"];
                
                //define nearest city and urbanarea
                if(cityList === null){
                    city.innerHTML="We Couldnt find a nearby city. Try clicking closer to a major city!"; 
                    area.innerHTML=""; 
                }

                else if(areaList.length === 0){
                    nearestCity = response._embedded["location:nearest-cities"][0]._links["location:nearest-city"].name; 
                    city.innerHTML="Nearest City: " + nearestCity;
                    area.innerHTML="We Couldnt find a nearby urban center. Try clicking closer to a major city!"; 
                }

                //STEP 4 - When an urban area and city are returned successfully, make additional API calls to retrieve additional information about the uban center - display the information on graphs on the webpage
                else{
                    nearestCity = response._embedded["location:nearest-cities"][0]._links["location:nearest-city"].name; 
                    urbanArea =  response._embedded["location:nearest-urban-areas"][0]._links["location:nearest-urban-area"].name
                    city.innerHTML="Nearest City: " + nearestCity;
                    area.innerHTML="Urban Area: " + urbanArea; 
                    /* console.log(urbanArea, nearestCity); */

                    /* Get the statistics for the urban area */
                    scoresUrl = response._embedded["location:nearest-urban-areas"][0]._links["location:nearest-urban-area"].href + "scores/";
                    salariesUrl = response._embedded["location:nearest-urban-areas"][0]._links["location:nearest-urban-area"].href + "salaries/";
                    detailsUrl = response._embedded["location:nearest-urban-areas"][0]._links["location:nearest-urban-area"].href + "details/";

/* ------------------------------------ NEW REQUEST - Urban area SCORES ------------------------------------------------------------------- */

                    var scoresRequest = new XMLHttpRequest();
                    scoresRequest.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                    
                            let scores = JSON.parse(this.responseText);

                            /* All scores for this city */
                            scoresList = scores.categories
                            console.log(scoresList);

                            //overall city score out of 100
                            overallScore = scores.teleport_city_score;

                            //If user has selected scores, extract scores for those values 
                            for(let i=0; i<scoreChoices.length;i++){
                                scoresObject = scoresList.find(function(object, index){
                                    console.log('finding' + scoreChoices[i] + 'in the scoresList')
                                    if(object.name == scoreChoices[i]){
                                        return true;
                                    }
                                })
                                scoresData[i] = scoresObject
                            }
                            console.log(scoresData);
                            updateGraphScores(scoresData)
                            //Update salary graph with value for user's current job choice
                        }
                    }
                    scoresRequest.open("GET", scoresUrl, true);
                    scoresRequest.send();

/* -----------------------------------------NEW REQUEST -  Urban area SALARIES -------------------------------------------------------------- */

                    var salariesRequest = new XMLHttpRequest();
                    salariesRequest.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                            /* Response JSON */
                            salaries = JSON.parse(this.responseText);

                            salariesList = salaries.salaries;

                            console.log(salaries.salaries);

                            //extract salaries for chosen job 
                            let salariesObject = salariesList.find(function(object, index){
                                if(object.job.id == salariesUserChoice){
                                    return true;
                                }
                            })

                            salariesData = salariesObject;
                            console.log(salariesData)

                            updateGraphSalaries(salariesData);
                            //Update salary graph with value for user's current job choice
                        }
                    }
                    salariesRequest.open("GET", salariesUrl, true);
                    salariesRequest.send();

/* ----------------------------------------NEW REQUEST -  Urban area DETAILS --------------------------------------------------------------- */

                    var detailsRequest = new XMLHttpRequest();
                    detailsRequest.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                    
                            details = JSON.parse(this.responseText);

                            detailsList = details.categories;
                            console.log(detailsList);
                            
                            let detailsObject = detailsList.find(function(object, index){
                                if(object.id == detailsUserChoice){
                                    return true;
                                }
                            })

                            detailsData = detailsObject.data
                            console.log(detailsData)

                            updateDetailsReport(detailsData)
                        }
                    }
                    detailsRequest.open("GET", detailsUrl, true);
                    detailsRequest.send();
                }
            }
        };
        //Specify request 
        xhttp.open("GET", url, true);
        xhttp.send();
    });

    console.log(scoresList)
}
