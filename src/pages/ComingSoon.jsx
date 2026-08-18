import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ComingSoon.module.css';

// Ensure your 1440x745 PNG is placed in the assets folder
import heroImage from '../assets/coming-soon-hero.png';

export default function ComingSoon() {
  // Using exactly what's in the design mockup
  const currentDate = "Date";

  return (
    <div className={styles.pageContainer}>
      
      <Helmet>
        <title>Nexgn | Coming Soon</title>
        <meta name="description" content="Replace manual paperwork with borderless, lightning-fast workflows." />
      </Helmet>

      {/* Top Logo */}
      <header className={styles.header}>
          <svg width="60" height="60" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72.5 0C92.5 0 110.5 15.5 110.5 35.5V110.5C110.5 110.5 110.5 110.5 110.5 110.5L82.5 82.5C79.5 79.5 74.5 79.5 71.5 82.5L65.5 88.5C62.5 91.5 62.5 96.5 65.5 99.5L90.5 124.5H19.5L90.5 53.5C93.5 50.5 93.5 45.5 90.5 42.5L84.5 36.5C81.5 33.5 76.5 33.5 73.5 36.5L0 110.5V19.5L27.5 47.5C30.5 50.5 35.5 50.5 38.5 47.5L44.5 41.5C47.5 38.5 47.5 33.5 44.5 30.5L15.5 1.5C15.5 1.5 15.5 1.5 15.5 1.5H72.5Z" fill="#E22A2A"/>
          </svg>
      </header>

      {/* Main Content Wrapper (Locks max width for 4K screens) */}
      <div className={styles.contentWrapper}>
        
        {/* Info Section (Mobile First Order) */}
        <div className={styles.infoWrapper}>
          <div className={styles.topActions}>
            <span className={styles.dateText}>{currentDate}</span>
            <button className={styles.notifyBtn}>Get notified</button>
          </div>
          <h2 className={styles.tagline}>
            Replace manual paperwork with borderless, lightning-fast workflows.
          </h2>
        </div>

        {/* Main Visual Centerpiece */}
        <main className={styles.mainVisual}>
          
          {/* Background Huge Text - Split for Left/Right Alignment */}
          <div className={styles.hugeTextContainer}>
            <h1 className={styles.hugeTextTop}>COMING</h1>
            <h1 className={styles.hugeTextBottom}>SOON</h1>
          </div>

          {/* Foreground Hero Image */}
          <img 
            src={heroImage} 
            alt="Nexgn Coming Soon Character" 
            className={styles.heroImage} 
          />
          
          {/* Footer Text Overlay */}
          <div className={styles.footerText}>
            <p>Designed with Trust</p>
            <p>Engineered for the World.</p>
          </div>

        </main>
      </div>

    </div>
  );
}