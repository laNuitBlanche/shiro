export class QueryCategoriesDto {
  name?: string;
  type?: number;
  enabled?: number;
  editable?: number;
}

export class CreateCategoryDto {
  name: string;
  type: number;
  enabled?: number;
  editable?: number;
}

export class UpdateCategoryDto {
  categoryId: string;
  name?: string;
  type?: number;
  enabled?: number;
  editable?: number;
}
