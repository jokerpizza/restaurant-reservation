
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ReservationService } from './reservations.service';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  async getAllReservations(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  @Post()
  async createReservation(@Body() reservationData: Partial<Reservation>): Promise<Reservation> {
    return this.reservationService.create(reservationData);
  }

  @Patch(':id/confirm')
  async confirmReservation(@Param('id') id: number) {
    return this.reservationService.confirm(id);
  }
}
