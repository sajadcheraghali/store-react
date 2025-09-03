import type { ComponentPropsWithoutRef } from "react"

type Tvariant = "primary" | "secondary" | "danger"| "success" | "warning"  ;
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant? : Tvariant;
};

function Button({children , variant, style ,...rest}: ButtonProps) {
  return (
    <button  {...rest} style={{borderRadius : "6px", padding :"4px 8px", cursor : "pointer",...style , ...checkvariant(variant)}} >
        {children }
    </button>
  )
}

export default Button

function checkvariant(variant?: Tvariant) {
  if (variant === "primary") {
    return {backgroundColor: "blue", color: "white"};
  }else if (variant === "secondary") {
    return {backgroundColor: "gray", color: "white"};
  } else if (variant === "danger") {
    return {backgroundColor: "red", color: "white"};
  } else if (variant === "success") {
    return {backgroundColor: "green", color: "white"};
  } else if (variant === "warning") {
    return {backgroundColor: "orange", color: "white"};
  }
}