import { ButtonProps } from "./types"
import { ButtonComponent } from "./styles"

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
  isBlueButton = false,
  isStandardButton = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      onClick={onClick}
      type={type}
      disabled={disabled}
      $isBlueButton={isBlueButton}
      $isStandardButton={isStandardButton}
    >
      {name}
    </ButtonComponent>
  )
}

export default Button