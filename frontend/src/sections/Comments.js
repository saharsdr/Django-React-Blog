import React from "react";
import Comment from "../components/Comment";
import NewComment from "../components/NewComment";

function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <NewComment />
            {comments.length > 0 && (
              <>
                <div className="headings d-flex justify-content-between align-items-center my-3 mb-3">
                  <h5>نظرات</h5>
                </div>

                {comments.map((item) => (
                  <Comment data={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
