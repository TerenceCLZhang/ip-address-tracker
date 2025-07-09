import type { IPApiResponse } from "../types/ip";
import type { Data } from "../types/data";

export const transformData = (data: IPApiResponse): Data | undefined => {
  if (!data.success) return;

  const transformedData: Data = {
    address: data.ip,
    location: `${data.city}, ${
      data.region_code ? `${data.region_code},` : ""
    } ${data.country_code} ${data.postal}`,
    timezone: `UTC ${data.timezone.utc}`,
    isp: data.connection.isp,
    lat: data.latitude,
    lon: data.longitude,
  };

  return transformedData;
};
