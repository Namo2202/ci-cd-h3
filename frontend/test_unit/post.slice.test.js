import { createPost,deletePost, editPost, postSlice } from '../src/feature/post.slice';

describe('createPost action', () => {
  it('should add a new post to the state', () => {
    const initialState = { postsData: [] };
    const testData = { message: 'Test message', author: 'Test author', _id: 123 };

    const newState = postSlice.reducer(initialState, createPost(testData));

    expect(newState.postsData).toHaveLength(1);
    expect(newState.postsData[0]).toEqual(testData);
  });
});

describe('deletePost action', () => {
    it('should remove the specified post from the state', () => {
      const initialState = { postsData: [{ _id: 123, message: 'Test message', author: 'Test author' }] };
  
      const newState = postSlice.reducer(initialState, deletePost(123));
  
      expect(newState.postsData).toHaveLength(0);
    });
});

describe('editPost action', () => {
    it('should edit the specified post in the state', () => {
      const initialState = { postsData: [{ _id: 123, message: 'Test message', author: 'Test author' }] };
      const editedMessage = 'Edited message';
  
      const newState = postSlice.reducer(initialState, editPost([editedMessage, 123]));
  
      expect(newState.postsData[0].message).toEqual(editedMessage);
    });
});