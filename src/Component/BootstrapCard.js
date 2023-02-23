import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";

function BootstrapCard() {
  return (
    <Card className="p-5">
      <Card.Title>This it title</Card.Title>
      <Card.Text>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aperiam
        quidem magni fuga harum quis accusantium impedit iure sint quos?{" "}
      </Card.Text>
      <Button>Click Here</Button>
    </Card>
  );
}

export default BootstrapCard;
