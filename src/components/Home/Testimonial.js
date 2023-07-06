import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import testimonial1 from './profilebusi.jpeg';
import testimonial2 from './profilebusi.jpeg';
import testimonial3 from './profilebusi.jpeg';
import testimonial4 from './profilebusi.jpeg';

import './Testimonial.css'; // Import your custom CSS file

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      name: "John Doe",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis enim at neque consectetur mattis. Integer nec est a dui dignissim elementum. In id eros vestibulum, venenatis felis id, consectetur nisi.',
    },
    {
      id: 2,
      image: testimonial2,
      name: "John Doe",
      quote: 'Praesent rutrum, nunc vitae suscipit varius, mauris massa aliquam metus, vel aliquet leo neque non elit. Ut ac elit non magna fermentum pulvinar.',
    },
    {
      id: 3,
      image: testimonial3,
      name: "John Doe",
      quote: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus euismod mi nec volutpat posuere. Nullam ut metus nec massa rhoncus bibendum. Curabitur eleifend diam eu nunc lacinia consectetur.',
    },
    {
      id: 4,
      image: testimonial4,
      name: "John Doe",
      quote: 'Suspendisse potenti. Duis volutpat tempus felis, vel dictum nisi. Sed non ultrices dolor. Vestibulum eget scelerisque elit. Aliquam vel tellus facilisis, varius lorem eu, aliquet tellus.',
    },
  ];

  return (
    <div className="testimonial-wrap">
      <div className="testimonial-container">
        <div className="testimonial-heading-section">
          <span className="testimonial-sub-heading">Testimonials</span>
          <h2 className="testimonial-heading">Happy Clients &amp; Feedbacks</h2>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          showArrows={true}
          transitionTime={1000}
          selectedItem={1}
          renderThumbs={() => {}}
          renderIndicator={() => {}}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button className="testimonial-carousel-arrow testimonial-carousel-arrow-prev" onClick={onClickHandler}>
                <i className="fas fa-chevron-left"></i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button className="testimonial-carousel-arrow testimonial-carousel-arrow-next" onClick={onClickHandler}>
                <i className="fas fa-chevron-right"></i>
              </button>
            )
          }
          renderButtonGroupOutside={true}
          customButtonGroup={<></>}
        >
         {testimonials.map((testimonial) => (
  <div key={testimonial.id} className="testimonial-item">
    <div className="testimonial-inner">
      <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
      <h4 className="testimonial-name">{testimonial.name}</h4> {/* Add the name here */}
      <div className="testimonial-content">
        <FaQuoteLeft className="testimonial-quote-icon" />
        <p className="testimonial-quote">{testimonial.quote}</p>
        <FaQuoteRight className="testimonial-quote-icon" />
      </div>
    </div>
  </div>
))}

        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
