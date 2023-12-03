import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request } from 'express';
import { BizException } from '../exceptions/biz.exception';
import { getIP } from '../utils/ip.util';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const url = request.originalUrl;
    const message =
      exception instanceof BizException
        ? exception.msg
        : exception instanceof HttpException
        ? exception.message
        : exception instanceof Error
        ? exception.message
        : '';

    const httpStatus =
      exception instanceof BizException
        ? exception.code
        : exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    if (httpStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
      // 未知错误
      Logger.error(exception, 'Unexpected');
    } else {
      const ip = getIP(request);
      this.logger.warn(
        `IP:${ip} 错误码：${httpStatus} 错误信息: ${
          message || '无'
        } Path: ${decodeURI(url)}`,
      );
    }

    const prevRequestTs = request.headers['x-request-ts'];
    if (prevRequestTs) {
      const requestTs = new Date().getTime();
      const diff = requestTs - Number(prevRequestTs);
      Logger.debug(
        `【响应异常】请求耗时：${diff}ms Method: ${request.method} URL: ${request.url}`,
      );
    }

    const responseBody = {
      code: httpStatus,
      msg: message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, 200);
  }
}
