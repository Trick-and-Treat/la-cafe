import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  time: Date;

  @IsNotEmpty()
  phone: string;

  @MaxLength(500)
  message: string;
}
