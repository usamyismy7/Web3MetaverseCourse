import Counter from '@/components/1b-counter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Counter />
    </main>
  )
}
