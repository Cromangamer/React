import { useState } from "react";

function initialState() {
  let OTP = Math.floor(1000 + Math.random() * 9000);
  console.log(OTP);
  return OTP
}

export default function Post() {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("title");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState(0);
  const [views, setViews] = useState(0);

  return (
    <div id="post">
      <h2 id="title">
        <span>{title}</span>
        <span>
          <button id="button" onClick={() => setShowPopup(true)}>
            Edit
          </button>
        </span>
      </h2>
      {showPopup && (
        <div id="popup">
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span></span>
          <button id="button" onClick={() => setShowPopup(false)}>
            Done
          </button>
        </div>
      )}
      <div id="post-stats">
        <p id="likes">
          <button id="button" onClick={() => setLike(like + 1)}>
            <i class="fa-solid fa-heart"></i> {like}
          </button>
        </p>
        <p id="dislikes">
          <button id="button" onClick={() => setDislike(dislike + 1)}>
            <i class="fa-solid fa-heart-circle-minus"></i> {dislike}
          </button>
        </p>
        <p id="comments">
          <button id="button" onClick={() => setComment(comment + 1)}>
            <i class="fa-regular fa-comment"></i> {comment}
          </button>
        </p>
        <p id="views">
          <button id="button" onMouseOver={() => setViews(views + 1)}>
            <i class="fa-solid fa-eye"></i> {views}
          </button>
        </p>
      </div>
    </div>
  );
}
