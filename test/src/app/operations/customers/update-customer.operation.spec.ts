import { StorageService } from '../../../../../src/app/services/storage/storage.service'
import { UpdateCustomerOperation } from '../../../../../src/app/operations/customers/update-customer.operation'
import { RedisClient } from '../../../../../src/infra/integration/storage/redis/redis.client'

describe('app :: operations :: customers :: UpdateCustomerOperation', () => {
    let updateCustomerOperation: UpdateCustomerOperation
    let storageService: StorageService
    let redisClient: RedisClient

    beforeEach(async () => {
        storageService = new StorageService(redisClient)
        updateCustomerOperation = new UpdateCustomerOperation(storageService)
    })

    describe('execute', () => {
        it('shoud call execute and return cutomer id', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }

            jest.spyOn(storageService, 'update').mockResolvedValue(expected)

            expect(await updateCustomerOperation.execute(id, dto)).toEqual(expected)
            expect(storageService.update).toBeCalledWith(id, dto)
        })
    })
})

