import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller'
import { AuthorizationMiddleware } from './middlewares/authorization.middleware'
import { OperationsModule } from '../../app/operations/operations.module'

@Module({
    imports: [OperationsModule],
    controllers: [CustomersController]
})
export class HttpModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthorizationMiddleware)
            .forRoutes(CustomersController);
    }
}