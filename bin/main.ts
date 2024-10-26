#!/usr/bin/env node

import {
  Command
} from 'commander';

// import dotenv from 'dotenv';
const program = new Command();

program
  .name('abt')
  .description('animal build tools')
  .version('1.0.0');

program
  .command('set-signing <os_platform> <signing_name>')
  .description('更改证书')
  .action(async (osPlatform, signingName) => {
    await setSigning(getRepo(), osPlatform, signingName);
  });

// program
//   .command('static-assets <os_platform> <output>')
//   .description('[TODO] 静态资源')
//   .action(async (osPlatform, output) => {
//     await staticAssets(getRepo(), osPlatform, output);
//   });

// program
//   .command('hap-info <hap>')
//   .option('-v, --version', '提取版本号')
//   .option('--icon', '提取icon')
//   .option('-o, --out <output>', '输出路径')
//   .option('--app', '是鸿蒙的app包')
//   .description('提取hap文件的某些信息')
//   .action(async (hap, options) => {
//     await getHapInfo(hap, options);
//   });

// program
//   .command('lua-encrypt <file> <output>')
//   .description('加密lua')
//   .action(async (file, output) => {
//     await lua.encrypt(file, output);
//   });

// 解析命令行参数
// dotenv.config();
program.parse(process.argv);
