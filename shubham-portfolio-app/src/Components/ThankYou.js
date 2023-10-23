import React from 'react';

function ThankYou(props) {
  return (
    <section id="thankyou" className="thankyou">
      <div className="container">
        <h1 className="section-heading">Thank You</h1>
        <p>Thank you for your message, {props.name}!</p>
      </div>
    </section>
  );
}

export default ThankYou;
