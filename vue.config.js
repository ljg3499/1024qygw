module.exports = {
  publicPath: '/',
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({//这里是配置项，详见官方文档
                        rootValue : 75, // 换算的基数
                        selectorBlackList  : ['el','p_'], // 忽略转换正则匹配项
                        propList   : ['*'],
                    }),
                ]
            }
        }
    },
}

