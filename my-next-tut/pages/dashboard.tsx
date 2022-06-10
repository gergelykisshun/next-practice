import { NextPage } from 'next';
import Link from 'next/link';

const dashboard: NextPage = () => {
  return (
    <>
      <div>dashboard page 1</div>
      <Link href="/login">to login</Link>
    </>

  )
}

export default dashboard;