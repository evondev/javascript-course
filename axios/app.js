// http://localhost:3456/posts
/**
 * Post
 * id: 1
 * title: 'This is example of title'
 * description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi repudiandae, animi nesciunt recusandae cumque perferendis corporis facilis amet a tenetur aliquam vel ipsa optio facere saepe nobis ea quasi!'
 * author: 'evondev'
 */
async function getPosts() {
  try {
    const response = await axios.get("http://localhost:3456/posts");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}
// getPosts();

function addPost(post) {
  return axios
    .post("http://localhost:3456/posts", {
      title: post.title,
      description: post.description,
      author: post.author,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// addPost({
//   title: "Frontend Developer",
//   description: "Description",
//   author: "John",
// });
function updatePost(postId) {
  axios
    .patch(`http://localhost:3456/posts/${postId}`, {
      title: "How to become frontend developer",
      author: "Kent",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// updatePost(2);
function deletePost(postId) {
  axios
    .delete(`http://localhost:3456/posts/${postId}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// deletePost(2);

async function getAllData() {
  const data = await axios.all([
    axios.get("http://localhost:3456/posts"),
    axios.get("http://localhost:3456/courses"),
  ]);
  const [posts, courses] = data;
  console.log("getAllData ~ courses", courses);
  console.log("getAllData ~ posts", posts);
}
getAllData();
