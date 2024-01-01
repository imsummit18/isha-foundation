import { NextResponse } from "next/server";

import jsonData from "../../../../data.json";
export async function GET(req: Request, res: Response) {
  try {
    return NextResponse.json(jsonData);
  } catch (err: any) {
    console.log("err while fetching Data", err);
    throw new Error("err while fetching data", err);
  }
}
