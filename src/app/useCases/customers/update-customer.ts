import { Injectable } from '@nestjs/common'
import { UpdateCustomerDto } from '@/dto/customers/request/update-customer.dto'
import { CustomerDto } from '@/dto/customers/response/customer.dto'
import { RedisStorageService } from '@/external/storage/redis.storage.service'
import { UseCaseInterface } from '@/app/useCases/_ports/use.case.interface'

@Injectable()
export class UpdateCustomer implements UseCaseInterface {
    constructor(private readonly redisStorageService: RedisStorageService) { }

    async execute(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerDto> {
        return this.redisStorageService.update(id, updateCustomerDto)
    }
}