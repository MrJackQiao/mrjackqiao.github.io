import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Markdown from 'markdown-to-jsx';

import { aboutMarkdown } from '@/data/about';

import PageWrapper from './components/PageWrapper';

const count = (str: string) => str.split(/\s+/).filter((word) => word !== '').length;

export const metadata: Metadata = {
  description: 'Chu Qiao is a PhD student.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About Me</Link>
            </h2>
            <p>(in about {count(aboutMarkdown)} words)</p>
          </div>
        </header>
        <Markdown>{aboutMarkdown}</Markdown>
      </article>
    </PageWrapper>
  );
  // return (
  //   <PageWrapper>
  //     <article className="post" id="index">
  //       <header>
  //         <div className="title">
  //           <h2>
  //             <Link href="/about">About this site</Link>
  //           </h2>
  //           <p>
  //             A beautiful, responsive, statically-generated, react application written with modern
  //             Javascript.
  //           </p>
  //         </div>
  //       </header>
  //       <p>
  //         {' '}
  //         Welcome to my website. Please feel free to read more <Link href="/about">about me</Link>,
  //         or you can check out my <Link href="/resume">resume</Link>,{' '}
  //         <Link href="/projects">projects</Link>, view <Link href="/stats">site statistics</Link>,
  //         or <Link href="/contact">contact</Link> me.
  //       </p>
  //       <p>
  //         {' '}
  //         Source available <a href="https://github.com/mldangelo/personal-site">here</a>.
  //       </p>
  //     </article>
  //   </PageWrapper>
  // );
}
