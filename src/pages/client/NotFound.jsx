import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section id="not-found">
      <div class="error-container">
        <div class="error-title">404</div>
        <div class="error-message">Oops! The page you are looking for does not exist.</div>
        <img src="https://via.placeholder.com/300x200" alt="Illustration" class="illustration"/>
        <Link to={'/'} class="btn btn-primary home-button">Go Home</Link>
    </div>
    </section>
  );
}
