import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Article, Prisma } from '@prisma/client';
import { EIsDel } from '@/constants/business.constant';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async article(
    articleWhereUniqueInput: Prisma.ArticleWhereUniqueInput,
  ): Promise<Article | null> {
    return await this.prisma.article.findUnique({
      where: articleWhereUniqueInput,
    });
  }

  async articles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ArticleWhereUniqueInput;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput;
  }): Promise<Article[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.article.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createArticle(params: Prisma.ArticleCreateInput): Promise<Article> {
    return await this.prisma.article.create({
      data: params,
    });
  }

  async updateArticle(params: {
    where: Prisma.ArticleWhereUniqueInput;
    data: Prisma.ArticleUpdateInput;
  }): Promise<Article> {
    const { where, data } = params;
    return await this.prisma.article.update({
      data,
      where,
    });
  }

  async deleteArticle(params: {
    where: Prisma.ArticleWhereUniqueInput;
    data: Prisma.ArticleUpdateInput;
  }): Promise<Article> {
    const { where, data } = params;
    return this.prisma.article.update({
      data: {
        ...data,
        isDel: EIsDel.True,
      },
      where,
    });
  }
}
