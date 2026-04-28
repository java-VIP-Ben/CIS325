import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Contact Me</h2>

      <form
        action="https://formspree.io/f/xyklqwqv"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input type="text" name="name" placeholder="Your name" required />

        <input type="email" name="email" placeholder="Your email" required />

        <textarea
          name="message"
          placeholder="Your message"
          rows="6"
          required
        />

        <button onClick={() => navigate("/home")} type="submit">Send</button>
      </form>
      <button style={{ marginTop: "12px" }}onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default Contact;
