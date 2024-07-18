amis.define('docs/zh-CN/components/form/switch.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Switch 开关",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Switch",
    "icon": null,
    "order": 51,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"label\": \"开关\",\n            \"option\": \"开关说明\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81\" href=\"#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>禁用状态</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"disabled\": true,\n            \"label\": \"开关\",\n            \"option\": \"开关说明\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E7%9C%9F%E5%81%87%E5%80%BC\" href=\"#%E9%85%8D%E7%BD%AE%E7%9C%9F%E5%81%87%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置真假值</h2><p>默认情况：</p>\n<ul>\n<li>开关打开时，表单项值为：true</li>\n<li>开关关闭时，表单项值为：false</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"label\": \"开关\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果你想调整这个值，可以配置<code>trueValue</code>和<code>falseValue</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"label\": \"开关\",\n            \"trueValue\": 1,\n            \"falseValue\": 0\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>调整开关，观察数据域变化，会发现打开后值为<code>1</code>，而关闭后为<code>0</code></p>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E5%BC%80%E5%90%AF%E5%92%8C%E5%85%B3%E9%97%AD%E7%8A%B6%E6%80%81%E7%9A%84%E6%96%87%E6%9C%AC\" href=\"#%E9%85%8D%E7%BD%AE%E5%BC%80%E5%90%AF%E5%92%8C%E5%85%B3%E9%97%AD%E7%8A%B6%E6%80%81%E7%9A%84%E6%96%87%E6%9C%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置开启和关闭状态的文本</h2><blockquote>\n<p><code>1.1.5</code> 版本之后支持</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"onText\": \"已开启飞行模式\",\n            \"offText\": \"已关闭飞行模式\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E4%BD%BF%E7%94%A8-schema-%E9%85%8D%E7%BD%AE%E6%96%87%E6%9C%AC\" href=\"#%E4%BD%BF%E7%94%A8-schema-%E9%85%8D%E7%BD%AE%E6%96%87%E6%9C%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>使用 Schema 配置文本</h3><blockquote>\n<p><code>3.6.0</code> 版本之后支持</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"onText\": [\n                {\n                    \"type\": \"icon\",\n                    \"icon\": \"fa fa-plane\",\n                    \"vendor\": \"\",\n                    \"className\": \"mr-1\"\n                },\n                {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"飞行模式\"\n                }\n            ],\n            \"offText\": [\n                {\n                    \"type\": \"icon\",\n                    \"icon\": \"fa fa-plane\",\n                    \"vendor\": \"\",\n                    \"className\": \"mr-1\"\n                },\n                {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"飞行模式\"\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%80%BC\" href=\"#%E9%BB%98%E8%AE%A4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认值</h2><p>和其它表单项一样，如果要设置默认值，可以使用 value 属性</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"label\": \"开关\",\n            \"value\": false\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8\" href=\"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不同尺寸</h2><blockquote>\n<p><code>2.0.0</code> 及以上版本</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"type\": \"switch\",\n            \"label\": \"\"\n        },\n        {\n            \"name\": \"switch-sm\",\n            \"type\": \"switch\",\n            \"label\": \"\",\n            \"size\": \"sm\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81\" href=\"#%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>加载状态</h2><blockquote>\n<p><code>3.6.0</code> 及以上版本</p>\n</blockquote>\n<p>设置<code>&quot;loading&quot;: true</code>, 标识开关操作的异步任务仍在执行中。另外<code>loadingOn</code>支持表达式</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"data\": {\n        \"shouldLoading\": true\n    },\n    \"body\": [\n        {\n            \"type\": \"switch\",\n            \"name\": \"switch1\",\n            \"label\": \"\",\n            \"loading\": true,\n            \"value\": true\n        },\n        {\n\n            \"type\": \"switch\",\n            \"name\": \"switch2\",\n            \"label\": \"\",\n            \"size\": \"sm\",\n            \"disabled\": true,\n            \"loading\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>配合<code>ajax</code>动作，实现开关操作后台异步任务：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"form\",\n      \"id\": \"demo-form\",\n      \"body\": [\n        {\n            \"type\": \"hidden\",\n            \"name\": \"isFetching\",\n            \"value\": false\n        },\n        {\n          \"type\": \"switch\",\n          \"name\": \"switch\",\n          \"label\": \"操作状态开关\",\n          \"mode\": \"horizontal\",\n          \"loadingOn\": \"${isFetching}\",\n          \"onEvent\": {\n            \"change\": {\n              \"actions\": [\n                {\n                  \"actionType\": \"toast\",\n                  \"args\": {\n                    \"msgType\": \"warning\",\n                    \"msg\": \"任务${switch === true ? '派发' : '取消'}成功，等待后台操作...\"\n                  }\n                },\n                {\n                  \"actionType\": \"setValue\",\n                  \"componentId\": \"demo-form\",\n                  \"args\": {\n                    \"value\": {\n                      \"isFetching\": true\n                    }\n                  }\n                },\n                {\n                  \"actionType\": \"ajax\",\n                  \"api\": {\n                    \"url\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm?waitSeconds=3\",\n                    \"method\": \"get\",\n                    \"messages\": {\n                      \"success\": \"操作成功\",\n                      \"failed\": \"操作失败\"\n                    }\n                  }\n                },\n                {\n                  \"actionType\": \"setValue\",\n                  \"componentId\": \"demo-form\",\n                  \"args\": {\n                    \"value\": {\n                      \"isFetching\": false\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>option</td>\n<td><code>string</code></td>\n<td></td>\n<td>选项说明</td>\n<td></td>\n</tr>\n<tr>\n<td>onText</td>\n<td><code>string | IconSchema | SchemaCollection</code></td>\n<td></td>\n<td>开启时开关显示的内容</td>\n<td><code>3.6.0</code>支持 Schema</td>\n</tr>\n<tr>\n<td>offText</td>\n<td><code>string | IconSchema | SchemaCollection</code></td>\n<td></td>\n<td>关闭时开关显示的内容</td>\n<td><code>3.6.0</code>支持 Schema</td>\n</tr>\n<tr>\n<td>trueValue</td>\n<td><code>boolean | string | number</code></td>\n<td><code>true</code></td>\n<td>标识真值</td>\n<td></td>\n</tr>\n<tr>\n<td>falseValue</td>\n<td><code>boolean | string | number</code></td>\n<td><code>false</code></td>\n<td>标识假值</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>&quot;sm&quot; | &quot;md&quot;</code></td>\n<td><code>&quot;md&quot;</code></td>\n<td>开关大小</td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否处于加载状态</td>\n<td><code>3.6.0</code></td>\n</tr>\n</tbody></table>\n<p>IconSchema 配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>icon</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td></td>\n<td>icon 的类型</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: string | boolean</code> 组件的值</td>\n<td>开关值变化时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"change\" href=\"#change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>change</h3><p>switch 值更新时弹出确认提示，确认后发送请求。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"crud\",\n    \"syncLocation\": false,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample\",\n    \"columns\": [\n        {\n            \"name\": \"id\",\n            \"label\": \"ID\",\n            \"id\": \"u:daa79afa2e53\"\n        },\n        {\n            \"name\": \"engine\",\n            \"label\": \"Rendering engine\",\n            \"id\": \"u:3343cf518656\"\n        },\n        {\n            \"name\": \"browser\",\n            \"label\": \"Browser\",\n            \"id\": \"u:fbdc85e45e2f\"\n        },\n        {\n            \"name\": \"platform\",\n            \"label\": \"Platform(s)\",\n            \"id\": \"u:ccdb48cc1804\"\n        },\n        {\n            \"name\": \"switch\",\n            \"label\": \"开关\",\n            \"id\": \"u:30a36768acce\",\n            \"type\": \"switch\",\n            \"inline\": true,\n            \"onEvent\": {\n                \"change\": {\n                    \"weight\": 0,\n                    \"actions\": [\n                    {\n                        \"actionType\": \"confirmDialog\",\n                        \"dialog\": {\n                        \"type\": \"dialog\",\n                        \"title\": \"弹框标题\",\n                        \"body\": [\n                            {\n                            \"type\": \"tpl\",\n                            \"tpl\": \"确定要修改${id}吗？\",\n                            \"wrapperComponent\": \"\",\n                            \"inline\": false,\n                            \"id\": \"u:1965506c7599\"\n                            }\n                        ],\n                        \"showCloseButton\": true,\n                        \"showErrorMsg\": true,\n                        \"showLoading\": true,\n                        \"className\": \"app-popover\",\n                        \"id\": \"u:d9783223df98\",\n                        \"actions\": [\n                            {\n                            \"type\": \"button\",\n                            \"actionType\": \"cancel\",\n                            \"label\": \"取消\",\n                            \"id\": \"u:302efee8613b\"\n                            },\n                            {\n                            \"type\": \"button\",\n                            \"actionType\": \"confirm\",\n                            \"label\": \"确定\",\n                            \"primary\": true,\n                            \"id\": \"u:4a4d63cf35e1\"\n                            }\n                        ]\n                        }\n                    },\n                    {\n                        \"actionType\": \"ajax\",\n                        \"outputVar\": \"responseResult\",\n                        \"options\": {\n                        },\n                        \"api\": {\n                        \"method\": \"get\",\n                        \"url\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\"\n                        }\n                    }\n                    ]\n                }\n            },\n            \"value\": false\n    }\n    ],\n    \"id\": \"u:6c781a765f97\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<p>| 动作名称 | 动作配置                              | 说明                                                                   |\n| -------- | ------------------------------------- | ---------------------------------------------------------------------- | --- |\n| clear    | -                                     | 清空，6.3.1 及以上版本支持                                             |\n| reset    | -                                     | 将值重置为初始值。6.3.0 及以下版本为<code>resetValue</code>，6.3.1 及以上版本支持 |     |\n| setValue | <code>value: string \\| boolean</code> 更新的数据 | 更新数据                                                               |</p>\n<h3><a class=\"anchor\" name=\"clear\" href=\"#clear\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>clear</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"label\": \"开关\",\n            \"type\": \"switch\",\n            \"id\": \"clear_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"清空\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"clear\",\n                            \"componentId\": \"clear_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"reset\" href=\"#reset\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reset</h3><p>如果配置了<code>resetValue</code>，则重置时使用<code>resetValue</code>的值，否则使用初始值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"switch\",\n            \"label\": \"开关\",\n            \"type\": \"switch\",\n            \"id\": \"reset_text\",\n            \"value\": true\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"重置\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"reset\",\n                            \"componentId\": \"reset_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"setvalue\" href=\"#setvalue\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>setValue</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n    {\n      \"type\": \"button\",\n      \"label\": \"修改开关的值\",\n      \"className\": \"mb-2\",\n      \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"componentId\": \"u:6613bfa3a18e\",\n              \"actionType\": \"setValue\",\n              \"args\": {\n                \"value\": true\n              }\n            }\n          ]\n        }\n      },\n      \"id\": \"u:9d7d695145bb\"\n    },\n    {\n      \"type\": \"form\",\n      \"title\": \"表单\",\n      \"debug\": true,\n      \"body\": [\n        {\n          \"label\": \"开启\",\n          \"type\": \"switch\",\n          \"name\": \"switch\",\n          \"id\": \"u:6613bfa3a18e\",\n          \"value\": false,\n          \"mode\": \"inline\"\n        }\n      ],\n      \"id\": \"u:82d44e407eb0\",\n      \"actions\": [\n        {\n          \"type\": \"submit\",\n          \"label\": \"提交\",\n          \"primary\": true\n        }\n      ]\n    }\n]\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "禁用状态",
          "fragment": "%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",
          "fullPath": "#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",
          "level": 2
        },
        {
          "label": "配置真假值",
          "fragment": "%E9%85%8D%E7%BD%AE%E7%9C%9F%E5%81%87%E5%80%BC",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E7%9C%9F%E5%81%87%E5%80%BC",
          "level": 2
        },
        {
          "label": "配置开启和关闭状态的文本",
          "fragment": "%E9%85%8D%E7%BD%AE%E5%BC%80%E5%90%AF%E5%92%8C%E5%85%B3%E9%97%AD%E7%8A%B6%E6%80%81%E7%9A%84%E6%96%87%E6%9C%AC",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E5%BC%80%E5%90%AF%E5%92%8C%E5%85%B3%E9%97%AD%E7%8A%B6%E6%80%81%E7%9A%84%E6%96%87%E6%9C%AC",
          "level": 2,
          "children": [
            {
              "label": "使用 Schema 配置文本",
              "fragment": "%E4%BD%BF%E7%94%A8-schema-%E9%85%8D%E7%BD%AE%E6%96%87%E6%9C%AC",
              "fullPath": "#%E4%BD%BF%E7%94%A8-schema-%E9%85%8D%E7%BD%AE%E6%96%87%E6%9C%AC",
              "level": 3
            }
          ]
        },
        {
          "label": "默认值",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%80%BC",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%80%BC",
          "level": 2
        },
        {
          "label": "不同尺寸",
          "fragment": "%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",
          "fullPath": "#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",
          "level": 2
        },
        {
          "label": "加载状态",
          "fragment": "%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81",
          "fullPath": "#%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "change",
              "fragment": "change",
              "fullPath": "#change",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "clear",
              "fragment": "clear",
              "fullPath": "#clear",
              "level": 3
            },
            {
              "label": "reset",
              "fragment": "reset",
              "fullPath": "#reset",
              "level": 3
            },
            {
              "label": "setValue",
              "fragment": "setvalue",
              "fullPath": "#setvalue",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
