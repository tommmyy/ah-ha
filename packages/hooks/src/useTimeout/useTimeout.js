import { useEffect, useRef } from 'react';

export const useTimeout = (fn, timeout) => {
	const fnRef = useRef(fn);
	useEffect(() => {
		fnRef.current = fn;
	}, [fn]);

	useEffect(() => {
		if (timeout != null) {
			const tick = () => {
				if (fnRef.current) {
					fnRef.current();
				}
			};
			const timeoutId = setTimeout(tick, timeout);

			return () => clearTimeout(timeoutId);
		}
	}, [timeout]);
};

export default useTimeout;
