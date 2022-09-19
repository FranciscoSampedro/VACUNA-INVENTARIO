export const providerClientSession = {
    /**
       * @see https://next-auth.js.org/configuration/options
       */
    options: {
      /**
           * @param clientMaxAge - is the maximum age a session data can be on the client before it is considered stale.
           */
      clientMaxAge: process.env.NEXT_PUBLIC_SESSION_CLIENT_MAX_AGE,
      /**
           * @param keepAlive - option is how often the client should contact the server to avoid a session expiring.
           */
      keepAlive: 5 * process.env.NEXT_PUBLIC_SESSION_CLIENT_MAX_AGE
    }
  }
  