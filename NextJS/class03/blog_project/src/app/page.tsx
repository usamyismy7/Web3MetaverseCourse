import Image from 'next/image'
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgImg from "@/assets/bgimg.jpg"

export function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="w-4 h-4 mr-2" /> Login with Email
    </Button>
  )
}

export default function Home() {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-7'>
      <h1 className='font-bold text-white text-[40px]'>Welcome to my blog</h1>
      <ButtonWithIcon />
      </div>
      <Image src={bgImg} className="opacity-60 absolute w-full z-[-1]" alt="backgroundImage" />
    </main>
  )
}
