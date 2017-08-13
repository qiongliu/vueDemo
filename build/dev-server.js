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
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001FpRLE2ID8HU.jpg'
    },
    {
      id: 2,
      linkUrl: 'javascript:;',
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg'
    },
    {
      id: 3,
      linkUrl: 'javascript:;',
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000yNjgm0xqknP.jpg'
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
    },
    {
      id: 6,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 7,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 8,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 9,
      imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000NeTQL0VlT8k.jpg',
      author: '张小美',
      time: '32`15`22',
      people: '20177'
    },
    {
      id: 10,
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
