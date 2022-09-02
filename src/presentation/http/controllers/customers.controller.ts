import { Controller, Get, Post, Body, Param, Put, HttpStatus } from '@nestjs/common'
import { ApiCreatedResponse, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

import { GetCustomer } from '@/app/useCases/customers/get-cutomer'
import { CreateCustomer } from '@/app/useCases/customers/create-customer'
import { UpdateCustomer } from '@/app/useCases/customers/update-customer'
import { CreateCustomerDto } from '@/dto/customers/request/create-customer.dto'
import { UpdateCustomerDto } from '@/dto/customers/request/update-customer.dto'
import { CustomerDto } from '@/dto/customers/response/customer.dto'

@Controller('customers')
export class CustomersController {

    constructor(
        private readonly getCustomerUseCase: GetCustomer,
        private readonly createCustomerUseCase: CreateCustomer,
        private readonly updateCustomerUseCase: UpdateCustomer
    ) { }

    // nessa camada que será definido os http response. ex: forbidden, created, not_found

    @Get(':id')
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
    @ApiCreatedResponse({
        description: 'O registro foi encontrado com sucesso',
        type: CustomerDto

    })
    async getCustomer(@Param('id') id: string) {
        return this.getCustomerUseCase.execute(id);
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
        return this.updateCustomerUseCase.execute(id, updateCustomerDto)
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
        return this.createCustomerUseCase.execute(createCustomerDto);
    }
}
