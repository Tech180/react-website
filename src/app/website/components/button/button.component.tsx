import { ButtonProps } from "../../interfaces/ui/button.interface";
import { ButtonView } from "./button.view";

export function ButtonComponent(props: ButtonProps) {
  return <ButtonView {...props} />;
}
