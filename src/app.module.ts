import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoomsModule } from './rooms/rooms.module'; // Giữ lại 1 dòng này thôi nhé

@Module({
  imports: [PrismaModule, RoomsModule], // Chỗ này cũng chỉ để 1 chữ RoomsModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}