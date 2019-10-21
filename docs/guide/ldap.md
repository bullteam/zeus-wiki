# Ldap 


为了兼容更多的软件，我们引进了LDAP协议，引入LDAP企业可以整合更多的企业级软件。
## 支持LDAP的软件列表

包括不仅限于：

| 类型        | 典型产品           |
|:----------:|:------------------:|
|电子邮件服务 |   大多数主流邮件服务软件，以及全球知名的云服务邮件如腾讯企业邮箱、阿里云邮箱、网易邮箱等等         |
|企业通讯录和日历 | 大多数兼容CardDav和 CalDav 协议的通讯录和日历协作产品 |
|研发综合管理 |  gitlab、github Enteprise、Phabricator、gitea、gogs等                  |
|知识管理 | confluence、MediaWiki 等大多数知识管理、知识库、知识协作产品                  |
|企业网盘/镜像 | OwnCloud、NextCloud、Harbor等    |               
|项目/集成/错误管理 | Jira、Trello、Bugzilla,Redmine,Jenkins |          
|数据看板 |  Grafana、Apache Superset                  |
|实时通讯 | Slack、Mattermost、IBM SameTime等                  |
|虚拟专线 |   OpenVPN                 |
|证书管理 |  OpenSSH                  |

## Ldap 配置

### docker 启动openldap

```bash

docker run --name ldap --env LDAP_ORGANISATION="bullteam" --env LDAP_DOMAIN="bullteam.com" --env LDAP_ADMIN_PASSWORD="123456" -p 389:389 -p 636:639 --detach osixia/openldap

```
| 值        | 说明          |
|:----------:|:------------------:|
| LDAP_ORGANISATION  | 组织|
| LDAP_DOMAIN  | 域|
| LDAP_ADMIN_PASSWORD | 密码 |

