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
                <h2>WIE IS KAIDO</h2>
                <p>Kaido, bekend als de ‘Sterkste Wezen ter Wereld’, is de ultieme uitdaging voor Luffy en zijn bemanning. Deze legendarische piraat, die ook de bijnaam ‘Koning der Beesten’ draagt, heeft de kracht van een draak en een bijna onoverwinnelijk lichaam. Als leider van de Beasts Pirates en tiran van Wano, heeft hij het land jarenlang onderdrukt en in angst gehouden. Kaido’s kracht lijkt grenzenloos, en zijn droom is om een oorlog te ontketenen die de hele wereld zal veranderen.</p>
                <p>Maar Luffy’s confrontatie met Kaido gaat verder dan een simpele strijd om kracht. Het is een botsing van idealen, waarbij vrijheid en tirannie lijnrecht tegenover elkaar staan. Met Gear 5 vecht Luffy niet alleen voor zichzelf, maar ook voor het bevrijden van Wano en het omverwerpen van Kaido’s onderdrukkende heerschappij. Dit gevecht is het hoogtepunt van Luffy’s reis tot nu toe en heeft de hele One Piece wereld op scherp gezet."</p>
            </div>
        </div>
    );
}
