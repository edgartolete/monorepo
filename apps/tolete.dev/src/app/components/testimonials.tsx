'use client'

import { Container } from '@/components/container'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { JSX } from 'react'
import Image from 'next/image'

type TTestimonial = {
  avatar: string
  name: string
  content: JSX.Element
}

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      startIndex: 0,
      loop: true
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const testimonials: TTestimonial[] = [
    {
      name: 'Warren V.',
      avatar: '/testimonials/warren.webp',
      content: (
        <>
          <p className='mb-4'>
            I&apos;ve had the pleasure of working with Edgar for nearly a year, and in that time,
            he’s consistently impressed me with both his technical skill and his team spirit. Edgar
            brings a strong depth of knowledge to the table and is always generous in sharing his
            insights and ideas with others.
          </p>
          <p className='mb-4'>
            He’s approachable, easy to work with, and brings a great sense of humor that makes team
            collaboration enjoyable. Beyond his technical contributions, Edgar has shown clear
            potential as a leader—he’s proactive, thoughtful, and has a natural ability to inspire
            those around him. Any team would be lucky to have him.
          </p>
        </>
      )
    },
    {
      name: 'Kervy C.',
      avatar: '/testimonials/kervy.webp',
      content: (
        <>
          <p className='mb-4'>
            I’ve had the privilege of working alongside Edgar for more than a year now—first at
            Volenday and now at Vtime—and throughout that time, he has consistently impressed me
            with his professionalism, technical expertise, and natural leadership.
          </p>
          <p className='mb-4'>
            Edgar is not only an excellent web developer, but also a highly effective team leader.
            He brings structure and clarity to our projects, ensuring that deadlines are met without
            compromising code quality or user experience. His ability to break down complex
            problems, guide the team through challenges, and maintain a calm, solutions-oriented
            mindset makes him a go-to person for both technical and strategic decisions.
          </p>
          <p className='mb-4'>
            Having worked with him across two companies, I’ve seen first-hand how he builds trust
            within a team, mentors others, and contributes to a positive, productive work culture.
            Edgar’s leadership has been a key factor in the success of several major initiatives
            we&apos;ve delivered together.
          </p>
          <p className='mb-4'>
            I highly recommend Edgar for any senior or leadership role in web development. He brings
            not just skills, but a genuine dedication to team success and continuous improvement.
          </p>
        </>
      )
    },
    {
      name: 'Nikko E.',
      avatar: '/testimonials/nikko.webp',
      content: (
        <>
          <p className='mb-4'>
            It is a privilege to work with Edgar. As a new developer in a professional setting, I
            couldn’t ask for more than to have someone like him to learn from.
          </p>
          <p className='mb-4'>
            Edgar constantly shows his deep understanding of development and what it means to lead a
            team. His professionalism, patience, and willingness to help others make a real
            difference in our daily work. He’s not only technically strong but also understands the
            importance of communication, collaboration, and creating a positive work environment.
          </p>
        </>
      )
    },
    {
      name: 'Rae Dominique A.',
      avatar: '/testimonials/rae.webp',
      content: (
        <>
          <p className='mb-4'>
            I am grateful working alongside with Edgar as a fellow developer on several complex
            projects, and I can confidently say he brings an exceptional level of professionalism
            and technical expertise to everything he does. Edgar consistently demonstrated strong
            problem-solving skills and a deep understanding of both development and project
            management. His ability to balance hands-on development with high-level decision-making
            made him a key contributor to our team&apos;s success.
          </p>
        </>
      )
    }
  ]

  return (
    <Container className='py-20' id='testimonials'>
      <h2 className='text-3xl font-bold text-center'>Testimonials</h2>
      <div ref={emblaRef} className='overflow-hidden mt-8'>
        <div className='flex'>
          {testimonials.map((i) => {
            return <TestimonialCard testimonial={i} key={i.name} />
          })}
        </div>
      </div>
    </Container>
  )
}

function TestimonialCard({ testimonial }: { testimonial: TTestimonial }) {
  const { avatar, name, content } = testimonial

  return (
    <div className='min-w-0 flex-[0_0_100%] sm:w-xl sm:flex-none px-5 sm:px-9'>
      <div className='border border-gray-500/50 rounded-lg pt-10 pb-8 px-5'>
        <div className='flex flex-row align-center content-center gap-4 mb-6'>
          <Image src={avatar} alt={name} width={64} height={64} className='rounded-4xl' />
          <div className='flex flex-col justify-center text-lg font-bold'>{name}</div>
        </div>
        {content}
      </div>
    </div>
  )
}
