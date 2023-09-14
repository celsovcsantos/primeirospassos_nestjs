import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
