import { useCallback, useRef } from 'react';

const useEventCallback = fn => {
	const ref = useRef(fn);

	return useCallback((...args) => ref.current && ref.current(...args), []);
};

export default useEventCallback;
