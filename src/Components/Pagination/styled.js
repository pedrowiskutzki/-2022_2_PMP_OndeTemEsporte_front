import styled from "styled-components";



export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  align-self: center;
`;

export const List = styled.li`
  margin-left: 1rem;
  &:nth-child(1) {
    margin-left: 0px;
  }
`;

export const ItemActive = styled.button`
  background: none;
  font-weight: bold;
  border: none;
  &:focus{
    outline: none;
  }
`;


export const ButtonPA = styled.button`

  background: white;
  padding: 5px;
  border: none;

`

