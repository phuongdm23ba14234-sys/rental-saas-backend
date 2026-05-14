import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Bật CORS để Frontend (3000) có thể gọi Backend (8080)
  app.enableCors();

  // 2. Lắng nghe ở cổng 8080 (Khớp với URL ở Frontend)
  await app.listen(8080);
  
  console.log(`Application is running on: http://localhost:8080`);
}
bootstrap();