import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14 + "px",
    iconSize: 16 + "px",
    borderSize: 1 + "px",
    paddingLeft: 24 + "px",
    paddingBottom: 0,
    strokeWidth: 1,
    outlineOffset: 4 + "px",
  },
  large: {
    fontSize: 18 + "px",
    iconSize: 24 + "px",
    borderSize: 2 + "px",
    paddingLeft: 32 + "px",
    paddingBottom: 2 + "px",
    strokeWidth: 2,
    outlineOffset: 7 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={{
        "--borderSize": styles.borderSize,
        "--paddingBottom": styles.paddingBottom,
        "--outlineOffset": styles.outlineOffset,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.strokeWidth}
        />
      </IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--fontSize": styles.fontSize,
          "--paddingLeft": styles.paddingLeft,
        }}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  width: var(--width);
  padding-left: var(--paddingLeft);
  color: ${COLORS.gray700};
  font-size: var(--fontSize);
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  width: max-content;
  border-radius: 2px;
  padding-bottom: var(--paddingBottom);

  ${Input}:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: var(--outlineOffset);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default IconInput;
