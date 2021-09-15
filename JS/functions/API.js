const requestLocation = () => {
    if(locationRequest.readyState == 4 && locationRequest.status == 200){
        /* Get response */
        response = JSON.parse(locationRequest.responseText);
        //Define arrays that hold city and urban area info
        cityList = response._embedded["location:nearest-cities"];
        areaList = response._embedded["location:nearest-urban-areas"];
        
        //define nearest city and urbanarea
        if(cityList === null){
            city.innerHTML="We Couldnt find a nearby city. Try clicking closer to a major city!"; 
            area.innerHTML=""; 
        }

        else if(areaList.length === 0){
            nearestCity = cityList[0]._links["location:nearest-city"].name; 
            city.innerHTML="Nearest City: " + nearestCity;
            area.innerHTML="We Couldnt find a nearby urban center. Try clicking closer to a major city!"; 
        }

        //When an urban area and city are returned successfully, make additional API calls to retrieve additional information about the uban center - display the information on graphs on the webpage
        else{
            nearestCity = cityList[0]._links["location:nearest-city"].name; 
            urbanArea =  areaList[0]._links["location:nearest-urban-area"].name
            city.innerHTML="Nearest City: " + nearestCity;
            area.innerHTML="Urban Area: " + urbanArea; 
            /* console.log(urbanArea, nearestCity); */

            /* Get the statistics for the urban area */
            scoresUrl = areaList[0]._links["location:nearest-urban-area"].href + "scores/";
            salariesUrl = areaList[0]._links["location:nearest-urban-area"].href + "salaries/";
            detailsUrl = areaList[0]._links["location:nearest-urban-area"].href + "details/";
            console.log(salariesUrl);
            /* Call the scores, salaries and details requests with the urls generated above */

            salariesRequest.open("GET", salariesUrl, true);
            scoresRequest.open("GET", scoresUrl, true);
            detailsRequest.open("GET", detailsUrl, true);

            salariesRequest.send();
            scoresRequest.send(); 
            detailsRequest.send();
        }
    }
};

const requestScores = () => {
    if(scoresRequest.readyState == 4 && scoresRequest.status == 200){
        let scores = JSON.parse(scoresRequest.responseText);

        /* All scores for this city */
        scoresList = scores.categories
        console.log(scoresList);

        //If user has selected scores, extract scores for those values 
        for(let i=0; i<scoreChoices.length;i++){
            scoresData[i] = scoresList.find(function(object, index){
                console.log('finding' + scoreChoices[i] + 'in the scoresList')
                if(object.name == scoreChoices[i]){
                    return true;
                }
            })
        }
        console.log(scoresData);
        //If the entire list of scoresData is not undefined, update the graph (i.e. if the user has selected at least 1 item that can be displayed) 
        if(scoresData[0] !== undefined || scoresData[1] !== undefined || scoresData[2] !== undefined || scoresData[3] !== undefined || scoresData[4] !== undefined ){
            updateGraphScores()
        }
        else{
            alert("Select information to display before clicking on map!");
        }
    }
}

const requestSalaries = () =>{
    if(salariesRequest.readyState == 4 && salariesRequest.status == 200){
        /* Response JSON */
        salaries = JSON.parse(salariesRequest.responseText);

        salariesList = salaries.salaries;
        console.log(salariesList)
        //extract salaries for chosen job 
        salariesData = salariesList.find(function(object, index){
            if(object.job.id == salariesUserChoice){
                return true;
            }
        })
        console.log(salariesData)
        /* If there is salary data to display, update the graph */
        if(salariesData !== undefined){
            //Update the salaries graph with the salariesdata 
            updateGraphSalaries();
        }
    } 
} 

const requestDetails = () => {
    if(detailsRequest.readyState == 4 && detailsRequest.status == 200){
        details = JSON.parse(detailsRequest.responseText);

        detailsList = details.categories;
        console.log(detailsList);
        
        detailsData = detailsList.find(function(object, index){
            if(object.id == detailsUserChoice){
                return true;
            }
        }).data
        console.log(detailsData)
        //if there is details data to display, update the report
        if(detailsData !== (undefined || null)){
            //Update the details report with the detailsdata 
            updateDetailsReport();
        }
    }
}

