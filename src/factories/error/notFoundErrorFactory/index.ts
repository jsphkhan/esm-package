import { ApiErrorType } from '../../../types/error.types';

/**
 * Returns a simulated Error response format for API's
 * @param {string} code
 * @param {string} msg
 * @returns {object}
 */
const notFoundErrorFactory = (
  code: string,
  msg: string
): ApiErrorType<string> => {
  return {
    data: {
      code,
      desc: msg
    },
    status: 404
  };
};

export default notFoundErrorFactory;
