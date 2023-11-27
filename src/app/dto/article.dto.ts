export class QueryArticlesDto {
  pageSize: number;
  pageNo: number;
  sort?: string;
  orderBy?: string;
  title?: string;
  categoryId?: string;
  tags?: string[];
  isPublished?: number;
  enabled?: number;
}

export class CreateArticleDto {
  title: string;
  desc?: string;
  summary?: string;
  coverImageUrl?: string;
  content: string;
  encryption?: number;
  password?: string;
  weight?: number;
  isTop?: number;
  isPublished?: number;
  enabled?: number;
  categoryId: string;
  tags?: string[];
}

export class UpdateArticleDto {
  articleId: string;
  title?: string;
  desc?: string;
  summary?: string;
  coverImageUrl?: string;
  content?: string;
  encryption?: number;
  password?: string;
  weight?: number;
  isTop?: number;
  isPublished?: number;
  enabled?: number;
  categoryId?: string;
  tags?: string[];
}
