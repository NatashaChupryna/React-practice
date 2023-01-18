import styled from '@emotion/styled';

export const Title = styled.h2`
    font-size: 26px;
    color: #f898a1;
text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`

export const AddInput = styled.input`
width: 224px;
    border: 1px dotted #999;
    border-radius: 0;
    outline: transparent;
`

export const Button = styled.button`
  width: 100px;
  margin-left: 20px;
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