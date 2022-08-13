import { CreateCustomerOperation } from "../../../../../src/app/operations/customers/create-customer.operation"
import { GetCustomerOperation } from "../../../../../src/app/operations/customers/get-cutomer.operations"
import { UpdateCustomerOperation } from "../../../../../src/app/operations/customers/update-customer.operation"
import { StorageService } from "../../../../../src/app/services/storage/storage.service"
import { CustomersController } from "../../../../../src/interface/http/controllers/customers.controller"


describe('interface :: http :: controllers :: CustomersController', () => {
    let customersController: CustomersController
    let createCustomerOperation: CreateCustomerOperation
    let getCustomerOperation: GetCustomerOperation
    let updateCustomerOperation: UpdateCustomerOperation

    let storageService: StorageService

    beforeEach(async () => {
        updateCustomerOperation = new UpdateCustomerOperation(storageService)
        createCustomerOperation = new CreateCustomerOperation(storageService)
        getCustomerOperation = new GetCustomerOperation(storageService)
        customersController = new CustomersController(getCustomerOperation, createCustomerOperation, updateCustomerOperation)

    })

    describe('getCustomer', () => {
        it('shoud call getCustomer and return customer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const expected = { id, name: 'Jurandir', document: 1 }

            jest.spyOn(getCustomerOperation, 'execute').mockResolvedValue(expected)

            expect(await customersController.getCustomer(id)).toEqual(expected)
            expect(getCustomerOperation.execute).toBeCalledWith(id)
        })
    })

    describe('createCustomer', () => {
        it('shoud call createCustomer and return customer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'Jurandir', document: 1 }
            const expected = { id, name: 'Jurandir', document: 1 }

            jest.spyOn(createCustomerOperation, 'execute').mockResolvedValue(expected)

            expect(await customersController.createCustomer(dto)).toEqual(expected)
            expect(createCustomerOperation.execute).toBeCalledWith(dto)
        })
    })

    describe('updateCustomer', () => {
        it('shoud call updateCustomer and return customer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'Jurandir', document: 1 }
            const expected = { id, name: 'Jurandir', document: 1 }

            jest.spyOn(updateCustomerOperation, 'execute').mockResolvedValue(expected)

            expect(await customersController.updateCustomer(id, dto)).toEqual(expected)
            expect(updateCustomerOperation.execute).toBeCalledWith(id, dto)
        })
    })
})

