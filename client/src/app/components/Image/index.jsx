import React, { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './style.module.css';

export default function HoverDistortionImage() {
    const [hovered, setHovered] = useState(false);
    const imageRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);

    const projects = [
        { src: "/images/kaido.jpg", title: "Salar de Atacama" },
        { src: "/images/kaido2.jpg", title: "Valle de la Muerte" },
    ];

    const handleMouseEnter = () => {
        setHovered(true);
        // Apply the liquid-like distortion
        gsap.to(imageRef.current, {
            scale: 1.2, // Stretch the image
            filter: "blur(8px) brightness(0.7)", // Apply blur and lower brightness
            duration: 0.3,
            ease: "power2.out",
        });

        // Swap the image after distortion effect starts
        gsap.to(imageRef.current, {
            scale: 1.2,
            duration: 1,
            onComplete: () => {
                setCurrentImage((prev) => (prev === 0 ? 1 : 0)); // Toggle image
                gsap.to(imageRef.current, {
                    scale: 1,
                    filter: "blur(0px) brightness(1)",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        });
    };

    const handleMouseLeave = () => {
        setHovered(false);
        // Reverse the effect when mouse leaves
        gsap.to(imageRef.current, {
            scale: 1,
            filter: "blur(0px) brightness(1)", // Reset the effect
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div className={styles.container}>
            <div data-aos="fade-in"
                className={styles.imageWrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    ref={imageRef}
                    src={projects[currentImage].src}
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                
            </div>
            <p>hover me</p>
        </div>
    );
}
