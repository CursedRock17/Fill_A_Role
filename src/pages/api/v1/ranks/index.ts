import { NextApiRequest, NextApiResponse } from "next";
import rankJSON from "../../../../utils/ranks.json";


const ranksTotal = (req:NextApiRequest, res:NextApiResponse) => {
        const {
            method
          } = req

          
        
          switch (method) {
            case 'GET':
              // Get data from your database
              res.status(200).json( rankJSON )
              break
            default:
              res.setHeader('Allow', ['GET'])
              res.status(405).end(`Method ${method} Not Allowed`)
          }
}

export default ranksTotal