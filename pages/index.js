import path from 'path'
import fs from 'fs/promises'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function HomePage({ programs }) {
  return (
    <div
      className={`max-w-md mx-auto min-h-screen flex items-center justify-center ${inter.className}`}
    >
      <div>
        <h1 className="text-center text-4xl my-4">Program Pages</h1>
        <ol className="list-decimal pl-8">
          {programs.map(program => (
            <li key={program.slug}>
              <a
                href={`/${program.slug}`}
                className="text-ocean-blue underline hover:no-underline"
              >
                {program.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'programs.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export async function getStaticProps({ params }) {
  const data = await getData()
  return {
    props: {
      programs: data.programs,
    },
  }
}
