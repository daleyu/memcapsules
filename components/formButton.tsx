import { ReactNode } from "react";
import { Colors } from "../styles/tokens";

interface Props {
  kind?: "primary" | "secondary";
  fullWidth?: boolean;
  inline?: boolean;
  largeSize?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export function FormButton({
  kind = "primary",
  fullWidth = false,
  inline = false,
  largeSize = false,
  disabled = false,
  onClick,
  children,
}: Props) {
  const isPrimary = kind === "primary";

  return (
    <div
      style={{
        marginTop: largeSize ? 30 : 24,
        width: inline ? "fit-content" : "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          width: fullWidth ? "100%" : "fit-content",
          height: largeSize ? 50 : 40,
          borderRadius: 4,
          border: "none",
          backgroundColor: isPrimary ? Colors.PRIMARY_SOFT : Colors.OFF_WHITE,
          color: isPrimary ? Colors.WHITE : Colors.DARK_TEXT,
          fontSize: largeSize ? 18 : 16,
          fontWeight: "bold",
          cursor: "pointer",
          pointerEvents: disabled ? "none" : "auto",
          opacity: disabled ? 0.8 : 1,
        }}
      >
        {children}
      </button>
    </div>
  );
}
