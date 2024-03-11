import React, {useState} from 'react';

function LoginPage() {
    const [inputs, setInputs] = useState({
      username: '',
      password: ''
    });

    const [errors, setErrors] = useState({});
    const [loginSuccess, setLoginSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  // Validate inputs
  const validate = () => {
    let errors = {};
    let isValid = true;

    // Username validation (alphanumeric only)
    if (!/^[a-zA-Z0-9]+$/.test(inputs.username)) {
      isValid = false;
      errors.username = 'Username must be alphanumeric only.';
    }

    // Password validation (alphanumeric with minimum 8 characters)
    if (!/^[a-zA-Z0-9]{8,}$/.test(inputs.password)) {
        isValid = false;
        errors.password = 'Password must be at least 8 characters long and alphanumeric.';
      }
  
      setErrors(errors);
      return isValid;
    };

    // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (validate()) {
      console.log('Form is valid');
      // Proceed with login logic...
      setLoginSuccess(true);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
   <div >   
   <h1>Login Form</h1>

   {loginSuccess && <p style={styles.successMessage}>Login successful!</p>} {/* Render success message */}

   <div style={styles.container}>
   

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Username:  </label>
          <input type="text" name="username" placeholder='Enter the name' value={inputs.username} onChange={handleChange} />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>
        <div style={styles.formGroup}>
          <label>Password:  </label>
          <input type="password" name="password" placeholder='Enter the password' value={inputs.password} onChange={handleChange} />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <stack spacing={10} direction="row" >
        <button type="submit" variant="contained" style={styles.button}>Login</button>
        <button type="button" onClick={() => setInputs({ username: '', password: '' })} style={styles.button}>Cancel</button>
        </stack>
      </form>
      
    </div>
    
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      padding: '20px',
      border: '10px solid black',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: Adds a subtle shadow to the form box
      backgroundColor: '#fff', // Choose a background color that fits your design
    },
    formGroup: {
      marginBottom: '15px',
    },
    error: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: '5px',
    },
    button: {
      marginTop: '10px',
      color: 'white',
      Text : 'bold',
      padding: '3px 10px',
      backgroundColor:'red'
    },
    successMessage:{
        color: 'red',
        textAlign: 'center'
    }
  };

  export default LoginPage  
