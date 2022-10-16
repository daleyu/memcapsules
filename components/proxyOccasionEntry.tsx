import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { Occasion } from "../store/proxyFormStore";
import { InputWithLabel } from "./inputWithLabel";

interface Props {
  occasion: Occasion;
}

export const ProxyOccasionEntry = observer(function ProxyOccasionEntry({
  occasion,
}: Props) {
  // TODO deal with time zone weirdness
  return (
    <div>
      <InputWithLabel
        label="Occasion (e.g. 12th Birthday):"
        value={occasion.label}
        onChange={(value) => {
          occasion.label = value;
        }}
      />
      <InputWithLabel
        type="date"
        label="Date:"
        value={format(occasion.date, "yyyy-MM-dd")}
        onChange={(value) => {
          occasion.date = new Date(value);
        }}
      />
    </div>
  );
});
