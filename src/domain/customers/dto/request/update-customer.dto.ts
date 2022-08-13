import { IsString, IsNumber, IsNotEmpty, IsUUID } from "class-validator";

export class UpdateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly document: number;
}