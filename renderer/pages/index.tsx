import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button color="primary">Hello World</Button>;
    </Layout>
  )
}

export default IndexPage
