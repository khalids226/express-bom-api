import { Application } from "express";
import { bomRouter } from "./routers/bom";

export const registerRoutes = (app: Application) => {
  app.use('/v1/bom', bomRouter)
}