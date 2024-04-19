import { Reports } from 'app/components/posts'

export const metadata = {
  title: 'Report',
  description: 'Read my Report.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <Reports />
    </section>
  )
}
