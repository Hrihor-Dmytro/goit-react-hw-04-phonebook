import styled from '@emotion/styled';

export const SectionList = styled.form`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const FormLabel = styled.label`
  margin-right: 10px;
`;

export const FormInput = styled.input`
  margin-left: 10px;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 5px;
  transition: background-color 250ms ease-in, border 250ms ease-in,
    color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid black;
  }
`;
