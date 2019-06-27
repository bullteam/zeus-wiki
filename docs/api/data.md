# 数据权限

## 数据权限列表

`接口描述` : `数据权限列表`

`请求路径` :  `/datas`

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

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 数据权限详情


`接口描述` : `数据权限详情`

`请求路径` :  `/datas/<ID>`

`请求方法` :  `GET`

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
## 添加数据权限


`接口描述` : `添加数据权限`

`请求路径` :  `/datas`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|domain_id | 9 | int | 域ID | true|
|parent_id | 0 | int | 父ID 0 为顶级 | true |
|name | 订单列表1 | string | 名称 | true  |
|perms | /orders/orders/getlist | string |数据权限key 建议用uri路由规则命名 | true |
|perms_rule |{"rules":[{"field":"country_id","op":"equal","value":"2328926"}],"op":"and"} |string | 数据权限规则json | true|
|perms_type| 1 |int |类型 1=分类 2=数据权限| true|
|order_num |1 |int |排序 |false|
|remarks | 这是说明 |string |备注说明 | false|

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 修改数据权限


`接口描述` : `修改数据权限`

`请求路径` :  `/datas/<ID>`

`请求方法` :  `PUT`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|domain_id | 9 | int | 域ID | true|
|parent_id | 0 | int | 父ID 0 为顶级 | true |
|name | 订单列表1 | string | 名称 | true  |
|perms | /orders/orders/getlist | string |数据权限key 建议用uri路由规则命名 | true |
|perms_rule |{"rules":[{"field":"country_id","op":"equal","value":"2328926"}],"op":"and"} |string | 数据权限规则json | true|
|perms_type| 1 |int |类型 1=分类 2=数据权限| true|
|order_num |1 |int |排序 |false|
|remarks | 这是说明 |string |备注说明 | false|


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 删除数据权限

`接口描述` : `删除数据权限`

`请求路径` :  `/datas/<ID>`

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