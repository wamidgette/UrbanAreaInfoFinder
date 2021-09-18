async function getAllUrbanAreas(){
    await fetch('https://api.teleport.org/api/urban_areas/?embed=ua%3Aitem%2Fua%3Aidentifying%2Dcity').then(
        function(response){
            return response.json();
        }
    ).then(
        function(data){
            let uaItems = data._embedded['ua:item']
            console.log(uaItems)
            for(let i = 0; i<uaItems.length; i++){
                mainCities[i] = {
                    'name' : uaItems[i].name, 
                    'latlng' : [uaItems[i]._embedded['ua:identifying-city'].location.latlon.latitude, 
                    uaItems[i]._embedded['ua:identifying-city'].location.latlon.longitude]
                }
            } 
            console.log(mainCities)
        }
    )
    return mainCities;
}
/* Create the API function to handle requests*/
function locationResponseHandle(data){
    //update arrays that hold city and urban area info
    let cityList = data._embedded["location:nearest-cities"];
    let areaList = data._embedded["location:nearest-urban-areas"];

    //define nearest city and urbanarea
    if(cityList === null || cityList.length === 0){
        city.innerHTML="We Couldnt find a nearby city. Try clicking closer to a major city!"; 
        area.innerHTML=""; 
    }

    else if(areaList === null || areaList.length === 0){
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

        /* Set urls for the follow up requests*/
        let url = {
            scoresUrl : areaList[0]._links["location:nearest-urban-area"].href + "scores/",
            salariesUrl : areaList[0]._links["location:nearest-urban-area"].href + "salaries/",
            detailsUrl : areaList[0]._links["location:nearest-urban-area"].href + "details/"
        }
        return url
    }
}

//Request scores data 
async function requestScores(url){
    fetch(url).then(
        function(response){
            return response.json()
        }
    ).then(
        function (scores){
            //parse json to get new scores list 
            scoresList = scores.categories
            console.log(scoresList);
            //Update the scoresData object 
            updateData('scores');
            console.log(scoresData);
        }
    )
}
    
async function requestSalaries(url){
    fetch(url).then(
        function(response){
            return response.json()
        }
    ).then(
        function(salariesObject){
            salariesList = salariesObject.salaries;
            console.log(salariesList)
            //Update the salariesData object
            updateData('salaries');
            console.log(salariesData)
        }
    )
} 

async function requestDetails(url){
    fetch(url).then(
        function(response){
            return response.json()
        }
    ).then(
        function(details){
            detailsList = details.categories;
            console.log(detailsList);
            //Update the detailsData object
            updateData('details');
            console.log(detailsData)
        }
    )
}


