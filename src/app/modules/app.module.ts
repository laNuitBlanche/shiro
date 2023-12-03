import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '~/controllers/app.controller';
import { AppService } from '~/services/app.service';
import { TagModule } from './tag.module';
import { PrismaModule } from './prisma.module';
import { ResponseMiddleware } from '@/shared/middlewares/response-middleware';
import { AllExceptionsFilter } from '@/shared/filters/all-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [TagModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseMiddleware).forRoutes('*');
  }
}
