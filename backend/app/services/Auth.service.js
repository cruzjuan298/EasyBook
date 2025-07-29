import { OAuth2Client } from "google-auth-library";

export default class AuthService {
    static #CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    static #CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
    static #REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
    
    #oauth2Client;

    /** 
    @constructor
    
    */
    constructor() {
        this.#oauth2Client = new OAuth2Client(
            AuthService.#CLIENT_ID,
            AuthService.#CLIENT_SECRET,
            AuthService.#REDIRECT_URI
        );
    }

    /**
     * 
     * @returns {string} the Url used to redirect the userto the google oauth2 screem
     */

    generateAuthUrlService () {
        return this.#oauth2Client.generateAuthUrl({
            access_type : "offline",
            scope : ["profile", "email"],
            prompt : "consent"
        })
    }

    handleSetCredentials(tokens){
        this.#oauth2Client.setCredentials(tokens);
    }

    async handleVerifyToken(tokenId) {
        return this.#oauth2Client.verifyIdToken({
            idToken : tokenId,
            audience : AuthService.#CLIENT_ID
        })
    }

    async getTokenOnlyAuthService(authCode) {
        const { tokens } = await this.#oauth2Client.getToken(authCode);
        return tokens;
    }

    async handleOAuthRedirect(authCode) {
        const {token} = await this.#oauth2Client.getToken(authCode);

        return {
            idToken : token.id_token,
            accessToken : token.access_token,
            refreshToken : token.refresh_token
        };
    }

    async getNewTokenId(refreshToken) {
        this.#oauth2Client.setCredentials({refresh_token : refreshToken});

        const token = await this.#oauth2Client.refreshAccessToken();
        return token.credentials.id_token;
    }

    async getUserData(idToken) {
        const data = await this.#oauth2Client.verifyIdToken(idToken);
        return data.getPayload();
    }
}