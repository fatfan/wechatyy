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
npm run build [env] 打包不同环境, env可取值：dev, test, production(默认值)

# 运行测试：
复制dist到webroot并重命名为wechatyy
启动服务器：npm run test
然后访问：http://localhost/wechatyy/#/

# wechatyy
h5 react webapp demo

# todo
md ui研究
redux状态管理
代码分割
静态资源走cdn

# change log
css文件分割
模块动态加载
图片加载及发布
loading动画

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