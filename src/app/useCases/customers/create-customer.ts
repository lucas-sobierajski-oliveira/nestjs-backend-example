import { Injectable } from '@nestjs/common'
import { CreateCustomerDto } from '@/dto/customers/request/create-customer.dto'
import { CustomerDto } from '@/dto/customers/response/customer.dto'
import { RedisStorageService } from '@/external/storage/redis.storage.service'
import { UseCaseInterface } from '@/app/useCases/_ports/use.case.interface'

@Injectable()
export class CreateCustomer implements UseCaseInterface {
    constructor(private readonly redisStorageService: RedisStorageService) { }

    async execute(createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
        return this.redisStorageService.create(createCustomerDto)
    }
}