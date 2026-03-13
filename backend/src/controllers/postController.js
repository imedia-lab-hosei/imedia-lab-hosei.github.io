const postService = require('../services/postService');

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const result = await postService.createNewPost(req.body);
    res.status(201).json({ success: true, id: result.lastInsertRowid });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.sayHello = async (req, res) => {
  try {
    const message = await postService.getHelloMessage();
    res.json({ success: true, data: message });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};