/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 / 16 + "rem",
    "--valueHeight": 8 / 16 + "rem",
    "--borderRadiusBar": 4 + "px",
    "--borderRadiusValue": 4 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": 0,
  },
  medium: {
    "--height": 12 / 16 + "rem",
    "--valueHeight": 12 / 16 + "rem",
    "--borderRadiusBar": 4 + "px",
    "--borderRadiusValue": 4 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": 0,
  },
  large: {
    "--height": 24 / 16 + "rem",
    "--valueHeight": 16 / 16 + "rem",
    "--borderRadiusBar": 8 + "px",
    "--borderRadiusValue": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": 4 + "px",
  },
};

const StyledProgressBar = styled.progress`
  border: 0;

  &::-webkit-progress-bar {
    background-color: ${COLORS.gray50};
    border-radius: var(--borderRadiusBar);
    overflow: hidden;
    height: var(--height);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${({ value }) =>
      value > 99.5
        ? "var(--borderRadiusValue)"
        : "var(--borderRadiusValue) 0 0 var(--borderRadiusValue)"};
  }
`;

const ProgressBar = ({ value, size, ...restProps }) => {
  const styles = SIZES[size];

  return (
    <StyledProgressBar max={100} value={value} style={styles} {...restProps}>
      {value}
    </StyledProgressBar>
  );
};

export default ProgressBar;
