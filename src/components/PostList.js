import React from 'react'
import PostCard from './PostCard';
import "../index.css"


export const PostList = () => {
    const posts = [
        {
          id: 1,
          image: "https://cdn.vox-cdn.com/thumbor/6kLvmWfhU4h64EhC0S6tsn714fI=/0x0:4032x3024/1200x900/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/59740845/IMG_1503.42.jpg",
          title: "Cafe Latte",
          description: " Indulge in the creamy elegance Café Latte",
          likes: 10,
        },
        {
          id: 2,
          image: "https://www.acouplecooks.com/wp-content/uploads/2022/01/Iced-Americano-008s.jpg",
          title: "Ice Americano",
          description: "Quench your thirst with Iced Americano"
        },
        {
          id: 3,
          image: "https://via.placeholder.com/200",
          title: "Post 3",
          description: "Description for Post 3",
          likes: 3,
        },
        {
          id: 4,
          image: "https://via.placeholder.com/200",
          title: "Post 4",
          description: "Description for Post 4",
          likes: 25,
        },
        {
          id: 5,
          image: "https://via.placeholder.com/200",
          title: "Post 5",
          description: "Description for Post 5",
          likes: 175,
        },
        {
          id: 6,
          image: "https://via.placeholder.com/200",
          title: "Post 6",
          description: "Description for Post 6",
          likes: 50,
        },
        {
          id: 7,
          image: "https://via.placeholder.com/200",
          title: "Post 7",
          description: "Description for Post 7",
          likes: 15,
        },
      ];
    
      const postCards = posts.map(post => (
        <PostCard
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        likes={post.likes}
     
      />
      ));

  return (
    <div style = {{ display: "flex", flexWrap: "wrap"}}>{postCards}</div>
  )
}
export default PostList;