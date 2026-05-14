import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  create(createRoomDto: any) {
  return this.prisma.room.create({
    data: createRoomDto,
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
      data: updateRoomDto,
    });
  }

  remove(id: number) {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}