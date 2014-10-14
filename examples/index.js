/**
*
*	DEMO
*
*
*	DESCRIPTION:
*		- Demonstrates using a base class for OpenTSDB queries.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // OpenTSDB Query class:
		Query = require( './../lib' );


	// SCRIPT //

	var query = new Query();

	// Configure the query:
	query
		.aggregator( 'avg' )
		.downsample( null )
		.rate( true )
		.rateOptions({
			'counter': false,
			'counterMax': null,
			'resetValue': 0
		});

	// Serialize the query:
	console.log( query.toString() );

	/**
	* Returns:
	*	'avg:rate{false,,0}'
	*/

})();