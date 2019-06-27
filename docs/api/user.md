# 用户模块

## 用户添加

`接口描述` : `用户注册接口,返回用户注册的后的状态`

`请求路径` :  `/users`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `body`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:| :---------:| :------:|
| username   | 展示      | String | 用户名 | true |
| password   | password |   String | 密码 | true |
| email   | Email     |    String |  邮箱 | true |
| mobile   | mobile     |    String |  手机号 | true |
| sex   | sex     |    int |  性别 | true |
| realname   | 真实姓名     |    String |  性别 | true |
| status   | 1     |    String |  状态 | true |
| faceicon   | http://url.com/1.png     |    String |  头像 | true |
| dept_id   | 1     |    String |  部门ID | true |
| roles   | 1,2     |    String |  角色id,逗号分隔 | true |

示例:
```json
{
    "username": "demo",
    "password": "11111",
    "email": "demo@demo.com",
    "mobile":"18611111111",
    "sex":1,
    "realname":"cici",
    "status":1,
    "faceicon":"http://url.com",
    "dept_id":"1",
    "roles":"1,2"
}
```
`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {

    }
}
```

## 用户登陆

`接口描述` : `用户登陆接口,返回用户的基本信息和登陆后的 token `

`请求路径` :  `/users/login`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
```

`请求参数` : 参数类型 `body`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:| :--------: |
| username   | test      | String | 用户名 | true |
| password   | password |   String | 密码 | true |
| captchaid   | captchaid |   String | 验证码id | true |
| captchaval   | captchaid |   String | 验证码value | true |

示例:
```json
{
    "username": "test",
    "password": "123434",
    "captchaid":"k1m6esbbWM1C3QdbE9bT",
    "captchaval":"254501"
}
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMiIsInVuYW1lIjoiYWRtaW4iLCJleHAiOjE1NTY3OTExMDF9.djKAY6XGbslRNyTQ-xY8pFl7Q5Jh174H6okD0bZCpihlzz5sslMY-9fqduInQi318O-doz35ScCY7oqpqhm1NyXD4MHdja1lpwn9urY9l3a0APpM6hG05NtcIe02fwYmjQVhKylcQlrzuzZ61r-w_dW_flVTY6N0amVib6JDHos",
        "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJUb2tlbiI6ImF1dGgyNGNjYmNhYWM4NDIxYWU3ZjU1MGJlMDMyMjk4MzJmNnNhZmUiLCJleHAiOjE1NTY5NjM5MDF9.r2kmgQ2j3PyaZFxw2ifi_Mrtbabom3LBsX9BirGfC-a98y2A3cFvhDkScIdnlM_mCZDAfwkQlbptontf7tj4xXHlbxPj1UwJbNQJROgYGsglq7AX7n6XqqFjGkurjU6kCp2AoyKO2S3aYg2aOo9m0UzXv-seVqPhNewUNb7GJUA",
        "userid": 2,
        "username": "test"
    }
}
```

## 用户列表

`接口描述` : `请求用户列表, 用到登陆接口返回的 token 进行认证 `

`请求路径` :  `/users`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | String | 指定第几页 |  true |
| per_page   | 30      | String | 每页的记录数 |  true |


示例：
```js
/users?page=2&per_page=30
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        "result": [
            {
                "id": 1,
                "username": "test",
                "mobile": "1862011114",
                "sex": 1,
                "realname": "西西",
                "Department": {
                    "id": 1,
                    "name": "技术部",
                    "order_num": 1,
                    "parent_id": 0
                },
                "faceicon": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                "email": "lily@hotmail.com",
                "title": "developer",
                "status": 1,
                "create_time": "2018-12-22T08:07:59+08:00",
                "Roles": [
                    {
                        "id": 1,
                        "name": "超级管理员",
                        "domain": {
                            "id": 1,
                            "name": "",
                            "callbackurl": "",
                            "remark": "",
                            "code": "",
                            "created_time": "0001-01-01T00:00:00Z",
                            "updated_time": "0001-01-01T00:00:00Z"
                        },
                        "role_name": "超级管理员",
                        "remark": "超级管理员",
                        "users": null,
                        "menu_ids": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27",
                        "menu_ids_ele": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27"
                    },
                    {
                        "id": 3,
                        "name": "系统设置",
                        "domain": {
                            "id": 1,
                            "name": "",
                            "callbackurl": "",
                            "remark": "",
                            "code": "",
                            "created_time": "0001-01-01T00:00:00Z",
                            "updated_time": "0001-01-01T00:00:00Z"
                        },
                        "role_name": "系统设置",
                        "remark": "系统设置",
                        "users": null,
                        "menu_ids": "17,18,19,20,21,22,23,24,25,26,27",
                        "menu_ids_ele": "17,18,19,20,21,22,23,24,25,26,27"
                    }
                ]
            }
          ]
        }
    }
}
```

## 查询用户

`接口描述` : `根据用户id查询用户信息 `

`请求路径` :  `/users/<ID>`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `query`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| id   | 1      | Int | 用户id |  true |

示例：
```js
/user/123
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "role": [
            {
                "id": "1",
                "name": "超级管理员"
            },
            {
                "id": "3",
                "name": "系统设置"
            }
        ],
        "userinfo": [
            {
                "department_id": "1",
                "dept_name": "技术部",
                "email": "lily@hotmail.com",
                "faceicon": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                "mobile": "1862011114",
                "realname": "西西",
                "sex": "1",
                "status": "1",
                "username": "test"
            }
        ]
    },
    "msg": "success"
}
```
## 删除用户

`接口描述` : `删除用户`

`请求路径` :  `/users/<ID>`

`请求方法` :  `DELETE`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

```
## 刷新令牌

`接口描述` : `刷新令牌`

`请求路径` :  `/users/refresh-token`

`请求方法` :  `POST`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| username| 	coso| 	String| 	用户名| 	true| 
| password| 	123456| 	String| 	密码| 	true| 
| captchaid| 	k1m6esbbWM1C3QdbE9bT| 	String| 	验证码id| 	false| 
| captchaval| 	254501| 	String| 	验证码| 	false| 


`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMiIsInVuYW1lIjoiYWRtaW4iLCJleHAiOjE1NTY3OTExMDF9.djKAY6XGbslRNyTQ-xY8pFl7Q5Jh174H6okD0bZCpihlzz5sslMY-9fqduInQi318O-doz35ScCY7oqpqhm1NyXD4MHdja1lpwn9urY9l3a0APpM6hG05NtcIe02fwYmjQVhKylcQlrzuzZ61r-w_dW_flVTY6N0amVib6JDHos",
        "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJUb2tlbiI6ImF1dGgyNGNjYmNhYWM4NDIxYWU3ZjU1MGJlMDMyMjk4MzJmNnNhZmUiLCJleHAiOjE1NTY5NjM5MDF9.r2kmgQ2j3PyaZFxw2ifi_Mrtbabom3LBsX9BirGfC-a98y2A3cFvhDkScIdnlM_mCZDAfwkQlbptontf7tj4xXHlbxPj1UwJbNQJROgYGsglq7AX7n6XqqFjGkurjU6kCp2AoyKO2S3aYg2aOo9m0UzXv-seVqPhNewUNb7GJUA",
        "userid": 2,
        "username": "test"
    }
}
```
## 用户添加

`接口描述` : `用户添加`

`请求路径` :  `/users`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| username |	展示	| String | 用户名 |	true|
| password |	1ERWR |	String |	密码|	true|
| email |	Wuongci |	String |	邮箱|	true|
| mobile | mobile	| String |	手机号|	true|
| sex |	0,1	|int	| 性别|	true|
| realname | 真实姓名 |	String |	性别|	true|
| status |	1 |	String |	状态 |	true|
| faceicon |	http://url.com/1.png |	String |头像|	true|
| dept_id |	1	| String	 | 部门ID |	true|
| roles |	1,2	| String |	角色id,逗号分隔 |	true|


示例：
```js
{
    "username": "demo",
    "password": "11111",
    "email": "demo@demo.com",
    "mobile":"18611111111",
    "sex":1,
    "realname":"cici",
    "status":1,
    "faceicon":"http://url.com",
    "dept_id":"1",
    "roles":"1,2"
}
```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 编辑用户信息

`接口描述` : `编辑用户信息`

`请求路径` :  `/users/<ID>`

`请求方法` :  `PUT`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| username |	展示	| String | 用户名 |	true|
| password |	1ERWR |	String |	密码|	true|
| email |	Wuongci |	String |	邮箱|	true|
| mobile | mobile	| String |	手机号|	true|
| sex |	0,1	|int	| 性别|	true|
| realname | 真实姓名 |	String |	性别|	true|
| status |	1 |	String |	状态 |	true|
| faceicon |	http://url.com/1.png |	String |头像|	true|
| dept_id |	1	| String	 | 部门ID |	true|
| roles |	1,2	| String |	角色id,逗号分隔 |	true|

示例：
```js
{
    "username": "demo",
    "password": "11111",
    "email": "demo@demo.com",
    "mobile":"18611111111",
    "sex":1,
    "realname":"cici",
    "status":1,
    "faceicon":"http://url.com",
    "dept_id":"1",
    "roles":"1,2"
}

```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 更改用户状态

`接口描述` : `更改用户状态`

`请求路径` :  `/users/status/<ID>`

`请求方法` :  `PATCH`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `body`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|status|	2	|String|	状态 :1 正常 2 锁定|	true|


`响应数据` : 
```json
//正确
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

//错误返回
{
    "code": 10012,
    "langkey": "err.ErrChkJwt",
    "msg": "invalid token",
    "moreinfo": ""
}
```
## 用户更改自己的密码

`接口描述` : `用户更改自己的密码`

`请求路径` :  `/users/password`

`请求方法` :  `PATCH`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| new_password   | 234234      | String | 新密码	 |  true |
| re_password   | 234234     | String | 重复一次	 |  true |

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 管理员重置用户的密码

`接口描述` : `管理员重置用户的密码`

`请求路径` :  `/users/password/<ID>`

`请求方法` :  `PATCH`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| new_password   | 234234      | String | 新密码	 |  true |
| re_password   | 234234     | String | 重复一次	 |  true |


示例：
```js

```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 用户关联的项目域

`接口描述` : `用户关联的项目域`

`请求路径` :  `/users/domain`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |



`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 获取验证码

`接口描述` : `获取验证码`

`请求路径` :  `/captcha/request`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |


`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "captcha": {
            "Id": "AWkMGQbMiCa7ozirRIXm"
        }
    },
    "msg": "success"
}
```
## 用户转到新部门

`接口描述` : `用户转到新部门`

`请求路径` :  `/users/move-department`

`请求方法` :  `PATCH`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |



示例：
```js

```

`响应数据` : 
```json
//正确
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

//错误返回
{
    "code": 10012,
    "langkey": "err.ErrChkJwt",
    "msg": "invalid token",
    "moreinfo": ""
}
    }
}
```
## 获取用户权限列表

`接口描述` : `获取用户权限列表`

`请求路径` :  `/users/perms`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`响应数据` : 
```json
//正确
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

//错误返回
{
    "code": 10012,
    "langkey": "err.ErrChkJwt",
    "msg": "invalid token",
    "moreinfo": ""
}
```
## 第三方登陆（钉钉）

`接口描述` : `第三方登陆（钉钉）`

`请求路径` :  `/users/login-dingtalk`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| code   | b896359e68043c25a0f96ffdafecb5b5      | String | code授权码	 | true |

`响应数据` : 
```json
//正确
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

//错误返回
{
    "code": 10004,
    "langkey": "err.ErrNoUser",
    "msg": "用户信息不存在",
    "moreinfo": "errcode: 40078\nerrmsg: 不存在的临时授权码 // "
}
```