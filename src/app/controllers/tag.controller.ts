import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TagService } from '../services/tag.service';
import { CreateTagDto, UpdateTagDto, QueryTagsDto } from '../dto/tag.dto';
import { EIsDel } from '@/constants/business.constant';
import { Tag as TagModel } from '@prisma/client';

@Controller('tag')
export class TagController {
  constructor(readonly tagService: TagService) {}

  @Get('/list')
  async queryTags(@Query() query: QueryTagsDto) {
    return await this.tagService.tags({
      where: {
        OR: [
          {
            name: {
              contains: query.name,
            },
          },
          {
            type: {
              equals: query.type,
            },
          },
          {
            enabled: {
              equals: query.enabled,
            },
          },
        ],
      },
    });
  }

  @Post()
  async createTag(@Body() createTagDto: CreateTagDto) {
    // 校验标签名称是否重复
    const tag = await this.tagService.queryExistTag({
      name: createTagDto.name,
      isDel: EIsDel.False,
    });
    if (tag) {
      throw new Error('标签名称重复啦，请换一个～');
    }

    return await this.tagService.createTag({
      ...createTagDto,
      // TODO
      createdBy: 0,
    });
  }

  @Put(':id')
  async updateTag(
    @Param('id') tagId: string,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<TagModel> {
    return await this.tagService.updateTag({
      where: { tagId: tagId },
      data: {
        ...updateTagDto,
        // TODO
        modifiedBy: 0,
      },
    });
  }

  @Delete(':id')
  async deleteTag(@Param('id') tagId: string): Promise<TagModel> {
    return await this.tagService.deleteTag({
      where: { tagId },
      data: {
        // TODO
        deletedBy: 0,
        deletedTime: new Date(),
      },
    });
  }
}
