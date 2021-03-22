import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepo: Repository<Reservation>,
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepo.save(createReservationDto);
  }

  findAll() {
    return this.reservationRepo.find();
  }

  async findOne(id: number) {
    const reservation = await this.reservationRepo.findOne({ where: { id } });

    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }

    return reservation;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    await this.findOne(id);
    await this.reservationRepo.update(id, updateReservationDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.reservationRepo.delete(id);
    return null;
  }
}
