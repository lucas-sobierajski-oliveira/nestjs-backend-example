import { Controller, Get, Post, Body, Param, Put, HttpStatus } from '@nestjs/common'
import { ApiCreatedResponse, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { GetCustomerOperation } from '../../../app/operations/customers/get-cutomer.operations'
import { CreateCustomerOperation } from '../../../app/operations/customers/create-customer.operation'
import { UpdateCustomerOperation } from '../../../app/operations/customers/update-customer.operation'
import { CreateCustomerDto } from '../../../domain/customers/dto/request/create-customer.dto'
import { UpdateCustomerDto } from '../../../domain/customers/dto/request/update-customer.dto'
import { CustomerDto } from '../../../domain/customers/dto/response/customer.dto'

@Controller('customers')
export class CustomersController {

    constructor(
        private readonly getCustomerOperation: GetCustomerOperation,
        private readonly createCustomerOperation: CreateCustomerOperation,
        private readonly updateCustomerOperation: UpdateCustomerOperation
    ) { }


    @Get(':id')
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
    @ApiCreatedResponse({
        description: 'O registro foi encontrado com sucesso',
        type: CustomerDto

    })
    async getCustomer(@Param('id') id: string) {
        return this.getCustomerOperation.execute(id);
    }

    @Put(':id')
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
    @ApiCreatedResponse({
        description: 'O registro foi editado com sucesso',
        type: CustomerDto,
    })
    @ApiBody({ type: UpdateCustomerDto })
    async updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.updateCustomerOperation.execute(id, updateCustomerDto)
    }

    @Post()
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
    @ApiCreatedResponse({
        description: 'O registro foi criado com sucesso',
        type: CustomerDto,
    })
    @ApiBody({ type: CreateCustomerDto })
    async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.createCustomerOperation.execute(createCustomerDto);
    }
}
