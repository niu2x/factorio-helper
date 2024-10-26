#!/usr/bin/env node

import {BlueprintCodec} from "../blueprint/codec"

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
  .command('decode <blueprint>')
  .description('把蓝图字符串解码成Json')
  .action(async (blueprint) => {
    let codec = new BlueprintCodec();
    let bp = codec.decode(blueprint)
    bp = JSON.stringify(bp, null, 2)
    console.log(bp)
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
