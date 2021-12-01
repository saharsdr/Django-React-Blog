import React, { useState, useEffect } from "react";
import { Button, Image, Badge } from "react-bootstrap";
import styled from "styled-components";
import Comment from "../components/Comment";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Single() {
  const history = useHistory();
  const url = history.location.pathname;
  const [post, setPost] = useState({});
  const [postCategory, setPostCategory] = useState([]);
  const [postComments, setPostComments] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`/api${url}/`);
      setPost(data);
    }
    fetchPost();
    async function fetchPostCategory() {
      const { data } = await axios.get(`/api${url}/category/`);
      setPostCategory(data);
    }
    fetchPostCategory();
    async function fetchPostComments() {
      const { data } = await axios.get(`/api${url}/comments/`);
      setPostComments(data);
      console.log(postComments);
      console.log(url);
    }
    fetchPostComments();
  }, []);

  return (
    <Div>
      <div className="author">
        <h3>{post.author}</h3>
        <span>{post.date}</span>
      </div>
      <div className="article my-5">
        <h2>{post.title}</h2>
        {post.thumbnail_pic != null ? (
          <Image src={post.thumbnail_pic} fluid />
        ) : (
          ""
        )}

        <br />
        {post.thumbnail_pic != null ? (
          <p className="kholase text-muted">{post.descriprion}</p>
        ) : (
          ""
        )}

        <p className="content">{post.content}</p>
        <div className="categories">
          <h4>
            {postCategory.map((item) => (
              <Badge className="mx-2" pill bg="secondary">
                {item.name}
              </Badge>
            ))}
          </h4>
        </div>
      </div>
      {postComments.length > 0 && <TheComments comments={postComments} />}
    </Div>
  );
}

function TheComments({ comments }) {
  return (
    <div>
      <br />
      <h3>کامنت ها</h3>

      {comments.map((item) => {
        return <Comment data={item} />;
      })}
    </div>
  );
}

export default Single;

const Div = styled.div`
  padding: 10rem 10rem;
  margin: 0 auto;
  /* background-color: yellow; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  min-height: 80vh;

  & > * {
    width: 100%;
  }

  & p {
    padding: 2rem 3rem;
    margin-top: 3rem;
  }
  & .author {
    align-self: flex-start;
  }

  & .text-muted {
    background-color: whitesmoke;
  }
`;
