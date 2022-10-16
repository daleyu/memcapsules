import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { TextArea } from "../layouts/proxyform.style";
import { Occasion } from "../store/proxyFormStore";
interface Props {
  occasion: Occasion;
}

export const ProxyOccasionEntry = observer(function ProxyOccasionEntry({
  occasion,
}: Props) {
  // TODO deal with time zone weirdness
  return (
    <div>
      <div>
        <label>
          Occasion label:
          <TextArea
            type="text"
            value={occasion.label}
            onChange={(event) => {
              occasion.label = event.target.value;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Date
          <input
            type="date"
            value={format(occasion.date, "yyyy-MM-dd")}
            onChange={(event) => {
              occasion.date = new Date(event.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
});
