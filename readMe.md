# Humber API Project - Urban Area Information Finder 

## DESCRIPTION: 
This is project written in CSS, HTML, and vanilla JS that combines the: 
Google maps API, (https://developers.google.com/maps/documentation/javascript/overview)
the Teleport API, (https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/), 
and the Charts.js, (https://www.chartjs.org/)
This application allows a user to quickly see stats on different cities around the world by simply clicking on a city on a world map. Statistics are filterable to whatever the user would like to see.

## FEATURES:
- User can change data filters based on what is available through the Teleport API. A sample JSON file is used to populate each dropdpown list. 3 main categoreies of information available for each city are Salaries, City Rankings (or scores), and Details.
- When user has selected the information they want to see, the user can click on the map. A graph of the information on the nearest major city to where the user clicked will be displayed if it is found.
- Once the user has clicked on the map, they can change any data filters they wish, which will update the information on the graph in real time - no need to re-click or re-submit the information.
- A user can also toggle between the 3 different charts by clicking on the black buttons that read "Salaries", "Rankings", and "Report". "Salaries" and "Rankings" will display a bar graph while "Report" will show a table displaying the user's chosen Details.

## HOW IT WORKS
- On clicking the map, the Google Maps API retrieves the coordinates of where the user clicked
- GET request is sent to Teleport API with those coordinates. Response contains the nearest city and nearest urban area
- City is displayed for user in the title of the chart
- Urban area is used to send 3 additional GET requests to Teleport API for the Salaries, Rankings, and Details for the urban area
- Results of these requests are stored as lists of objects, "SalariesList", "ScoresList", and "DetailsList".
- Data corresponding to the user's filter choices is extracted from from these lists.
- If the user changes one of the filter values, an event listener is triggered, which calls a function to extract data from the DataList corresponding to the new filter value, and then updates the graph with the new data

## IMPROVEMENTS TO MAKE
-Right now, it is still a bit finicky and you have to zoom in and click very close to an urban center to have the API recognize the coordinates. I plan on making this more user friendly by making a marker on the map for each urban area that is listed within the Teleport API. This way a user can see much more clearly where they need to click. I have already created a query string that contains the coordinates of the main city for each urban area: https://api.teleport.org/api/urban_areas/?embed=ua%3Aitem%2Fua%3Aidentifying%2Dcity. These coordinates can be pushed into a list of LatLng objects and then looped through to make a new marker for each. Still working on this! 
- Provide smoother panning to new map center when clicked, instead of a sudden change in map view
- responsive design
- Run API requests in parallel for faster responses
- Improve original API GET request URL to Embed scores/details/salaries data. This will reduce the total number of requests that need to be made

