百度地图POI爬取工具
===================================
###用途
在百度地图中选定一定的区域，爬取该区域内的POI（兴趣点），存到本地文件中。

### 目录说明
- txt 保存按关键字爬取到的文件，将工程下载下来后新建该文件夹
- app.js 服务器脚本
- PoiType.txt 所用到的关键字
- crawlWuhanPOI.html 爬取武汉市POI的页面
- crawlQingShanQuPOI.html 爬取武汉市青山区POI的页面
- package.json 依赖库

### 环境
- nodejs

### 依赖的库
 socket.io

### 配置说明
下载到本地之后，在命令行中npm install ，安装nodejs的依赖库。
然后运行app.js文件： node app.js
在浏览器中输入：127.0.0.1:3000
则程序开始运行，结果保存在txt目录下