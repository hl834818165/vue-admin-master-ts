const allLimit = [{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 1,
  "state": 1,
  "link": "/Index/Index",
  "linkName": "首页",
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
  "linkName": "vue自定义指令",
  "name": "vue自定义指令",
  "children": []
},
{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 3,
  "state": 1,
  "link": "/Program/Program",
  "linkName": "节目管理",
  "name": "节目管理",
  "children": [
    {
      "icon": "&#xe640;",
      "iconSize": "24",
      "level": 1,
      "sort": 2,
      "state": 1,
      "link": "/Program/ProgramList/ProgramList",
      "linkName": "节目列表",
      "name": "节目列表",
      "parentName": "节目管理",
      "children": []
    },
  ]
},
{
  "icon": "&#xe640;",
  "iconSize": "24",
  "level": 1,
  "sort": 13,
  "state": 1,
  "link": "/System",
  "linkName": "系统设置",
  "name": "系统设置",
  "children": [
      {
          "icon": "&#xe640;",
          "iconSize": "20",
          "level": 2,
          "sort": 1,
          "state": 1,
          "link": "/System/User/User",
          "linkName": "用户管理",
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
          "linkName": "系统日志",
          "name": "系统日志",
          "parentName": "系统设置",
          "children": []
      }
  ]
}]

const nowLimit = [
  {
    "icon": "&#xe640;",
    "iconSize": "24",
    "level": 1,
    "sort": 3,
    "state": 1,
    "link": "/Program/Program",
    "linkName": "节目管理",
    "name": "节目管理",
    "children": [
      {
        "icon": "&#xe640;",
        "iconSize": "24",
        "level": 1,
        "sort": 2,
        "state": 1,
        "link": "/Program/ProgramList/ProgramList",
        "linkName": "节目列表",
        "name": "节目列表",
        "parentName": "节目管理",
        "children": []
      },
    ]
  }, {
    "flag":true,
    "icon":"&#xe640;",
    "link":"/System",
    "linkName":"系统设置",
    "name":"系统设置",
    "sort":13,
    "level":1,
    "state":1,
    "children":[
      {
        "flag":true,
        "icon":"&#xe640;",
        "link":"/System/User/User",
        "linkName":"用户管理",
        "name":"用户管理",
        "sort":1,
        "level":2,
        "state":1,
        "children":[],
        "iconSize":"20",
        "parentName":"系统设置"
      }
    ],
    "iconSize":"24"
  }
]
export {
  allLimit,
  nowLimit
}