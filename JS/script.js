/* INITMAP NEEDS TO BE THE MAIN FUNCTION BECAUSE IT LOADS BEFORE WINDOW.ONLOAD */
function initMap() {
    /*CREATE MAP IN THE "MAP" DOM DIV ELEMENT*/
    myMap = new google.maps.Map(document.getElementById("map"), 
    {
        center: { lat: 43.70011, lng: -79.4163 },
        zoom: 3,
    });
    /* TRIGGER MAIN APPLICATION */
    window.onload = runApp();
}

function runApp(){
    loadVars();
    /* CALL TELEPORT API FOR ALL MAIN CITIES - CREATE MARKER ON GOOGLE MAPS FOR EACH */
    getAllUrbanAreas().then(
        function(mainCities){
            //create marker for each main city in the array
            for(let i=0; i<mainCities.length; i++){
                marker = new google.maps.Marker({
                    position: {lat : mainCities[i].latlng[0], lng : mainCities[i].latlng[1]},
                    map: myMap,
                    title: mainCities[i].name
                });
                /* create event when user clicks on any marker */
                marker.addListener("click", function(){
                    let lat = this.position.lat()
                    let lng = this.position.lng()
                    myMap.setCenter({lat:lat, lng:lng});

                    //With these lat and lng coordinates, update the request that will be send to the teleport API 
                    let locationUrl = "https://api.teleport.org/api/locations/"+lat+","+lng+"/"

                    //send a get request for the nearest city and urban area to the Teleport API at this location
                    callTeleport(locationUrl);
                });
            }
        }
    )

    /* CALL TELEPORT FOR LOCATION INFO WITH URL CONTAINING COORDINATES */
    function callTeleport(locationUrl){
        //Send request for information at these coordinates
        fetch(locationUrl).then(
            function(response){
                return response.json()
            }
        ).then(
            function(data){
                //This function will use the response data to generate urls to request salaries, scores, details
                return(locationResponseHandle(data))
            }
        ).then(
            function(urls){
                //send new requests for scores, salaries, and details with urls generated
                //functions also handle responses
                requestSalaries(urls.salariesUrl);
                requestScores(urls.scoresUrl);
                requestDetails(urls.detailsUrl);
            }        
        ).then(
            function(){
                //Display information 
                //will discuss why it is also necessary to updateGraph____() again - not ideal, trying to fix this
                switch(selected){
                    case 'salaries' :
                        updateGraphSalaries();
                        break;
                    case 'scores' :
                        updateGraphScores();
                        break;
                    case 'details' :
                        updateDetailsReport();
                        break;
                }
                //display either graph or report based on user's last selection
                changeDisplay(selected);
            }
        )
    }

    /* POPULATE DROP DOWN MENUS (FILTERS) FROM SAMPLE JSON FILES */
    salariesOptions.innerHTML = generateSalaryOptions(salariesJSON);
    detailsOptions.innerHTML = generateDetailsOptions(detailsJSON);
    for(let i=0; i<scoresOptions.length;i++){
        scoresOptions[i].innerHTML = generateScoreOptions(scoresJSON);
    }


    /* HANDLE USER SELECTION EVENTS */
    let selected = "";

    // When user selects a new job, update the selection, search the available data, and update graph
    salariesOptions.addEventListener('input', function(){
        selected = "salaries"
        //Update the data selection from data list with the user's new selection 
        updateData(selected)
        //if there is any information to display in data object
        console.log(salariesData)
        //if there is data update the graph
        if(salariesData !== undefined){
            //update graph data
            updateGraphSalaries()
        }
        //display the graph
        changeDisplay(selected);
    });

    // When user selects a new detail to get a report on, update the selection, search the available data, and update report
    detailsOptions.addEventListener('input', function(){
        selected = "details"
        // Update the data selection from data list with the user's new selection 
        updateData(selected)
        //if there is data update the report
        if(detailsData !== undefined){
            //Update report data
            updateDetailsReport()
        }
        //display the report
        changeDisplay(selected);
    })

    // When user selects a new score (ranking), update the selection, search the available data, and update graph
    for(let i=0; i<scoresOptions.length;i++){
        /* For each score option element, add an event listener */
        scoresOptions[i].addEventListener('input', function (){
            selected = "scores"
            // Update the data selection from data list with the user's new selection 
            updateData(selected)
            console.log(scoresData)
            //if there is data update the graph
            if(scoresData[0] !== undefined || scoresData[1] !== undefined || scoresData[2] !== undefined || scoresData[3] !== undefined || scoresData[4] !== undefined ){
                //Update report data
                updateGraphScores()
            }
            //display the graph
            changeDisplay(selected);
        })
    }

    /* HANDLE BUTTON CLICKS -- WHEN USER CLICKS, IT SHOULD SHOW THE CORRECT GRAPH/REPORT*/
    //when user clicks a button trigger function
    scoresButton.onclick = function(){
        //update selected var 
        selected = "scores";
        //update scores (because salaries and scores are shown on same graph)
        updateGraphScores();
        //display the graph
        changeDisplay(selected); 
    }

    salariesButton.onclick = function(){
        selected = "salaries";
        updateGraphSalaries()
        changeDisplay(selected); 
    }

    detailsButton.onclick = function(){
        selected = "details"
        updateDetailsReport()
        changeDisplay(selected); 
    }
}