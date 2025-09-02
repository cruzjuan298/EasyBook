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
            scope : ["profile", "email", "https://www.googleapis.com/auth/calendar.events.readonly", "https://www.googleapis.com/auth/calendar.readonly"],
            prompt : "consent",
            state: state
        })
    }
    
    // for this to work, make sure the token is set as an object. Will get a missing 'x-toke' error if not.
    handleSetCredentials(tokens){
        this.#oauth2Client.setCredentials(tokens);
    }
    
    // the names of the fields have to exactly match those of which this function is upacking
    // an error will b thrown if thats not the case
    setCredentialsOptionalTokens(tokens = {}){
        const { accessToken, refreshToken } = tokens;

        const credentials = {}
            if (accessToken) {
                credentials.access_token = accessToken;
            }

            if (refreshToken) {
                credentials.refresh_token = refreshToken;
            }
            
        this.#oauth2Client.setCredentials(credentials)
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

    async getAccessToken(){
        return await this.#oauth2Client.getAccessToken();
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
