# Spotify search polymer element

This is an example of a [Polymer Web Component](http://www.polymer-project.org) that implements a Search component for searching tracks, albums and artists on Spotify. It is useful in combination with other components such as the [Spotify Preview Button](https://github.com/rafeca/spotify-previewbutton).

- [Demo](http://jmperezperez.com/spotify-search/spotify-search/demo.html)
- [Documentation](http://jmperezperez.com/spotify-search/spotify-search/)

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

The search results are available in an exposed `result` property:

```html
<html>
<head>
  <script type="text/javascript" src="bower_components/platform/platform.js"></script>

  <link rel="import" href="bower_components/spotify-search/index.html">
</head>
<body>
  <spotify-search query="u2" type="artist"></spotify-search>
</body>
</html>
```

## Advanced Usage

The component is more useful when used with other Polymer components. For instance, you could render an input element that will send the value to the component. Then, you can take the output and pass it to a Spotify Preview Button:

```html
<polymer-element name="my-app">
  <template>
    <style>
      core-input {
        border: 1px solid #333;
      }
    </style>
    <core-input id="input" placeholder="Type the name of a track"></core-input>
    <spotify-search query="{{ $.input.value }}" id="search" type="track"></spotify-search>
    <spotify-previewbutton uri="{{ $.search.result[0].uri }}"></spotify-previewbutton>
  </template>

  <script>
   (function(Polymer) {
    'use strict';

    Polymer('my-app', {
    });

  })(window.Polymer);
  </script>

</polymer-element>

<my-app></my-app>
```

## Running the example

To launch the example, install the `spotify-search` bower component:

```sh
$ bower install spotify-search
```

Then launch a web server:

```sh
$ ruby -run -e httpd . -p 5000 # "python -m SimpleHTTPServer 5000" will also do the trick
```

Then, you only need to navigate to [http://localhost:5000/bower_components/spotify-search/demo.html](http://localhost:5000/bower_components/spotify-search/demo.html) from any modern browser.
