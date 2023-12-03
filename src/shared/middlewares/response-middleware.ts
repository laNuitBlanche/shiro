import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

interface CustomeResponse extends Response {
  jsonData: (data: any, code: number, msg: string) => void;
}

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  use(req: Request, res: CustomeResponse, next: NextFunction) {
    // 在这里修改响应数据的结构
    res.jsonData = (data: any, code: number, msg: string) => {
      res.json({
        code,
        msg,
        data,
      });
    };

    next();
  }
}
