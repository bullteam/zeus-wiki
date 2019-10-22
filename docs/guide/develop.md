# 开发指南
## 开发流程

### 开发Zeus
若您想对Zeus进行二次开发，可以将代码克隆在您本地。
```bash
$ git clone github.com/bullteam/zeus-admin.git
```

该项目需要go 1.12.x 的版本支持，所以确保您本地的golang版本是1.12以上。

因为众所周知的一些原因，咱们国内可能无法访问一些资源，所以你还需要配置一个环境变量：
```bash
$ export GOPROXY=https://goproxy.cn
```

#### 启动
```bash
$ make run
```

### 前端
前端主要是基于[Vue-element-admin](https://panjiachen.gitee.io/vue-element-admin/)  进行开发。如果想了解请看官网。

```bash
$ cd pkg/webui
$ yarn install // 安装依赖
$ yarn run dev // 启动前端
$ yarn run build // build 前端
```

### Docker
本地直接Docker启动，请参考以下命令

$ docker pull bullteam/zeus:latest
$ docker run -d --name=zeus -p 8082:8082 -v /var/lib/zeus:/data bullteam/zeus:latest
启动成功后浏览器输入 localhost:8082 就可以开始使用Zeus了。

### kubernetes
建议将与Zeus相关的服务独立到一个专有的 Namespace下，您可以执行以下命令创建该空间
```bash
$ kubectl create namespace zeus
```

### docker-compose
配置文件调整好后执行以下命令直接启动：

$ cd install/docker-compose/
$ docker-compose up

## 代码规范
### 目录结构
#### 代码规范
格式化代码
Golang 代码使用 goimports 和 gofmt 进行代码格式化

#### 命名规范
文件名命名规范
用小写，尽量见名思义，看见文件名就可以知道这个文件下的大概内容，对于源代码里的文件，文件名要很好的代表了一个模块实现的功能。

#### 包名
保持 package 的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。命名尽量不使用分隔符。

#### 模块包规范
新增加的模块必须在pkg目录下

#### 变量
局部变量：驼峰式，小写字母开头
全局变量：变量名采用驼峰标准

#### 常量
常量全部以驼峰式大写字母开头的方式命名：

#### 错误处理命名


命名参考：



## 发布流程

## PR递交说明

Zeus PR 使用 [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator) 根据 Github Issues 和 PR 自动生成 Changelog。 因此 PR 提交需要遵循一定的规范。

PR 分为两种，Bug 和 Feature，PR title 用一句话概括当前提交解决的问题。

Bug: Bug 修复类型的 PR 以 Fix 开头，例如 Fix modal size change bug

Feature: 简要说明当前 PR 实现了什么功能。