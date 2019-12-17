let ipUrl = 'http://47.93.215.103:7000/admin/'

let servicePath = {
  checkLogin: ipUrl + 'checkLogin',  //检查用户名密码是否正确
  getTypeInfo: ipUrl + 'getTypeInfo', //获取博客类型
  addArticle: ipUrl + "addArticle", //添加文章
  getArticleList: ipUrl + "getArticleList",//获取文章列表
  getArticleById: ipUrl + "getArticleById",//根据id获取文章
  editArticle: ipUrl + "editArticle",//根据id修改文章
  deleteArticleById: ipUrl + 'deleteArticleById',//根据id删除文章
  addTypeInfo: ipUrl + 'addTypeInfo',//添加文章类别
  editTypeInfo: ipUrl + 'editTypeInfo',//编辑文章类别
  deleteTypeInfoById: ipUrl + 'deleteTypeInfoById',//根据id删除文章类别
  getAdminList: ipUrl + 'getAdminList',//获取用户列表
  editAdminById: ipUrl + 'editAdminById',//根据id改变admin是否启用
  deleteAdminById: ipUrl + 'deleteAdminById',
  addAdmin: ipUrl + 'addAdmin',
  addImg: ipUrl + 'addImg',
  getImgList: ipUrl + 'getImgList',
  deleteImgById: ipUrl + 'deleteImgById'
}

export default servicePath