import React from "react";
import styled from "styled-components/native";

export function HomeListEmpty() {
  return (
    <Wrapper>
      <Label>Nenhum livro encontrado</Label>
    </Wrapper>
  );
}

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40% 0;
`;

export const Label = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.textLight};
`;
