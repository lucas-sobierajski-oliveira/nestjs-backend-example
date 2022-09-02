export interface AuthorizationServiceInterface {
    checkToken(token: string): Promise<any>;
}

export const AuthorizationServiceInterface = 'AuthorizationServiceInterface'