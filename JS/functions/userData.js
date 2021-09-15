//Functions
// the functions in this section generate the HTML for the dropdown list options
const generateSalaryOptions = (objectArray) => {
    let optionsList = "<option value=null>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].job.id + "'>" + objectArray[i].job.title + "<options>"
    }
    return optionsList;
}

const generateScoreOptions = (objectArray) => {
    let optionsList = "<option value=null>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].name + "'>" + objectArray[i].name + "<options>"
    }
    return optionsList;
}

const generateDetailsOptions = (objectArray) => {
    let optionsList = "<option>--</option>";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].id + "'>" + objectArray[i].label + "<options>"
    }
    return optionsList;
}

//Takes a datatype parameter and updates the user choice for the parameter, then updates the data for that parameter by searching the data list
const updateUserChoiceAndData = (dataType) => {
    switch(dataType){
        case 'salaries': 
            /* update user choice */
            salariesUserChoice = salariesOptions.value;
            /* update the data by querying the salariesList*/
            salariesData = salariesList.find(function(object, index){
                if(object.job.id == salariesUserChoice){
                    return true;
                }
            })
            break;

        case 'details': 
            /* update user choice to the input change */
            detailsUserChoice = detailsOptions.value;
            /*  update the data by querying the detailsList*/
            detailsData = detailsList.find(function(object, index){
                if(object.id == detailsUserChoice){
                    return true;
                }
            }).data;        
            break;
            
        case 'scores': 
            /* Update the user score choices*/
            for(let i = 0; i<scoresOptionsElements.length; i++){
                scoreChoices[i] = scoresOptionsElements[i].value
            }

            /* update the scores data acoording to the new choice */
            for(let i=0; i<scoreChoices.length;i++){
                scoresData[i] = scoresList.find(function(object, index){
                    if(object.name == scoreChoices[i]){
                        return true;
                    }
                })
            }
            break;
    }
}
