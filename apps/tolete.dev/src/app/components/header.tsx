import { Container } from '@/components/container'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import { Linkedin } from './svgs'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Link from 'next/link'

export function Header() {
  return (
    <div className='relative overflow-hidden pt-36 pb-10 md:pt-30 md:pb-10 flex items-start md:items-center'>
      <Container className='flex flex-col'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className="flex-1/2 flex flex-col justify-center after:content-[''] relative after:absolute after:bottom-10 after:-left-90 after:w-[500px] after:h-[300px] after:blur-[300px] after:mr-[-25%] after:mt-[-5%] after:[background:linear-gradient(260deg,green_0%,rgba(115,67,210,0)50%)] ">
            <span className='text-2xl font-bold'>Hi! I am Edgar.</span>
            <h1 className='text-4xl sm:text-5xl font-bold mt-6 bg-linear-to-r to-[#72ab3a] from-lime-900 dark:from-lime-100 bg-clip-text text-transparent'>
              Fullstack Web
              <br /> Developer
            </h1>
            <p className='mt-6'>
              I enjoy building websites and innovative reliable systems. I also like learning new
              tools that would make the job done.
            </p>
            <div className='flex flex-row gap-2'>
              <HoverBorderGradient
                as='a'
                containerClassName='mt-6'
                target='_blank'
                href='https://1drv.ms/w/c/7768db99836e3a9a/QZo6boOZ22gggHdcCQAAAAAAXfO1iojOXuPGOw'
              >
                Download Resume
              </HoverBorderGradient>
              <Link
                href='https://www.linkedin.com/in/edgar-tolete/'
                target='_blank'
                className='pt-6'
                prefetch={false}
                aria-label='Learn more about Edgar Tolete on LinkedIn'
              >
                <Linkedin width={44} height={44} />
              </Link>
            </div>
            <TextGenerateEffect
              className='mt-6 font-bold text text-sm'
              words='Let me help you with your next project.'
            />
          </div>
          <div className='flex-1/2 flex justify-center items-center'>
            <Image
              src={'/edgar-tolete.webp'}
              alt='Edgar Tolete'
              priority={true}
              width={500}
              height={500}
              className='hidden sm:block'
            />
            <Image
              src={'/edgar-tolete.webp'}
              alt='Edgar Tolete'
              priority={true}
              width={280}
              height={280}
              className='sm:hidden'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
