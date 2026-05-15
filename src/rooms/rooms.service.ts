import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  create(createRoomDto: any) {
    const data = this.normalizeRoomData(
      createRoomDto,
    ) as Prisma.RoomUncheckedCreateInput;
    data.name = String(createRoomDto.name || '');
    data.price = Number(createRoomDto.price || 0);

    return this.prisma.room.create({
      data,
    });
  }


  findAll() {
    return this.prisma.room.findMany({
      orderBy: { id: 'asc' } // Sắp xếp theo ID phòng
    });
  }

  update(id: number, updateRoomDto: any) {
    return this.prisma.room.update({
      where: { id },
      data: this.normalizeRoomData(updateRoomDto),
    });
  }

  remove(id: number) {
    return this.prisma.room.delete({
      where: { id },
    });
  }

  private normalizeRoomData(input: any): Prisma.RoomUncheckedUpdateInput {
    const data: Prisma.RoomUncheckedUpdateInput = {};

    if (input.name !== undefined) data.name = String(input.name);
    if (input.description !== undefined) data.description = input.description || null;
    if (input.status !== undefined) data.status = String(input.status);
    if (input.tenantName !== undefined) data.tenantName = input.tenantName || null;
    if (input.isPaid !== undefined) data.isPaid = Boolean(input.isPaid);

    if (input.price !== undefined) data.price = Number(input.price);
    if (input.prevElectricity !== undefined) data.prevElectricity = Number(input.prevElectricity);
    if (input.currElectricity !== undefined) data.currElectricity = Number(input.currElectricity);
    if (input.electricityPrice !== undefined) data.electricityPrice = Number(input.electricityPrice);
    if (input.serviceFee !== undefined) data.serviceFee = Number(input.serviceFee);
    if (input.occupants !== undefined) data.occupants = Number(input.occupants);

    return data;
  }
}
