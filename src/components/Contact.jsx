import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { data } = this.props;
    const admissionDate = new Date(data.admissionDate).toLocaleDateString();

    return (
      <article className="contact" key={data.id} data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{admissionDate}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;
