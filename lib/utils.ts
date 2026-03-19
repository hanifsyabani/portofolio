import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "@/sanity/api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  // Handle formats like "2025-07" or "2025-12"
  if (!dateString) return ""
  
  const [year, month] = dateString.split("-")
  if (!year || !month) return dateString
  
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})
export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto("format").fit("max")
}

export function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end =
    endDate && endDate !== "Now" ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // 🔥 penting: adjust kalau belum full month
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  const startStr = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const endStr =
    endDate === "Now" || !endDate
      ? "Present"
      : end.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });

  const durationStr =
    months < 1
      ? "< 1 month"
      : months === 1
      ? "1 month"
      : months >= 12
      ? `${Math.floor(months / 12)} yr${Math.floor(months / 12) > 1 ? "s" : ""}${
          months % 12 > 0 ? ` ${months % 12} mo` : ""
        }`
      : `${months} months`;

  return `${startStr} – ${endStr} · ${durationStr}`;
}