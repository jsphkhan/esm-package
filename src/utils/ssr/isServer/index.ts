/**
 * isServer
 * @description returns true if current runtime is on the server
 */
const isServer: () => boolean = () => typeof window === 'undefined';

export default isServer;
