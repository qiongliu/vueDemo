require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var db = require('./db.json')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var apiRoutes = express.Router()

apiRoutes.get('/getSliderInfo',function(req,res) {
  var data = [
    {
      id: 1,
      linkUrl: 'javascript:;',
      imgUrl: '../common/images/banner_01.jpg'
    },
    {
      id: 2,
      linkUrl: 'javascript:;',
      imgUrl: '../common/images/banner_02.jpg'
    },
    {
      id: 3,
      linkUrl: 'javascript:;',
      imgUrl: '../common/images/banner_03.jpg'
    }
  ]

  if(req.query.type === 'slider') {
    res.json({
      code: 0,
      data: data
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getWkInfo',function(req,res) {
  var data = [
    {
      id: 1,
      linkUrl: 'javascript:;',
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 2,
      linkUrl: 'javascript:;',
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 3,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 4,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 5,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    }
  ]

  if(req.query.type === 'wk') {
    res.json({
      code: 0,
      data: data
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getSubject',function(req,res) {
  var data = [
    {
      id: 1,
      name: '语文',
      linkUrl: 'javascript:;'
    },
    {
      id: 2,
      name: '数学',
      linkUrl: 'javascript:;'
    },
    {
      id: 3,
      name: '英语',
      linkUrl: 'javascript:;'
    },
    {
      id: 4,
      name: '物理',
      linkUrl: 'javascript:;'
    },
    {
      id: 5,
      name: '化学',
      linkUrl: 'javascript:;'
    },
    {
      id: 6,
      name: '生物',
      linkUrl: 'javascript:;'
    },
    {
      id: 7,
      name: '美术',
      linkUrl: 'javascript:;'
    },
    {
      id: 8,
      name: '更多',
      linkUrl: 'javascript:;'
    }
  ]

  if(req.query.type === 'subject') {
    res.json({
      code: 0,
      data: data
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getResInfo',function(req,res) {
  var data = [
    {
      id: 1,
      linkUrl: 'javascript:;',
      ext: 'doc',
      name: '上海语文word版-2017年普通高等学校招生全国统一考试（无答案）（图片版）',
      subject: '英语',
      type: '中考真题'
    },
    {
      id: 2,
      linkUrl: 'javascript:;',
      ext: 'ppt',
      name: '2017高考数学江苏（文）考前三个月配套练习--9.4转化与化归思想',
      subject: '语文',
      type: '中考真题'
    },
    {
      id: 3,
      linkUrl: 'javascript:;',
      ext: 'gif',
      name: '小神龙2017高考真题（图片版）',
      subject: '化学',
      type: '中考真题'
    },
    {
      id: 4,
      linkUrl: 'javascript:;',
      ext: 'jpg',
      name: '真束神龙高考真题2017',
      subject: '物理',
      type: '中考真题'
    },
    {
      id: 5,
      linkUrl: 'javascript:;',
      ext: 'zip',
      name: '上海语文word版-2017年普通高等学校招生全国统一考试（无答案）（图片版）',
      subject: '生物',
      type: '中考真题'
    }
  ]

  if(req.query.type === 'res') {
    res.json({
      code: 0,
      data: data
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getChooses',function(req,res) {
  
  if(req.query.type === 'chooses') {
    res.json({
      code: 0,
      data: db.chooses
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getSelections',function(req,res) {
  
  if(req.query.type === 'selections') {
    res.json({
      code: 0,
      data: db.selections
    })
  } else {
    res.json({
      code: 1
    })
  }
})

apiRoutes.get('/getContent',function(req,res) {
  let data = []

  switch (req.query.id) {
    case "1":
      data = db.resNew
    break;
    case "2":
      data = db.resHot
    break;
    case "3":
      data = db.resGood
    break
  }

  if (data.length) {
    res.json({
      code: 0,
      data: data
    })
  } else {
    res.json({
      code: 1
    })
  }
})

app.use('/api',apiRoutes)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
