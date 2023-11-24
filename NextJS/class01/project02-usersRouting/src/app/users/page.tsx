import Navbar from "../components/navbar";
import Link from 'next/link';

export async function Users () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export default async function UsersPage() {
    const users = await Users();
    return (
        <div className="px-2">
            <Navbar />
        <div>Users</div>
        <ul className="px-4">
            {users.map((user: any) => {
                return <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            })}
        </ul>
        </div>
    )
}