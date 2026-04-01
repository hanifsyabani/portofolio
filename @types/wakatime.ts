export interface WakaTimeStatItem {
  name: string;
  percent: number;
  total_seconds: number;
  text: string;
  color?: string;
}

export interface WakaTimeData {
  languages: WakaTimeStatItem[];
  editors: WakaTimeStatItem[];
  operating_systems: WakaTimeStatItem[];
  categories: WakaTimeStatItem[];
  total_seconds: number;
  human_readable_total: string;
  daily_average: number;
  human_readable_daily_average: string;
  human_readable_range: string;
}

export interface WakaTimeAPIResponse {
  data: WakaTimeData;
}
