import { Categories } from "@/types";

const baseURL = "http://localhost:3000";

export const CategoryApiUrls: Record<(typeof Categories)[number], string> = {
  CPU: [baseURL, "cpus"].join("/"),
  GPU: [baseURL, "gpus"].join("/"),
  PSU: [baseURL, "psus"].join("/"),
  Motherboard: [baseURL, "mbs"].join("/"),
  RAM: [baseURL, "rams"].join("/"),
};
