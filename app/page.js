import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="mb-32 grid text-center lg:mb-0s lg:text-left">
      <Link href="/futbol" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className={`mb-3 text-2xl font-semibold`}>
            Sistema CRUD fútbol{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sistema que permite las operaciones CRUD (o ABMC Alta Baja Modificación Consulta) sobre una base de datos de fútbol.
          </p>
      </Link>
      </div>
    </main>
  )
}
