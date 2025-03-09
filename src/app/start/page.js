import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <br></br>
      <br></br>
      <main className="flex min-h-screen flex-col items-center p-8 ">
        <label className="block mb-2 text-lg font-medium text-blue-900 ">Here you can check the longest period that two employees worked in the same project.</label>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center">
          <div className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
            <Link href="/employees" >
              <h2 className="mb-3 text-2xl font-semibold">Check </h2>
            </Link>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> Upload .csv file</p>
          </div>
        </div>
      </main>
    </div>
  )
}
