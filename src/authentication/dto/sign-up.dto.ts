import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public surname: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public password: string;
}
