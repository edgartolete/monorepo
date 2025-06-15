import { Container } from '@/components/container'
import { differenceInYears } from 'date-fns'
import { Docker, Flutter, Golang, NextjsIcon, Nodejs, React, Tailwindcss, Typescript } from './svgs'
const initialReactExp = new Date('February 20 2023')
const initialFrontendExp = new Date('September 20 2020')
const frontendYrsExp = differenceInYears(new Date(), initialFrontendExp)
const reactYrsExp = differenceInYears(new Date(), initialReactExp)

export function About() {
  return (
    <Container className='py-20' id='about'>
      <h2 className='font-bold text-center text-3xl'> About Me</h2>
      <p className='mt-6'>
        I, Edgar Tolete is a web developer with {frontendYrsExp}+ years of experience, and &nbsp;{' '}
        {reactYrsExp}+ years of experience using React/NextJS framework. I graduated with a
        Bachelor&apos;s degree in Information Technology in 2013.
      </p>

      <p className='mt-6'>
        I am a passionate and dedicated web developer with strong experience in building and
        optimizing user interfaces. I have continuously enhanced my skills in testing, debugging,
        and improving web functionality to deliver high-quality digital experiences.
      </p>

      <p className='mt-6'>
        Hard-working by nature and an enthusiastic team player, I take pride in my commitment to
        every task I take on. I am always eager to learn and grow—both technically and
        interpersonally—while staying up to date with the latest trends and best practices in
        website design and development.
      </p>

      <p className='mt-6'>
        I thrive in collaborative environments, actively contributing ideas in brainstorming
        sessions and working closely with teams and clients to bring creative solutions to life. I’m
        confident in managing projects, perform well under pressure, and consistently meet
        deadlines. I value constructive feedback as a tool for growth and always maintain a high
        level of professionalism in everything I do.
      </p>
      <TechStack />
    </Container>
  )
}

function TechStack() {
  const size = 40
  return (
    <div className='flex flex-col gap-2 pt-20'>
      <h2 className='text-2xl font-bold text-center'>Tech Stack</h2>
      <div className='grid grid-cols-4 sm:grid-cols-8 gap-6 sm:w-xl m-auto'>
        <Typescript width={size} height={size} />
        <Tailwindcss width={size} height={size} />
        <React width={size} height={size} />
        <NextjsIcon width={size} height={size} />
        <Nodejs width={size} height={size} />
        <Golang width={size} height={size} />
        <Flutter width={size} height={size} />
        <Docker width={size} height={size} />
      </div>
    </div>
  )
}
