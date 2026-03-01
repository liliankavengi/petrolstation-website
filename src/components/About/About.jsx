import './About.css';

const features = [
    {
        icon: '🛡️',
        title: 'Safety First',
        desc: 'All our pumps and facilities are regularly inspected and certified to the highest safety standards.',
    },
    {
        icon: '🌿',
        title: 'Eco-Friendly',
        desc: 'We invest in green initiatives including waste recycling, solar canopies, and water conservation.',
    },
    {
        icon: '🏆',
        title: 'Award-Winning Service',
        desc: 'Recognised 3 years running as the best petrol outlet in the province by the MDA.',
    },
    {
        icon: '💳',
        title: 'Flexible Payments',
        desc: 'Cash, card, contactless, QR pay, and fleet accounts — we accept all payment methods.',
    },
];

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-inner">
                    {/* Visual */}
                    <div className="about-visual">
                        <div className="about-img-wrap">
                            <div className="about-img-bg">
                                <div className="about-station-icon">⛽</div>
                                <div className="about-img-label">FuelPro Station</div>
                            </div>

                            <div className="about-stat-card about-stat-card-1">
                                <div className="about-stat-value">25+</div>
                                <div className="about-stat-label">Years serving you</div>
                            </div>
                            <div className="about-stat-card about-stat-card-2">
                                <div className="about-stat-value">4.9★</div>
                                <div className="about-stat-label">Google rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <div className="section-tag">🏆 About FuelPro</div>
                        <h2 className="section-title">
                            More Than Just<br /><span>A Petrol Station</span>
                        </h2>
                        <p className="section-subtitle">
                            Since 1998, FuelPro Station has been a cornerstone of the community — delivering premium fuel, genuine care, and unmatched convenience to thousands of motorists every single day.
                        </p>

                        <div className="about-features">
                            {features.map(({ icon, title, desc }) => (
                                <div className="about-feature" key={title}>
                                    <div className="about-feature-icon">{icon}</div>
                                    <div>
                                        <div className="about-feature-title">{title}</div>
                                        <div className="about-feature-desc">{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
