export const siteData = {
  "title": "",
  "description": "",
  "base": "/",
  "pages": [
    {
      "key": "v-be39577e20f94",
      "path": "/",
      "lastUpdated": 1556417626000,
      "title": "Home",
      "headers": [
        {
          "level": 3,
          "title": "快速部署",
          "slug": "快速部署"
        }
      ],
      "frontmatter": {
        "home": true,
        "title": "Zeus",
        "heroImage": "/logo.png",
        "actionText": "快速上手 →",
        "actionLink": "/guide/",
        "description": "宙斯--后台权限管理系统",
        "features": [
          {
            "title": "多租户权限管理中心",
            "details": "基于casbin作为核心存储和权限引擎，支持多租户项目统一管理菜单和权限"
          },
          {
            "title": "颠覆传统的后台系统架构",
            "details": "以beego框架为基础，使用jwt作为Auth2.0认证，实现跨语言平台协作，前后端分离"
          },
          {
            "title": "完全免费开源",
            "details": "公牛开源组织以非营利性为目的，MIT许可协议开源。"
          }
        ],
        "footer": "MIT Licensed | Copyright © 2019-present 公牛开源联盟"
      }
    }
  ],
  "themeConfig": {
    "repo": "bullteam/zeus",
    "editLinks": true,
    "docsDir": "docs",
    "docsBranch": "0.x",
    "locales": {
      "/": {
        "label": "简体中文",
        "selectText": "选择语言",
        "editLinkText": "在 GitHub 上编辑此页",
        "lastUpdated": "上次更新",
        "serviceWorker": {
          "updatePopup": {
            "message": "发现新内容可用",
            "buttonText": "刷新"
          }
        },
        "nav": [
          {
            "text": "指南",
            "link": "/guide/"
          },
          {
            "text": "官网",
            "link": "http://www.bullteam.cn"
          }
        ],
        "sidebar": {
          "/guide/": [
            {
              "title": "Guide",
              "collapsable": false,
              "children": [
                "",
                "getting-started",
                "basic-config"
              ]
            }
          ]
        }
      }
    }
  },
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Zeus",
      "description": "Zeus 宙斯权限系统"
    },
    "/en/": {
      "lang": "en-US",
      "title": "Zeus",
      "description": "Unified Authority Control Background"
    }
  }
}