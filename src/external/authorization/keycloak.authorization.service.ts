import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import axios from 'axios'

import { AuthorizationServiceInterface } from '@/app/useCases/authorization/_ports/authorization.service.interface'

@Injectable()
export class KeycloakAuthorizationService implements AuthorizationServiceInterface {
    _httpClient

    constructor() {
        this._httpClient = axios.create({ baseURL: 'https://accounts.seguros.vitta.com.br/auth', timeout: 40000 })
    }

    async checkToken(token: string) {
        try {
            const response = await this._httpClient
                .post('/realms/careers/protocol/openid-connect/userinfo',
                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token,
                        },
                    })

            return response
        } catch (error) {
            if (error.response.status == HttpStatus.UNAUTHORIZED) {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
            } else {
                throw new HttpException('Bad Gateway', HttpStatus.BAD_GATEWAY)
            }
        }
    }
}