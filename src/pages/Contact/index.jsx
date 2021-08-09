import { TextField, Button, CircularProgress, Typography } from '@material-ui/core';
import { useState } from 'react';
import './style.css';

const Contact = () => {
    const [state, setState] = useState({ subject: '', message: '', from: '' });
    const [messageStatus, setMessageStatus] = useState({ messageSent: false, sendingMessage: false });
    const handleChange = (ev) => setState((state) => ({ ...state, [ev.target.name]: ev.target.value }));
    const [errors, setErrors] = useState({});
    const [messageSendText, setMessageSendText] = useState('');
    const handleSubmit = () => {
        const errors = {};
        if (state.subject.length === 0) errors.subject = 'Subject is required';
        if (state.message.length === 0) errors.message = 'Message is required';
        if (state.from.length === 0 || !state.from.includes('@'))
            errors.from = "Who it's from is required (and must be valid)";
        if (Object.keys(errors).length > 0) return setErrors(errors);
        setMessageStatus({ sendingMessage: true, messageSent: false });
        sendMessage();
    };

    const sendMessage = async () => {
        const response = await fetch('https://contact-runarvestmann.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });
        setMessageSendText(
            response.ok
                ? 'You message has been delivered'
                : 'Your message could not be delivered, please try again later',
        );
        setMessageStatus({ messageSent: true, sendingMessage: false });
    };

    return (
        <div className="section">
            <form
                id="contact"
                onSubmit={(ev) => {
                    ev.preventDefault();
                    handleSubmit();
                }}
            >
                {messageStatus.sendingMessage && <CircularProgress />}
                {messageStatus.messageSent && <Typography variant="h4">{messageSendText}</Typography>}
                {!messageStatus.messageSent && !messageStatus.sendingMessage && (
                    <>
                        <TextField
                            onChange={handleChange}
                            name="from"
                            margin="dense"
                            className="subject"
                            size="medium"
                            label="From (e-mail)"
                            error={!!errors.from}
                            helperText={errors.from}
                            FormHelperTextProps={{
                                style: {
                                    fontSize: '0.8rem',
                                },
                            }}
                            type="email"
                        />
                        <TextField
                            onChange={handleChange}
                            name="subject"
                            margin="dense"
                            className="subject"
                            size="medium"
                            label="Subject"
                            error={!!errors.subject}
                            helperText={errors.subject}
                            FormHelperTextProps={{
                                style: {
                                    fontSize: '0.8rem',
                                },
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            name="message"
                            margin="dense"
                            InputProps={{ style: { marginBottom: '2rem' } }}
                            size="medium"
                            label="Message"
                            multiline
                            error={!!errors.message}
                            helperText={errors.message}
                            FormHelperTextProps={{
                                style: {
                                    fontSize: '0.8rem',
                                    marginTop: '-1.5rem',
                                    marginBottom: '1rem',
                                },
                            }}
                        />
                        <Button
                            size="small"
                            style={{
                                backgroundColor: '#b66a0c',
                                fontWeight: 'bold',
                            }}
                            variant="contained"
                            className="contact-btn"
                            type="submit"
                        >
                            Send message
                        </Button>
                    </>
                )}
            </form>
        </div>
    );
};

export default Contact;
