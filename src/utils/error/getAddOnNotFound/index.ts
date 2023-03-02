import notFoundErrorFactory from '../../../factories/error/notFoundErrorFactory/index.js';
import { ApiErrorResponseType, ApiErrorType } from '../../../types/error.types.js';

/**
 * Returns custom AddOn not found error
 * @returns {object}
 */
const getAddOnNotFound = (): ApiErrorResponseType<ApiErrorType<string>> => {
  return {
    response: notFoundErrorFactory('ADON404', 'Addon could not be loaded')
  };
};

export default getAddOnNotFound;
