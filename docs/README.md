---
home: true
title: Zeus
heroImage: /bull.png
actionText: 快速上手 →
actionLink: /guide/
description: 宙斯--后台权限管理系统
features:
- title: 多租户权限管理中心
  details:  基于casbin作为核心存储和权限引擎，支持多租户多项目统一管理菜单和权限
- title: 颠覆传统的后台系统架构
  details: 以beego框架为基础，使用jwt做认证，实现跨语言平台协作，完全前后端分离
- title: 完全免费开源
  details: 以公牛开源组织以非营利性为目的对外开源，以MIT许可协议开源。
footer: MIT Licensed | Copyright © 2019-present 公牛开源联盟
---

### 快速部署

``` bash
# 生成目录
mkdir -p ~/Work;
cd ~/Work;
mkdir -p data project log runtime src/{app,script,web};


# 下载程序
cd ~/Work/src/web/

git clone git@github.com:bullteam/zeus-ui.git admin.bullteam.cn;
git clone git@github.com:bullteam/zeus.git api.admin.bullteam.cn;

# 部署
cd ~/Work/project/
git clone git@github.com:bullteam/zeus-deploy.git zeus;
cd ./zeus;

./run.sh uninstall all;
./run.sh install all;
```
``` bash
# 修改 hosts
127.0.0.1 admin.bullteam.cn;
127.0.0.1 api-admin.bullteam.cn;
```

::: warning 注意
请确保你的环境已经安装docker & docker composer
:::
