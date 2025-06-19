import React from 'react';

const SupportPage = () => {
  return (
    <section id="support" className="content-section">
      <div className="container">
        <h2>Support & Contact</h2>
        <p>Have questions, feedback, or need help? Fill out the form below, and we'll get back to you as soon as possible.</p>
        
        {/* 
          This form uses Formspree, a free service for static sites.
          1. Go to https://formspree.io/ and create a new form.
          2. Replace 'YOUR_FORM_ID' with your actual Formspree form ID in the action URL.
        */}
        <form action="https://formspree.io/f/mqabljzq" method="POST" className="support-form">
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default SupportPage;