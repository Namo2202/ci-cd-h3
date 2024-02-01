const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { getPosts, setPosts, editPost, deletePost, likePost, dislikePost } = require('../backend/controllers/post.controller');
const PostModel = require('../backend/models/post.model');

//une instance MongoDB en mémoire
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

// Test fonction getPosts
describe('getPosts', () => {
  it('should return all posts', async () => {
    const mockPosts = [
        { message: 'Test message 1', author: 'Author 1', likers: ['user1', 'user2']},
        { message: 'Test message 2', author: 'Author 2', likers: ['user3']}
      ];
    await PostModel.create(mockPosts);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getPosts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([
        expect.objectContaining({ message: 'Test message 1', author: 'Author 1', likers: ['user1', 'user2'] }),
        expect.objectContaining({ message: 'Test message 2', author: 'Author 2', likers: ['user3'] })
      ]));
  });
});
