import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly document: number;
}