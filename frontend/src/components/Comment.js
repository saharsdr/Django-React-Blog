import React from "react";
import { Card } from "react-bootstrap";
function Comment({ data }) {
  return (
    <div className="my-5 w-100">
      <Card className="text-right">
        <Card.Header>
          <a href={data.author}>{data.name}</a>
        </Card.Header>
        <Card.Body>
          <Card.Text>{data.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{data.date}</Card.Footer>
      </Card>
    </div>
  );
}

export default Comment;
