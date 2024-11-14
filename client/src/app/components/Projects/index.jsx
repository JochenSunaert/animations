import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Gomu Gomu no Gigant",
        src: "giant.jpg"
    },
    {
        title: "Gomu Gomu no Jump Rope",
        src: "jumprope.png"
    },
    {
        title: "Gomu Gomu no Dawn Rocket",
        src: "rocket.jpg"
    },
    {
        title: "Gomu Gomu no Lightning",
        src: "lighting.png"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight + 200,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Met Gear 5 bereikte Luffy een nieuw niveau van kracht, waarbij hij zijn lichaam en de wereld om zich heen kon vervormen alsof het pure rubber was. Deze vorm gaf hem een speelse, bijna cartooneske vrijheid, die al zijn vijanden verraste</p>
                </div>
                <div className={styles.column}>
                    <p>Na de transformatie veranderde het gevecht volledig – Luffy lachte vol zelfvertrouwen terwijl hij Kaido’s aanvallen moeiteloos ontweek en zijn eigen verrassende krachten liet zien. De strijd werd een spektakel, waarbij niemand kon voorspellen wat Luffy als volgende zou doen.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
