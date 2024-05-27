import { RouterProvider } from "react-router-dom"
import { router } from "../presentation/components/router/router"

function FaceApp() {

  return (
    <RouterProvider router={router} />
  )
}

export default FaceApp
