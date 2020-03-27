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
    <Form onSubmit={props.submit}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="John"
          onChange={props.change}
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Smith"
          onChange={props.change}
        />
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
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignUp;
