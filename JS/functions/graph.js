/* This JS file contains functions to do with chart.js and graphing information*/
/* Generate SAMPLE graph with sample data*/
let labels = [
    'stat 1',
    'stat 2',
    'stat 3',
    'stat 4',
    'stat 5',
];

let data = {
    labels: labels,
    datasets: [{
        label: 'Sample Chart Data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [3, 5, 4, 7, 4],        
    }]
};

let config = {
    type: 'bar',
    data: data,
    options: {}
};

let myChart = new Chart(
    document.getElementById('myChart').getContext('2d'), 
    config
);

/* Function to update graph with salaries data */
function updateGraphSalaries(){
    console.log(salariesData)
    /* If no current salaries data, exit function */
   if(salariesData === null || salariesData === ""){
       return;
   }

   labels = [
       "Low-end",
       "Average",
       "High-end"
   ]

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
       chart.data.labels = label
       chart.data = data
       chart.update();
   }
   addData(myChart, labels, data)
}

/* Function to update graph with scores data */
function updateGraphScores(){
    /* If no current scores data, exit function */
    if(scoresData === null || scoresData === ""){
        return;
    }

    labels = [];
    data = []

    //update labels and datasets
    for(let i =0; i<scoresData.length; i++){
        if(scoresData[i] === undefined){
            labels[i] = 'not found';
            data[i] = 0
        }
        else{
            labels[i] = scoresData[i].name
            data[i] = scoresData[i].score_out_of_10
        }

    }
    //update data
    data = {
        labels: labels,
        datasets: [{
            label: 'Scores out of 10',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data,        
        }]
    };

    //add the new chart configuration
    function addData(chart, label, data){
        chart.data.labels = label
        chart.data = data
        chart.update();
    }
    addData(myChart, labels, data)
}

/* Function to update report with details data */
function updateDetailsReport(){
    let detailsReportHTML = `
        <h3>${document.getElementById("detailsOptions").value} Details Report</h3>
            <table>`;
                
    for(let i =0; i<detailsData.length; i++){
        //Under the float data type there are many 'value' types - need to handle this
        if(detailsData[i].type='float'){  
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
            </tr>`
        }
        
        else if(detailsData[i].type='percent'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label} (%)</td>
                <td>${100*(detailsData[i].percent_value)}</td>
            </tr>`
        }

        else if(detailsData[i].type='string'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label}</td>
                <td>${detailsData[i].string_value}</td>
            </tr>`; 
        }

        else if(detailsData[i].type='currency_dollar'){
            detailsReportHTML += `
            <tr>
                <td>${detailsData[i].label} (USD)</td>
                <td>${detailsData[i].currency_dollar_value}</td>
            </tr>`; 
        }
    }
    detailsReportHTML += "</table>"
    detailsReport.innerHTML = detailsReportHTML
}

/* changeDisplay controls whether the graph or the report is displayed for the user. inputs are "showReport" and "showGraph" */
function changeDisplay(selection){
    /* If showReport is sent, hide the chart and display the report */
    switch(selection){
        case "details" : 
            mainChart.style.display = 'none';
            detailsReport.style.display = 'flex';
            break;

        case "scores" : 
            detailsReport.style.display = 'none';
            mainChart.style.display = 'block';
            break;

        case "salaries" : 
            detailsReport.style.display = 'none';
            mainChart.style.display = 'block';
            break;
    }
}