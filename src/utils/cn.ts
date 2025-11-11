import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that merges multiple class names into a single string
 * by calling `clsx` and then `twMerge` on the result.
 *
 * @param {ClassValue[]} inputs - The class names to merge.
 * @returns string - The merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
