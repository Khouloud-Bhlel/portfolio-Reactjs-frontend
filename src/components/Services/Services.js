import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2 className="animated-header">My Services</h2>
      <div className="service-cards">
        {/* Service 1 */}
        <div className="service-card animated-card">
          <img src="path_to_web_development_image" alt="Web Development" className="service-image" />
          <h3>Full Stack Web Development</h3>
          <p>
            I specialize in developing responsive and dynamic websites using modern technologies like ReactJS, VueJS, AngularJS, and NodeJS.
          </p>
          <video className="service-video" controls>
            <source src="path_to_web_dev_video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Service 2 */}
        <div className="service-card animated-card">
          <img src="path_to_mobile_development_image" alt="Mobile App Development" className="service-image" />
          <h3>Mobile App Development</h3>
          <p>
            I create high-performance cross-platform mobile applications using Flutter and Android. I ensure smooth user experience and powerful features.
          </p>
          <video className="service-video" controls>
            <source src="path_to_mobile_dev_video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Service 3 */}
        <div className="service-card animated-card">
          <img src="path_to_backend_image" alt="Backend Development" className="service-image" />
          <h3>Backend Development</h3>
          <p>
            I develop secure, scalable, and efficient backend systems using NodeJS, Django, and Spring Boot. I focus on clean architecture and optimized performance.
          </p>
          <video className="service-video" controls>
            <source src="path_to_backend_dev_video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Services;
