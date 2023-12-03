import { Request } from 'express';

export function getIP(request: Request) {
  return request.headers['x-forwarded-for'] || request.socket.remoteAddress;
}
