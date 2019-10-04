/**
 * Check if intersection observer is not supported and polyfill.
 * @returns {Promise<void>}
 */
const maybeIntersectionObserver = async () => {
	if ( 'undefined' === typeof window.IntersectionObserver ) {
		await import('intersection-observer');
	}
}

maybeIntersectionObserver().then(() => console.log( 'Intersection Observer Polyfill successfully loaded.' ) )
