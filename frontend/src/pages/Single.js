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
  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`/api${url}/`);
      setPost(data);
    }
    fetchPost();
  }, []);

  return (
    <Div>
      <div className="author">
        <h3>
          {post.author} <Button variant="info">followed</Button>
        </h3>
        <span>{post.createdAt}</span>
      </div>
      <div className="article my-5">
        <h2>{post.title}</h2>
        <Image src="holder.js/100px250" fluid />
        <br />
        <p className="kholase text-muted">{post.descriprion}</p>

        <p className="content">{post.content}</p>
        <div className="categories">
          <h4>
            <Badge pill bg="secondary">
              جدید
            </Badge>{" "}
            <Badge pill bg="secondary">
              هوش مصنوعی
            </Badge>{" "}
            <Badge pill bg="secondary">
              فرهنگ
            </Badge>
          </h4>
        </div>
      </div>
      <br />
      <div>
        <h3>کامنت ها</h3>

        {Array.apply(0, Array(10)).map(() => {
          return (
            <Comment
              author={"author"}
              comment={"miu comment contewava owsfdsdfsdf wow oow wwo woo"}
              datetime={"1400-12-05 22:15"}
            />
          );
        })}
      </div>
    </Div>
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
