import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function FormatDate(date:Date){

  const newDate = new Date(date)
  return newDate.toLocaleDateString("en-US",{
    day:"numeric",
    month:"short",
    year:"numeric"
  })
}