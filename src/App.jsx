import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from './ui/Button';
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: tomato;
`;

const StyledApp = styled.div`
  background-color: #f0d198;
  padding: 20px;
  height: 100vh;
`;
function App(){
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <H1>
        Hello, World with Styled!
      </H1>
      <Button onClick={() => alert('pink button')}>pink button</Button>
      <Button onClick={() => alert('pink button')}>purple button</Button>
      <Input placeholder="number of guests" ttype='number'/>
    </StyledApp>
    </>
  )
}

export default App
