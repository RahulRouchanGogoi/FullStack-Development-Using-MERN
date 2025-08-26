import styled from "styled-components";

const StyledComponents = () => {
  const Heading = styled.h1`
    color: Red;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  `;

  const Heading2 = styled.h1({
    color: "Red",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
  });

  const Button = styled.button`
    color: blue;
    width: 100px;
    height: 20px;
    margin: 10px;
    border-radius:20px
  `;

  return (
    <div>
      <hr />
      <h1>Styled Components</h1>
      <Heading>Styled using Style Component</Heading>
      <Heading>Heading 2</Heading>
      <Heading2>Styled using Object way</Heading2>
      <Button>Test Button</Button>
    </div>
  );
};

export default StyledComponents;
