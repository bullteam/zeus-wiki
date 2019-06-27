# 功能权限

## 登录用户权限列表


`接口描述` : `登录用户权限列表`

`请求路径` :  `/perms`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "data_perms": null,
        "info": {
            "id": "2",
            "username": "admin"
        },
        "result": null
    },
    "msg": "success"
}
```
## 检查权限


`接口描述` : `检查权限`

`请求路径` :  `/perms/check`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `body`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| domain   | mc-admin     | String | 应用 |  true |
| perm   | configuration/dialog/list      | String | 接口 |  true |


示例：
```js

```

`响应数据` : 
```json
//成功
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}

//失败
{
    "code": 10013,
    "langkey": "err.ErrPermission",
    "msg": "没有权限",
    "moreinfo": "fail // "
}
```
