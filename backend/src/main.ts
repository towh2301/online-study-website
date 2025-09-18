import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // Add await
}

bootstrap().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
