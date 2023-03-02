/**
 * isClient
 * @description returns true if current runtime is on the browser
 */
const isClient: () => boolean = () => typeof window !== 'undefined';

export default isClient;
