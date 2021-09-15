/* initMap will be the main wrapper function - unfortunately the myMap object cannot be accessed outside of this function */
function initMap() {
    /* Load global variables - check vars.js for these*/
    loadVars();

    /* Populate drop down menus for input fields with sample JSON files */
    salariesOptions.innerHTML = generateSalaryOptions(salaries_salariesJSON);
    detailsOptions.innerHTML = generateDetailsOptions(details_categoriesJSON);
    for(let i=0; i<scoresOptionsElements.length;i++){
        scoresOptionsElements[i].innerHTML = generateScoreOptions(scores_categoriesJSON);
    }

    /* When requests are sent, trigger API functions corresponding to request type */
    locationRequest.onreadystatechange = requestLocation;
    scoresRequest.onreadystatechange = requestScores;
    salariesRequest.onreadystatechange = requestSalaries;
    detailsRequest.onreadystatechange = requestDetails;

    /* Event listeners to update chart/report on input change */
    salariesOptions.addEventListener('input', function(){
        /* Update the data selection from data list with the user's new selection */
        updateUserChoiceAndData('salaries')
        //if there is any information to display in data object, show it no the graph
        console.log(salariesData)
        if(salariesData !== undefined){
            updateGraphSalaries()
            toggle("showGraph");
        }
    });

    detailsOptions.addEventListener('input', function(){
        /* Update the data selection from data list with the user's new selection */
        updateUserChoiceAndData('details')
        if(detailsData !== undefined){
            /* Update the report and show it */
            updateDetailsReport()
            toggle("showReport");
        }
    })
    
    /* Update the scores on input value change */
    for(let i=0; i<scoresOptionsElements.length;i++){
        /* For each score option element, add an event listener */
        scoresOptionsElements[i].addEventListener('input', function (){
        /* Update the data from with the user's new selection */
        updateUserChoiceAndData('scores')
            console.log(scoresData)
            /* If there is any information to display, show it on the graph */
            if(scoresData[0] !== undefined || scoresData[1] !== undefined || scoresData[2] !== undefined || scoresData[3] !== undefined || scoresData[4] !== undefined ){
                updateGraphScores()
                /*display the graph */
                toggle("showGraph");
            }
        })
    }

    /* On click listeners to change graph/report displayed when buttons are clicked */
    scoresButton.onclick = function(){
        updateGraphScores()
        toggle("showGraph"); 
    }

    salariesButton.onclick = function(){
        updateGraphSalaries()
        toggle("showGraph");
    }

    detailsButton.onclick = function(){
        updateDetailsReport()
        toggle("showReport");
    }

    
    /* STEP 2. CREATE MAP & ON CLICK FUNCTION TO INITIATE API CALL */
    myMap = new google.maps.Map(document.getElementById("map"), 
    {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 7,
    });

    /* After map has been created, call the Teleport API for a list of all urban areas - these will be marked on the map */
    
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

        //Update the center with LatLng of click location
        myMap.setCenter(MapMouseEvent.latLng);
        var lat = MapMouseEvent.latLng.toJSON()["lat"];
        var lng = MapMouseEvent.latLng.toJSON()["lng"];
        console.log(lat, lng);

        //update the user choices with the location of the map click
        salariesUserChoice = salariesOptions.value;
        detailsUserChoice = detailsOptions.value;
        for(let i = 0; i<scoresOptionsElements.length; i++){
            scoreChoices[i] = scoresOptionsElements[i].value
        }

        //With these lat and lng coordinates, send a get request for the nearest city and urban area to the Teleport API 
        url = "https://api.teleport.org/api/locations/"+lat+","+lng+"/"

        //Send request for information at these coordinates
        locationRequest.open("GET", url, true);
        locationRequest.send().then();

        //see API.js for logic to update graphs and report on information return
    });
}