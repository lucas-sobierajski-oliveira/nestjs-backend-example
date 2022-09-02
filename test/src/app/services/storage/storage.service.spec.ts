import { RedisClient } from '../../../../../src/external/integration/storage/redis/redis.client'
import { StorageService } from '../../../../../src/app/services/storage/storage.service'
import { Redis } from 'ioredis'

describe('app :: services :: storage :: StorageService', () => {
    let storageClient: RedisClient
    let storageService: StorageService

    beforeEach(async () => {
        let _redis: Redis
        storageClient = { create: jest.fn(), get: jest.fn(), update: jest.fn(), _redis }
        storageService = new StorageService(storageClient)
    })

    describe('create', () => {
        it('shoud call create and return cutomer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }

            jest.spyOn(storageClient, 'create').mockResolvedValue(expected)

            expect(await storageService.create(dto)).toEqual(expected)
            expect(storageClient.create).toBeCalledWith(dto)
        })
    })

    describe('get', () => {
        it('shoud call get and return cutomer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }

            jest.spyOn(storageClient, 'get').mockResolvedValue(expected)

            expect(await storageService.get(id)).toEqual(expected)
            expect(storageClient.get).toBeCalledWith(id)
        })
    })

    describe('update', () => {
        it('shoud call update and return cutomer', async () => {
            const id = '9ac760ac-f1b2-4f29-a9e5-1ca8135a25fa'
            const dto = { name: 'lucas', document: 1 }
            const expected = { ...dto, id }

            jest.spyOn(storageClient, 'update').mockResolvedValue(expected)

            expect(await storageService.update(id, dto)).toEqual(expected)
            expect(storageClient.update).toBeCalledWith(id, dto)
        })
    })
})

