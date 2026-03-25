import axios from "axios";

export async function GetStatsUmami(){
  try {
    const res = await axios.get("/api/umami")
    if(res.status !== 200) throw new Error("Failed to fetch Umami stats")
    return res.data
  } catch (error) {
    throw error
  }
}