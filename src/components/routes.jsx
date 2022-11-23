import MainPage from "./MainPage";
import UsersLayout from "./UsersLayout";
import {Navigate, Outlet} from "react-router-dom";
import EditUserPage from "./EditUserPage";
import UserPage from "./UserPage";
import UsersListPage from "./UsersListPage";

const routes = [
    {
        path: "",
        element: <MainPage/>
    },
    {
        path: "users",
        element: <UsersLayout/>,
        children: [{
            index: true,
            element: <UsersListPage/>
        },
            {
                path: ":userId",
                element: <Outlet/>,
                children: [{
                    path: "profile",
                    element: <UserPage/>
                }, {
                    path: "edit",
                    element: <EditUserPage/>
                }, {
                    path: "*",
                    element: <Navigate to="../"/>
                }],
            },
        ],
    },
]

export default routes