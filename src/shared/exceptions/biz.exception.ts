import { EErrorCode, ErrorCodeMap } from '@/constants/error-code.constant';
import { HttpException } from '@nestjs/common';

export class BizException extends HttpException {
  public code: EErrorCode;
  public msg: string;
  constructor(errorCode: EErrorCode, details?: string) {
    const errorCodeInfo = ErrorCodeMap.get(errorCode) || [];
    const code = errorCode || EErrorCode.ServerError;
    const errorMsg = errorCodeInfo[1] || '';
    const msg = details ? `${errorMsg}, ${details}` : errorMsg;
    super(
      {
        code,
        msg,
      },
      code,
    );
    this.code = code;
    this.msg = msg;
  }
}
