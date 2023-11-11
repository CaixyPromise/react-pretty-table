import { createBrowserRouter } from "react-router-dom"
import { UserList } from "@/pages/Table"

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserList />
    }
])

export default router;