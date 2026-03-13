const postRepo = require('../repositories/postRepo');

class PostService {
  async getAllPosts() {
    // 这里可以处理分页逻辑
    return postRepo.findAll();
  }

  async createNewPost(postData) {
    // 自动生成 slug 或处理摘要
    if (!postData.summary && postData.content) {
      postData.summary = postData.content.substring(0, 100) + '...';
    }
    return postRepo.create(postData);
  }

  async getHelloMessage() {
    const result = postRepo.getFirstMessage();
    return result ? result.content : '数据库里还没有消息';
  }
}

module.exports = new PostService();