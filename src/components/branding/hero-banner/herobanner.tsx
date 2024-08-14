
import bgImage from "../../../../src/assets/nik-MAgPyHRO0AA-unsplash.jpg";

export default function HeroBanner() {
  return (
    // <div className='grid grid-row-2 grid-flow-col gap-8 bg-no-repeat min-h-96 bg-auto bg-center max-h-dvh' style={{backgroundImage: `url(${bgImage})`}}>
    <div className='gap-8 bg-no-repeat min-h-64 bg-auto bg-center max-h-dvh content-end lg:grid lg:grid-row-2 lg:grid-flow-col' style={{backgroundImage: `url(${bgImage})`}}>
      <div className="py-5 text-center"></div>
      <div className="py-5 text-start gap-4 content-end bg-white bg-opacity-75 p-8">
        <h1 className="text-5xl font-bold">Refferal,</h1>
        <h3 className="text-3xl py-5">Drives Industries with top talent.</h3>
        <button className="p-2 px-8 text-1xl mr-5 bg-purple-600 text-white" onClick={()=>{}}>Add listng</button>
        <button className="p-2 px-8 text-1xl mr-5 bg-purple-600 text-white" onClick={()=>{}}>Find listing</button>
      </div>
    </div>
  )
}
