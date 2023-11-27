import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { QueryArticlesDto } from '../dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(readonly articleService: ArticleService) {}

  @Get('/list')
  async queryArticles(@Query() query: QueryArticlesDto) {
    const orderBy = query.orderBy ? { [query.orderBy]: query.sort } : {};
    // if(query.tags && query.tags.length > 0) {
    //   // TODO
    // }
    return await this.articleService.articles({
      where: {
        OR: [
          {
            title: {
              contains: query.title,
            },
          },
          {
            categoryId: {
              equals: query.categoryId,
            },
          },
          {
            isPublished: {
              equals: query.isPublished,
            },
          },
          {
            enabled: {
              equals: query.enabled,
            },
          },
        ],
      },
      orderBy,
      skip: (query.pageNo - 1) * query.pageSize,
      take: query.pageSize,
    });
  }
}
