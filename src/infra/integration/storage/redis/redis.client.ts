import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import Redis from 'ioredis'
import { v4 as uuidv4 } from 'uuid';

import { CustomerDto } from 'src/domain/customers/dto/response/customer.dto'
import { CreateCustomerDto } from '../../../../domain/customers/dto/request/create-customer.dto'
import { UpdateCustomerDto } from '../../../../domain/customers/dto/request/update-customer.dto'

@Injectable()
export class RedisClient {
    _redis: Redis

    constructor() {
        this._redis = new Redis({
            host: 'cache',
            port: 6379
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
            throw error
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
            throw error
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
            throw error
        }
    }

}
