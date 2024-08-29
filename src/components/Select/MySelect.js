import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <BaseSelect id={label} value={value} onChange={onChange}>
        {children}
        <VisuallyHidden>
          {label}: {displayedValue}
        </VisuallyHidden>
      </BaseSelect>
      <label htmlFor={label}>
        <ChevronIcon id="chevron-down" size={24} strokeWidth={2} />
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: fit-content;
 
  
}
`;

const BaseSelect = styled.select`
  appearance: none;
  border: 0;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 46px;
  border-radius: 8px;
  color: ${COLORS.gray700};
`;

const ChevronIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

export default Select;
