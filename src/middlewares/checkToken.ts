import { NextFunction, Request, Response } from "express";

export const  checkToken = (req:Request,res:Response,next:NextFunction)=>{
  const authHeader = req.headers['authorization'];
  const TOKEN = authHeader&&authHeader.split(' ')[1];
  if(!TOKEN){
    return res.status(401).json({code:401,message:"Access Denied"})
  }
}