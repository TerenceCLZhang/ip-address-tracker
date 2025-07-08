export interface IPApiResponse {
  ip: string;
  success: boolean;
  country_code: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  postal: string;
  connection: {
    isp: string;
  };
  timezone: {
    utc: string;
  };
}
