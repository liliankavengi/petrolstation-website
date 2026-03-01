import { Link } from 'react-scroll';
import './Services.css';

const services = [
    {
        icon: '⛽',
        title: 'Fuel & Lubrication',
        desc: 'Top-grade petrol, diesel, and kerosene from EPRA-regulated suppliers, dispensed with accurate tamper-proof meters.',
        features: ['Super & Regular Petrol', 'AGO Diesel 50ppm', 'Kerosene / IK', 'Full & self-service lanes'],
        link: 'pricing',
        linkLabel: 'View Prices',
        delay: '0.1s',
    },
    {
        icon: '🔧',
        title: 'Auto Mechanics',
        desc: 'Certified mechanics available daily for oil changes, tyre services, electrical diagnostics, and general vehicle repairs.',
        features: ['Oil & filter change', 'Tyre repair / rotation', 'Battery testing', 'Brake inspection'],
        link: 'contact',
        linkLabel: 'Book a Service',
        delay: '0.2s',
    },
    {
        icon: '🛒',
        title: 'Convenience Store',
        desc: 'A fully stocked shop with snacks, beverages, groceries, and everyday essentials — open around the clock.',
        features: ['Hot & cold beverages', 'Fresh pastries & snacks', 'Grocery essentials', 'M-Pesa & ATM on-site'],
        link: 'contact',
        linkLabel: 'Find Us',
        delay: '0.3s',
    },
    {
        icon: '🚗',
        title: 'Car Wash & Valet',
        desc: 'Automated and hand-wash options, plus full interior valet packages using eco-friendly products.',
        features: ['Exterior foam wash', 'Interior vacuum', 'Wax & polish', 'Engine bay clean'],
        link: 'contact',
        linkLabel: 'Book a Wash',
        delay: '0.4s',
    },
    {
        icon: '🏦',
        title: 'M-Pesa & Banking',
        desc: 'Pay fuel, bills, and services via M-Pesa Lipa Na. Withdraw cash at our ATM. Accepts all major cards.',
        features: ['M-Pesa Lipa Na', 'Bill payments', '24-hr ATM', 'Visa & Mastercard'],
        link: 'contact',
        linkLabel: 'Contact Us',
        delay: '0.5s',
    },
    {
        icon: '⚡',
        title: 'EV Charging Hub',
        desc: "Kenya's first petrol-station EV fast-charging bay. Charge your electric vehicle while you shop or eat.",
        features: ['Level 2 AC charging', 'DC fast charge', 'All EV connectors', 'App-based monitoring'],
        link: 'contact',
        linkLabel: 'Learn More',
        delay: '0.6s',
    },
];

export default function Services() {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header">
                    <div className="section-tag">Our Services</div>
                    <h2 className="section-title">
                        Everything You Need,<br /><span>Under One Roof</span>
                    </h2>
                    <p className="section-subtitle">
                        From fuelling up to full vehicle care, FuelPro Nairobi is your one-stop
                        destination for all motoring and everyday needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map(({ icon, title, desc, features, link, linkLabel, delay }) => (
                        <div
                            key={title}
                            className="service-card"
                            style={{ animationDelay: delay }}
                        >
                            <div className="service-icon">{icon}</div>
                            <h3 className="service-title">{title}</h3>
                            <p className="service-desc">{desc}</p>
                            <ul className="service-features">
                                {features.map(f => (
                                    <li className="service-feature" key={f}>
                                        <span className="feature-dot" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                className="service-cta"
                                to={link}
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                {linkLabel} →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
