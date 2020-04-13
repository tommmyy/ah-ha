import { useEffect } from 'react';
import { isFunction } from 'ramda-extension';

import useEventCallback from '../useEventCallback';

/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param {Object} element The target to listen for events on
 * @param {String} event The DOM event name
 * @param {Function} handler An event handler
 * @param {Boolean} capture Whether or not to listen during the capture event phase
 */
const useEventListener = (eventTarget, event, listener, capture) => {
	const handler = useEventCallback(listener);

	useEffect(() => {
		const target = isFunction(eventTarget) ? eventTarget() : eventTarget;

		target.addEventListener(event, handler, capture);

		return () => target.removeEventListener(event, handler, capture);
	}, [eventTarget, capture, listener, event, handler]);
};

export default useEventListener;
