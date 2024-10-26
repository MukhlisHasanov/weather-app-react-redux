import { ButtonProps } from "./types"
import { ButtonComponent } from "./styles"

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
  isSearchButton = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      onClick={onClick}
      type={type}
      disabled={disabled}
      $isSearchButton={isSearchButton}
    >
      {name}
    </ButtonComponent>
  )
}

export default Button
