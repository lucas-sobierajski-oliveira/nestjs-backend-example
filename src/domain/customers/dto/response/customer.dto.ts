import { IsString, IsNumber, IsUUID, IsNotEmpty } from "class-validator";

export class CustomerDto {
    @IsUUID()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly document: number;
}