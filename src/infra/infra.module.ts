import { Module } from '@nestjs/common'
import { RedisClient } from './integration/storage/redis/redis.client'
import { KeycloakClient } from './integration/rest/keycloack/keycloak.client'

@Module({
    exports: [
        RedisClient,
        KeycloakClient
    ],
    providers: [
        RedisClient,
        KeycloakClient
    ]
})
export class InfraModule { }