import React, { useState } from 'react';
import './styles/contactme.css';
import emailjs from '@emailjs/browser';

function Contactme() {
    const [data, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        selectedValue: "",
        messages: "",
    });


    const changehandler = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.email || !data.messages || !data.name || !data.phone || !data.selectedValue) {
            alert('Please fill in all the required fields.');
            return; // Exit if any field is missing
        }

        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.selectedValue,
            message: data.messages,
        };

        emailjs.send(
            'service_o84x3ak',   // Replace with your EmailJS Service ID
            'template_ouasz82',   // Replace with your EmailJS Template ID
            templateParams,
            '_geUF90GjyAu7uJaT'     // Replace with your EmailJS Public Key
        )
            .then(
                (result) => {
                    console.log('Message sent successfully:', result.text);
                    alert('Message sent successfully!');
                    setdata({
                        name: "",
                        email: "",
                        phone: "",
                        selectedValue: "",
                        messages: "",
                    }); // Clear the form after submission
                },
                (error) => {
                    console.error('Error sending message:', error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <>
            <div>
                <div className='contact-container'>
                    <div className="contact-info">
                        <h2>Let’s Talk For your <span>Next Projects</span></h2>
                        <p>
                            I’d love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out.<br />
                            Please fill out the form below, and I’ll get back to you as soon as possible.<br />
                            Your messages are important to me, and I appreciate your interest!
                        </p>
                        <ul>
                            <li>Been Developing Web applications and Mobile Applications</li>
                            <li>Professional Web Developer</li>
                            <li>Cross Platform Mobile Apps</li>
                            <li>Responsive Design Implementation</li>
                        </ul>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                id="fullName"
                                name="name"
                                placeholder="Your Full Name"
                                value={data.name}
                                onChange={changehandler}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={data.email}
                                onChange={changehandler}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone Number"
                                value={data.phone}
                                onChange={changehandler}
                            />
                            <select
                                id="subject"
                                name="selectedValue"
                                onChange={changehandler}
                                value={data.selectedValue}
                            >
                                <option value=""></option>
                                <option value="I would like to discussed">I would like to discuss</option>
                                <option value="Need a consultation">Need a consultation</option>
                                <option value="hire me">Hire me</option>
                            </select>
                        </div>

                        <textarea
                            id="message"
                            name="messages"
                            placeholder="Write a message"
                            value={data.messages}
                            onChange={changehandler}
                        />

                        <button type="submit" onClick={handleSubmit}>Send Us Message ➤</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contactme;