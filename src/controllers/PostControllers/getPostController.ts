import { Request, Response } from 'express'

export default function getPostController(req: Request, res: Response) {
  res.status(200).json({ opa: 'helloworld' })
}
