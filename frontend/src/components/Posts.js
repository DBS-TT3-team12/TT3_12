import React, { useEffect, useState } from "react";
import { useAuthState } from "../context/context.js";
import { deletePost, viewAllPosts, viewUserPosts } from "./api.js";
import Post from "./Post.js";

const tempPosts = [
  {
    Post_ID: 1,
    Post_Title: "Relatable",
    Post_Description: "Walking up and down the aisles for what seems like hours.",
    Post_image:
      "https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c",
  },
  {
    Post_ID: 2,
    Post_Title: "New Job",
    Post_Description: "Just finished my first week",
    Post_image:
      "https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe",
  },
  {
    Post_ID: 3,
    Post_Title: "New Friend",
    Post_Description: "Happy times",
    Post_image:
      "https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f",
  },
  {
    Post_ID: 4,
    Post_Title: "Gameboy",
    Post_Description: "Hello old friend",
    Post_image: "https://i.redd.it/in0kdzuienb81.jpg",
  },
  {
    Post_ID: 5,
    Post_Title: "Dinosaur",
    Post_Description: "Sweet dreams about your loved ones",
    Post_image:
      "https://preview.redd.it/rwtgu96btqb81.jpg?width=960&crop=smart&auto=webp&s=13b18d9fb9355b81349568a124955458f0f8d2e3",
  },
  {
    Post_ID: 6,
    Post_Title: "Sked penguin",
    Post_Description: "SpoOOooOOoky",
    Post_image:
      "https://preview.redd.it/qcq4ktmgzqb81.jpg?width=960&crop=smart&auto=webp&s=52f3cd201555bf09534b903246df9cd0dd995264",
  },
  {
    Post_ID: 7,
    Post_Title: "Studying",
    Post_Description: "Is this what its supposed to feel like?",
    Post_image: "https://i.redd.it/600fjw70hqb81.jpg",
  },
  {
    Post_ID: 8,
    Post_Title: "Mother",
    Post_Description: "My mom sees no difference here",
    Post_image:
      "https://preview.redd.it/7m3h2v230qb81.jpg?width=640&crop=smart&auto=webp&s=9a6617330a192b1801c1af857233b28608d48b19",
  },
  {
    Post_ID: 9,
    Post_Title: "Buddy",
    Post_Description: "You and me, we are friends now!",
    Post_image:
      "https://preview.redd.it/iwxtvicntqb81.gif?width=640&format=mp4&s=6cebc45c632020c2629dbf39be4492d55e6dce35",
  },
  {
    Post_ID: 10,
    Post_Title: "Love through Food",
    Post_Description: "Buying food is a way to show love right.",
    Post_image:
      "https://preview.redd.it/n649wifg95041.jpg?width=960&crop=smart&auto=webp&s=0f6d7b4b57ce051d3d5a6ffce8a11e1ea0a5ebd9",
  },
  {
    Post_ID: 11,
    Post_Title: "Rhino",
    Post_Description: "Less Threatening",
    Post_image:
      "https://preview.redd.it/tx6biuq81vb81.jpg?width=960&crop=smart&auto=webp&s=764d0e4b5c29d8abd36df97e842c817a10b9d1e8",
  },
  {
    Post_ID: 12,
    Post_Title: "Karaoke",
    Post_Description: "Sing along time",
    Post_image: "https://i.redd.it/491l4somvtb81.jpg",
  },
  {
    Post_ID: 13,
    Post_Title: "Halo to Valo",
    Post_Description: "Enough to make a grown man cry",
    Post_image:
      "https://preview.redd.it/e85me6m6fvb81.png?width=640&crop=smart&auto=webp&s=ca9622be8caf9cb187fdcb1ca15e6cdafd6ba2d6",
  },
  {
    Post_ID: 14,
    Post_Title: "Electrical Engineering",
    Post_Description: "A wizard for sure",
    Post_image:
      "https://preview.redd.it/ii4eqom4xpa81.png?width=640&crop=smart&auto=webp&s=dc9af81b67c4113cd9d2bf1a6f1400b4028fd548",
  },
  {
    Post_ID: 15,
    Post_Title: "Christmas",
    Post_Description: "A wholesome family",
    Post_image: "https://i.redd.it/xazlesb3c7981.jpg",
  },
  {
    Post_ID: 16,
    Post_Title: "Fashion",
    Post_Description: "You are too hot!",
    Post_image:
      "https://preview.redd.it/4tfwjsvfxh881.jpg?width=960&crop=smart&auto=webp&s=7b4eddb5b50d03bf354ebeeda4f9aa90aa582d37",
  },
  {
    Post_ID: 17,
    Post_Title: "Listening Ear",
    Post_Description: "I can do this all day",
    Post_image:
      "https://preview.redd.it/se55p3jvfd781.gif?format=mp4&s=261a874c2f4fbbc4383aa692b931531afdaf660f",
  },
  {
    Post_ID: 18,
    Post_Title: "Gaming",
    Post_Description: "True hidden gems",
    Post_image:
      "https://preview.redd.it/mf1ud3kh3f881.gif?format=mp4&s=c7cb20547c4794a2d93e55053fcbbe041d7f6c44",
  },
  {
    Post_ID: 19,
    Post_Title: "Sushi",
    Post_Description: "Amazing Chef",
    Post_image: "https://i.redd.it/q5wt8cj1jw881.jpg",
  },
  {
    Post_ID: 20,
    Post_Title: "Gym Bros",
    Post_Description: "Fitness Goal",
    Post_image:
      "https://preview.redd.it/otu1l944db981.png?width=960&crop=smart&auto=webp&s=7edef7c548b567127e5be80de9ae24d1499d5ab3",
  },
];

const Posts = ({ handleLike, handleComment, handleEdit, handleDelete, filterByUser }) => {
  const auth = useAuthState();
  // console.log(auth);
  const [posts, setPosts] = useState([]);

  function deletePost1(post) {
    deletePost(auth.token, { postId: post.Post_ID }).then((result) => {
      if (result) {
        setPosts((posts) => posts.filter((p) => post.Post_ID !== p.Post_ID));
      } else {
        console.error("Error: addPost");
      }
    });
  }

  useEffect(() => {
    if (filterByUser) {
      viewUserPosts(auth.token).then((res) => {
        if (res) {
          setPosts(res);
        }
      });
    } else {
      viewAllPosts(auth.token).then((res) => {
        if (res) {
          setPosts(res);
        }
      });
    }
  }, [filterByUser]);

  return (
    <div style={{ backgroundColor: "#DCDCDC", display: "flex", flexDirection: "column" }}>
      {posts.reverse().map((post, index) => (
        <Post
          style
          key={index}
          post={{ ...post, Post_image: post.Post_Image }}
          handleLike={handleLike}
          handleComment={handleComment}
          handleEdit={handleEdit}
          handleDelete={() => deletePost1(post)}
        />
      ))}
    </div>
  );
};

export default Posts;
