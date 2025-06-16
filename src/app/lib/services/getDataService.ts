import path from "path";
import { promises as fs } from "fs";

export async function getDataFromJSON() {
  const filePath = path.join(process.cwd() + "/src/app/lib/data/", "data.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.log(error);
    return [];
  }
}
