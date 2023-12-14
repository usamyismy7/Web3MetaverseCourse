// 1c - server & client switching/composition patterns

// firstly install server-only: npm install server-only

// carousal problem - if we use carousal component directly to a server Component, it will throw an error. we have to wrap third-party components that rely on client-only features in their own Client components and then import them into the server component e.g., 1c-gallery.tsx or 1c-carousal.tsx

import 'server-only'

import Carousal from '@/components/Carousal/1c-carosal'
import Gallery from '@/components/Carousal/1c-gallery'

export async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const res2 = await fetch('https://external-service.com/data', {
    //     headers: {
    //         authorization: process.env.API_KEY,
    //     },
    // })
    const data = await res.json()
    // const data2 = await res2.json()
    return { data }
}

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <Carousal />
        </main>
    )
}
