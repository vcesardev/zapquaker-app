import React from "react";
import { View, TextProps } from "react-native";

import * as Styled from "./styled";

type TextH2Props = TextProps & {
  children: string;
};

const TextH2: React.FC<TextH2Props> = ({ children, ...props }) => {
  return <Styled.H2 {...props}>{children}</Styled.H2>;
};

export default TextH2;
