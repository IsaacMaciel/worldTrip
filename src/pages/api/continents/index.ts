import { NextApiRequest, NextApiResponse } from "next"
import continentsJson from '../../../../continents.json'

const continents = async (req: NextApiRequest, res: NextApiResponse) => {
    return res.json(continentsJson)
}

export default continents