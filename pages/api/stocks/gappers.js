

export default async function handler(req, res) {

  // const body = req.body

  const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=${process.env.POLYGON_API_KEY}`
  try {
    const request = await fetch(url)
    
    res.status(200).json(request)
  } catch (err) {
    res.status(500).json({ error: err })
  }
  

}

