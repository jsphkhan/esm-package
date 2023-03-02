import notFoundErrorFactory from '../../../factories/error/notFoundErrorFactory';
import { ApiErrorResponseType, ApiErrorType } from '../../../types/error.types';

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
