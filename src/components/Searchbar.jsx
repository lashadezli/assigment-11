import classes from '../modules/Searchbar.module.scss'
import { useState } from 'react';


export const EmailNotifyForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailvalidation.test(email)) {
      setError('');
      window.location.reload();
    } else {
      setError('Please provide a valid email address');
    }
  };

  return (
    <div className={classes['Searchbar']}>
        <h1>Get early access today</h1>
        <p className={classes['description']}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br/>questions, our support team would be happy to help you.</p>
        <div className={classes['Search']}>
        <input className={classes['input']}
            type="email"
            id="emailInput"
            placeholder="email@expamle.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button className= {classes['Notify']}onClick={validateEmail}>Get Started For Free</button>
      </div>
      <div className={classes['error']}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

