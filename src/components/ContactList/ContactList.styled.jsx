import styled from '@emotion/styled';

export const SectionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: left;
  margin: 0;
`;

export const SectionLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 15px;
`;
export const ContactTitle = styled.h2`
  margin-right: 15px;
  text-align: left;
  margin: 0;
  width: 160px;
`;
export const ContactTel = styled.a`
  width: 150px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition: color 250ms ease-in, border 250ms ease-in, color 250ms ease-in;
  &:hover,
  &:focus {
    color: tomato;
  }
`;
export const ContactButton = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 250ms ease-in, border 250ms ease-in,
    color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid black;
  }
`;
