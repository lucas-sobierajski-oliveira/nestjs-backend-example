import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module'
import { CreateCustomerOperation } from './customers/create-customer.operation'
import { GetCustomerOperation } from './customers/get-cutomer.operations'
import { UpdateCustomerOperation } from './customers/update-customer.operation'
import { CheckTokenOperation } from './authorization/check-token.operation'

@Module({
  imports: [
    ServicesModule
  ],
  providers: [
    CreateCustomerOperation,
    GetCustomerOperation,
    UpdateCustomerOperation,
    CheckTokenOperation
  ],
  exports: [
    CreateCustomerOperation,
    GetCustomerOperation,
    UpdateCustomerOperation,
    CheckTokenOperation
  ]
})
export class OperationsModule { }
