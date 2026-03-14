import { ButtonProps } from "@/app/website/interfaces/ui/button.interface";
import { ButtonView } from "./button.view";

export function ButtonComponent(props: ButtonProps) {
  return <ButtonView {...props} />;
}
