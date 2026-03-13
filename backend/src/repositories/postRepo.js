const db = require('../database/sqlite');

class PostRepository {
  findAll() {
    return db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
  }

  findById(id) {
    return db.prepare('SELECT * FROM posts WHERE id = ?').get(id);
  }

  create(post) {
    const stmt = db.prepare('INSERT INTO posts (title, slug, content, summary) VALUES (?, ?, ?, ?)');
    return stmt.run(post.title, post.slug, post.content, post.summary);
  }

  getFirstMessage() {
    return db.prepare('SELECT content FROM messages LIMIT 1').get();
  }
}

module.exports = new PostRepository();