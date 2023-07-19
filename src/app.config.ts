/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import doraMergeConfig from '../../src/export/doraMergeConfig';
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
//@ts-ignore
import aliMPConfig from './aliMPConfig.config';
//@ts-ignore
import H5Config from './h5Config.config';
//@ts-ignore
import wechatConfig from './wechatMPConfig.config';
//@ts-ignore
import baiduConfig from './baiduMPConfig.config';
/* eslint-disable import/no-commonjs */
const configConst = require('./config.const.ts');

const { appNameConfig : {
  wechatAppName = '',
  alipayAppName = '',
  h5AppName = '',
  baiduAppName = '',
} = {} } = configConst;

console.log(process.env.APPNAME);


let config;
switch (process.env.APPNAME) {
case alipayAppName:      
  config = aliMPConfig;
  break;
case baiduAppName:
  config = baiduConfig;
  break;
case wechatAppName:
  config = wechatConfig;
  break;
case h5AppName:
  config = H5Config;
  break; 
default:
  throw new Error(`app ${process.env.APPNAME}不存在`);
}

console.log(doraMergeConfig);
const appConfig = doraMergeConfig(config);

console.log(appConfig);

export default appConfig;
