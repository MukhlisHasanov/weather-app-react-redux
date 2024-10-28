import { InputProps } from "./types";
import {
  InputWrapper,
  InputComponent,
} from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;