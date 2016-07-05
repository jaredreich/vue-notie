# vue-notie

A Vue.js wrapper for [notie](https://github.com/jaredreich/notie)

## Installation

npm:
``` bash
npm install --save vue-notie
```

Vue:
```javascript
var Vue = require('vue')
var VueNotie = require('vue-notie')
Vue.use(VueNotie)
```

SASS:
```scss
@import 'path/to/notie.scss'
```

HTML (Browserify):
```html
<head>
  ...
  <link rel="stylesheet" href="/node_modules/notie/dist/notie.css">
</head>
<body>
  ...
  <!-- Bottom of body -->
  <script src="/path/to/vue.js"</script>
  <script src="/node_modules/vue-notie/src/vue-notie.js'"></script>
</body>
```

## Usage
notie is now available through ```this.$notie```

```javascript
this.$notie.alert(1, 'It worked!', 3);
```

## Credit
Thanks to [alfhen](https://github.com/alfhen) for originally creating this wrapper
