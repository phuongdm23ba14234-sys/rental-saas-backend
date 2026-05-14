import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Thêm @Global() để dùng PrismaService ở mọi nơi mà không cần import lại Module
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Phải có dòng này
})
export class PrismaModule {}