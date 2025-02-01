// Select the form element
const form = document.getElementById('userForm');

// Add a submit event listener to the form
form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    try {
        // Send the form data to the back-end API
        const response = await fetch('https://form-backend-tv9t.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        

        if (response.ok) {
            // Redirect to the thank-you.html page
            window.location.href = '/thank-you.html';
        } else {
            alert('Failed to submit data. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    }
});
