import { NewProduct } from "./pages/NewProduct/NewProduct";
import { Products } from "./pages/Products/Products";
import { UserList } from "./pages/UserList/UserList";
import { NewUser } from "./pages/NewUser/NewUser";
import { Home } from "./pages/Home/Home";

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/usersList', element: <UserList /> },
    { path: '/new-user', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: '/new-product', element: <NewProduct /> },
]