import axios from "axios";
import type { IPApiResponse } from "../types/ip";

export const fetchIPData = async (
  ipAddress: string = ""
): Promise<IPApiResponse> => {
  const endpoint = `https://ipwho.is/${ipAddress}`;
  const response = await axios.get(endpoint);
  return response.data;
};
