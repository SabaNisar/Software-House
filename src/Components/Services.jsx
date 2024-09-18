import React from "react";
import './Services.css';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush } from 'react-icons/fa';

function Services(params) {
    return(
        
    <section className="services-section">
      <div className="container" style={{width:'100%'}}>
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              We build modern, responsive, and scalable websites using the latest technologies. Our solutions are designed to enhance user engagement and drive business growth.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>
              Our mobile app development team crafts seamless and intuitive applications for Android and iOS that cater to both startups and enterprises.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="service-card">
            <FaCloud className="service-icon" />
            <h3>Cloud Solutions</h3>
            <p>
              Empower your business with cloud-based solutions that offer flexibility, scalability, and security. We provide custom cloud services for businesses of all sizes.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>UI/UX Design</h3>
            <p>
              Our design team focuses on creating intuitive and user-friendly interfaces that offer seamless experiences across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  

    );
    
}
export default Services;