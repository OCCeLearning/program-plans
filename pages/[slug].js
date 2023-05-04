import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import logo from '@/data/images/logo.png'
import { Inter } from 'next/font/google'
import {
  FaAtom,
  FaDivide,
  FaKey,
  FaBalanceScale,
  FaMedal,
  FaSatelliteDish,
  FaTheaterMasks,
} from 'react-icons/fa'
import { AiFillBank } from 'react-icons/ai'
import { HiDesktopComputer } from 'react-icons/hi'
import { TbLetterD, TbLetterE } from 'react-icons/tb'

const inter = Inter({ subsets: ['latin'] })

export default function Program({ program }) {
  const { credits, overview, requirements, pdf, slug, title, terms } = program
  const reactIcons = {
    key: FaKey,
    gmat: FaDivide,
    gtec: HiDesktopComputer,
    pe: FaMedal,
    elective: TbLetterE,
    gdiv: TbLetterD,
    gcom: FaSatelliteDish,
    ghis: AiFillBank,
    ghum: FaTheaterMasks,
    gscl: FaAtom,
    gsoc: FaBalanceScale,
  }
  let usedIcons = []
  return (
    <div className={`${inter.className}`}>
      <header className={`pt-16`}>
        <div className="hidden lg:block max-w-screen-xl mx-auto h-0.5 rounded bg-ocean-blue mb-6" />
        <h1 className={`text-center text-4xl font-bold py-1 text-ocean-blue`}>
          {title}
        </h1>
        <p className="text-center -mt-1">
          Online Educational Plan - 7.5 Week Sessions
        </p>
      </header>
      <main className={`max-w-screen-xl mx-auto px-4 xl:px-0`}>
        {terms.length > 0 &&
          terms.map((term, i) => (
            <section key={`${slug}-term-${i}`} className={`py-4`}>
              <h2 className={`text-center text-2xl font-bold`}>{term.title}</h2>
              <div
                className={`border-2 border-ocean-blue rounded-md ${
                  i % 2 !== 0 && `bg-yellow-50`
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-10 p-4 md:p-6 lg:p-8">
                  {term.sessions.length > 0 &&
                    term.sessions.map((session, j) => {
                      return (
                        <div key={`${slug}-term-${i}-session-${j}`}>
                          <div>
                            <h3
                              className={`text-lg text-center text-ocean-blue border-b border-ocean-blue font-bold`}
                            >
                              {session.title}
                            </h3>
                            <table className={`w-full text-center`}>
                              <thead>
                                <tr className={`sr-only`}>
                                  <th>Key</th>
                                  <th>Course Code</th>
                                  <th>Course Title</th>
                                  <th>Credits</th>
                                </tr>
                              </thead>
                              <tbody>
                                {session.courses.length > 0 &&
                                  session.courses.map((course, k) => {
                                    return (
                                      <tr
                                        key={`${slug}-term-${i}-session-${j}-course-${k}`}
                                        className={`border-b`}
                                      >
                                        <td className="w-[5%] py-2 ">
                                          {course.icons.length > 0 &&
                                            course.icons.map((item, l) => {
                                              if (
                                                usedIcons.indexOf(item) === -1
                                              ) {
                                                usedIcons.push(item)
                                              }
                                              const Icon = reactIcons[item]
                                              let label
                                              switch (item) {
                                                case 'pe':
                                                  label = 'Program Elective'
                                                  break
                                                case 'elective':
                                                  label = 'Elective'
                                                  break
                                                case 'gcom':
                                                  label = 'Communications'
                                                  break
                                                case 'gdiv':
                                                  label = 'Diversity'
                                                  break
                                                case 'ghis':
                                                  label = 'History'
                                                  break
                                                case 'ghum':
                                                  label = 'Humanities'
                                                  break
                                                case 'gmat':
                                                  label = 'Mathematics'
                                                  break
                                                case 'gscl':
                                                  label = 'Lab Science'
                                                  break
                                                case 'gsoc':
                                                  label = 'Social Science'
                                                  break
                                                case 'gtec':
                                                  label = 'Technology'
                                                  break
                                                default:
                                                  label = 'Program Requirement'
                                              }
                                              return (
                                                <Icon
                                                  key={`${slug}-term-${i}-session-${j}-course-${k}-icon-${l}`}
                                                  className={`text-ocean-blue ${
                                                    l > 0 && `mt-2`
                                                  }`}
                                                  aria-label={label}
                                                  aria-hidden={false}
                                                />
                                              )
                                            })}
                                        </td>
                                        <td>{course.code}</td>
                                        <td className="w-[60%]">
                                          {course.title}
                                        </td>
                                        <td className="w-[12%]">{`${course.credits} cr`}</td>
                                      </tr>
                                    )
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </section>
          ))}
      </main>
      <footer className={`mt-auto py-12`}>
        <div className="grid lg:grid-cols-2 lg:gap-x-6 max-w-screen-xl mx-auto items-center">
          <div>
            <h2 className={`text-center text-xl text-ocean-blue font-bold`}>
              Course Key
            </h2>
            <ul className="flex flex-col lg:flex-row flex-wrap justify-between max-w-xl mx-auto p-6">
              {usedIcons.length > 0 &&
                usedIcons.map((icon, i) => {
                  const legend = {
                    key: 'Program Requirement',
                    pe: 'Program Elective',
                    elective: 'Elective',
                    gcom: 'GCOM (GE Communications)',
                    gdiv: 'GDIV (GE Diversity)',
                    ghis: 'GHIS (GE History)',
                    ghum: 'GHUM (GE Humanities)',
                    gmat: 'GMAT (GE Mathematics)',
                    gscl: 'GSCL (GE Lab Science)',
                    gsoc: 'GSOC (GE Social Science)',
                    gtec: 'GTEC (GE Technological Competency or Information Literacy)',
                  }
                  let label
                  switch (icon) {
                    case 'pe':
                      label = 'Program Elective'
                      break
                    case 'elective':
                      label = 'Elective'
                      break
                    case 'gcom':
                      label = 'Communications'
                      break
                    case 'gdiv':
                      label = 'Diversity'
                      break
                    case 'ghis':
                      label = 'History'
                      break
                    case 'ghum':
                      label = 'Humanities'
                      break
                    case 'gmat':
                      label = 'Mathematics'
                      break
                    case 'gscl':
                      label = 'Lab Science'
                      break
                    case 'gsoc':
                      label = 'Social Science'
                      break
                    case 'gtec':
                      label = 'Technology'
                      break
                    default:
                      label = 'Program Requirement'
                  }
                  const Icon = reactIcons[icon]
                  return (
                    <li
                      key={`program-key-${i}`}
                      className="w-42 flex items-center"
                    >
                      <Icon
                        className={`text-ocean-blue h-5 w-5 inline mr-2 shrink-0`}
                        aria-label={label}
                        aria-hidden={false}
                      />
                      <span>{legend[icon]}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div>
            <h2
              className={`text-center text-xl text-ocean-blue font-bold mb-3`}
            >
              Note
            </h2>
            <p className="px-4">
              Please refer to the OCC catalog for program and General Education
              elective requirements. The General Education (GE) courses in this
              plan are recommendations only. Please discuss your program and
              course choices with an academic advisor, advisingoffice@ocean.edu.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-center max-w-3xl border-t mt-12 pt-12 mx-auto`}
        >
          <h2 className="text-ocean-blue font-bold text-2xl">{title}</h2>
          <h3 className="text-ocean-blue font-semibold">{credits} credits</h3>
          {overview && (
            <a
              href={overview}
              className={`px-4 py-3 my-4 bg-ocean-blue text-yellow-50 rounded-md text-center`}
            >
              Program Overview
            </a>
          )}
          {requirements && (
            <a
              href={requirements}
              className={`px-4 py-3 my-4 bg-ocean-blue text-yellow-50 rounded-md text-center`}
            >
              Program Requirements
            </a>
          )}
          {pdf && (
            <a
              href={pdf}
              className={`px-4 py-3 my-4 bg-ocean-blue text-yellow-50 rounded-md text-center`}
            >
              Download PDF
            </a>
          )}
        </div>
        <div className="max-w-screen-xl mx-auto flex justify-center lg:justify-end">
          <Image
            src={logo}
            alt="Ocean County College Logo"
            height={100}
            className="mb-3"
          />
        </div>
        <div className="max-w-screen-xl mx-auto h-0.5 rounded bg-ocean-blue" />
      </footer>
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
  const program = data.programs.find(program => program.slug === params.slug)
  return {
    props: {
      program,
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()
  const slugs = data.programs.map(program => program.slug)
  const params = slugs.map(slug => ({ params: { slug } }))
  return {
    paths: params,
    fallback: false,
  }
}
