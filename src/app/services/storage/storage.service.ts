import { Injectable } from '@nestjs/common'
import { RedisClient } from '../../../infra/integration/storage/redis/redis.client'
import { UpdateCustomerDto } from '../../../domain/customers/dto/request/update-customer.dto'
import { CreateCustomerDto } from '../../../domain/customers/dto/request/create-customer.dto'
import { CustomerDto } from 'src/domain/customers/dto/response/customer.dto'

@Injectable()
export class StorageService {
    constructor(private readonly storageClient: RedisClient) { }

    async get(id: string): Promise<CustomerDto> {
        return this.storageClient.get(id)
    }

    async create(createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
        return this.storageClient.create(createCustomerDto)
    }

    async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerDto> {
        return this.storageClient.update(id, updateCustomerDto)
    }

}