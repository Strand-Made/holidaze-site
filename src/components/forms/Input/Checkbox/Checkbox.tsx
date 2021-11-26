import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { borderRadius } from "../../../../globalStyle/_variables";
import Label from "../../Label/Label";

interface ICheckbox {
  name: string;
  labelText: string;
  value: string | number;
  onChange?: ChangeEventHandler;
  checked?: boolean;
}

export const CheckBoxInput = styled.input`
  appearance: none;
  color: currentColor;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid var(--cool-gray-4);
  border-radius: ${borderRadius.sm};
  transform: translateY(3px);
  display: grid;
  gap: 0.5rem;
  place-content: center;
  cursor: pointer;
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 5rem 5rem var(--blue-6);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
    outline: 3px solid var(--blue-6);
  }
`;
export const CheckboxContainer = styled.div``;

const Checkbox = ({ name, labelText, onChange, checked, value }: ICheckbox) => {
  return (
    <CheckboxContainer>
      <Label htmlFor={name}>
        <CheckBoxInput
          name={name}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
        />
        {labelText}
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
