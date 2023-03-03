import { Dictionary } from '../types/common.types';

export interface ApiErrorType<T> {
  data: Dictionary<T>;
  status: number;
}

export interface ApiErrorResponseType<T> {
  response: T;
}

export type ErrorHandlerType = (err: Error) => void;

export interface ErrorDataType {
  data: Dictionary<string>;
  status: number;
}
