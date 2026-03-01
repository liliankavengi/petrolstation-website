import { Link } from 'react-scroll';
import './Hero.css';

const fuelTypes = [
    { name: 'Super Petrol', price: 'Ksh 176.58', dot: '#f8f5f1ff' },
    { name: 'Regular Petrol', price: 'Ksh 162.30', dot: '#f8f5f1ff' },
    { name: 'Diesel', price: 'Ksh 155.00', dot: '#f8f5f1ff' },
];

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg" />
            <div className="container">
                <div className="hero-inner">

                    {/* ── Left column: copy ── */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="hero-badge-dot" />
                            Open 24 Hours · 7 Days a Week
                        </div>

                        <h1 className="hero-title">
                            Nairobi's Trusted<br />
                            <span className="highlight">Fuel Partner</span><br />
                            Since 1998
                        </h1>

                        <p className="hero-desc">
                            Premium quality fuels, expertly trained staff, and a full-service
                            convenience store — right in the heart of Nairobi.
                            Drive in, refuel, and drive better.
                        </p>

                        <div className="hero-actions">
                            <Link
                                className="hero-btn-primary"
                                to="services"
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                Our Services
                            </Link>
                            <Link
                                className="hero-btn-secondary"
                                to="pricing"
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                View Fuel Prices
                            </Link>
                            <Link
                                className="hero-btn-secondary"
                                to="contact"
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                Find Us
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">25+</span>
                                <span className="stat-label">Years Open</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">10K+</span>
                                <span className="stat-label">Daily Customers</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">4.9★</span>
                                <span className="stat-label">Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right column: price card ── */}
                    <div className="hero-visual">
                        <div className="fuel-pump-card">
                            <div className="pump-title">Today's Fuel Prices</div>
                            <div className="pump-sub">Updated monthly by EPRA · Per litre · Incl. VAT</div>

                            <div className="fuel-types">
                                {fuelTypes.map(({ name, price, dot }) => (
                                    <div className="fuel-row" key={name}>
                                        <span className="fuel-name">
                                            <span className="fuel-dot" style={{ background: dot }} />
                                            {name}
                                        </span>
                                        <span className="fuel-price">{price}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                className="pump-cta-btn"
                                to="pricing"
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                View All Prices
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
