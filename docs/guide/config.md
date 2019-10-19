# 配置Zeus

环境配置是由Go第三方库viper来实现的。当程序启动时，viper会去读取yaml配置文件，以及将环境变量与配置文件中的变量对应起来。

以下是yaml配置文件。
## Yaml 配置
```yaml
mode: debug
mysql:
  dsn: >-
    ${MYSQL_USERNAME}:${MYSQL_PASSWORD}@tcp(${MYSQL_HOST}:${MYSQL_PORT})/${MYSQL_DB}?charset=utf8&parseTime=True&loc=Local
  pool:
    min: 5
    max: 20
redis:
  host: ${REDIS_HOST}:${REDIS_PORT}
  auth: ${REDIS_PASSWORD}
  pool:
    min: 3
    max: 20
jwt:
  key:
    private: keys/jwt_private_key.pem
    public: keys/jwt_public_key.pem
  expiresat: 3600*24*1
casbin:
  model:
    rule_0: config/casbin/rbac_model_0.conf
cors:
  enable: false
  allow_origins: "*"
  allow_headers: []
  allow_credentials: true
  max_age: 7200
lang:
  types: zh-CN|en-US
  names: 简体中文|English
domain: bullteam.local
dingtalk:
  CorpId:
  CorpSecret:
  AgentID:
  SSOSecret:
  SNSAppID: dingoa1uudyxl2dcjvqpij
  SNSSecret: o8YvDT5l2zb9dikuCbz0HXOiOaVwdyVResrDVyFaqojv0EwZp8ygAemFyoSBh_lz
email:
  username: xxx@qq.com
  password: xxxxxxxx
  host: smtp.qq.com
  port: 25
  from: xxxxxx@qq.com
ldap:
  addr: 127.0.0.1:389
  baseDn: dc=bullteam,dc=com
  userDn: cn=admin,dc=bullteam,dc=com
  bindDn: cn=admin,dc=bullteam,dc=com
  bindPass: zeus@admin#123456
  authFilter: (&(uid=%s))
  attributes:
    - "cn"
    - "displayName"
    - "mail"
  tls: false
  startTLS: false
```

## 环境变量列表

| 环境变量        | yaml变量路径           | 描述  | 默认 | 
|:----------:|:---------:|:-----:|  :---------:|
|MYSQL_USERNAME | mysql.dsn | mysql 用户名 | root |
|MYSQL_PASSWORD | mysql.dsn | mysql 密码 | root |
|MYSQL_HOST | mysql.dsn | mysql IP 连接地址 | root |
|MYSQL_PORT | mysql.dsn | mysql 端口号 | 3306 |
|MYSQL_DB | mysql.dsn | mysql 数据库名 | root |
|REDIS_HOST | redis.host | redis IP链接地址 | root |
|REDIS_PORT | redis.port | redis 端口号 |  3309|
|REDIS_PASSWORD | redis.password | redis 密码 |  |
