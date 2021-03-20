import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  size: string;

  @IsNotEmpty()
  quantity: number;
}
