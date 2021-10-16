import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class crearProductoDto{

    @IsString()
    @IsNotEmpty()
    productoNombre: string;

    @IsPositive()
    @IsNumber()
    productoPrecio: number;

    @IsNumber()
    @IsPositive()
    productoCantidad: number;

    @IsOptional()
    @IsArray()
    productoFoto?: Array<string>; // string[]
}