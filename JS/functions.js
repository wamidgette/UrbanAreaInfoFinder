const generateSalaryOptions = (objectArray) => {
    let optionsList = "";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].job.id + "'>" + objectArray[i].job.title + "<options>";
    }
    return optionsList;
};

const generateScoreOptions = (objectArray) => {
    let optionsList = "";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].name + "'>" + objectArray[i].name + "<options>";
    }
    return optionsList;
};

const generateDetailsOptions = (objectArray) => {
    let optionsList = "";
    for(let i=0; i<objectArray.length; i++){
        optionsList += "<option value='" + objectArray[i].id + "'>" + objectArray[i].label + "<options>";
    }
    return optionsList;
};

function updateCoordinates(MapMouseEvent){
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
    var lat = MapMouseEvent.latLng.toJSON()['lat'];
    var lng = MapMouseEvent.latLng.toJSON()['lng'];
    console.log(lat, lng);
}

/* Graph creates new config value for chart and updates the "myChart" */
const updateGraphSalaries = (salariesData) => {
     /* If no current salaries data, exit function */
    if(salariesData === null || salariesData === ""){
        return;
    }

    labels = [
        "Low-end",
        "Average",
        "High-end"
    ];

    data = {
        labels: labels,
        datasets: [{
            label: `${salariesData.job.title} salaries (USD)`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                salariesData.salary_percentiles.percentile_25, 
                salariesData.salary_percentiles.percentile_50, 
                salariesData.salary_percentiles.percentile_75
            ],        
        }]
    };

    function addData(chart, label, data){
        chart.data.labels = label;
        chart.data = data;
        chart.update();
    }
    addData(myChart, labels, data);
};

const updateGraphScores = (scoresData) => {
    /* If no current scores data, exit function */
    if(scoresData === null || scoresData === ""){
        return;
    }

    labels = [];
    data = [];

    for(let i =0; i<scoresData.length; i++){
        if(scoresData[i] === undefined){
            labels[i] = 'not found';
            data[i] = 0;
        }
        else{
            labels[i] = scoresData[i].name;
            data[i] = scoresData[i].score_out_of_10;
        }

    }
    
    data = {
        labels: labels,
        datasets: [{
            label: 'Scores out of 10',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data,        
        }]
    };

    function addData(chart, label, data){
        chart.data.labels = label;
        chart.data = data;
        chart.update();
    }
    addData(myChart, labels, data);
};

const updateDetailsReport = (detailsData) => {
    /* If no current details data, exit function */
    if(detailsData === null || detailsData === ""){
        return
    }
 
    let detailsReportHTML = `
        <h3>${document.getElementById("detailsOptions").value} Details Report</h3>
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                </tr>`;
                
    for(let i = 0; i<detailsData.length; i++){
        if((detailsData[i].type)='float'){
            //Under the float data type there are many 'value' types - need to handle this
            let value = "";
            if(detailsData[i].float_value){value = 'float_value'}
            else if(detailsData[i].int_value){value = 'int_value'}
            else if(detailsData[i].string_value){value = 'string_value'}
            else if(detailsData[i].currency_dollar_value){value = 'currency_dollar_value'}
            else if(detailsData[i].percent_value){value = 'percent_value'}
            
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label}</td>
                <td>${detailsData[i][value]}</td>
            </tr>`;
        }

        else if(detailsData[i].type='percent'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label} (%)</td>
                <td>${100*(detailsData[i].percent_value)}</td>
            </tr>`;
        }

        else if(detailsData[i].type='string'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label}</td>
                <td>${detailsData[i].string_value}</td>
            </tr>` ;
        }

        else if(detailsData[i].type='currency_dollar'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label} (USD)</td>
                <td>${detailsData[i].currency_dollar_value}</td>
            </tr>` ;
        }
    }
    detailsReportHTML += "</table>";
    detailsReport.innerHTML = detailsReportHTML;
};

const toggle = (input) => {
    if(input == "showReport"){
        mainChart.style.display = 'none';
        detailsReport.style.display = 'block';
    }

    else if(input == "showGraph"){
        detailsReport.style.display = 'none';
        mainChart.style.display = 'block';
    }
};
