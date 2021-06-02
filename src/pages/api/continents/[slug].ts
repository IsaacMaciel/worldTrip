import { NextApiRequest, NextApiResponse } from "next";
import continentsJson from "../../../../continents.json";

const continents = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const continentInfo = continentsJson.find(
    (continent) => continent.idName === String(slug).toLocaleLowerCase()
  );

  if (!continentInfo)
    return res.status(404).json({ error: "Continent not found" });
  return res.json(continentInfo);
};

export default continents;
