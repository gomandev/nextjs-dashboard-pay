import { SpendingDataInterface } from "./../../interface/SpendingData";
import type { NextApiRequest, NextApiResponse } from "next";

import spendingData from "../../data/spending.json";
export default function api(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ data: spendingData });
}

export function getData(): SpendingDataInterface[] {
  const res: SpendingDataInterface[] = spendingData;
  return res;
}
