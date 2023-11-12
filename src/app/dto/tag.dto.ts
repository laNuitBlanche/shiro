export class QueryTagsDto {
  name?: string;
  type?: number;
  enabled?: number;
}

export class CreateTagDto {
  name: string;
  type: number;
  enabled?: number;
}

export class UpdateTagDto {
  tagId: string;
  name?: string;
  type?: number;
  enabled?: number;
}
