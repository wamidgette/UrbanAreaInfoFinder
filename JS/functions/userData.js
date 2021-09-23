//Functions here deal with the dropdown list choices for the user and the data presented to the user
class Data{
    /* List arrays will hold all results obtained from the initial request. This is so subsequent API requests will not be necessary. If a user changes a filter, the list can be searched for data, rather than sending a new request for that specific filter value  */
    static scoresList = [];
    static detailsList = [];
    static salariesList = [];

    /* The Lists are searched for the user's preferred filters. Data is stored in 'Data' arrays.*/
    static scoresData = [];
    static detailsData = [];
    static salariesData = [];

    //Takes a sample salariesJSON object and loops through it to generate html for the salaries dropdown list
    static generateSalaryOptions(objectArray){
        let optionsList = "<option value=null>--</option>";
        for(let i=0; i<objectArray.length; i++){
            optionsList += "<option value='" + objectArray[i].job.id + "'>" + objectArray[i].job.title + "<options>"
        }
        return optionsList;
    }

    //generate dropdown lists for scores
    static generateScoreOptions(objectArray){
        let optionsList = "<option value=null>--</option>";
        for(let i=0; i<objectArray.length; i++){
            optionsList += "<option value='" + objectArray[i].name + "'>" + objectArray[i].name + "<options>"
        }
        return optionsList;
    }

    //generate dropdown list for details
    static generateDetailsOptions(objectArray){
        let optionsList = "<option value=null>--</option>";
        for(let i=0; i<objectArray.length; i++){
            optionsList += "<option value='" + objectArray[i].id + "'>" + objectArray[i].label + "<options>"
        }
        return optionsList;
    }

    //Takes a datatype parameter and updates the user choice for the parameter, then updates the data for that parameter by searching the data list
    static updateData(dataType){
        switch(dataType){
            case 'salaries': 
                if(this.salariesList.length === 0 || salariesOptions.value === 'null'){
                    this.salariesData = [];
                    break;
                }
                /* update the data by querying the salariesList*/
                this.salariesData = this.salariesList.find(function(object, index){
                    if(object.job.id == salariesOptions.value){
                        return true;
                    }
                })
                break;

            case 'details': 
                /*  update the data by querying the detailsList*/
                //if the detailsList is an empty array, dont update the detailsData 
                if(this.detailsList.length === 0 || detailsOptions.value === 'null'){
                    this.detailsData = [];
                    break;
                }

                this.detailsData = this.detailsList.find(function(object, index){
                    if(object.id == detailsOptions.value){
                        return true;
                    }
                }).data;        
                break;
                
            case 'scores': 
                if(this.scoresList.length === 0  || (
                    scoresOptions[0].value === 'null' && 
                    scoresOptions[1].value === 'null' && 
                    scoresOptions[2].value === 'null' && 
                    scoresOptions[3].value === 'null' && 
                    scoresOptions[4].value === 'null' 
                )){
                    this.scoresData = [];
                    break;
                }
                console.log(scoresOptions)
                /* update the scores data acoording to the new choice */
                for(let i=0; i<scoresOptions.length;i++){
                    this.scoresData[i] = this.scoresList.find(function(object, index){
                        if(object.name == scoresOptions[i].value){
                            return true;
                        }
                    })
                }
                break;
        }
    }
}


