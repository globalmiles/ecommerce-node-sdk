/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const OAuthProviderErrorEnum = {

    /**
     * The request is missing a required parameter, includes an unsupported parameter value (other
     * than grant type), repeats a parameter, includes multiple credentials, utilizes more than one
     * mechanism for authenticating the client, or is otherwise malformed.
     */
    INVALID_REQUEST: 'invalid_request',

    /**
     * Client authentication failed (e.g., unknown client, no client authentication included, or
     * unsupported authentication method).
     */
    INVALID_CLIENT: 'invalid_client',

    /**
     * The provided authorization grant (e.g., authorization code, resource owner credentials) or
     * refresh token is invalid, expired, revoked, does not match the redirection URI used in the
     * authorization request, or was issued to another client.
     */
    INVALID_GRANT: 'invalid_grant',

    /**
     * The authenticated client is not authorized to use this authorization grant type.
     */
    UNAUTHORIZED_CLIENT: 'unauthorized_client',

    /**
     * The authorization grant type is not supported by the authorization server.
     */
    UNSUPPORTED_GRANT_TYPE: 'unsupported_grant_type',

    /**
     * The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the
     * resource owner.
     */
    INVALID_SCOPE: 'invalid_scope',

};

module.exports = OAuthProviderErrorEnum;
