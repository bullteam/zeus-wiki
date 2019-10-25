# 安装Zeus

## 从Docker安装

阅读本章之前我们已经假设您对docker已经有了解并能够正常使用docker。如果还是不熟悉，请参考[9102 年了，学点 Docker 知识](https://juejin.im/post/5c2c69cee51d450d9707236e) [设置dockerhub 加速代理](https://juejin.im/post/5cd2cf01f265da0374189441)

我们在 Docker Hub 的 Bullteam 组织中提供了自动更新的 Docker 镜像，它会保持最新的稳定版。你也可以用其它 Docker 服务来更新。首先你需要pull镜像：
```bash
docker pull bullteam/zeus-admin:latest
```
如果要将数据持久化，你需要创建一个目录来作为数据存储的地方：
```bash
sudo mkdir -p /var/lib/zeus
```
然后就可以运行 docker 容器了，这很简单。 当然你需要定义端口数数据目录：
```bash
docker run -d --name=zeus -p 8082:8082 -v /var/lib/zeus:/data bullteam/zeus-admin:latest
```
然后 容器已经运行成功，在浏览器中访问 http://hostname:8082 就可以看到界面了。
注意：目前端口改为非8082时，需要修改配置文件.


## 从二进制安装

> 暂时未提供二进制安装方式

所有下载均包括 SQLite, MySQL 的支持。 基于二进制的安装非常简单，只要从 [下载页面](https://gitee.com/bullteam/zeus-admin/attach_files) 下载文件，拷贝下载URL，执行以下命令即可（以Linux为例）：

```bash
chmod +x zeus
```
测试
在执行了以上步骤之后，你将会获得 zeus 的二进制文件，在你复制到部署的机器之前可以先测试一下。在命令行执行完后，你可以 Ctrl + C 关掉程序。

```bash
./zeus server -c ./config/in-local.yaml -p 8082
```
`-c` 后面指定的是配置文件地址，`-p` 指定的是端口号
## 从源代码安装

### 安装依赖
#### 基本依赖
Go 语言：版本 >= 1.12
安装 Go 语言
如果您的系统已经安装要求版本的 Go ,可以跳过，如果没有请参考[cento7,0 下安装golang 环境和版本升级 1.0](https://my.oschina.net/wutongci/blog/282076),其他环境请自行百度、Google

### 下载并安装依赖
```bash
$ go get -u github.com/bullteam/zeus-admin
```
### 构建主程序
```bash
$ cd ./zeus-admin
$ go build -o zeus
$ cd ./zeus-admin/pkg/webui
$ npm run build:prod  // 如果启动的是前后端一起启动的，请使用 npm run build:work 命令编译
```
构建 develop 分支版本
如果您想要安装 develop（或其它）分支版本，则可以通过以下命令：


> 请确保没有使用 “https://github.com/bullteam/zeus-admin.git”
```bash
$ git clone --depth=1 -b develop https://github.com/bullteam/zeus-amdin
$ cd ./zeus-admin
$ go build -o zeus
$ cd ./zeus-admin/pkg/webui
$ npm run build:prod
```
测试安装
您可以通过以下方式检查 zeus 是否可以正常工作：
```bash
$ cd ./zeus-admin
$ ./zeus server
```
如果您没有发现任何错误信息，则可以使用 Ctrl-C 来终止运行。

## Windows 安装

> 注意：由于引进了sqlite 数据库，windows 上编译会报GCC缺失的错误，需要安装 [tdm-gcc](http://tdm-gcc.tdragon.net/download) 选择对应的版本即可。

Windows golang 安装请参考 [go windows 安装](https://www.jianshu.com/p/602c9ed4847d)

```bash
cd D:\XXX\zeus-admin
go build -o zeus.exe
cd pkg/webui
npm install
npm run build:work
zeus.exe server
```
