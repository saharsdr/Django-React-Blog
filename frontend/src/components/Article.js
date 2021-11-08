import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Article({ post }) {
  return (
    <>
      <Link to={`/post/${post.id}`}>
        <Card key={post.id}>
          <Image src={post.thumbnail_pic} />
          <Content>
            <h2>{post.title}</h2>
            <div className="card__body">{post.kholase}</div>
            <div className="card__footer">
              <h6>{post.author}</h6>
              <span>{post.datetime}</span>
            </div>
          </Content>
        </Card>
      </Link>
    </>
  );
}

export default Article;

const Card = styled.div`
  box-shadow: 0 5px 12px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: whitesmoke;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
const Image = styled.img`
  height: 9.5rem;
  width: 9rem;
  margin-right: 2rem;
`;
const Content = styled.div`
  & title {
    font-weight: bold;
  }

  & .card__footer {
    margin-top: 2rem;
    display: flex;
    align-items: baseline;

    & span {
      font-weight: 100;
    }
    & * {
      padding-left: 1rem;
    }
  }
`;
