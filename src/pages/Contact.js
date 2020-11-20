import React, { useState } from 'react';

import Card from 'components/Card';

import Page from './Page';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const { name, email, comment } = formState;

  function validateForm(e) {
    switch (e.target.name) {
      case 'email': {
        const atom = "[a-zA-Z0-9!#$%&'*+\\-/=?^_`{|}~]"; // https://tools.ietf.org/html/rfc5322#section-3.2.3
        const dotAtom = `${atom}+(.?${atom}+)*`; // I think I'm reading the definition of "dot-atom-text" correctly
        const re = new RegExp(`^${dotAtom}@${dotAtom}$`);
        if (!re.test(e.target.value)) {
          setErrors({ ...errors, email: 'Invalid email address.' });
        } else {
          const { email, ...otherErrors } = errors;
          setErrors({ ...otherErrors });
        }
        break;
      }
      case 'name': {
        if (!e.target.value.length) {
          setErrors({ ...errors, name: 'Name cannot be blank.' });
        } else {
          const { name, ...otherErrors } = errors;
          setErrors({ ...otherErrors });
        }
        break;
      }
      case 'comment':
      default: {
        if (!e.target.value.length) {
          setErrors({ ...errors, comment: 'Comment cannot be blank.' });
        } else {
          const { comment, ...otherErrors } = errors;
          setErrors({ ...otherErrors });
        }
        break;
      }
    }
    if (Object.keys(errors).length < 1)
      setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    // TODO: actual form submission
    console.log('Submission data:', formState);
  }

  return (
    <Page style={styles.Contact} title="~gminteer/contact">
      <div className={styles.container}>
        <Card>
          <form id="comment" onSubmit={submitForm}>
            <div className={styles.labelBlock}>
              <label htmlFor="name">Your name</label>
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              defaultValue={name}
              onBlur={validateForm}
              className={errors.name ? styles.invalidField : ''}
            />
            <div className={styles.labelBlock}>
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              defaultValue={email}
              onBlur={validateForm}
              className={errors.email ? styles.invalidField : ''}
            />
            <div className={styles.labelBlock}>
              <label htmlFor="comment">Comment</label>
              {errors.comment && (
                <span className={styles.error}>{errors.comment}</span>
              )}
            </div>
            <textarea
              id="comment"
              name="comment"
              onBlur={validateForm}
              defaultValue={comment}
              className={errors.comment ? styles.invalidField : ''}
            />
            <button type="submit">Submit</button>
          </form>
        </Card>
      </div>
    </Page>
  );
}
