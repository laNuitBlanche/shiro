import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import {
  CreateCategoryDto,
  QueryCategoriesDto,
  UpdateCategoryDto,
} from '../dto/category.dto';
import { EIsDel } from '@/constants/business.constant';

@Controller('category')
export class CategoryController {
  constructor(readonly categoryService: CategoryService) {}

  @Get('/list')
  async queryCategories(@Query() query: QueryCategoriesDto) {
    return await this.categoryService.categories({
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
          {
            editable: {
              equals: query.editable,
            },
          },
        ],
      },
    });
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryService.queryExistCategory({
      name: createCategoryDto.name,
      isDel: EIsDel.False,
    });
    if (category) {
      throw new Error('分类名称重复啦，请换一个~');
    }

    return await this.categoryService.createCategory({
      ...createCategoryDto,
      // TODO
      createdBy: 0,
    });
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory({
      where: {
        categoryId: id,
      },
      data: {
        ...updateCategoryDto,
        // TODO
        modifiedBy: 0,
      },
    });
  }

  @Delete(':id')
  async deleteCategory(@Param('id') categoryId: string) {
    return await this.categoryService.deleteCategory({
      where: {
        categoryId,
      },
      data: {
        // TODO
        deletedBy: 0,
        deletedTime: new Date(),
      },
    });
  }
}
