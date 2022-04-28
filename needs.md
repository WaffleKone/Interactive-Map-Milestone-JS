One of the main features needed is for the user to be able to quickly locate local businesses. At the very least, the application must do the following:

Obtain the user's current location.
Map the location on a Leaflet map.
Allow the user to select a business type from a list and map the five nearest locations on the map using the Foursquare API.\

What events will your application need?
  Dropdown selector that allows the user to switch between local business types.
What APIs will you need and in what order?
  Leaflet, Foursquare, Geolocation
How will you obtain the user's location?
  HTML Geolocation API
How will you add the user's location to the map?
  Get the users coords with Geolocation API, then set the center of the map to those coords and place a marker
How will you get the selected location from the user?
  Dropdown selector that switches between coffee, restaurants, gas,
How will you add that information to the map?
  Get the data from foursquare when the user makes a request, store that data in an object/array, use it to put markers via leaflet

KNOWN BUGS:
When a user switches businesses, the old markers from the previous search are still displayed.