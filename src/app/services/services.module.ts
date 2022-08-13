import { Module } from '@nestjs/common';
import { InfraModule } from '../../infra/infra.module'
import { StorageService } from './storage/storage.service'
import { AuthorizationService } from './authorization/authorization.service'

@Module({
  imports: [
    InfraModule
  ],
  providers: [
    StorageService,
    AuthorizationService
  ],
  exports: [
    StorageService,
    AuthorizationService
  ]
})
export class ServicesModule { }
