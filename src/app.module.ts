import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { prisma } from './db';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: PrismaClient.name,
      useValue: prisma,
    },
  ],
})
export class AppModule {}
