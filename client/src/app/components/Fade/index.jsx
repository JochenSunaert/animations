'use client';
import React, { useEffect } from 'react';
import styles from './style.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Index() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: false, // Allow animation to trigger multiple times
            offset: 500, // Start animation a bit earlier before it reaches the viewport
        });

        // Optional: Refresh AOS on resize
        window.addEventListener('resize', AOS.refresh);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', AOS.refresh);
        };
    }, []);

    return (
        <div data-aos="fade-in" className={styles.textsection}>
            <div className="test">
                <h2>Scroll to Reveal</h2>
                <br />
                <p>This text fades in and fades out as you scroll.</p>
            </div>
        </div>
    );
}
