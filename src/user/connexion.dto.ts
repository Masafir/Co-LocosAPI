import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class connexionDto {
  @IsString()
  @IsNotEmpty()
    password: String;
  @IsString()
  @IsNotEmpty()
    mail: String;
}