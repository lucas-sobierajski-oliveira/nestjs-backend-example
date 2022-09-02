import { Injectable } from '@nestjs/common'
import { KeycloakAuthorizationService } from '@/external/authorization/keycloak.authorization.service'
import { UseCaseInterface } from '@/app/useCases/_ports/use.case.interface'

@Injectable()
export class CheckToken implements UseCaseInterface {
    constructor(private readonly keycloakAuthorizationService: KeycloakAuthorizationService) { }

    async execute(token: string) {
        return this.keycloakAuthorizationService.checkToken(token)
    }
}