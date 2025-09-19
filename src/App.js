import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const InviteScreen = () => {
  const [showAboutDetails, setShowAboutDetails] = useState(false);
  const [timeLeft, setTimeLeft] = useState(72); // 72 hours limit
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAboutDetails = () => {
    setShowAboutDetails(!showAboutDetails);
  };

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 3600000); // Update every hour
    return () => clearInterval(timer);
  }, []);

  const handleRequestInvite = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className={styles.container}>
      {/* Exclusive Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>💕</span>
          <span className={styles.logoText}>InviteClub</span>
          <span className={styles.exclusiveBadge}>EXCLUSIVE</span>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.linkIcon}>🔗</div>
          <div className={styles.closeIcon}>✕</div>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className={styles.urgencyBanner}>
        <div className={styles.urgencyContent}>
          <span className={styles.urgencyIcon}>⏰</span>
          <span className={styles.urgencyText}>
            Limited invitation expires in {timeLeft}h
          </span>
          <span className={styles.urgencyPulse}></span>
        </div>
      </div>

      {/* Premium Event Image */}
      <div className={styles.eventImageContainer}>
        <div className={styles.eventImage}>
          <img 
            src={require('./assets/banner.png')} 
            alt="Exclusive Dating Event" 
            className={styles.bannerImage}
          />
          <div className={styles.premiumOverlay}>
            <div className={styles.exclusiveTag}>INVITE ONLY</div>
          </div>
          <div className={styles.eventTitle}>
            <div className={styles.eventCategory}>PREMIUM DATING EVENT</div>
            <h1 className={styles.mainTitle}>THE</h1>
            <h1 className={styles.fridayTitle}>FRIDAY</h1>
            <h1 className={styles.editTitle}>EDIT</h1>
            <div className={styles.eventDate}>
              <span className={styles.dateNumber}>19</span>
              <span className={styles.dateSeparator}>//</span>
              <span className={styles.dateMonth}>SEPT</span>
              <span className={styles.dateSeparator}>//</span>
              <span className={styles.dateDay}>FRIDAY</span>
            </div>
            <div className={styles.eventTime}>Curated Singles Night • 9:00 PM</div>
            <div className={styles.exclusivityNote}>By invitation only</div>
          </div>
        </div>
      </div>

      {/* Premium Content */}
      <div className={styles.scrollableContent}>
        <div className={styles.eventCard}>
          <div className={styles.eventHeader}>
            <h2 className={styles.eventName}>
              Elite Singles Mixer ft. DJ Sahil Gulati
            </h2>
            <div className={styles.verifiedBadge}>
              <span className={styles.verifiedIcon}>✓</span>
              <span>Verified Event</span>
            </div>
          </div>

          <div className={styles.exclusiveFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>👥</span>
              <span>Pre-screened singles only</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🥂</span>
              <span>Premium open bar included</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎭</span>
              <span>Professional matchmaking</span>
            </div>
          </div>

          <div className={styles.hostSection}>
            <span className={styles.curatedBy}>Curated by</span>
            <div className={styles.hostAvatars}>
              <div className={styles.avatar}>
                <img src="https://i.pravatar.cc/50?img=1" alt="Host" />
                <div className={styles.verificationMark}>✓</div>
              </div>
              <div className={styles.avatar}>
                <img src="https://i.pravatar.cc/50?img=2" alt="Host" />
                <div className={styles.verificationMark}>✓</div>
              </div>
              <div className={styles.avatar}>
                <img src="https://i.pravatar.cc/50?img=3" alt="Host" />
                <div className={styles.verificationMark}>✓</div>
              </div>
            </div>
            <span className={styles.hostNames}>Premium Matchmakers +2 others</span>
          </div>

          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📅</span>
              <span>September 19th, 2025</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <span>Bastian Garden City - VIP Lounge</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>👤</span>
              <span>Limited to 50 verified singles</span>
            </div>
          </div>

          <div className={styles.exclusiveAccess}>
            <div className={styles.accessHeader}>
              <span className={styles.lockIcon}>🔐</span>
              <span>Exclusive Access Required</span>
            </div>
            <p className={styles.accessText}>
              This is a premium, invite-only dating event. Your invitation grants you access to our most exclusive singles community.
            </p>
          </div>

          <div className={styles.aboutSection}>
            <div className={styles.aboutHeader} onClick={toggleAboutDetails}>
              <h3 className={styles.aboutTitle}>About This Exclusive Event</h3>
              <span className={styles.expandIcon}>{showAboutDetails ? '−' : '+'}</span>
            </div>
            
            {showAboutDetails && (
              <div className={styles.expandedDetails}>
                <div className={styles.premiumDescription}>
                  <p>
                    Join Bangalore's most exclusive singles event where quality meets sophistication. 
                    Our carefully curated guest list ensures you'll meet like-minded professionals 
                    in an intimate, upscale setting.
                  </p>
                </div>

                <div className={styles.whatToExpect}>
                  <h4>What to Expect</h4>
                  <div className={styles.expectationsList}>
                    <div className={styles.expectationItem}>
                      <span className={styles.expectationIcon}>🌟</span>
                      <div>
                        <strong>Curated Guest List</strong>
                        <p>Pre-screened professionals aged 25-40</p>
                      </div>
                    </div>
                    <div className={styles.expectationItem}>
                      <span className={styles.expectationIcon}>🍸</span>
                      <div>
                        <strong>Premium Experience</strong>
                        <p>Welcome cocktails and gourmet appetizers</p>
                      </div>
                    </div>
                    <div className={styles.expectationItem}>
                      <span className={styles.expectationIcon}>💝</span>
                      <div>
                        <strong>Icebreaker Activities</strong>
                        <p>Fun, engaging ways to connect naturally</p>
                      </div>
                    </div>
                    <div className={styles.expectationItem}>
                      <span className={styles.expectationIcon}>🎵</span>
                      <div>
                        <strong>DJ Sahil Gulati</strong>
                        <p>Perfect ambiance with sophisticated beats</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.dressCode}>
                  <h4>Dress Code</h4>
                  <p>Smart casual to cocktail attire. Look your best!</p>
                </div>

                <div className={styles.exclusiveBadgeSection}>
                  <div className={styles.premiumBadge}>
                    <span className={styles.premiumIcon}>👑</span>
                    <span>A Premium InviteClub Experience</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Premium CTA Button */}
      <div className={styles.floatingButton}>
        <button 
          className={`${styles.requestButton} ${isAnimating ? styles.animating : ''}`}
          onClick={handleRequestInvite}
        >
          <span className={styles.buttonIcon}>💌</span>
          <span>Request My Exclusive Invite</span>
          {isAnimating && <div className={styles.buttonShimmer}></div>}
        </button>
        <div className={styles.privacyNote}>
          Your privacy is protected. Invitation subject to approval.
        </div>
      </div>
    </div>
  );
};

export default InviteScreen;