import React from "react";
import { Button, Image, Badge } from "react-bootstrap";
import styled from "styled-components";
import Comment from "../components/Comment";
function Single() {
  return (
    <Div>
      <div className="author">
        <h3>
          author <Button variant="info">followed</Button>
        </h3>
        <span>datetime</span>
      </div>
      <div className="article my-5">
        <h2>title</h2>
        <Image src="holder.js/100px250" fluid />
        <br />
        <p className="kholase text-muted">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          reiciendis itaque non possimus facere nostrum delectus deleniti
          tenetur praesentium dignissimos!
        </p>

        <p className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nam,
          nihil nisi sunt optio illum minus voluptatibus temporibus architecto
          fuga unde sit eos pariatur, necessitatibus rem laboriosam! Perferendis
          doloremque enim minus libero ipsum consectetur nihil, ex natus odio
          optio ea facilis esse reprehenderit, aspernatur expedita illo rem.
          Reiciendis, sed obcaecati. Voluptates quae tempora saepe mollitia
          animi aliquam vero excepturi, pariatur temporibus repellat nam
          suscipit quia expedita architecto neque quaerat explicabo dignissimos
          repudiandae molestiae odit consequuntur illum fugiat! Explicabo magni
          sapiente exercitationem nobis recusandae, aliquid ducimus nesciunt!
          Saepe facilis in quia totam eaque inventore, ipsam libero velit odit
          rerum dolor. Accusamus nobis est minima expedita cum ipsum libero
          debitis quasi, ab similique enim totam nam cupiditate inventore minus
          illo quaerat iure obcaecati veritatis deserunt voluptatem asperiores
          iste quos doloribus. Quam inventore vero, consectetur, voluptatem
          harum, quidem ipsum deleniti pariatur maxime sunt accusantium.
          Corrupti expedita et atque ex reiciendis tenetur, debitis nam ea magni
          odit commodi architecto, a eum quae neque minima aperiam dolorem.
          Ullam excepturi at perferendis corporis sapiente cumque illum autem ut
          vitae eius consectetur rerum veritatis quasi recusandae, esse dolore
          necessitatibus tempora expedita odio, et tempore dolor? Quis explicabo
          repellendus ducimus praesentium! Et placeat sequi, iure ducimus omnis
          accusamus?
        </p>
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
