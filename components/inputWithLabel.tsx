import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { Colors } from "../styles/tokens";
import { InputLabel } from "./InputLabel";

const Input = styled.input<{ largeSize: boolean }>`
  border: 1px solid ${Colors.OFF_WHITE};
  border-radius: 4px;
  width: 100%;
  height: ${(p) => (p.largeSize ? 50 : 40)}px;
  font-size: ${(p) => (p.largeSize ? 18 : 16)}px;
  padding: 0 12px;
`;

const TextArea = styled.textarea<{ largeSize: boolean }>`
  border: 1px solid ${Colors.OFF_WHITE};
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: ${(p) => (p.largeSize ? 160 : 120)}px;
  font-size: ${(p) => (p.largeSize ? 18 : 16)}px;
  padding: 8px 12px;
`;

interface Props {
  type?: HTMLInputTypeAttribute | "textarea";
  largeSize?: boolean;
  readOnly?: boolean;
  label: string;
  value: string;
  onChange?: (value: string) => void;
}

export function InputWithLabel({
  type = "text",
  largeSize = false,
  readOnly = false,
  label,
  value,
  onChange,
}: Props) {
  return (
    <label>
      <InputLabel
        kind={readOnly ? "secondary" : "primary"}
        largeSize={largeSize}
      >
        {label}
      </InputLabel>
      {type === "textarea" ? (
        <TextArea
          largeSize={largeSize}
          readOnly={readOnly}
          value={value}
          onChange={(event) => {
            onChange?.(event.target.value);
          }}
        />
      ) : (
        <Input
          largeSize={largeSize}
          type={type}
          readOnly={readOnly}
          value={value}
          onChange={(event) => {
            onChange?.(event.target.value);
          }}
        />
      )}
    </label>
  );
}
