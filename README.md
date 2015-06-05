# spotify-search polymer element

This is an example of a [Polymer Web Component](http://www.polymer-project.org) that implements a Search component for searching tracks, albums and artists on Spotify. It is useful in combination with other components such as the [Spotify Preview Button](https://github.com/rafeca/spotify-previewbutton).

- [Demo](http://jmperezperez.com/spotify-search/components/spotify-search/demo/)
- [Documentation](http://jmperezperez.com/spotify-search/)

## Usage

You just need to include the polymer platform and this element in the head of
your html page.

Then, you can start using the `spotify-search` element as any other HTML element
in your page.

Input parameters, through attributes:

- `query` (required): The search query's keywords
- `type` (optional, default: 'tracks'): The type of entity you want to fetch.
- `limit` (optional): The maximum number of objects to return. Check the default value on the [Spotify Web API documentation page](https://developer.spotify.com/web-api/search-item/).
- `offset` (optional, defaults to 0): The index of the first object to return.

The search results are available in an exposed `result` property, and also through the triggered event `spotify-search-result`.

## Running the example

To launch the example, install the `spotify-search` bower component:

```sh
$ bower install spotify-search
```

Then launch a web server:

```sh
$ ruby -run -e httpd . -p 5000 # "python -m SimpleHTTPServer 5000" will also do the trick
```

Then, you only need to navigate to [http://localhost:5000/bower_components/spotify-search/demo/index.html](http://localhost:5000/bower_components/spotify-search/demo/index.html) from any modern browser.
