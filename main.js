(function(Polymer) {
  'use strict';

  Polymer('spotify-search', {

    /**
     * The search query.
     *
     * @property query
     * @type string
     * @default null
     */
    query: null,

    /**
     * The search type.
     *
     * @property type
     * @type string
     * @default 'track'
     */
    type: 'track',

    observe: {
      query: 'search',
      type: 'search'
    },

    search: function() {
      var that = this;

      if (this.query) {

        var req = new XMLHttpRequest();
        req.open('GET', 'https://api.spotify.com/v1/search/?type=' +
          encodeURIComponent(this.type) +
          '&query=' + encodeURIComponent(this.query),
          true);

        req.onreadystatechange = function() {
          if (req.readyState === 4) {
            var data = null;
            try {
              data = req.responseText ? JSON.parse(req.responseText) : '';
            } catch (e) {}

            if (req.status === 200) {
              that.gotResults(data);
            }
          }
        };

        req.send(null);
      }
    },

    gotResults: function(results) {
      var propertyName = this.type + 's';
      if (results && results[propertyName] && results[propertyName].items) {
        this.results = results[propertyName].items;
      } else {
        this.results = [];
      }
    }
  });

})(window.Polymer);