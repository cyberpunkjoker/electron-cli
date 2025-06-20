#### electron + react + webpack cli
- 使用webpack 处理 ts-node 并热更新与 nodeDist 目录，copy 全部 python 代码（主要python 脚本位置）
- 事件注册统一管理 utils/eventRegistration.ts & utils/preloadEvents.ts 
- 公共脚本或枚举 可在 shared 目录下开发

#### quick start
npm run dev: 开发环境使用（执行ts-node 转义，前端代码serve，electron 启动）

#### 目录结构
- src: 前端代码
- shared: 公共脚本或枚举
- electron: 客户端及扩展脚本
- nodeDist: 打包后的 node 脚本
- webpack: webpack 配置文件

#### 前端部分
- 使用 react + typescript 开发
- 使用 webpack 打包
- 使用tailwindcss 作为css框架

#### 问题记录
1. 使用 pnpm 
- 会导致找不到 electron 文件，原因应该是electron 二进制文件在 pnpm 管理下有问题。