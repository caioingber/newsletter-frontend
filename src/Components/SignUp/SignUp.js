import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from "reactstrap";

const SignUp = props => {
  return (
    <div className="form-container">
      <Form onSubmit={props.submit}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="John"
            onChange={props.change}
          />
          <FormText color="danger">{props.info.errors.first}</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Smith"
            onChange={props.change}
          />
          <FormText color="danger">{props.info.errors.last}</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={props.change}
          />
          <FormText color="danger">{props.info.errors.email}</FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
