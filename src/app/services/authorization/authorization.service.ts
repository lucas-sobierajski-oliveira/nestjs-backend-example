import { Injectable } from '@nestjs/common'
import { KeycloakClient } from '../../../infra/integration/rest/keycloack/keycloak.client'

@Injectable()
export class AuthorizationService {
    constructor(private readonly authorizationClient: KeycloakClient) { }

    async checkToken(token: string) {
        return this.authorizationClient.checkToken(token)
    }
}