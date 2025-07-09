import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import React from "react";

const DataDisplay = () => {
  const data = useSelector((state: RootState) => state.data);

  const infoMap = {
    "IP Address": data.address,
    Location: data.location,
    Timezone: `${data.timezone}`,
    ISP: data.isp,
  };

  return (
    <dl className="absolute w-full z-10 bg-white flex flex-col p-5 rounded-xl shadow-xl md:w-[85vw] 2xl:w-[75vw] md:justify-self-center md:flex-row md:justify-between md:p-8 xl:p-10 md:text-left md:items-start md:gap-0">
      {Object.entries(infoMap).map(([key, value], index) => (
        <React.Fragment key={key}>
          {index !== 0 && (
            <div className="hidden md:block w-px bg-dark-gray/30 mx-4 self-stretch lg:mr-5 xl:mr-10"></div>
          )}
          <div className="mb-2 md:flex-1 lg:mb-0">
            <dt className="uppercase text-xs font-medium text-gray-800 xl:mb-2">
              {key}
            </dt>
            <dd className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-dark">
              {value ? value : "N/A"}
            </dd>
          </div>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default DataDisplay;
