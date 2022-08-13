import { Injectable } from '@nestjs/common'
import { CustomerDto } from 'src/domain/customers/dto/response/customer.dto'
import { StorageService } from '../../services/storage/storage.service'

@Injectable()
export class GetCustomerOperation {
    constructor(private readonly storageService: StorageService) { }

    async execute(id: string): Promise<CustomerDto> {
        return this.storageService.get(id)
    }
}