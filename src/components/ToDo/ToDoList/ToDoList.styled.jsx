import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  padding: 0;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
text-align: center;
padding: 15px;
font-size: 18px;
gap: 5px;
  width: 200px;
  height: 50px;
  border: 1px solid #dad8d8;
  box-shadow: #ad42831a 0px 1px 0px, #ad42831a 0px 8px 24px, #ad42831a 0px 16px 48px;
`;

export const Button = styled.button`
  width: 80px;
    padding: 8px 12px;
    border-radius: 10px;
    border: none;
    background-color: #cccdd1;
    color: white;
    cursor: pointer;
    transition: all 300ms;
    :hover{
        background-color :#f898a1;
    } 
`