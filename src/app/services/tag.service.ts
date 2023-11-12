import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Tag } from '@prisma/client';
import { EIsDel } from '@/constants/business.constant';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * @description 查询标签
   * @param tagWhereUniqueInput
   */
  async tag(
    tagWhereUniqueInput: Prisma.TagWhereUniqueInput,
  ): Promise<Tag | null> {
    return await this.prisma.tag.findUnique({
      where: tagWhereUniqueInput,
    });
  }

  async queryExistTag(
    tagWhereInput: Prisma.TagWhereInput,
  ): Promise<Tag | null> {
    return await this.prisma.tag.findFirst({
      where: tagWhereInput,
    });
  }

  async tags(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TagWhereUniqueInput;
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByWithRelationInput;
  }): Promise<Tag[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.tag.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTag(params: Prisma.TagCreateInput): Promise<Tag> {
    return await this.prisma.tag.create({
      data: params,
    });
  }

  async updateTag(params: {
    where: Prisma.TagWhereUniqueInput;
    data: Prisma.TagUpdateInput;
  }): Promise<Tag> {
    const { where, data } = params;
    return await this.prisma.tag.update({
      data,
      where,
    });
  }

  async deleteTag(params: {
    where: Prisma.TagWhereUniqueInput;
    data: Prisma.TagUpdateInput;
  }): Promise<Tag> {
    // 校验标签是否存在
    const tag = await this.queryExistTag({
      isDel: EIsDel.False,
      tagId: params.where.tagId,
    });
    if (!tag) {
      throw new Error('标签可能被其他人删除了哦');
    }
    const { where, data } = params;
    return this.prisma.tag.update({
      data: {
        ...data,
        isDel: EIsDel.True,
      },
      where,
    });
  }
}
