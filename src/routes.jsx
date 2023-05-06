import { Home } from "./pages/Home/Home";
import { NewUser } from "./pages/NewUser/NewUser";
import { Products } from "./pages/Products/Products";
import { UserList } from "./pages/UserList/UserList";

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/userslist', element: <UserList /> },
    { path: '/newuser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
]