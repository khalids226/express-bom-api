import { Router } from "express";
import { BomService } from "../services/bom-service";

export const bomRouter = Router()

bomRouter.get('/temperature', async (req, res) => {
  try {
    const response = await BomService.getTemperatureForecast()
    res.status(200).json({
      response
    })
  } catch (error) {
    res.status(503).json({
      error: 'Error Connecting to BOM.'
    })
  }
})
