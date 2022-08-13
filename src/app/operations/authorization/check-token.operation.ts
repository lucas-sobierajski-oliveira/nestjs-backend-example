import { Injectable } from '@nestjs/common'
import { AuthorizationService } from '../../services/authorization/authorization.service'

@Injectable()
export class CheckTokenOperation {
    constructor(private readonly authorizationService: AuthorizationService) { }

    async execute(token: string) {
        return this.authorizationService.checkToken(token)
    }
}