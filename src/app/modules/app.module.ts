import { Module } from '@nestjs/common';
import { AppController } from '~/controllers/app.controller';
import { AppService } from '~/services/app.service';
import { TagModule } from './tag.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [TagModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
