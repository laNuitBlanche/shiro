import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Category, Prisma } from '@prisma/client';
import { EIsDel } from '@/constants/business.constant';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async category(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    return await this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  async categories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async queryExistCategory(
    categoryWhereInput: Prisma.CategoryWhereInput,
  ): Promise<Category | null> {
    return await this.prisma.category.findFirst({
      where: categoryWhereInput,
    });
  }

  async createCategory(params: Prisma.CategoryCreateInput): Promise<Category> {
    return await this.prisma.category.create({
      data: params,
    });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    return await this.prisma.category.update({
      data,
      where,
    });
  }

  async deleteCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;

    return this.prisma.category.update({
      data: {
        ...data,
        isDel: EIsDel.True,
      },
      where,
    });
  }
}
