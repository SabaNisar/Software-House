import React from 'react';
import './AboutUs.css';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container" style={{width:'100%'}}>
        <h2 className="about-us-heading">About Us</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>
              <strong>SOFTWARE HOUSE</strong> is a leading software house specializing in building cutting-edge 
              software solutions tailored to meet the needs of modern businesses. Our expertise spans across web 
              development, mobile app creation, cloud services, and digital transformation. We believe in the power 
              of technology to drive innovation and business success.
            </p>
            <p>
              With a dedicated team of talented developers, designers, and strategists, we bring years of industry
               experience to every project. Our mission is to deliver scalable, secure, and user-friendly software 
               that solves real-world challenges. At SOFTWARE HOUSE, we value customer satisfaction and work tirelessly
                to exceed expectations through innovation, collaboration, and continuous improvement.
            </p>
            <p>
              Whether you're a startup looking to disrupt your industry or an enterprise seeking to enhance efficiency, 
              we have the expertise to help you achieve your goals.
            </p>
          </div>

          <div className="about-us-icons">
            <div className="icon-card">
              <FaLaptopCode className="about-icon" />
              <h3>Web Development</h3>
              <p>Building scalable, responsive, and user-friendly websites using modern technologies.</p>
            </div>
            <div className="icon-card">
              <FaMobileAlt className="about-icon" />
              <h3>Mobile App Development</h3>
              <p>Creating seamless mobile experiences across Android and iOS platforms.</p>
            </div>
            <div className="icon-card">
              <FaCloud className="about-icon" />
              <h3>Cloud Solutions</h3>
              <p>Empowering businesses with cloud-based solutions that drive innovation and agility.</p>
            </div>
            <div className="icon-card">
              <FaUsers className="about-icon" />
              <h3>Client-Centric Approach</h3>
              <p>Our clients are at the heart of everything we do, ensuring satisfaction and success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
