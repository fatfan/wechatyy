# 新建项目
git clone https://github.com/fatfan/wechatyy.git

npm i    安装 NPM 依赖

注意：npm安装依赖失败的话请安装淘宝镜像$ npm install -g cnpm --registry=https://registry.npm.taobao.org，
然后使用cnpm i 安装依赖

复制sdcm到项目根目录

npm run dev  执行脚本

http://localhost/wechatyy/  打开浏览器查看效果

# 项目发布：
npm run build

# 运行测试：
npm run test
然后访问：http://localhost/wechatyy/dist/#/

# wechatyy
h5 react webapp demo

# todo
md ui研究
redux状态管理
开发过程接口调试方法
项目build

# change log
增加material ui, 开始使用md风格实现应用界面

完成Input、Button、Tab、Flex、Toast、Header、Page等组件

完成登录session存储

增加eslint, 统一风格

优化项目目录结构
页面多级路由

完成本地sdcm开发调试，根据数据更新视图
完成request类，获取服务端数据

支持react-css-modules, 样式与js分离

搭建环境，配置webpack, 支持hot replace, css module