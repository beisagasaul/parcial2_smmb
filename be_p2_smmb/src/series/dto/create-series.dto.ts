import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateSeriesDto {
    @ApiProperty()
    @IsNotEmpty({message:'El campo titulo no deve ser vacio'})
    @IsString({message:'El campo titulo debe ser de tipo cadena'})
    @MaxLength(250,{message:"El campo titulo debe ser menor a 250 caracteres"})
    readonly titulo:string;
  
    @ApiProperty()
     @IsNotEmpty({message:'El campo sinopsis no deve ser vacio'})
     @IsString({message:'El campo sinopsis debe ser de tipo cadena'})
     @MaxLength(5000,{message:"El campo sinopsis debe ser menor a 5000 caracteres"})
    readonly sinopsis:string;
      
    @ApiProperty()
     @IsNotEmpty({message:'El campo director no deve ser vacio'})
     @IsString({message:'El campo director debe ser de tipo cadena'})
     @MaxLength(100,{message:"El campo director debe ser menor a 100 caracteres"})
    readonly director:string;
  
    @ApiProperty()
    @IsNotEmpty({message:'El campo director no deve ser vacio'})
    @IsNumber({}, { message: 'La duración debe ser un número' })
    readonly temporada:number;

    @ApiProperty()
    @IsNotEmpty({message:'El campo director no deve ser vacio'})
    @IsString({message:'El campo pais de origen  debe ser de tipo cadena'})
     @MaxLength(100,{message:"El campo pais de origen  debe ser menor a 100 caracteres"})
    readonly paisOrigin:string;
  
  
    
    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fecha de estreno no debe ser vacío' })
    readonly fechaEstreno:string;
}
