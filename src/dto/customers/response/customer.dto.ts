import { IsString, IsNumber, IsUUID, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class CustomerDto {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly document: number;
}