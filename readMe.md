# Humber API Project - Urban Area Information Finder 

## DESCRIPTION: 
This is an API project written in CSS/HTML/JS that combines the: 
Google maps API, (https://developers.google.com/maps/documentation/javascript/overview)
the Teleport API, (https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/), 
and the Image-chats API, (https://documentation.image-charts.com/)
to retrieve information about locations upon map click and display it in a useful format for the user. This web app would be particularly useful for someone thinking about a change in location and curious about quality of life and economic information in the urban area of interest 

-Right now, it is still a bit finicky and you have to zoom in and click very close to an urban center to have the API recognize the coordinates - I am working on fixing this */

## FUTURE ADD ONS:
 - Call Teleport API for list of urban areas. Give google those names and show circles on map to give user indication of where to click - less guess work 
 - Extend scalability, extract information from Json objects using user-entered parameters like job type and other stats they are interested in from selection inputs
 - Provide smoother panning to new map center when clicked, instead of a sudden change in map view
 - responsive design
 - Optimize chart loading - currently, charts appear as new images suddenly. Animated bar charts with smooth transitions would provide better user experience