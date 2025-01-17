/* Description:
Takes an array of blog post objects and a tag string. Returns a new array of blog posts where each post has the new tag added to its tags array. The original posts array should not be mutated.
*/

function addTagToPosts(posts, tag) {
    // My logic here
let updatedPosts = posts.map((post) => {
    let updatedPost = {
      title: post.title, 
      tags: [...post.tags, tag] 
    };

    return updatedPost;
  });

  return updatedPosts;
  }
  
  module.exports = addTagToPosts;