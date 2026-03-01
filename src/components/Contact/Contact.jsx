import { useState } from 'react';
import { Link } from 'react-scroll';
import './Contact.css';

const contactCards = [
    { icon: '📍', title: 'Address', value: 'Mombasa Road, Nairobi, Kenya' },
    { icon: '📞', title: 'Phone', value: '+254 715 123 456' },
    { icon: '✉️', title: 'Email', value: 'info@fuelpro.co.ke' },
    { icon: '🕐', title: 'Hours', value: 'Open 24 Hours, 7 Days a Week' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-inner">
                    {/* Info */}
                    <div className="contact-info">
                        <div className="section-tag">Get In Touch</div>
                        <h2 className="section-title">
                            Visit Us in<br /><span>Nairobi, Kenya</span>
                        </h2>
                        <p className="section-subtitle">
                            Located on Mombasa Road — easy access from the CBD, Westlands,
                            and Karen. Call us, email, or drop us a message.
                        </p>

                        <div className="contact-cards">
                            {contactCards.map(({ icon, title, value }) => (
                                <div className="contact-card" key={title}>
                                    <div className="contact-card-icon">{icon}</div>
                                    <div>
                                        <div className="contact-card-title">{title}</div>
                                        <div className="contact-card-value">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Back to services link */}
                        <Link
                            className="contact-back-link"
                            to="services"
                            smooth
                            duration={600}
                            offset={-70}
                        >
                            ← Back to our services
                        </Link>
                    </div>

                    {/* Form */}
                    <div className="contact-form-wrap">
                        {submitted ? (
                            <div className="form-success">
                                <div className="form-success-icon">✅</div>
                                <p>Asante! We'll be in touch soon.</p>
                                <Link
                                    className="form-success-link"
                                    to="hero"
                                    smooth
                                    duration={600}
                                    offset={-70}
                                >
                                    Back to top
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="form-title">Send Us a Message</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="e.g. Amina Wanjiku"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email / Phone</label>
                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="email or +254 7XX XXX XXX"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Service Enquiry</label>
                                        <select name="service" value={form.service} onChange={handleChange} required>
                                            <option value="">Select a service…</option>
                                            <option>Fuel & Lubrication</option>
                                            <option>Auto Mechanics</option>
                                            <option>Car Wash & Valet</option>
                                            <option>Fleet / Corporate Account</option>
                                            <option>EV Charging</option>
                                            <option>M-Pesa / Payments</option>
                                            <option>General Enquiry</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea
                                            name="message"
                                            placeholder="Habari! How can we help you today?"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="form-submit">
                                        Send Message
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
