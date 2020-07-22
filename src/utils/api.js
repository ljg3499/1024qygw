import requset from "./request";

export default {
  // 合作伙伴
  postPartner(data) {
    return requset({
      method: "post",
      url: "/api/cooperation/list",
      data,
    });
  },
  // 留言
  leaveAMessage(data) {
    return requset({
      method: "post",
      url: "/api/leave-message/add",
      data,
    });
  },
  // 获取文章列表
  getArticleList(data) {
    return requset({
      method: "post",
      url: "/api/content/list",
      data,
    });
  },
  // 获取文章详情
  getArticleDetails(data) {
    return requset({
      method: "post",
      url: "/api/content/body",
      data,
    });
  },
  // 配置
  getContractUs(data) {
    return requset({
      method: "post",
      url: "/api/config/contractUs",
      data,
    });
  },
};
