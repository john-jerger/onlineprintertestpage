'use client';
import { SITE } from '../lib/site';
export default function ContactForm() {
  function send(e) {
    e.preventDefault();
    const f = e.target;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(f.message.value + '\n\n' + f.elements.name.value)}`;
  }
  return (
    <form onSubmit={send} className="form">
      <label htmlFor="name">Your name</label><input id="name" name="name" required />
      <label htmlFor="subject">Subject</label><input id="subject" name="subject" required />
      <label htmlFor="message">Message</label><textarea id="message" name="message" rows={6} required />
      <button className="btn" type="submit">Send message</button>
    </form>
  );
}
