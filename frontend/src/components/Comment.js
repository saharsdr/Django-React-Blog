import React from "react";
import { Card } from "react-bootstrap";
function Comment({ author, comment, datetime }) {
  return (
    <div className="my-5 w-100">
      <Card className="text-right">
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{datetime}</Card.Footer>
      </Card>
    </div>
  );
}

export default Comment;
