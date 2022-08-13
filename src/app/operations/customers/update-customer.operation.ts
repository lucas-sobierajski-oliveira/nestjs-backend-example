import { Injectable } from '@nestjs/common'
import { StorageService } from '../../services/storage/storage.service'
import { UpdateCustomerDto } from '../../../domain/customers/dto/request/update-customer.dto'
import { CustomerDto } from 'src/domain/customers/dto/response/customer.dto'

@Injectable()
export class UpdateCustomerOperation {
    constructor(private readonly storageService: StorageService) { }

    async execute(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerDto> {
        return this.storageService.update(id, updateCustomerDto)
    }
}