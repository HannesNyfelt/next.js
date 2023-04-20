import Link from 'next/link'
import Image from 'next/image'



export default function Home() {
  return (
    <main>
      <div className='top'>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div id='content'>
        <h1>Welcome</h1>
        <Image alt='have a nice death' height={400} width={700} src={'/images/Have_a_nice_death.png'}></Image>
      </div>
    </main>

  )
}
