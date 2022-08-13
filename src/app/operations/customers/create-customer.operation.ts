import { Injectable } from '@nestjs/common'
import { StorageService } from '../../services/storage/storage.service'
import { CreateCustomerDto } from '../../../domain/customers/dto/request/create-customer.dto'
import { CustomerDto } from 'src/domain/customers/dto/response/customer.dto'

@Injectable()
export class CreateCustomerOperation {
    constructor(private readonly storageService: StorageService) { }

    async execute(createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
        return this.storageService.create(createCustomerDto)
    }
}