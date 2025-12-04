import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from './ui/Button';
import Input from "./ui/Input";
import Heading from "./ui/Heading";


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
      <Heading as='h1'>
        Hello, World with Styled!
      </Heading>
      <Heading as='h2'>Hello, beautiful country!</Heading>
      <Button onClick={() => alert('pink button')}>pink button</Button>
      <Button onClick={() => alert('pink button')}>purple button</Button>
      <Heading as='h3'>Form</Heading>
      <Input placeholder="number of guests" ttype='number'/>
    </StyledApp>
    </>
  )
}

export default App
