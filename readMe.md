# Google Maps and Teleport APIs Project - Urban Area Information Finder 

## DESCRIPTION: 
Want to see the average annual salary for your job, quality of living, or almost any statistic you can think of in a foreign city by simply clicking on it on a map? This web app allows you to do that! Using filters via drop-down menu, users can select the information they want to know about a city before clicking on it on the Google Map and having that information graphed for them in a clear and consise bar graph or report!

Written in CSS, HTML, and vanilla JS, this project combines: 
Google maps API, (https://developers.google.com/maps/documentation/javascript/overview)
Teleport API, (https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/), 
Charts.js, (https://www.chartjs.org/)

## FEATURES:
- User can change data filters based on what is available through the Teleport API. A sample JSON file is used to populate each dropdpown list. 3 main categoreies of information available for each city are Salaries, City Rankings (or scores), and Details.
- When user has selected the information they want to see, the user can click on the map. A graph of the information on the nearest major city to where the user clicked will be displayed if it is found.
- Once the user has clicked on the map, they can change any data filters they wish, which will update the information on the graph in real time - no need to re-click or re-submit the information.
- A user can also toggle between the 3 different charts by clicking on the black buttons that read "Salaries", "Rankings", and "Report". "Salaries" and "Rankings" will display a bar graph while "Report" will show a table displaying the user's chosen Details.
- Google maps markers set at each major city in the Teleport API - the user can now see these markers and click on them to get data rather than having to guess where data will be available.

## HOW IT WORKS
- After creating the google map, a GET request is sent to Teleport to retrieve all of the cities that are stored in the database. This is done in one query by including embedded information in the following URL: https://api.teleport.org/api/urban_areas/?embed=ua%3Aitem%2Fua%3Aidentifying%2Dcity. The resultant array of cities and their Latlng coordinates is looped through and a marker is created for each city.
- On clicking one of the markers, the Google Maps API retrieves the coordinates of where the user clicked
- GET request is sent to Teleport API with those coordinates. Response contains the nearest city and nearest urban area
- City is displayed for user in the title of the chart
- Urban area is used to send 3 additional GET requests to Teleport API for the Salaries, Rankings, and Details for the urban area
- Results of these requests are stored as lists of objects, "SalariesList", "ScoresList", and "DetailsList".
- Data corresponding to the user's filter choices is extracted from from these lists.
- If the user changes one of the filter values, an event listener is triggered, which calls a function to extract data from the DataList corresponding to the new filter value, and then updates the graph with the new data

## IMPROVEMENTS TO MAKE
- Provide smoother panning to new map center when clicked, instead of a sudden change in map view
- responsive design
- Improve original API GET request URL to Embed scores/details/salaries data. This will reduce the total number of requests that need to be made

