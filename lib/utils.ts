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