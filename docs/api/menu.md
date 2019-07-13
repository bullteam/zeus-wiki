# 菜单
## 菜单列表


`接口描述` : `菜单列表`

`请求路径` :  `/v1/menus`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | String | 指定第几页 |  true |
| per_page   | 30      | String | 每页的记录数 |  true |


示例：
```js
/menus?page=2&per_page=30
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "result": [
            {
                "icon": "peoples",
                "id": "1",
                "menu_type": "1",
                "name": "权限管理",
                "order_num": "1",
                "parent_id": "0",
                "perms": "",
                "url": "/permission"
            },
            {
                "icon": "peoples",
                "id": "2",
                "menu_type": "1",
                "name": "用户管理",
                "order_num": "1",
                "parent_id": "1",
                "perms": "",
                "url": "/permission/user"
            }
        ]
    },
    "msg": "success"
}
```
## 添加菜单


`接口描述` : `添加菜单`

`请求路径` :  `/v1/menus`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|parent_id | 1 | String | 父节点id | true|
|domain_id | 1 | String | 域名id | true|
|name | 角色管理 | String | 备注 | true|
|url | http://www.xxx.com | String | URL | true|
|perms | 1,2,4 | string | 角色 | true|
|menu_type | 1,2,4 | String | 菜单类型 | true|
|icon | sexxs | String | 数据权限ID | false|
|order_num | 1 | int | 排序 | false|


示例：
```js
parent_id:2
domain_id:1
name:查看
url:
perms:
menu_type:1
icon:sexxs
order_num:0

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
## 编辑菜单


`接口描述` : `编辑菜单`

`请求路径` :  `/v1/menus/<ID>`

`请求方法` :  `PUT`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|parent_id | 1 | String | 父节点id | true|
|domain_id | 1 | String | 域名id | true|
|name | 角色管理 | String | 备注 | true|
|url | http://www.xxx.com | String | URL | true|
|perms | 1,2,4 | string | 角色 | true|
|menu_type | 1,2,4 | String | 菜单类型 | true|
|icon | sexxs | String | 数据权限ID | false|
|order_num | 1 | int | 排序 | false|


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 删除菜单


`接口描述` : `删除菜单`


`请求路径` :  `/v1/menus/<ID>`

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
