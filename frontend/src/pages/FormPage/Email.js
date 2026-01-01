import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { logAction } from '../../components/logAction';
import './styles.css';

const Email = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [sendToAll, setSendToAll] = useState(false);
    const [errors, setErrors] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setIsAdmin(decodedToken.isAdmin);
            } catch (error) {
                console.error('Failed to decode token', error);
                setIsAdmin(false);
            }
        }
    }, []);

    const validateForm = () => {
        const errors = {};
        if (!sendToAll && !email) errors.email = 'Email is required';
        else if (!sendToAll && !/\S+@\S+\.\S+/.test(email)) errors.email = 'Email address is invalid';
        if (!message) errors.message = 'Message is required';
        if (!subject) errors.subject = 'Subject is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                let msg = `sent email to: `

                if (sendToAll === false) {
                    msg += `${email} `
                }
                else if (sendToAll === true) {
                    msg += `  'All Users'   `
                }

                msg += `with '  Subject: ${subject}  ' and Message: '  ${message}  '`

                logAction(msg)

                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify({
                        email,
                        subject,
                        message,
                        sendToAll,
                    }),
                });

                if (response.ok) {
                    alert('The Email has been Sent!');
                    setEmail('');
                    setMessage('');
                    setSubject('');
                    setSendToAll(false);
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || 'Something went wrong');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Failed to send the email');
            }
        }
    };

    if (!isAdmin) {
        return (
            <div className="unauthorized-wrapper">
                <div className='unauthorized'>
                    <h2>Unauthorized</h2>
                <p>You do not have permission to access this page. Please contact your administrator.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-page-wrapper">
            <div className="auth-form-wrapper">
                <div className="auth-form">
                    <h2>Mass Emailer</h2>
                    <p className="auth-subtitle">Send an email to users</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={errors.email ? 'error' : ''}
                                placeholder="Email address"
                                disabled={sendToAll}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={errors.subject ? 'error' : ''}
                                placeholder="Subject"
                            />
                            {errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={errors.message ? 'error' : ''}
                                placeholder="Message"
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="sendToAll"
                                checked={sendToAll}
                                onChange={() => setSendToAll(!sendToAll)}
                            />
                            <label htmlFor="sendToAll">
                                Send to all users
                            </label>
                        </div>

                        <button type="submit">Send Email</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Email;