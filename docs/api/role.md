# 角色


## 角色列表

`接口描述` : `角色列表`

`请求路径` :  `/roles`

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
/roles?page=2&per_page=30
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "result": [
            {
                "data_perm_ids": "",
                "domain": {
                    "callbackurl": "",
                    "code": "root",
                    "created_time": "2018-12-28T16:17:51Z",
                    "id": 1,
                    "name": "权限中心",
                    "remark": "管理所有后台项目的菜单，权限，鉴权等",
                    "updated_time": "2019-03-15T09:51:11Z"
                },
                "id": 1,
                "menu_ids": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27",
                "menu_ids_ele": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27",
                "name": "超级管理员",
                "remark": "超级管理员",
                "role_name": "超级管理员"
            },
            {
                "data_perm_ids": "",
                "domain": {
                    "callbackurl": "",
                    "code": "root",
                    "created_time": "2018-12-28T16:17:51Z",
                    "id": 1,
                    "name": "权限中心",
                    "remark": "管理所有后台项目的菜单，权限，鉴权等",
                    "updated_time": "2019-03-15T09:51:11Z"
                },
                "id": 2,
                "menu_ids": "17,18,19,20,21,22,23,24,25,26,27",
                "menu_ids_ele": "17,18,19,20,21,22,23,24,25,26,27",
                "name": "系统设置",
                "remark": "系统设置",
                "role_name": "系统设置"
            },
            {
                "data_perm_ids": "",
                "domain": {
                    "callbackurl": "",
                    "code": "root",
                    "created_time": "2018-12-28T16:17:51Z",
                    "id": 1,
                    "name": "权限中心",
                    "remark": "管理所有后台项目的菜单，权限，鉴权等",
                    "updated_time": "2019-03-15T09:51:11Z"
                },
                "id": 3,
                "menu_ids": "28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43",
                "menu_ids_ele": "28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43",
                "name": "日志管理",
                "remark": "日志管理",
                "role_name": "日志管理"
            }
        ],
        "total": 3
    },
    "msg": "success"
}
```

## 角色详情

`接口描述` : `角色详情`

`请求路径` :  `/roles/<ID>`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

示例：
```js
/roles/1
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "data_perms": null,
        "detail": {
            "id": 1,
            "name": "超级管理员",
            "domain": {
                "id": 1,
                "name": "权限中心",
                "callbackurl": "",
                "remark": "管理所有后台项目的菜单，权限，鉴权等",
                "code": "root",
                "created_time": "2018-12-28T16:17:51Z",
                "updated_time": "2019-03-15T09:51:11Z"
            },
            "role_name": "超级管理员",
            "remark": "超级管理员",
            "users": null,
            "menu_ids": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27",
            "menu_ids_ele": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27"
        },
        "perms": [
            [
                "超级管理员",
                "/permission/user:show",
                "*",
                "root"
            ],
            [
                "超级管理员",
                "/permission/user:add",
                "*",
                "root"
            ]
        ]
    },
    "msg": "success"
}
```

## 添加角色

`接口描述` : `添加角色`

`请求路径` :  `/roles`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|domain_id | 1  |	String  |	域ID  |	true  |
|role_name |	超级管理员  |	String  |	角色名称  |	true  |
|remark	 | 超级管理员  |	String  |	备注  |	true  |
|name |	超级管理员 |	String  |	名字  |	true  |
|menu_ids  |	1,2,4  |	string  |	菜单id  |	true  |
|menu_ids_ele  |	1,2,4  |	String  |	选中菜单id  |	true  |
|data_perm_ids  |	1,2,4  |	String   |	数据权限ID  |	true  |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```

## 编辑角色

`接口描述` : `编辑角色`

`请求路径` :  `/roles/<ID>`

`请求方法` :  `PUT`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|domain_id | 1  |	String  |	域ID  |	true  |
|role_name |	超级管理员  |	String  |	角色名称  |	true  |
|remark	 | 超级管理员  |	String  |	备注  |	true  |
|name |	超级管理员 |	String  |	名字  |	true  |
|menu_ids  |	1,2,4  |	string  |	菜单id  |	true  |
|menu_ids_ele  |	1,2,4  |	String  |	选中菜单id  |	true  |
|data_perm_ids  |	1,2,4  |	String   |	数据权限ID  |	true  |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```

## 角色权限分配

`接口描述` : `角色权限分配`

`请求路径` :  `/roles/<ID>`

`请求方法` :  `PATCH`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|domain_id|	1|	String|	域ID|	true|
|role_id|	1|String|	角色ID|	true|
|menu_ids|	1,2,4|	string|	菜单id|	true|


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```

## 删除角色

`接口描述` : `删除角色`

`请求路径` :  `/roles/<ID>`

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