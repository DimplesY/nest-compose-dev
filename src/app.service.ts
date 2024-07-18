import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  @Inject(PrismaClient.name)
  private readonly db: PrismaClient;

  async getList() {
    return this.db.user.findMany();
  }
}
