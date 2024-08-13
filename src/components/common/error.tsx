import { NavLink } from "react-router-dom"

function Error() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-4xl"> Error, 404 Page not found.</h2>
      <p className="py-8 underline"><NavLink to={`/`}>Back to Home</NavLink></p>
    </div>
  )
}

export default Error
