//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React 
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Imports from React Bootstrap 
import {Form,Button,Container,Alert,InputGroup,} from "react-bootstrap";
import { Card } from "react-bootstrap";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";


const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={styles.SignUpContainer}>
      <Container>
        <Card className={styles.CardContainer}>
          <br/>
          <Card.Title className={styles.Header}>Sign up</Card.Title>
        <br />
        <br />
        <Form onSubmit={handleSubmit} className={styles.SignUpForm}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <InputGroup>
              <Form.Control
                className={styles.Input}
                type={showPassword1 ? "text" : "password"}
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
              <InputGroup.Text
                onClick={() => setShowPassword1(!showPassword1)}
                style={{ cursor: "pointer", userSelect: "none" }}
                title={showPassword1 ? "Hide password" : "Show password"}
              >
                {showPassword1 ? "🙈" : "👁️"}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          {errors?.password1?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <InputGroup>
              <Form.Control
                className={styles.Input}
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
              <InputGroup.Text
                onClick={() => setShowPassword2(!showPassword2)}
                style={{ cursor: "pointer", userSelect: "none" }}
                title={showPassword2 ? "Hide password" : "Show password"}
              >
                {showPassword2 ? "🙈" : "👁️"}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          {errors?.password2?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          
          <Button
              className={`${btnStyles.Button} ${styles.Margin}`}
              type="submit"
          >
              Sign up
          </Button>
          {errors?.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}
        </Form>
        <br />
        <Link className={styles.Link} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Card>
      </Container>
      
    </Container>
  )
}
export default SignUpForm;


    
  


