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

// 解析命令行参数
// dotenv.config();
program.parse(process.argv);
