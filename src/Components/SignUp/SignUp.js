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
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            onChange={props.change}
          />
          <FormText color="danger">{props.info.errors.first}</FormText>
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
