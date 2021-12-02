import React from "react";
import Comment from "../components/Comment";

function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="headings d-flex justify-content-between align-items-center mb-3">
              <h5>نظرات</h5>
            </div>
            {comments.map((item) => {
              <Comment data={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
