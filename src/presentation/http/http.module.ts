import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CustomersController } from '@/presentation/http/controllers/customers.controller'
import { AuthorizationMiddleware } from '@/presentation/http/middlewares/authorization.middleware'
import { OperationsModule } from '@/app/useCases/operations.module'

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