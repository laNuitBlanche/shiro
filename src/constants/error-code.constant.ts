export enum EErrorCode {
  ServerError = 10500000, // 服务内部错误
  InvalidParams = 10400000, // 参数错误
  NotFound = 10404000, // 资源未找到
  TooManyRequest = 10509000, // 请求过于频繁
  UnauthorizedAuthNotExist = 10401001, // 认证失败
  UnauthorizedTokenError = 10401002, // token错误
  UnauthorizedTokenTimeout = 10401003, // token过期
  UnauthorizedTokenGenerate = 10401004, // token生成失败
  UnauthorizedTokenNotFound = 10401005, // token不存在
}

export const ErrorCodeMap = new Map([
  [
    EErrorCode.ServerError,
    [
      '糟糕！服务器掉线了，请稍后再试！',
      '啊哦！服务器被调皮的小猫咪关机了，请等一会再尝试连接！',
      '抱歉！服务器正在进行自我升级，请稍后再试！',
    ],
  ],
  [
    EErrorCode.InvalidParams,
    [
      '不好意思，您的入参有点不对劲。请仔细检查一下再试试！',
      '糟糕！您输入的参数让我猜不透。请重新输入一下吧！',
      '哎呀！您传入的参数迷路了，请重新指引一下！',
    ],
  ],
  [
    EErrorCode.NotFound,
    [
      '哎呀！这个东西好像不见了，可能被调皮的小精灵藏起来了！',
      '糟糕！你要找的东西像一颗隐藏在迷雾中的宝石，让我找不到，请再给我一次机会！',
      'Oops！这是个充满谜题的冒险，但您似乎找不到正确的线索，请再试一次！',
    ],
  ],
  [
    EErrorCode.TooManyRequest,
    [
      '嘿！您的请求太频繁啦，请给服务器喘口气的时间好吗？',
      '哇哦！您的请求像一阵狂风，把服务器吹得晕头转向，请稍等片刻再试试！',
      '哎呀！您的请求就像一个捧着鲜花的追求者，让服务器美滋滋的，请稍事休息，不要让它太过激动！',
    ],
  ],
  [
    EErrorCode.UnauthorizedAuthNotExist,
    [
      '糟糕！认证失败了，您是不是忘记了密码或用户名？',
      '抱歉！您的身份验证信息好像被调皮的小猴子偷走了，请重新尝试登录！',
      '哎呀！看起来您的身份验证信息像一把损坏的钥匙，无法打开大门，请重新获取一个新的钥匙！',
    ],
  ],
  [
    EErrorCode.UnauthorizedTokenError,
    ['啊哦！您的魔法令牌好像有点问题，请重新获取一个新的令牌！'],
  ],
  [
    EErrorCode.UnauthorizedTokenTimeout,
    ['噢不！您的魔法令牌已经过期了，需要更新一下！'],
  ],
  [
    EErrorCode.UnauthorizedTokenGenerate,
    ['天啊！魔法令牌生成失败了，这是怎么回事呢？'],
  ],
  [
    EErrorCode.UnauthorizedTokenNotFound,
    ['糟糕！找不到您的魔法令牌，它可能跑到哪里去了呢？'],
  ],
]);
