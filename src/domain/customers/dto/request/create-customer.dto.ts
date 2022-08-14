import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly document: number;
}