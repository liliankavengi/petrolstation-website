import { Link } from 'react-scroll';
import './Pricing.css';

const fuels = [
    {
        name: 'Super Petrol',
        grade: 'Octane 95',
        desc: 'Nairobi – premium unleaded',
        amount: '176.58',
        unit: '/litre',
        change: '+2.05',
        direction: 'up',
        featured: false,
    },
    {
        name: 'Regular Petrol',
        grade: 'Octane 91',
        desc: 'Nairobi – standard unleaded',
        amount: '162.30',
        unit: '/litre',
        change: '-1.40',
        direction: 'down',
        featured: true,
        badge: 'Most Popular',
    },
    {
        name: 'Diesel',
        grade: 'AGO 50ppm',
        desc: 'Nairobi – low-sulfur diesel',
        amount: '155.00',
        unit: '/litre',
        change: '0.00',
        direction: 'same',
        featured: false,
    },
    {
        name: 'Kerosene',
        grade: 'IK / Paraffin',
        desc: 'Household & industrial use',
        amount: '140.75',
        unit: '/litre',
        change: '-0.80',
        direction: 'down',
        featured: false,
    },
];

const changeLabel = (direction, change) => {
    if (direction === 'same') return 'No change';
    const val = change.replace('-', '').replace('+', '');
    return `${direction === 'up' ? '▲' : '▼'} Ksh ${val}`;
};

export default function Pricing() {
    return (
        <section id="pricing" className="pricing section">
            <div className="container">
                <div className="pricing-header">
                    <div className="section-tag">Fuel Prices</div>
                    <h2 className="section-title">
                        Transparent,<br /><span>Competitive Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        Our prices are set by the Energy & Petroleum Regulatory Authority (EPRA)
                        and updated on the 15th of every month. No hidden fees, ever.
                    </p>
                </div>

                <div className="pricing-grid">
                    {fuels.map(({ name, grade, desc, amount, unit, change, direction, featured, badge }) => (
                        <div key={name} className={`price-card ${featured ? 'featured' : ''}`}>
                            {badge && <span className="price-badge">{badge}</span>}

                            <div className="fuel-grade-tag">{grade}</div>
                            <div className="fuel-type-name">{name}</div>
                            <div className="fuel-type-desc">{desc}</div>

                            <div className="fuel-price-big">
                                <span className="price-currency">Ksh</span>
                                <span className="price-amount">{amount}</span>
                            </div>
                            <div className="price-unit">{unit}</div>

                            <div className={`price-change ${direction}`}>
                                {changeLabel(direction, change)}
                            </div>

                            <Link
                                className="price-card-cta"
                                to="contact"
                                smooth
                                duration={600}
                                offset={-70}
                            >
                                Order Now
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <p className="pricing-note">
                        Effective 15 February 2026 · Updated monthly per EPRA guidelines · Prices inclusive of VAT & levies
                    </p>
                    <Link
                        className="pricing-cta-btn"
                        to="contact"
                        smooth
                        duration={600}
                        offset={-70}
                    >
                        Fleet & Bulk Enquiries →
                    </Link>
                </div>
            </div>
        </section>
    );
}
