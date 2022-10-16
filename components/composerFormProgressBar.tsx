import { Colors } from "../styles/tokens";
import { InputLabel } from "./InputLabel";

interface Props {
  completed: number;
  total: number;
}

export function ComposerFormProgressBar({ completed, total }: Props) {
  const percent = (completed / total) * 100;

  return (
    <div
      style={{
        marginTop: 30,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 8,
          borderRadius: 4,
          backgroundColor: Colors.OFF_WHITE,
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: 8,
            borderRadius: 4,
            backgroundColor: Colors.PRIMARY,
          }}
        />
      </div>

      <InputLabel kind="secondary">
        Progress: {completed}/{total}
      </InputLabel>
    </div>
  );
}
