/**
 * Handlebars helper that first sorts an object by it's
 * keys, then iterates like the native "each" helper.
 * @param data The key-value object
 * @param options Handlebars-provided options object
 * @return HTML output
 */
module.exports = function(data, options) {
	var reducer = function(result, key) {
		return result + options.fn(data[key]);
	};

	return Object.keys(data).sort().reduce(reducer, '');
};