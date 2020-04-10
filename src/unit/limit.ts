const allLimit = [{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 1,
  "state": 1,
  "link": "/Index/Index",
  "linkName": "Index",
  "name": "首页",
  "children": []
},
{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 2,
  "state": 1,
  "link": "/Directive/Directive",
  "linkName": "Directive",
  "name": "vue自定义指令",
  "children": []
},
{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 13,
  "state": 1,
  "link": "/System",
  "linkName": "System",
  "name": "系统设置",
  "children": [
      {
          "icon": "&#xe640;",
          "iconSize": "20",
          "level": 2,
          "sort": 1,
          "state": 1,
          "link": "/System/User/User",
          "linkName": "User",
          "name": "用户管理",
          "parentName": "系统设置",
          "children": []
      },
      {
          "icon": "&#xe640;",
          "iconSize": "20",
          "level": 2,
          "sort": 2,
          "state": 1,
          "link": "/System/Log/Log",
          "linkName": "Log",
          "name": "系统日志",
          "parentName": "系统设置",
          "children": []
      }
  ]
}]

const nowLimit = [
  {
    "flag":true,
    "icon":"&#xe640;",
    "link":"/Index/Index",
    "name":"首页",
    "sort":1,
    "level":1,
    "state":1,
    "children":[],
    "iconSize":"24",
    "linkName":"Index"
  }, {
    "flag":true,
    "icon":"&#xe640;",
    "link":"/System",
    "name":"系统设置",
    "sort":13,
    "level":1,
    "state":1,
    "children":[
      {
        "flag":true,
        "icon":"&#xe640;",
        "link":"/System/User/User",
        "name":"用户管理",
        "sort":1,
        "level":2,
        "state":1,
        "children":[],
        "iconSize":"20",
        "linkName":"User",
        "parentName":"系统设置"
      }
    ],
    "iconSize":"24",
    "linkName":"System"
  }
]
export {
  allLimit,
  nowLimit
}