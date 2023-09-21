const user = {
  lastActivityTime: new Date(),
  posts: [],
};

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (user.posts.length > 0) {
        const deletedPost = user.posts.pop();
        resolve(deletedPost);
      } else {
        resolve(null);
      }
    }, 1000);
  });
}

(async () => {
  try {
    const [post, lastActivityTime] = await Promise.all([
      createPost({ text: "First post" }),
      updateLastUserActivityTime(),
    ]);

    console.log("Post Created:", post);
    console.log("Last Activity Time:", lastActivityTime);

    const deletedPost = await deleteLastPost();

    if (deletedPost) {
      console.log("Deleted Post:", deletedPost);
    } else {
      console.log("No posts to delete.");
    }

    console.log("Updated Posts:", user.posts);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
