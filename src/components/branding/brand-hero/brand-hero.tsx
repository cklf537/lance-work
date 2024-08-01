// import img1 from "../../../assets/Screenshot 2024-07-31 at 5.36.10 PM.png"
import img1 from "../../../assets/p3.png"
export default function BrandHero() {
    return (
        <div className="lg:flex">
            <div className="flex lg:w-1/2 lg:h-1/2 p-5 lg:px-0 justify-center">
                <img src={img1} className="max-h-65"  />
            </div>
            <div className="flex lg:w-1/2 p-5 lg:px-0 items-center">
                <div>
                    <h1 className="text-5xl font-bold pb-5">Refferal,</h1>
                    <h3 className="text-3xl pb-5">Drives Industries with top talent.</h3>
                    <button className="p-2 px-8 text-1xl rounded-full mr-5 bg-purple-600 text-white">Reffer</button>
                    <button className="p-2 px-8 text-1xl rounded-full bg-purple-600 text-white">Find refferal</button>
                </div>
            </div>
        </div>
    )
}
