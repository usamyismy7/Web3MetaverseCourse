import { Users } from "../page";
import Navbar from "../../components/navbar";

type Params = {
    params: {
        id: string
    }
}

export default async function User_data({params}: Params) {
    const user_id = parseInt(params.id);
    const users = await Users();
    const user = users.find((user: any) => user.id === user_id);

    return (
        <div className="px-3 py-3">
            <Navbar />
            <ul className="px-4 py-4">
                <li key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </li>
            </ul>
        </div>
    )
}