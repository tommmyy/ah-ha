import { useCallback } from 'react';

import useEventListener from './useEventListener';

/**
 * Attaches the listener to the `document`.
 *
 * @example
 *
 * ```js
 * useGlobalListener('scroll', (event) => console.log('scroll'));
 * ```
 *
 * @param {Object} event Name of the event.
 * @param {function} handler Listener
 * @param {boolean} capture If `true` then capture else bubble.
 */
const useGlobalListener = (event, handler, capture) => {
	const documentTarget = useCallback(() => document, []);

	return useEventListener(documentTarget, event, handler, capture);
};

export default useGlobalListener;
