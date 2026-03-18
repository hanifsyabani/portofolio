import axios from "axios";

export async function GetAllAchievement(params? :{
    query?: string;
    page?: number;
    sortOrder?: "asc" | "desc";
    limit?: number;
}){
    try {
        const res= await axios.get("/api/achievement", {
            params: {
                ...params
            }
        })

        return res.data
    } catch (error) {
        console.log("Error fetching achievements:", error);
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}