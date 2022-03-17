import Link from 'next/link'
export default function Home() {
  return (
    <div>
     <Link href="/nfl">
       Go nfl
     </Link>
        <div/>
     <Link href="/nfl/test">
       Go nfl test
     </Link>
    </div>
  )
}
