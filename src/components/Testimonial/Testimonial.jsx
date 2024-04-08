import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./testimonial.css"
import { BiSolidQuoteSingleRight } from 'react-icons/bi';
import { ImQuotesLeft } from 'react-icons/im';

const Testimonial = () => {
    const testimonials = [
        {
            name: "Adam Harley",
            photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "“The copy has come out very well. Thank you for the attention to detail and due diligence. All the work delivered by your team meets our expectations and we can now proceed with further tasks for my eCommerce store.”",
        },
        {
            name: "Ellie Price",
            photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "“Can’t believe that I am actually able to double my sales on Amazon. All thanks to your marketing team. You delivered just as you promised. Highly impressed with the outcomes. Great work team!”",
        },
        {
            name: "Daniel Fletcher",
            photoUrl: "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "“Once again, your hard work does not go unnoticed, and I genuinely appreciate your dedication. All the team members did their best to deliver quality descriptions for the products. Really impressed with the quality and timely work.”",
        },
        {
            name: "Martina Keller",
            photoUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            text: "“We are quite happy with your team’s work in the content creation process of our listing content, A+ images, and videos. The work done was quite creative which wasn't very easy for someone who does not know much about this category. We hope to continue working the same way in the near future too. But for now, it's really good going.”"
        },
        {
            name: "Chris Baker",
            photoUrl: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            text: "“Highly appreciate their team and the quality of services delivered. Despite such a large catalog, the team members quickly addressed the data issues and took timely action. Would love to work again with SunTec India in the near future.”"
        },
        {
            name: "Terry White",
            photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHx1c2VyfGVufDB8fDB8fHww",
            text: "“While I was really struggling to manage multiple sales channels, I do not have to worry about it at all. All thanks to your team! You guys have been doing an excellent job in effortlessly managing all my channels and bringing in smooth sales. Highly impressed with your services.”"
        },
    ];

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="text-center">
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                        <FaChevronLeft className='leftIcon' onClick={prevTestimonial} />
                        <div className="testimonial4_slide">
                            <p>{testimonials[testimonialIndex].text}</p>
                            <div className='testimonialProfile'>
                                <img src={testimonials[testimonialIndex].photoUrl} alt="user-image" className="img-circle img-responsive" />
                                <h4>{testimonials[testimonialIndex].name}</h4>
                            </div>
                        </div>
                        <FaChevronRight className='rightIcon' onClick={nextTestimonial} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
