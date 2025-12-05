import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
  
  ${({type}) => type === 'horizontal' && css`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `}

  ${({type = 'vertical'}) => type === 'vertical' && css`
    flex-direction: column;
    gap: 1.6rem;
  `}
`;
export default Row;