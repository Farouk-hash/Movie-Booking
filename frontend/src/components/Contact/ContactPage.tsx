import { ContactStyle } from '../../styles/contact/contact.js'
import { MessageCircle, Phone, Mail, MapPin, AlertCircle, Send, MessageSquare, Info, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const subjects = [
        'General Inquiry',
        'Technical Support',
        'Booking Issues',
        'Event Planning',
        'Partnership',
        'Other'
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={ContactStyle.container}>
            {/* Header */}
            <div className={ContactStyle.header.base}>
                <h3 className={ContactStyle.header.title} style={{fontFamily:'Dance'}}><span style={{color:'red'}}>Contact</span>Us</h3>
                <p className={ContactStyle.header.info}>
                    Have questions about movies or special events? Our team is here to help you
                </p>
            </div>

            {/* Main Container */}
            <div className={ContactStyle.main.base}>
                {/* Left Side - Form */}
                <div className={ContactStyle.form.wrapper}>
                    <div className={ContactStyle.form.borderIcon}>
                        <MessageSquare className={ContactStyle.form.borderIconSvg} />
                    </div>
                    <div className={ContactStyle.form.base}>
                        <div className={ContactStyle.form.header}>
                            <MessageCircle className={ContactStyle.form.icon} />
                            <h2 className={ContactStyle.form.title}>Send Us a Message</h2>
                        </div>
                        
                        <form onSubmit={handleSubmit} className={ContactStyle.form.content}>
                            <div className={ContactStyle.form.grid}>
                                <div className={ContactStyle.form.field}>
                                    <label className={ContactStyle.form.label}>Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={ContactStyle.form.input}
                                        required
                                    />
                                </div>
                                
                                <div className={ContactStyle.form.field}>
                                    <label className={ContactStyle.form.label}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={ContactStyle.form.input}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={ContactStyle.form.field}>
                                <label className={ContactStyle.form.label}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    placeholder="10 digits only"
                                    className={ContactStyle.form.input}
                                    required
                                />
                            </div>

                            <div className={ContactStyle.form.field}>
                                <label className={ContactStyle.form.label}>Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={ContactStyle.form.select}
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={ContactStyle.form.field}>
                                <label className={ContactStyle.form.label}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={ContactStyle.form.textarea}
                                    required
                                />
                            </div>

                            <button type="submit" className={ContactStyle.form.button}>
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className={ContactStyle.contact.base}>
                    {/* First Card - Contact Information */}
                    <div className={ContactStyle.contact.wrapper}>
                        <div className={ContactStyle.contact.borderIcon}>
                            <Info className={ContactStyle.contact.borderIconSvg} />
                        </div>
                        <div className={ContactStyle.contact.card}>
                            <div className={ContactStyle.contact.item}>
                                <div className={ContactStyle.contact.icon}>
                                    <Phone size={24} />
                                </div>
                                <div className={ContactStyle.contact.info}>
                                    <h3 className={ContactStyle.contact.title}>Booking Hotline</h3>
                                    <p className={ContactStyle.contact.text}>+1 (555) 123-4567</p>
                                    <p className={ContactStyle.contact.description}>Available 24/7 for ticket bookings</p>
                                </div>
                            </div>

                            <div className={ContactStyle.contact.item}>
                                <div className={ContactStyle.contact.icon}>
                                    <Mail size={24} />
                                </div>
                                <div className={ContactStyle.contact.info}>
                                    <h3 className={ContactStyle.contact.title}>Email Address</h3>
                                    <p className={ContactStyle.contact.text}>support@cinema.com</p>
                                    <p className={ContactStyle.contact.description}>We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className={ContactStyle.contact.item}>
                                <div className={ContactStyle.contact.icon}>
                                    <MapPin size={24} />
                                </div>
                                <div className={ContactStyle.contact.info}>
                                    <h3 className={ContactStyle.contact.title}>Main Theater Location</h3>
                                    <p className={ContactStyle.contact.text}>123 Cinema Street, Movie City</p>
                                    <p className={ContactStyle.contact.description}>Visit us for the best movie experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Urgent Issues */}
                    <div className={ContactStyle.urgent.wrapper}>
                        <div className={ContactStyle.urgent.borderIcon}>
                            <AlertTriangle className={ContactStyle.urgent.borderIconSvg} />
                        </div>
                        <div className={ContactStyle.urgent.card}>
                            <div className={ContactStyle.urgent.header}>
                                <AlertCircle className={ContactStyle.urgent.icon} />
                                <h3 className={ContactStyle.urgent.title}>Urgent Show-Related Issues</h3>
                            </div>
                            <p className={ContactStyle.urgent.info}>
                                For immediate assistance during movie screenings or technical issues
                            </p>
                            <div className={ContactStyle.urgent.hotline}>
                                <span className={ContactStyle.urgent.label}>Hotline</span>
                                <span className={ContactStyle.urgent.number}>+1 (555) 987-6543</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
