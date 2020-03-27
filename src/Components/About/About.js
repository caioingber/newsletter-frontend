import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import "./About.css";

const About = props => {
  return (
    <Jumbotron className="fill">
      <h1 className="display-3">HacDC NewsLetter</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Link to="/signup">
          <Button color="success">Sign Up</Button>
        </Link>
      </p>
    </Jumbotron>
  );
};

export default About;
