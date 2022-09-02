import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import Redis from 'ioredis'
import { v4 as uuidv4 } from 'uuid';

import { CustomerDto } from '@/dto/customers/response/customer.dto'
import { CreateCustomerDto } from '@/dto/customers/request/create-customer.dto'
import { UpdateCustomerDto } from '@/dto/customers/request/update-customer.dto'
import { StorageServiceInterface } from '@/app/useCases/customers/_ports/storage.service.interface';

@Injectable()
export class RedisStorageService implements StorageServiceInterface {
    _redis: Redis

    constructor() {
        this._redis = new Redis({
            host: process.env.REDIS_HOST ?? 'localhost',
            port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379
        })
    }

    async get(id: string): Promise<CustomerDto> {
        try {
            const customerStringfy = await this._redis.get(`customer:${id}`)

            if (!customerStringfy) {
                throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)
            }

            const customer = JSON.parse(customerStringfy)

            return { ...customer, id }
        } catch (error) {
            throw new HttpException('Bad Gateway', HttpStatus.BAD_GATEWAY)
        }

    }

    async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerDto> {
        try {
            const key = `customer:${id}`
            const customer = await this._redis.get(key)

            if (!customer) {
                throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)
            }

            const updateCustomer = { name: updateCustomerDto.name, document: updateCustomerDto.document }
            const buffer = JSON.stringify(updateCustomer)
            await this._redis.set(key, buffer)

            return { ...updateCustomer, id }
        } catch (error) {
            throw new HttpException('Bad Gateway', HttpStatus.BAD_GATEWAY)
        }

    }

    async create(createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
        try {
            const id = uuidv4()
            const key = `customer:${id}`
            const customer = { name: createCustomerDto.name, document: createCustomerDto.document }
            const buffer = JSON.stringify(customer)
            await this._redis.set(key, buffer)

            return { ...customer, id }
        } catch (error) {
            throw new HttpException('Bad Gateway', HttpStatus.BAD_GATEWAY)
        }
    }

}
