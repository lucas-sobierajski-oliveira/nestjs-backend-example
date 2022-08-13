import { StorageService } from '../../../../../src/app/services/storage/storage.service'
import { GetCustomerOperation } from '../../../../../src/app/operations/customers/get-cutomer.operations'
import { RedisClient } from '../../../../../src/infra/integration/storage/redis/redis.client'

describe('app :: operations :: customers :: getCustomerOperation', () => {
    let getCustomerOperation: GetCustomerOperation
    let storageService: StorageService
    let redisClient: RedisClient

    beforeEach(async () => {
        storageService = new StorageService(redisClient)
        getCustomerOperation = new GetCustomerOperation(storageService)
    })

    describe('execute', () => {
        it('shoud call execute and return cutomer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }


            jest.spyOn(storageService, 'get').mockResolvedValue(expected)

            expect(await getCustomerOperation.execute(id)).toEqual(expected)
            expect(storageService.get).toBeCalledWith(id)
        })
    })
})

