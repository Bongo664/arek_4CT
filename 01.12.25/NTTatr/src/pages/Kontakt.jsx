import { useEffect, useState } from 'react';
import './Pages.css';

function Kontakt() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    // useEffect - ustawienie tytułu
    useEffect(() => {
        document.title = 'Kontakt - NT Tatr';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Usuń błąd dla pola po zmianie
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Imię jest wymagane';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email jest wymagany';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email jest nieprawidłowy';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Wiadomość jest wymagana';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Formularz jest poprawny
            console.log('Wysłano formularz:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset po 3 sekundach
            setTimeout(() => setSubmitted(false), 3000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="page">
            <h1>📧 Kontakt</h1>
            <p className="subtitle">Masz pytania? Skontaktuj się z nami!</p>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Dane kontaktowe</h3>
                    <p>📍 ul. Tatrzańska 1, Zakopane</p>
                    <p>📞 +48 123 456 789</p>
                    <p>✉️ kontakt@nttatr.pl</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Imię i nazwisko *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Wiadomość *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'error' : ''}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit" className="submit-btn">Wyślij wiadomość</button>

                    {submitted && (
                        <div className="success-message">
                            ✓ Wiadomość została wysłana pomyślnie!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Kontakt;
