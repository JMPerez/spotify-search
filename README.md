# Cover art polymer element

This is an example of a [Polymer Web Component](www.polymer-project.org) that implements a square image placeholder with a list of images sources, so it loads the most suitable one depending on size and pixel density.

## Usage

You just need to include the polymer platform and this element in the head of
your html page.

Then, you can start using the `spotify-coverart` element as any other HTML element
in your page. Set the `images` property to an array of objects containing `width`, 
`height` and `url` of the image, sorted by descending size:

```html
<html>
<head>
  <script type="text/javascript" src="bower_components/platform/platform.js"></script>

  <link rel="import" href="bower_components/spotify-coverart/index.html">
</head>
<body>
  <spotify-coverart images='[{"height":640,"url":"https://i.scdn.co/image/4ba3d88559683547a61210cffe82349b1094482e","width":480},{"height":300,"url":"https://i.scdn.co/image/23b8e2a3ffa06d001ff77de738b3c89aed02af8e","width":225},{"height":64,"url":"https://i.scdn.co/image/504389979f2fa66a804b7311e5ce634090a608a1","width":48}]'></spotify-coverart>
</body>
</script>
```

## Running the example

To launch the example, install the `spotify-coverart` bower component:

```sh
$ bower install spotify-coverart
```

Then launch a web server:

```sh
$ ruby -run -e httpd . -p 5000 # "python -m SimpleHTTPServer 5000" will also do the trick
```

Then, you only need to navigate to [http://localhost:5000/bower_components/spotify-spotify-coverart/demo.html](http://localhost:5000/bower_components/spotify-spotify-coverart/demo.html) from any modern browser.

## TODO

- Prevent loading a smaller image if a larger one is already in place.
- Replace a smaller version with a larger one in a smoother way, waiting for the one to be loaded. 
