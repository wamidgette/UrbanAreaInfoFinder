//Functions here deal with the dropdown list choices for the user and the data presented to the user

//Takes a sample salariesJSON object and loops through it to generate html for the salaries dropdown list
function generateSalaryOptions(objectArray){
    let optionsList = "<option value=null>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].job.id + "'>" + objectArray[i].job.title + "<options>"
    }
    return optionsList;
}
//generate dropdown lists for scores
function generateScoreOptions(objectArray){
    let optionsList = "<option value=null>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].name + "'>" + objectArray[i].name + "<options>"
    }
    return optionsList;
}
//generate dropdown list for details
function generateDetailsOptions(objectArray){
    let optionsList = "<option value=null>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].id + "'>" + objectArray[i].label + "<options>"
    }
    return optionsList;
}

//Takes a datatype parameter and updates the user choice for the parameter, then updates the data for that parameter by searching the data list
function updateData(dataType){
    switch(dataType){
        case 'salaries': 
            /* update the data by querying the salariesList*/
            salariesData = salariesList.find(function(object, index){
                if(object.job.id == salariesOptions.value){
                    return true;
                }
            })
            break;

        case 'details': 
            /*  update the data by querying the detailsList*/
            detailsData = detailsList.find(function(object, index){
                if(object.id == detailsOptions.value){
                    return true;
                }
            }).data;        
            break;
            
        case 'scores': 
            /* update the scores data acoording to the new choice */
            for(let i=0; i<scoresOptions.length;i++){
                scoresData[i] = scoresList.find(function(object, index){
                    if(object.name == scoresOptions[i].value){
                        return true;
                    }
                })
            }
            break;
    }
}
