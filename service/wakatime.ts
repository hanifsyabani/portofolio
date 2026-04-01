import { WakaTimeAPIResponse } from "@/@types/wakatime";
import axios from "axios";

export const GetWakaTimeStats = async (): Promise<WakaTimeAPIResponse> => {
  try {
    const response = await axios.get("/api/wakatime");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to get WakaTime stats");
    }
    throw new Error("Failed to get WakaTime stats");
  }
};
