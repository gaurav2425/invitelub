import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const InviteScreen = () => {
  const [timeLeft, setTimeLeft] = useState(72);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  const handleRequestInvite = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
      
        <div className={styles.partyTag}>Tattle</div>
        
      </div>

      {/* Banner Image */}
      <div className={styles.bannerSection}>
        <img
          src="https://www.eharmony.com/homepage/wplp/wp-content/uploads/sites/5/2022/10/eharmony2944_B_2048x1080_sharp_80.jpg"
          alt="Exclusive Dating Event"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerDragHandle}></div>
      </div>

      {/* Card Overlay */}
      <div className={styles.cardOverlay}>
        <div className={styles.eventTitleMain}>
          TATTLE CLUB: MEMBERS ONLY
        </div>
        <div className={styles.eventSubtitle}>
          Invite-Only Dating Room
        </div>
       
        <div className={styles.hostRow}>
          <span className={styles.hostedBy}>Hosted by</span>
          <div className={styles.avatarStack}>
            <img src="https://i.pravatar.cc/40?img=1" alt="Host" />
            <img src="https://i.pravatar.cc/40?img=2" alt="Host" />
            <img src="https://i.pravatar.cc/40?img=3" alt="Host" />
            <img src="https://i.pravatar.cc/40?img=4" alt="Host" />
          </div>
          <span className={styles.hostNames}>Rudrani +3 others</span>
        </div>
        <div className={styles.eventDetailsRow}>
          <div className={styles.eventDetailBox}>
            <span>24 September’25</span>
            <span className={styles.dot}>•</span>
            <span>Bastian Garden City</span>
          </div>
        </div>
        <div className={styles.actionRow}>
          <button
            className={`${styles.primaryBtn} ${isAnimating ? styles.animating : ''}`}
            onClick={handleRequestInvite}
          >
            Count me in!
          </button>
          <button className={styles.secondaryBtn}>I'm out :(</button>
        </div>
        <div className={styles.acceptedRow}>
          <div className={styles.avatarStackSmall}>
            <img src="https://i.pravatar.cc/32?img=5" alt="User" />
            <img src="https://i.pravatar.cc/32?img=6" alt="User" />
            <img src="https://i.pravatar.cc/32?img=7" alt="User" />
          </div>
          <span className={styles.acceptedText}>
            412/400 accepted the invite
          </span>
        </div>
         <div className={styles.inviteDetails}>
          <div className={styles.inviteDescription}>
            <strong>About Tattle Club</strong>
            <ul className={styles.inviteList}>
              <li>
                <b>Invite-only access:</b> Only mutuals and their mutuals can join. Members can invite their trusted contacts.
              </li>
              <li>
                <b>Free tickets:</b> Start with 3 free tickets. Invite 3 friends and get 1 extra ticket.
              </li>
              <li>
                <b>Waiting queue & roses:</b> If the room is full, join the queue. Both inside and outside users can send roses to connect and invite each other for a chat.
              </li>
              <li>
                <b>Chat limit:</b> You can have up to 5 active chats. To match with someone new, unmatch an existing chat.
              </li>
              <li>
                <b>Speed dating:</b> Enjoy one-to-one speed dating. If you’re not interested, swap your pair for a new live conversation. Each user gets up to 10 swaps.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteScreen;