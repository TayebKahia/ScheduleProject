async function handleSubmit(event) {
  event.preventDefault();
  setIsSubmitting(true);
  try {
    const response = await fetch(
      'http://127.0.0.1:8000/login',
      {
        method: 'POST',
        crossDomain: true,
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.status === 'success') {
      alert('Login successful');
      window.localStorage.setItem('token', data.data);
      // window.location.href = "./tables";
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
