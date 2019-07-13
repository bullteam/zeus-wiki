# 个人帐户
## 解除第三方绑定

`接口描述` : `解除第三方绑定`

`请求路径` :  `/v1/account/unbind`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| from   | 1      | String | 1 钉钉|  true |

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 安全设置


`接口描述` : `安全设置`

`请求路径` :  `/v1/account/security`

`请求方法` :  `PUT`

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
## 校验验证码


`接口描述` : `校验验证码`

`请求路径` :  `/v1/account/bindcode`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| google_2fa_token   | 906297    | string | google_2fa_token |  true |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 第三方绑定账号列表

`接口描述` : `第三方绑定账号列表`

`请求路径` :  `/v1/account/third`

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
## 验证邮箱地址

`接口描述` : `验证邮箱地址`

`请求路径` :  `/v1/account/verifymail`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| email   | wutonci@xxx.com      | String | 邮箱 |  true |


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
## 绑定第三方

`接口描述` : `绑定第三方`

`请求路径` :  `/v1/account/bind`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| code   | d5c94589a3153ae1ade93ae3f6d3d96e      | String | CODE |  true |
| from   | 1      | String | 1 钉钉 |  true |

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```

