'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from './components/Intro';
import Description from './components/Description';
import Projects from './components/Projects';
import Fade from './components/Fade';
import TypewriterScroll from './components/TypewriterScroll';
import Index from './components/Image';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description />
        <div className="dualgrid">
          <Index data-aos="fade-in" />
          <Fade />
        </div>

        <TypewriterScroll />
        <Projects />
      </main>
  )
}
