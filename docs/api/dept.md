# 组织架构

## 部门列表

`接口描述` : `部门列表`

`请求路径` :  `/depts`

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
## 添加部门

`接口描述` : `添加部门`

`请求路径` :  `/depts`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| name   | 1      | String | 名称 |  true |
| parent_id   | 30      | int | 父ID |  true |
| order_num   | 30      | int | 排序|  true |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 修改部门

`接口描述` : `修改部门`

`请求路径` :  `/depts/<ID>`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| name   | 1      | String | 名称 |  true |
| parent_id   | 30      | int | 父ID |  true |
| order_num   | 30      | int | 排序|  true |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 删除部门

`接口描述` : `删除部门`

`请求路径` :  `/depts/<ID>`

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

## 检查部门是否有成员

`接口描述` : `检查部门是否有成员`

`请求路径` :  `/depts/check-no-member`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| q   | n=~研发     | String | 查询条件 |  true |


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 部门详情


`接口描述` : `部门详情`

`请求路径` :  `/depts/<ID>`

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