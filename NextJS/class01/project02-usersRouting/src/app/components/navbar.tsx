import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='p-3 bg-teal-500 space-x-8'>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/users">Users</Link>
        </div>
    )
}