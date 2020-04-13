import { useRef } from 'react';
import { isNil } from 'ramda';

let counter = 0;

const getCounter = () => String(counter++);

/**
 * Generates a uniques string once per life of the component.
 *
 * @return {string} A unique string
 */
const useUniqueString = () => {
	const uniqueString = useRef(null);

	if (isNil(uniqueString.current)) {
		uniqueString.current = getCounter();
	}

	return uniqueString.current;
};

export default useUniqueString;
