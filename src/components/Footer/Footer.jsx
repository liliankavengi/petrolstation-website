import { Link } from 'react-scroll';
import './Footer.css';

const quickLinks = ['Home', 'Services', 'Fuel Prices', 'About', 'Contact'];
const quickIds = ['hero', 'services', 'pricing', 'about', 'contact'];

const hours = [
    { day: 'Mon – Fri', time: '24 Hours' },
    { day: 'Saturday', time: '24 Hours' },
    { day: 'Sunday', time: '24 Hours' },
    { day: 'Public Holidays', time: '24 Hours' },
];

const socials = ['𝕏', 'f', 'in', '▶'];
const socialLabels = ['Twitter/X', 'Facebook', 'LinkedIn', 'YouTube'];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon">⛽</div>
                            Fuel<span>Pro</span>
                        </div>
                        <p className="footer-tagline">
                            Nairobi's trusted fuel partner since 1998.
                            Premium quality, unbeatable service, open 24/7 on Mombasa Road.
                        </p>
                        <div className="footer-location">
                            📍 Mombasa Road, Nairobi, Kenya
                        </div>
                        <div className="footer-socials">
                            {socials.map((s, i) => (
                                <button key={i} className="social-btn" aria-label={socialLabels[i]}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="footer-col-title">Quick Links</div>
                        <ul className="footer-links">
                            {quickLinks.map((label, i) => (
                                <li key={label}>
                                    <Link
                                        className="footer-link"
                                        to={quickIds[i]}
                                        smooth
                                        duration={600}
                                        offset={-70}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <div className="footer-col-title">Services</div>
                        <ul className="footer-links">
                            {['Fuel & Lubrication', 'Auto Mechanics', 'Convenience Store', 'Car Wash', 'EV Charging', 'Fleet Accounts'].map(s => (
                                <li key={s}>
                                    <Link
                                        className="footer-link"
                                        to="services"
                                        smooth
                                        duration={600}
                                        offset={-70}
                                    >
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <div className="footer-col-title">Opening Hours</div>
                        {hours.map(({ day, time }) => (
                            <div className="hours-item" key={day}>
                                <span className="hours-day">{day}</span>
                                <span className="hours-time">{time}</span>
                            </div>
                        ))}
                        <div className="open-now">
                            <span className="open-dot" />
                            Open Right Now
                        </div>
                        <div className="footer-contact-mini">
                            <div>📞 +254 715 123 456</div>
                            <div>✉️ info@fuelpro.co.ke</div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {year} FuelPro Station Kenya. All rights reserved.</span>
                    <div className="footer-bottom-links">
                        <span className="footer-bottom-link">Privacy Policy</span>
                        <span className="footer-bottom-link">Terms of Use</span>
                        <Link className="footer-bottom-link" to="hero" smooth duration={600} offset={-70}>
                            Back to Top ↑
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
