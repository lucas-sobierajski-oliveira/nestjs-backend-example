import { Module } from '@nestjs/common';
import { CreateCustomer } from './customers/create-customer'
import { GetCustomer } from './customers/get-cutomer'
import { UpdateCustomer } from './customers/update-customer'
import { CheckToken } from './authorization/check-token'
import { ExternalModule } from '@/external/external.module';

@Module({
  imports: [
    ExternalModule
  ],
  providers: [
    CreateCustomer,
    GetCustomer,
    UpdateCustomer,
    CheckToken
  ],
  exports: [,
    CreateCustomer,
    GetCustomer,
    UpdateCustomer,
    CheckToken
  ]
})
export class OperationsModule { }
