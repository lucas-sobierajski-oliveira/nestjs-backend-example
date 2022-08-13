import { Controller, Get, Patch, Post, Body, Param, Put } from '@nestjs/common'
import { GetCustomerOperation } from '../../../app/operations/customers/get-cutomer.operations'
import { CreateCustomerOperation } from '../../../app/operations/customers/create-customer.operation'
import { UpdateCustomerOperation } from '../../../app/operations/customers/update-customer.operation'
import { CreateCustomerDto } from '../../../domain/customers/dto/request/create-customer.dto'
import { UpdateCustomerDto } from '../../../domain/customers/dto/request/update-customer.dto'

@Controller('customers')
export class CustomersController {

    constructor(
        private readonly getCustomerOperation: GetCustomerOperation,
        private readonly createCustomerOperation: CreateCustomerOperation,
        private readonly updateCustomerOperation: UpdateCustomerOperation
    ) { }


    @Get(':id')
    async getCustomer(@Param('id') id: string) {
        return this.getCustomerOperation.execute(id);
    }

    @Put(':id')
    async updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.updateCustomerOperation.execute(id, updateCustomerDto)
    }

    @Post()
    async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.createCustomerOperation.execute(createCustomerDto);
    }
}
