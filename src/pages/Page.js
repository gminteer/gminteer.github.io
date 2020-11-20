import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './Page.module.scss';

const variants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.1 } },
  out: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Page({ style, title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const className = style ? `${styles.Page} ${style}` : styles.Page;

  return (
    <motion.main
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
    >
      {children}
    </motion.main>
  );
}
