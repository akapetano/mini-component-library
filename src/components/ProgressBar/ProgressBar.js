/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 / 16 + "rem",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 / 16 + "rem",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 24 / 16 + "rem",
    "--padding": 4 + "px",
    "--borderRadius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        "--padding": styles["--padding"],
        "--borderRadius": styles["--borderRadius"],
      }}
    >
      <BarWrapper>
        <VisuallyHidden>{value}</VisuallyHidden>
        <Bar
          style={{ "--width": value + "%", "--height": styles["--height"] }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  height: var(--height);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  padding: var(--padding);
`;

export default ProgressBar;
