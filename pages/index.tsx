import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home = (props:any) => {
  const dataProps = props.data
  const dataObjects = Object.entries(dataProps)

  const {ticker, results} = dataProps

  const {v, vw, o, c, h, l} = results[0]

  return (
    <div className="flex h-screen">

      <main className=" m-auto">
        <div>Snapshot(15 min delayed)</div>
        <div>{results.length}</div>
        <div>{ticker}</div>
        <div>{v}</div>
        <div>{vw}</div>
        <div>{o}</div>
        <div>{h}</div>
        <div>{l}</div>
      </main>

    </div>
  )
}

export default Home



export async function getServerSideProps() {
  const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=${process.env.POLYGON_API_KEY}`  
  const request = await fetch(url)          
  const products = await request.json()

  return {
    props: {      
      data: await products,            
    }
  }
}
