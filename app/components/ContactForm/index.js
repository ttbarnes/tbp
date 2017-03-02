/**
 *
 * Contact form
 *
 */

import React from 'react';
import { reduxForm, Field } from 'redux-form';

const tempStyle = {
  border: 'solid 1px #CCC',
  clear: 'both',
  width: '100%',
  padding: '1rem',
  marginBottom: '1.5rem'
};

export const ContactForm = React.createClass({

  renderInput({ label, type, input: { onChange } }) {
    return (
      type === 'textarea' ? (
        <div>
          <label>{label}</label>
          <textarea style={tempStyle}></textarea>
        </div>
    ) : (
      <div>
        <label>{label}</label>
        <input label={label}
               onChange={onChange}
               type={type} 
               style={tempStyle} />
      </div>
    )
    );
  },

  render(){
    return(
      <div>
        <form>
          <Field name="name" label="Name" component={ this.renderInput } />
          <Field name="email" label="Email" component={ this.renderInput } />
          <Field name="message" label="Message" component={ this.renderInput } type="textarea" />
        </form>
      </div>
    );
  }
});
/*
export const validate = values => {
  const errors = {};
  if (!values.username) {
      errors.username = 'Required';
  } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
      errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
  }
  console.log(errors);
  return errors;
};
*/

export default reduxForm({
  form: 'signup',
  // validate
})(ContactForm);
