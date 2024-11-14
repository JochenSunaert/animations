import React, { useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

export default function TypewriterScroll() {
    return (
        <div className={styles.container}>
            <TypewriterText tag="h2">Kaido had Luffy verslagen...</TypewriterText>
            <TypewriterText tag="p">Zijn lichaam was stil en levenloos.</TypewriterText>
            <TypewriterText tag="p">Iedereen dacht dat het voorbij was.</TypewriterText>
            <TypewriterText tag="p">Totdat er iets veranderde.</TypewriterText>
            <TypewriterText tag="p">Een sprankje energie... een glimlach.</TypewriterText>
            <TypewriterText tag="p">Luffy stond weer op...</TypewriterText>
        </div>
    );
}

function TypewriterText({ tag, children }) {
    const textRef = useRef(null);
    const [displayText, setDisplayText] = useState('');
    const [hasAnimated, setHasAnimated] = useState(false);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const typeText = () => {
            const fullText = children;
            let currentText = '';
            let index = 0;

            const typeInterval = setInterval(() => {
                if (index < fullText.length) {
                    currentText += fullText[index];
                    setDisplayText(currentText);
                    index += 1;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100); // Adjust typing speed here

            return typeInterval;
        };

        ScrollTrigger.create({
            trigger: textRef.current,
            start: "top 80%", // Trigger as it enters 80% of the viewport
            onEnter: () => {
                if (!hasAnimated) {
                    typeText();
                    setHasAnimated(true);
                }
            },
            once: true // Ensures it only triggers once
        });

        return () => ScrollTrigger.refresh();
    }, [children, hasAnimated]);

    const Tag = tag; // Dynamically set the tag (h2 or p)

    return <Tag ref={textRef} className={styles.typewriterText}>{displayText}</Tag>;
}
