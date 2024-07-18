amis.define('docs/zh-CN/concepts/schema.md', function(require, exports, module, define) {

  module.exports = {
    "title": "配置与组件",
    "description": "配置与组件",
    "type": 0,
    "group": "💡 概念",
    "menuName": "配置与组件",
    "icon": null,
    "order": 9,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-amis-%E9%85%8D%E7%BD%AE\" href=\"#%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-amis-%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>最简单的 amis 配置</h2><p>一个最简单的 amis 配置看起来是这样的：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello World!\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>请观察上面的代码，这是一段 JSON，它的含义是：</p>\n<ol>\n<li><code>type</code> 是 amis 节点中最重要的字段，它告诉 amis 当前节点需要渲染的是<code>Page</code>组件。</li>\n<li>而 <code>body</code> 字段会作为 <code>Page</code> 组件的属性，<code>Page</code> 组件根据这个值来渲染页面内容。</li>\n</ol>\n<p>这段配置的效果如下所示：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": \"Hello World!\"\n}\n</script></div><div class=\"markdown-body\">\n<p>上面这个配置是可以<strong>实时修改预览</strong>的，尝试改一下 <code>Hello World!</code> 的值。</p>\n<blockquote>\n<p>不过这个实时预览功能对于某些属性不生效，如果发现不符合预期，需要复制 JSON，打开另一个页面后粘贴。</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E7%BB%84%E4%BB%B6\" href=\"#%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>组件</h2><p>上面提到，<code>type</code>字段会告诉 amis 当前节点渲染的组件为<code>Page</code>，组件节点的配置永远都是由 <strong><code>type</code>字段</strong> （用于标识当前是哪个组件）和 <strong>属性</strong> 构成的。</p>\n<pre><code>{\n  &quot;type&quot;: &quot;xxx&quot;,\n  ...其它属性\n}\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E7%BB%84%E4%BB%B6%E6%A0%91\" href=\"#%E7%BB%84%E4%BB%B6%E6%A0%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>组件树</h2><p>这次我们看一个稍微复杂一点的配置：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"tpl\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"tpl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello World!\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>该配置渲染页面如下：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"tpl\",\n    \"tpl\": \"Hello World!\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<p>最终效果和前面的示例一样，但这次 <code>Page</code> 组件的 <code>body</code> 属性值配置了一个对象，<strong>通过<code>type</code>指明<code>body</code>内容区内会渲染一个叫<code>Tpl</code>的组件</strong>，它是一个模板渲染组件。</p>\n<p>在 <code>body</code> 中除了配置对象，还可以是数组，比如下面的例子:</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"Hello World!\"\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"form\",\n      \"body\": [\n        {\n          \"type\": \"input-text\",\n          \"name\": \"name\",\n          \"label\": \"姓名\"\n        }\n      ]\n    }\n]\n</script></div><div class=\"markdown-body\">\n<p>可以看到通过数组的形式，增加了 <code>divider</code> 和 <code>form</code> 组件。</p>\n<p>除了 <code>Page</code> 之外，还有很多<strong>容器型</strong>的组件都有 <code>body</code> 属性，通过这种树形结构，amis 就能实现复杂页面制作。</p>\n<blockquote>\n<p><strong>注意：</strong></p>\n<p><code>Page</code>是 amis 页面配置中 <strong>必须也是唯一的顶级节点</strong></p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"%E9%80%9A%E8%BF%87%E6%A0%91%E5%BD%A2%E6%9D%A5%E5%AE%9E%E7%8E%B0%E5%B8%83%E5%B1%80\" href=\"#%E9%80%9A%E8%BF%87%E6%A0%91%E5%BD%A2%E6%9D%A5%E5%AE%9E%E7%8E%B0%E5%B8%83%E5%B1%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>通过树形来实现布局</h3><p>下面这个页面就是通过树形组合出来的，大体结构是这样：</p>\n<pre><code>Page\n  ├── Toolbar\n  │  └─ Form 顶部表单项\n  ├── Grid // 用于水平布局\n  │  ├─ Panel\n  │  │  └─ Tabs\n  │  │    └─ Chart\n  │  └─ Panel\n  │     └─ Chart\n  └── CRUD\n</code></pre>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"toolbar\": [{\n    \"type\": \"form\",\n    \"panelClassName\": \"mb-0\",\n    \"title\": \"\",\n    \"body\": [{\n      \"type\": \"select\",\n      \"label\": \"区域\",\n      \"name\": \"businessLineId\",\n      \"selectFirst\": true,\n      \"mode\": \"inline\",\n      \"options\": [\"北京\", \"上海\"],\n      \"checkAll\": false\n    }, {\n      \"label\": \"时间范围\",\n      \"type\": \"input-date-range\",\n      \"name\": \"dateRange\",\n      \"inline\": true,\n      \"value\": \"-1month,+0month\",\n      \"inputFormat\": \"YYYY-MM-DD\",\n      \"format\": \"YYYY-MM-DD\",\n      \"closeOnSelect\": true,\n      \"clearable\": false\n    }],\n    \"actions\": [],\n    \"mode\": \"inline\",\n    \"target\": \"mainPage\",\n    \"submitOnChange\": true,\n    \"submitOnInit\": true\n  }],\n  \"body\": [{\n    \"type\": \"grid\",\n    \"columns\": [\n      {\n        \"type\": \"panel\",\n        \"className\": \"h-full\",\n        \"body\": {\n          \"type\": \"tabs\",\n          \"tabs\": [{\n            \"title\": \"消费趋势\",\n            \"tab\": [{\n              \"type\": \"chart\",\n              \"config\": {\n                \"title\": {\n                  \"text\": \"消费趋势\"\n                },\n                \"tooltip\": {},\n                \"xAxis\": {\n                  \"type\": \"category\",\n                  \"boundaryGap\": false,\n                  \"data\": [\"一月\", \"二月\", \"三月\", \"四月\", \"五月\", \"六月\"]\n                },\n                \"yAxis\": {},\n                \"series\": [{\n                  \"name\": \"销量\",\n                  \"type\": \"line\",\n                  \"areaStyle\": {\n                    \"color\": {\n                      \"type\": \"linear\",\n                      \"x\": 0,\n                      \"y\": 0,\n                      \"x2\": 0,\n                      \"y2\": 1,\n                      \"colorStops\": [{\n                        \"offset\": 0,\n                        \"color\": \"rgba(84, 112, 197, 1)\"\n                      }, {\n                        \"offset\": 1,\n                        \"color\": \"rgba(84, 112, 197, 0)\"\n                      }],\n                      \"global\": false\n                    }\n                  },\n                  \"data\": [5, 20, 36, 10, 10, 20]\n                }]\n              }\n            }]\n          }, {\n            \"title\": \"账户余额\",\n            \"tab\": \"0\"\n          }]\n        }\n      }, {\n      \"type\": \"panel\",\n      \"className\": \"h-full\",\n      \"body\": [{\n        \"type\": \"chart\",\n        \"config\": {\n          \"title\": {\n            \"text\": \"使用资源占比\"\n          },\n          \"series\": [{\n            \"type\": \"pie\",\n            \"data\": [{\n              \"name\": \"BOS\",\n              \"value\": 70\n            }, {\n              \"name\": \"CDN\",\n              \"value\": 68\n            }, {\n              \"name\": \"BCC\",\n              \"value\": 48\n            }, {\n              \"name\": \"DCC\",\n              \"value\": 40\n            }, {\n              \"name\": \"RDS\",\n              \"value\": 32\n            }]\n          }]\n        }\n      }]\n    }]\n  }, {\n    \"type\": \"crud\",\n    \"className\": \"m-t-sm\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample\",\n    \"columns\": [{\n      \"name\": \"id\",\n      \"label\": \"ID\"\n    }, {\n      \"name\": \"engine\",\n      \"label\": \"Rendering engine\"\n    }, {\n      \"name\": \"browser\",\n      \"label\": \"Browser\"\n    }, {\n      \"name\": \"platform\",\n      \"label\": \"Platform(s)\"\n    }, {\n      \"name\": \"version\",\n      \"label\": \"Engine version\"\n    }, {\n      \"name\": \"grade\",\n      \"label\": \"CSS grade\"\n    }]\n  }]\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>amis 后续将会实现新的布局模式，将更容易实现复杂布局效果</p>\n</blockquote>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "最简单的 amis 配置",
          "fragment": "%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-amis-%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-amis-%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "组件",
          "fragment": "%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "组件树",
          "fragment": "%E7%BB%84%E4%BB%B6%E6%A0%91",
          "fullPath": "#%E7%BB%84%E4%BB%B6%E6%A0%91",
          "level": 2,
          "children": [
            {
              "label": "通过树形来实现布局",
              "fragment": "%E9%80%9A%E8%BF%87%E6%A0%91%E5%BD%A2%E6%9D%A5%E5%AE%9E%E7%8E%B0%E5%B8%83%E5%B1%80",
              "fullPath": "#%E9%80%9A%E8%BF%87%E6%A0%91%E5%BD%A2%E6%9D%A5%E5%AE%9E%E7%8E%B0%E5%B8%83%E5%B1%80",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
