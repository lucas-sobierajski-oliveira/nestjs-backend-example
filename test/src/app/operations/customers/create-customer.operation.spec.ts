import { StorageService } from '../../../../../src/app/services/storage/storage.service'
import { CreateCustomerOperation } from '../../../../../src/app/useCases/customers/create-customer'
import { RedisClient } from '../../../../../src/external/integration/storage/redis/redis.client'

describe('app :: operations :: customers :: CreateCustomerOperation', () => {
    let createCustomerOperation: CreateCustomerOperation
    let storageService: StorageService
    let redisClient: RedisClient

    beforeEach(async () => {
        storageService = new StorageService(redisClient)
        createCustomerOperation = new CreateCustomerOperation(storageService)
    })

    describe('execute', () => {
        it('shoud call execute and return cutomer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }

            jest.spyOn(storageService, 'create').mockResolvedValue(expected)

            expect(await createCustomerOperation.execute(dto)).toEqual(expected)
            expect(storageService.create).toBeCalledWith(dto)
        })
    })
})

