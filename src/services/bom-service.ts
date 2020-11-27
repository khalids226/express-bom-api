import axios from 'axios'
import logger from '../libs/logger'

function _mapTemperatureData(data: any) {
  const temperatureData = data.observations.data

  const responseData: Array<{
    name: string
    apparent_t: number
    lat: number
    lon: number
  }> = temperatureData
    .filter(({ apparent_t }: { apparent_t: number }) => apparent_t > 20)
    .map(({ name, apparent_t, lat, lon }: {
      name: string
      apparent_t: number
      lat: number
      lon: number
    }) => {
      return {
        name,
        apparent_t,
        lat,
        long: lon
      }
    })

  return responseData.sort((a, b) => a.apparent_t - b.apparent_t)
}

async function getTemperatureForecast() {
  const response = await axios.get(`http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json`)
  return _mapTemperatureData(response.data)
}

export const BomService = {
  getTemperatureForecast
}