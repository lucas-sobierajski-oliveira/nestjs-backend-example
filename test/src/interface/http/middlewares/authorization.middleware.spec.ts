import { AuthorizationService } from "../../../../../src/app/services/authorization/authorization.service"
import { CheckTokenOperation } from "../../../../../src/app/useCases/authorization/check-token"
import { AuthorizationMiddleware } from "../../../../../src/presentation/http/middlewares/authorization.middleware"


describe('interface :: http :: middlewares :: AuthorizationMiddleware', () => {
    let checkTokenOperation: CheckTokenOperation
    let authorizationMiddleware: AuthorizationMiddleware

    let authorizationService: AuthorizationService

    beforeEach(async () => {
        checkTokenOperation = new CheckTokenOperation(authorizationService)
        authorizationMiddleware = new AuthorizationMiddleware(checkTokenOperation)
    })

    describe('checkToken', () => {
        it('shoud call use and validate token', async () => {
            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyTGYtamFReXZmQTNCN3dpVHZ3VkxhMjV1cHhiXzUtQXhZSDhmY3kySHhVIn0.eyJleHAiOjE2NjAzMzg2NzIsImlhdCI6MTY2MDMzODM3MiwianRpIjoiMDkwMjEwMmMtMTgzYy00NzdmLWExMWEtOWEyMWQwNzVjMWY5IiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zZWd1cm9zLnZpdHRhLmNvbS5ici9hdXRoL3JlYWxtcy9jYXJlZXJzIiwic3ViIjoiNzk0ZmFkNjktMzkxNy00OThmLThhNjUtMWVjZGU5NjlmMGRiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY3VzdG9tZXJzIiwiYWNyIjoiMSIsInJlc291cmNlX2FjY2VzcyI6eyJjdXN0b21lcnMiOnsicm9sZXMiOlsidXNlciJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJjbGllbnRJZCI6ImN1c3RvbWVycyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjEwLjUwLjEuMTU2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWN1c3RvbWVycyIsImNsaWVudEFkZHJlc3MiOiIxMC41MC4xLjE1NiJ9.hHXU6y6XG_xQxZC7654y77St3wIgvUxsHeeBstItvCh5-h4A5f3XbFn70Si3VOotwWqFT0TsnIlPi09GrEcwsoy9RjDUhK6K5bP5TsP_d2bLYQtNN096uCtZgzbCXS2XgS-J1w0BzALq6udSlvPAIQKf2nsogZjOicB3HAJa_BVi_v5bg4cr6PyVn9qIuHYtYcvXiCV2VXLjm_PfbGLMCAbj1CcimfLvtBD4k4pawLndKRjHWWNznXk3EARfmf1nqK_xqkpSALQ6kJQdkJPabpbLc-fR7JKtSwo0ihDAmPAZk2JzLimTRcOFJxnjHi7AcG5FaXYV9vIUgJrrxFYssQ'
            const req = { headers: { authorization: token } }

            jest.spyOn(checkTokenOperation, 'execute').mockResolvedValue(token)

            await authorizationMiddleware.use(req, '', () => { })
            expect(checkTokenOperation.execute).toBeCalledWith(token)
        })

        it('shoud call use whithout authorization header', async () => {
            const token = 'Bearer undefined'
            const req = { headers: {} }

            jest.spyOn(checkTokenOperation, 'execute').mockResolvedValue(token)

            await authorizationMiddleware.use(req, '', () => { })
            expect(checkTokenOperation.execute).toBeCalledWith(token)
        })
    })
})

