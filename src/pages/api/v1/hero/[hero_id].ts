import { NextApiRequest, NextApiResponse } from "next";
import { heroes } from "../../../../utils/heroes";


export default (req:NextApiRequest, res:NextApiResponse) => {

    const {
        method
      } = req

      switch (method) {
        case 'GET':
          // Get data from your database
          const currentId:number = Number(req.query.hero_id) - 1
          const currentHero = heroes[currentId]
          
          res.status(200).json({ currentHero })
          break
        default:
          res.setHeader('Allow', ['GET'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
}
