class Teleport {
    static async getAllUrbanAreas(){
        console.log(salariesButton)
        let mainCities = [];
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
    static locationResponseHandle(data){
        //update arrays that hold city and urban area info
        let cityList = data._embedded["location:nearest-cities"];
        let areaList = data._embedded["location:nearest-urban-areas"];
        let nearestCity
        let urbanArea
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
    static async requestScores(url){
        await fetch(url).then(
            function(response){
                console.log('fetch scores returned')
                return response.json();
            }
        ).then(
            function (scoresObject){
                console.log('score object returned' + scoresObject)
                //parse json to get new scores list 
                Data.scoresList = scoresObject.categories;
                console.log(Data.scoresList);
                //Update the scoresData object 
                Data.updateData('scores');
                console.log(Data.scoresData);
            }
        )
        return;
    }
        
    static async requestSalaries(url){
        await fetch(url).then(
            function(response){
                console.log('fetch salaries returned')
                return response.json()
            }
        ).then(
            function(salariesObject){
                console.log('salaries object returned' + salariesObject)
                Data.salariesList = salariesObject.salaries;
                console.log(Data.salariesList)
                //Update the salariesData object
                Data.updateData('salaries');
                console.log(Data.salariesData)
            }
        )
        return;
    } 
    
    static async requestDetails(url){
        await fetch(url).then(
            function(response){
                console.log('fetch details returned')
                return response.json()
            }
        ).then(
            function(detailsObject){
                console.log('details object returned' + detailsObject.categories)
                Data.detailsList = detailsObject.categories;
                console.log(Data.detailsList)
                //Update the detailsData object
                Data.updateData('details');
                console.log(Data.detailsData)
            }
        )
        return;
    }
}