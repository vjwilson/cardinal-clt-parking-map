# cardinal-clt-parking-map

A simple parking map to show potential parking lots around the Charlotte Cardinal Solutions office in Uptown.

**Current URL**: https://cardinal-solutions.github.io/cardinal-clt-parking-map/

## Contributing

To modify the pins:

1. Fork this repo
1. Run `npm install`
1. Make your changes to the `parkingLots` Object in `assets/scripts/parking-lots.js`
1. Run `npm run build`
1. Push your changes to your Fork
1. Submit a Pull Request to this repo

There will be a JSON file or NoSQL database to store this information in the future, which will remove the need to fork and submit Pull Requests.

You can also create a GitHub issue with new parking lots or updates to old parking lots. Please provide the address of the lot if new or the Name of the lot if it already exists in this map.

## RoadMap

In the future, we'd like to make this pull from a central JSON file or MongoDB database and use Google's Geocoding API so that we can just provide addresses in the parking lot array and have the system geocode them automatically. Moving the data externally will also allow the content to be updated without having to push new changes to the `gh-pages` branch.

Should be moved to SCSS in the near future.
