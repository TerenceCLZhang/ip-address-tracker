import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

const DataDisplay = () => {
  const data = useSelector((state: RootState) => state.data);

  const infoMap = {
    "IP Address": data.address,
    Location: data.location,
    Timezone: `${data.timezone}`,
    ISP: data.isp,
  };

  return (
    <dl className="absolute w-full z-10 bg-white flex flex-col gap-3 p-5 rounded-xl mt-5 shadow-xl">
      {Object.entries(infoMap).map(([key, value]) => (
        <div className="mb-2" key={key}>
          <dt className="font-bold">{key}</dt>
          <dd>{value ? value : "N/A"}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DataDisplay;
