

## Output
### Path
Tell webpack where it should store the resulting files.

### Public Path
Update the URLs inside, css, HTML fiels

### Example
For example, in your CSS, you may have a url to load ‘./test.png’ on your localhost. But in production, the ‘test.png’ might actually be located at a CDN while your node.js server might be running on Heroku. So that means, you’ll have to manually update the URLs in all the files to point to the CDN when running in Production.

Instead, you can use Webpack’s publicPath and use bunch of plugins that are publicPath-aware to automatically update URLs when generating production builds.


## References
[Webpack The Confusing Parts - Rajaraodv - Medium](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
