import  "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";

const Layout =({children} : {children : React.ReactNode}) => {
    return (
        <div className = "bg-dark container-fluid row" style = {{height: "100vh"}} >
            <div className = "col-sm-3 text-white d-flex flex-column border-end">
                <Link className="text-white" href={"/dashboard"}>Dashboard</Link>
                <Link className="text-white" href={"/dashboard/users_permissions"}>User Permissions</Link>
                <Link className="text-white" href={"/dashboard/user_management"}>User Management</Link>
                <Link className="text-white" href={"/dashboard/posts"}>Posts</Link>

            </div>
            <div className = "col-sm-9 text-white">
                {children}

            </div>
            <div className = "fixed-bottom d-flex flex-row">
                
            </div>
        </div>
    )
}

export default Layout;