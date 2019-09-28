/**
 * Check if intersection observer is not supported and polyfill.
 * @returns {Promise<void>}
 */
export default async () => {
	if ( 'undefined' === typeof window.IntersectionObserver ) {
		await import('intersection-observer');
	}
}
