const generateChart = () => {

}

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
        label: 'My First Dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30],        
    }]
};

let config = {
    type: 'bar',
    data: data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart').getContext('2d'), 
    config
);

/* Get the Chart and Report by ID = Will need to toggle display between the two*/
/* Get details report div by id */
let detailsReport = document.getElementById("detailsReport");
/* Get chart canvas by id */
let mainChart = document.getElementById("myChart");