/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, x, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y print:divide-y-0">
        <div>
          <div className="space-y-2 pt-6 pb-8 print:hidden md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h1>
          </div>
          <div className="hidden print:block print:pt-4 print:pb-4">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Resume
            </h1>
          </div>
        </div>
        <div>
          {/* Print Layout - Compact with icons */}
          <div className="hidden print:block">
            <div className="print:pt-2">
              {/* Profile Info for Print - No Image */}
              <div>
                <h3 className="text-2xl font-bold leading-8 tracking-tight">김성현</h3>
                <div className="text-gray-600">
                  {occupation} · {company}
                </div>

                <div className="mt-2">
                  <div className="text-sm text-gray-600 print:mt-1">
                    Email:{' '}
                    <a
                      href={`mailto:${email}`}
                      className="underline"
                      aria-label={`Send email to ${email}`}
                    >
                      {email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-600 print:mt-1">
                    Phone:{' '}
                    <a href="tel:01094562396" className="underline" aria-label="Call 010-9456-2396">
                      010-9456-2396
                    </a>
                  </div>
                </div>

                {/* Social Icons - Below email */}
                <div className="mt-3 print:flex print:items-center print:gap-2">
                  <SocialIcon kind="github" href={github} size={4} />
                  <SocialIcon kind="linkedin" href={linkedin} size={4} />
                  <SocialIcon kind="x" href={x} size={4} />
                </div>
              </div>
            </div>

            {/* Content for Print */}
            <div className="prose max-w-none pt-6 pb-8 dark:prose-dark">{children}</div>
          </div>

          {/* Web Layout - Original */}
          <div className="items-start space-y-2 print:hidden xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <Image
                src={avatar}
                alt="avatar"
                width="192px"
                height="192px"
                className="h-48 w-48 rounded-full object-cover"
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="x" href={x} />
              </div>
              <div className="pt-4 print:hidden">
                <div className="flex space-x-2">
                  <Link passHref href="/about/ko">
                    <a className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      🇰🇷 한국어
                    </a>
                  </Link>
                  <Link passHref href="/about/en">
                    <a className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      🇺🇸 English
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
