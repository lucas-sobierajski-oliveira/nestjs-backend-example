import { CreateCustomerDto } from "@/dto/customers/request/create-customer.dto"
import { UpdateCustomerDto } from "@/dto/customers/request/update-customer.dto"
import { CustomerDto } from '@/dto/customers/response/customer.dto'

export interface StorageServiceInterface {
    create(createCustomerDto: CreateCustomerDto): Promise<CustomerDto>
    get(id: string): Promise<CustomerDto>
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerDto>
}

export const StorageServiceInterface = 'StorageServiceInterface'