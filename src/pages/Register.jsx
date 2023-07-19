import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/999303/pexels-photo-999303.jpeg?auto=compress&cs=tinysrgb&w=1600")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreements = styled.span`
  font-size: 16px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #dadada;
  font-weight: 500; 
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" type="text" />
          <Input placeholder="Last Name" type="text" />
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Agreements>
            By creating an account, I consent to the processing of my personal
            data as described in the <b>Privacy Policy</b>.
          </Agreements>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
