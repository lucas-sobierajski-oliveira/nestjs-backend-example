import { Module } from '@nestjs/common'
import { RedisStorageService } from '@/external/storage/redis.storage.service'
import { KeycloakAuthorizationService } from '@/external/authorization/keycloak.authorization.service'
import { AuthorizationServiceInterface } from '@/app/useCases/authorization/_ports/authorization.service.interface'
import { StorageServiceInterface } from '@/app/useCases/customers/_ports/storage.service.interface'

@Module({
    exports: [
        { useClass: RedisStorageService, provide: AuthorizationServiceInterface },
        { useClass: KeycloakAuthorizationService, provide: StorageServiceInterface }
    ],
    providers: [
        { useClass: RedisStorageService, provide: AuthorizationServiceInterface },
        { useClass: KeycloakAuthorizationService, provide: StorageServiceInterface }
    ]
})
export class ExternalModule { }