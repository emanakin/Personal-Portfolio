import React from 'react';
import styles from '@/styles/components/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.textureOverlay}></div>
      <div className={styles.content}>{children}</div>
      <div className={styles.blur + ' ' + styles.blurTop}></div>
      <div className={styles.blur + ' ' + styles.blurBottom}></div>
      <div className={styles.blur + ' ' + styles.blurLeft}></div>
      <div className={styles.blur + ' ' + styles.blurRight}></div>
      <div className={styles.borderOverlay}></div>
    </>
  );
};

export default Layout;
