Query
=====
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Base class for [OpenTSDB](http://opentsdb.net) metric and TSUID queries.


### Install

For use in Node.js,

``` bash
$ npm install opentsdb-query
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


### Queries

OpenTSDB permits two query [types](/docs/build/html/api_http/query/index.html): _metric_ and _tsuid_.

Metric queries are general queries which return an indeterministic number of timeseries. OpenTSDB implements metric queries by searching for timeseries matching the metric criteria, e.g., `metric name` and `tag`.

TSUID queries request a specific timeseries having a unique id. Every timeseries has an assigned [unique identifier](http://opentsdb.net/docs/build/html/user_guide/backends/hbase.html#uid-table-schema), which is based on `metric name` and any `tags`.

The distinctions between the two types are 1) metric queries require a metric name and tsuid queries require a string list of tsuids and 2) tsuid queries do not accept tags. Otherwise, both types have the same methods. The shared methods are implemented via a base query class: `Query`.

To create a new `Query` instance,

``` javascript
var Query = require( 'opentsdb-query' );

var query = new Query();
```

The instance is configurable and has the following methods...


#### query.aggregator( [aggregator] )

This method is a setter/getter. If no `aggregator` is provided, returns the query [aggregator](http://opentsdb.net/docs/build/html/api_http/aggregators.html) . The default aggregator is `avg`. To set a different `aggregator`,

``` javascript
query.aggregator( 'min' );
```

#### query.downsample( [downsample] )

This method is a setter/getter. If no `downsample` function is provided, returns the configured `downsample` function. By default, downsampling is turned off (i.e., set to `null`). To specify a `downsample` function,

``` javascript
query.downsample( '5s-avg' );
```


#### query.rate( [bool] )

This method is a setter/getter. If no boolean flag is provided, returns the flag indicating whether to return the difference between consecutive data values. By default, the flag is `false`. To turn on difference calculation,

``` javascript
query.rate( true );
```

Note that rate calculation requires a set of three options which are accessed using the `query.rateOptions()` method.


#### query.rateOptions( [object] )

This method is a setter/getter. If no configuration object is provided, returns the rate options: `counter`, `counterMax`, `resetValue`. `counter` must be a boolean; `counterMax` must be numeric or `null`; and `resetValue` must be numeric.

By default,

``` javascript
var rateOptions = {
	"counter": false,
	"counterMax": null,
	"resetValue": 0
};
```



## Notes

When used as setters, all setter/getter methods are chainable. For example,

``` javascript
var Query = require( 'opentsdb-query' ),
	query = new Query();

query
	.aggregator( 'sum' )
	.downsample( '5m-avg' )
	.rate( true )
	.rateOptions({
		"counter": false,
		"counterMax": null,
		"resetValue": 0
	})
	.toString();
```



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/opentsdb-query.svg
[npm-url]: https://npmjs.org/package/opentsdb-query

[travis-image]: http://img.shields.io/travis/opentsdb-js/query/master.svg
[travis-url]: https://travis-ci.org/opentsdb-js/query

[coveralls-image]: https://img.shields.io/coveralls/opentsdb-js/query/master.svg
[coveralls-url]: https://coveralls.io/r/opentsdb-js/query?branch=master

[dependencies-image]: http://img.shields.io/david/opentsdb-js/query.svg
[dependencies-url]: https://david-dm.org/opentsdb-js/query

[dev-dependencies-image]: http://img.shields.io/david/dev/opentsdb-js/query.svg
[dev-dependencies-url]: https://david-dm.org/dev/opentsdb-js/query

[github-issues-image]: http://img.shields.io/github/issues/opentsdb-js/query.svg
[github-issues-url]: https://github.com/opentsdb-js/query/issues
