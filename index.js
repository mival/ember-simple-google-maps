/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-simple-google-maps',

  contentFor(type, config) {
    let scriptUrl = '';
    if (type === 'body-footer') {
      scriptUrl = `${config[this.name].url}?v=${config[this.name].version}`
      if (config[this.name].apiKey !== '') {
        scriptUrl = scriptUrl + `&key=${config[this.name].apiKey}`;
      }
      if (config[this.name].libraries && config[this.name].libraries.length) {
        scriptUrl = scriptUrl + `&libraries=${config[this.name].libraries.join(',')}`;
      }
    }
    return scriptUrl !== '' ? `<script>var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "${scriptUrl}";
    s.async=true
    s.defer=true
    s.onerror="console.error"
    $("body").append(s);</script>` : '';
  }

};
