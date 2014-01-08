# haystack [![NPM version](https://badge.fury.io/js/haystack.png)](http://badge.fury.io/js/haystack)

> A find and match utility. Search for a string or an array of strings within a string or array or strings.

## Getting started

Install the module with: `npm install haystack --save`

```js
var haystack = require('haystack');
```

## Interface

### filter

Creates an array of unique values present in all provided arrays using strict equality for comparisons, i.e. `===`.

```js
haystack.filter([1, 2, 3], [5, 2, 1, 4]);
// => [1, 2]

haystack.filter('a', ['b', 'a']);
// => ['a']

haystack.filter(['a', 'b'], 'a');
// => ['a']

haystack.filter(['c', 'd'], ['d', 'e', 'c']);
// => ['c', 'd']

haystack.filter(['f', 'g'], 'f, h, i');
// => []

haystack.filter(['f', 'g'], 'f, h, i', ',');
// => ['f']
```

Optionally pass a string separator as a third parameter.

```js
haystack.filter(['f', 'b'], 'a,f,k,l', ',');
// => ['f']

haystack.filter(['find', 'exclude'], 'A find and match utility', ' ');
// => ['find']
```

### hasMatch

```js
haystack.filter([1, 2, 3], [5, 2, 1, 4]);
// => true

haystack.filter('a', ['b', 'a']);
// => true

haystack.filter(['c', 'd'], ['d', 'e', 'c']);
// => true

haystack.filter(['f', 'g'], 'f, h, i');
// => false

haystack.filter(['f', 'g'], 'f, h, i', ',');
// => true
```

## Contributing
{%= _.contrib("contributing.md") %}

## Related projects

+ [helpers/resolve-dep](http://github.com/jonschlinkert/resolve-dep)
+ [helpers/matchkeys](http://github.com/helpers/matchkeys)
+ [assemble/assemble](https://assemble.io)
+ [assemble/assemble-less](http://gruntjs.com/assemble/assemble-less)
+ [assemble/handlebars-helpers](http://gruntjs.com/assemble/handlebars-helpers)

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](http://github/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
{%= copyright %}
{%= license %}

***

{%= _.include("footer.md") %}