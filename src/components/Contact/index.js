import React from 'react';

function Contact() {
  return (
    <main>
      <form id="comment">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" autoComplete="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Contact;
