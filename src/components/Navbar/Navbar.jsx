import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Services', to: 'services' },
    { label: 'Fuel Prices', to: 'pricing' },
    { label: 'About', to: 'about' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('hero');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-inner">
                    <div className="logo">
                        <div className="logo-icon">⛽</div>
                        Fuel<span>Pro</span>
                    </div>

                    <ul className="nav-links">
                        {navItems.map(({ label, to }) => (
                            <li key={to}>
                                <Link
                                    className={`nav-link ${active === to ? 'active' : ''}`}
                                    to={to}
                                    smooth
                                    duration={600}
                                    offset={-70}
                                    onSetActive={() => setActive(to)}
                                    spy
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        className="btn nav-cta nav-cta-desktop"
                        to="contact"
                        smooth
                        duration={600}
                        offset={-70}
                    >
                        Get Directions
                    </Link>

                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="mobile-menu">
                    {navItems.map(({ label, to }) => (
                        <Link
                            key={to}
                            className="nav-link"
                            to={to}
                            smooth
                            duration={600}
                            offset={-70}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        className="btn btn-primary"
                        to="contact"
                        smooth
                        duration={600}
                        offset={-70}
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Directions
                    </Link>
                </div>
            )}
        </>
    );
}
