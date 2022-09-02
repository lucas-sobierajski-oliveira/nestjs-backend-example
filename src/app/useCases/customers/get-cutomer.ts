import { Injectable } from '@nestjs/common'
import { CustomerDto } from '@/dto/customers/response/customer.dto'
import { UseCaseInterface } from '@/app/useCases/_ports/use.case.interface'
import { RedisStorageService } from '@/external/storage/redis.storage.service'

@Injectable()
export class GetCustomer implements UseCaseInterface {
    constructor(private readonly redisStorageService: RedisStorageService) { }

    async execute(id: string): Promise<CustomerDto> {
        return this.redisStorageService.get(id)
    }
}