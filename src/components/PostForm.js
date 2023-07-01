import { useState, useEffect } from "react";

export const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></input>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};
