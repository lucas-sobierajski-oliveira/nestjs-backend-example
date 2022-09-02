export interface UseCaseInterface {
    execute(...params: any): Promise<any>
}

export const UseCaseInterface = 'UseCaseInterface'