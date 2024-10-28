import { InputProps } from "./types"
import { InputComponent } from "./styles"

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
    <InputComponent
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input