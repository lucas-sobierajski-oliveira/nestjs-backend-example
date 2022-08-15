import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common'
import { CheckTokenOperation } from '../../../app/operations/authorization/check-token.operation'

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
    constructor(private readonly checkTokenOperation: CheckTokenOperation) { }

    async use(req: any, res: any, next: (error?: any) => void) {
        const token = req.headers.authorization ?? 'Bearer undefined'
        await this.checkTokenOperation.execute(token)
        next()
    }
}