let ipUrl = 'http://api.hzsnq.com:7000/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList',  //  首页文章列表接口
  getArticleById: ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
  getArticleListByTypeId: ipUrl + 'getArticleListByTypeId/',  // 文章列表 ,需要接收参数
  getTypeInfo: ipUrl + 'getTypeInfo',         //文章类别接口
}

export default servicePath