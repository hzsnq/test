'use strict'

const Controller = require('egg').Controller

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi api'
  }

  async checkLogin() {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql = " SELECT user_name,id FROM admin_user WHERE user_name = '" + userName +
      "' AND user_pwd = '" + password + "'"

    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = { 'openId': openId }
      this.ctx.body = { 'data': '登录成功', 'openId': openId, 'userInfo': res }
    } else {
      this.ctx.body = { data: '登录失败' }
    }
  }

  async getTypeInfo() {
    const result = await this.app.mysql.select('type')
    this.ctx.body = {
      data: result
    }
  }

  async addTypeInfo() {

    let typeName = this.ctx.request.body.typeName
    let orderNum = this.ctx.request.body.orderNum
    let Icon = this.ctx.request.body.Icon

    const sql = "INSERT INTO `type` (type_name,order_num,icon) VALUES('" + typeName + "'," + orderNum + ",'" + Icon + "')"

    const res = await this.app.mysql.query(sql)
    if (res.insertId > 0) {
      this.ctx.body = { data: '添加成功' }
    } else {
      this.ctx.body = { data: '添加失败' }
    }
  }

  async editTypeInfo() {

    let id = this.ctx.request.body.id
    let typeName = this.ctx.request.body.typeName
    let Icon = this.ctx.request.body.Icon

    const sql = "UPDATE type set type_name='" + typeName + "',icon='" + Icon + "' WHERE id=" + id

    const res = await this.app.mysql.query(sql)
    if (res.changedRows > 0) {
      this.ctx.body = { data: '修改成功' }
    } else {
      this.ctx.body = { data: '修改失败' }
    }
  }

  async deleteTypeInfoById() {

    let id = this.ctx.request.body.id

    const sql = "DELETE FROM type WHERE id = " + id

    const res = await this.app.mysql.query(sql)
    if (res.affectedRows > 0) {
      this.ctx.body = { data: '删除成功' }
    } else {
      this.ctx.body = { data: '删除失败' }
    }
  }

  async addArticle() {

    let isUpdate = this.ctx.request.body.isUpdate
    let isIssue = this.ctx.request.body.isIssue
    let articleTitle = this.ctx.request.body.articleTitle
    let articleContent = this.ctx.request.body.articleContent
    let introducemd = this.ctx.request.body.introducemd
    let showDate = this.ctx.request.body.showDate
    let updateDate = this.ctx.request.body.updateDate
    let view_count = 0
    let selectedType = this.ctx.request.body.selectedType

    const sql = "INSERT INTO article(type_id,title,article_content,introduce,add_time,view_count,is_issue,update_time,is_update)" +
      "VALUES(" + selectedType + ", '" + articleTitle + "', '" + articleContent + "', '" + introducemd + "', '" + showDate + "', " + view_count + ", " + isIssue + ", '" + updateDate + "', " + isUpdate + ")"

    const res = await this.app.mysql.query(sql)
    if (res.insertId > 0) {
      this.ctx.body = { data: '添加成功' }
    } else {
      this.ctx.body = { data: '添加失败' }
    }
  }

  async getArticleList() {

    const sql = "SELECT FROM_UNIXTIME(a.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time,a.type_id,a.article_content,a.id,a.introduce,a.is_issue,a.is_update,a.title,FROM_UNIXTIME(a.update_time,'%Y-%m-%d %H:%i:%s' ) as update_time,a.view_count,t.type_name FROM article AS a " +
      "LEFT JOIN type as t ON a.type_id=t.order_num ORDER BY a.id DESC"
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }
  }

  async getArticleById() {
    let id = this.ctx.request.body.id
    const sql = "SELECT * FROM `article` WHERE id=" + id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }
  }

  async editArticle() {

    let id = this.ctx.request.body.id
    let isIssue = this.ctx.request.body.isIssue
    let articleTitle = this.ctx.request.body.articleTitle
    let articleContent = this.ctx.request.body.articleContent
    let introducemd = this.ctx.request.body.introducemd
    let updateDate = this.ctx.request.body.updateDate
    let selectedType = this.ctx.request.body.selectedType

    const sql = "UPDATE article set title='" + articleTitle + "',type_id=" + selectedType + ",article_content='" + articleContent + "',introduce='" + introducemd + "',update_time='" + updateDate + "',is_update=1,is_issue=" + isIssue + " WHERE id=" + id

    const res = await this.app.mysql.query(sql)
    if (res.changedRows > 0) {
      this.ctx.body = { data: '修改成功' }
    } else {
      this.ctx.body = { data: '修改失败' }
    }
  }

  async deleteArticleById() {

    let id = this.ctx.request.body.id

    const sql = "DELETE FROM article WHERE id = " + id

    const res = await this.app.mysql.query(sql)
    if (res.affectedRows > 0) {
      this.ctx.body = { data: '删除成功' }
    } else {
      this.ctx.body = { data: '删除失败' }
    }
  }

}

module.exports = MainController