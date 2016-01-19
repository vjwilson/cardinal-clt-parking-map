# cardinal-clt-parking-map

A simple parking map to show potential parking lots around the Charlotte Cardinal Solutions office in Uptown.

**Current URL**: https://cardinal-solutions.github.io/cardinal-clt-parking-map/

## Contributing

To modify the pins, please fork this repo and then make your changes to the `lots` Array in `assets/scripts/index.js` and then submit a Pull Request to this repository.

There will be a JSON file or NoSQL database to store this information in the future, which will remove the need to fork and submit Pull Requests.

You can also create a GitHub issue with new parking lots or updates to old parking lots. Please provide the address of the lot if new or the Name of the lot if it already exists in this map.

## RoadMap

In the future, we'd like to make this pull from a central JSON file or MongoDB database and use Google's Geocoding API so that we can just provide addresses in the parking lot array and have the system geocode them automatically. Moving the data externally will also allow the content to be updated without having to push new changes to the `gh-pages` branch.

Should be moved to SCSS and ES2015 with a gulp build system in the near future.
