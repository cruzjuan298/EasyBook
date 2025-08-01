import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv"

dotenv.config({ path: "../../.env"});

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
     * @returns {string} 
     */

    generateAuthUrlService (state) {
        return this.#oauth2Client.generateAuthUrl({
            access_type : "offline",
            scope : ["profile", "email"],
            prompt : "consent",
            state: state
        })
    }

    handleSetCredentials(tokens){
        this.#oauth2Client.setCredentials(tokens);
    }

    async handleVerifyToken(tokenId) {
        const ticket = await this.#oauth2Client.verifyIdToken({
            idToken : tokenId,
            audience : AuthService.#CLIENT_ID
        })
        return ticket.getPayload()
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

    async revokeRefreshTokenAccess(refreshToken){
        await this.#oauth2Client.revokeToken(refreshToken);
    }
}