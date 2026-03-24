import { GITHUB_ACCOUNTS } from "@/constants/github";
import axios from "axios";


export async function GetStatsGithub(){
  try {
    const res = await axios.get(GITHUB_ACCOUNTS.endpoint)

    if (res.status !== 200) throw new Error("Failed");
    return res.data;
  } catch (error) {
    throw error;
  }
}
