import "../Styles/Contact.css"
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-card-header">
          <h3>Get in Touch</h3>
          <p>
            Fill out the form below and we get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-card-body">
          <form action="https://formspree.io/f/mbjnvwjv" method="POST">
            <input
              type="text"
              name="First Name"
              placeholder="Put your first Name"
              autoComplete="off"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Put your Last Name"
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Put your Email"
              autoComplete="off"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter text message"
              autoComplete="off"
            ></textarea>
            <div className="contact-card-footer">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
