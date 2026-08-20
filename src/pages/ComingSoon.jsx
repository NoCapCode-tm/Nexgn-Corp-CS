import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ComingSoon.module.css';
import axios from "axios";

// Ensure your 1440x745 PNG is placed in the assets folder
import heroImage from '../assets/coming-soon-hero.png';

export default function ComingSoon() {
  const currentDate = "20 Sep, 2026";
  const [overlay, setOverlay] = useState(false);
  
  // --- NEW STATES FOR LOADING AND TOAST ---
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true); // Disable button and show clever loading text
    
try {
      const response = await axios.post("https://nexgn-backend.onrender.com/api/v1/admin/notified", {
        name: formData.fullName,
        email: formData.email,
        interest: formData.interest
      }, { withCredentials: true });
      
      console.log(response.data.message);
      
      // 1. Instantly close the overlay so the user sees the clean main page
      setOverlay(false);
      
      // GA4 Conversion Tracking: Log a "generate_lead" event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "Waitlist",
          event_label: "Get Notified Form Submitted",
        });
      }
      
      // 2. Clear the form data in the background
      setFormData({ fullName: '', email: '', interest: '' });

      // 3. Show Success Toast 
      setToast({ show: true, message: 'The old way is dead. Welcome to the borderless era.', type: 'success' });
      
      // 4. Hide the toast after 3.5 seconds
      setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3500);

    } catch (error) {
      console.log("Something went wrong", error.message);
      
      // Show Error Toast
      setToast({ show: true, message: 'Connection failed. The servers might be sleeping.', type: 'error' });
      
      // Hide error toast after 3 seconds
      setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
    } finally {
      setIsLoading(false); // Re-enable button
    }
  };

  return (
    <>
    <div className={styles.pageContainer}>
      
      <Helmet>
        <title>Nexgn | Coming Soon</title>
        <meta name="description" content="Replace manual paperwork with borderless, lightning-fast workflows." />
      </Helmet>

      {/* Top Logo */}
      <header className={styles.header}>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.6523 0C42.489 0.000225655 45.5996 3.11055 45.5996 6.94727V38.6523C45.5996 38.7397 45.595 38.8265 45.5918 38.9131L34.1758 27.7461C32.8045 26.4047 30.5929 26.4164 29.2363 27.7725L26.6494 30.3604C25.2931 31.7169 25.3054 33.9037 26.6768 35.2451L37.2617 45.5996H7.50293L36.6445 17.0938C38.0155 15.7522 38.0272 13.5644 36.6709 12.208L34.084 9.62109C32.7276 8.2648 30.5159 8.25267 29.1445 9.59375L0 38.1035V8.29199L11.3721 19.416C12.7434 20.7574 14.955 20.7461 16.3115 19.3896L18.8984 16.8018C20.2543 15.4452 20.2422 13.2583 18.8711 11.917L6.69531 0.00585938C6.77894 0.00287788 6.86291 0 6.94727 0H38.6523Z" fill="#FF0000"/>
          </svg>

      </header>

      {/* Main Content Wrapper (Locks max width for 4K screens) */}
      <div className={styles.contentWrapper}>
        
        {/* Info Section (Mobile First Order) */}
        <div className={styles.infoWrapper}>
          <div className={styles.topActions}>
            <span className={styles.dateText}>{currentDate}</span>
            <button className={styles.notifyBtn} onClick={()=>{setOverlay(true)}}>Get notified</button>
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

    {toast.show && (
      <div className={`${styles.toast} ${styles[toast.type]}`}>
        {toast.message}
      </div>
    )}

    {overlay && (
        <div className={styles.overlayBackdrop} onClick={() => !isLoading && setOverlay(false)}>
        <div className={styles.overlayCard} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.overlayTitle}>
          Get <span className={styles.red}>notified</span>
        </h2>

        <form onSubmit={handleSubmit} className={styles.overlayForm}>
          <div className={styles.formGroup}>
            <label>
              Full name<span className={styles.asterisk}>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter..."
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Email Address<span className={styles.asterisk}>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter..."
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Interest</label>
            <textarea
              name="interest"
              placeholder="Message"
              rows="5"
              value={formData.interest}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
          {isLoading ? "Shredding the manual paperwork..." : "Submit"}
        </button>
        </form>
      </div>
    </div>
    )}
    </>
  );
}