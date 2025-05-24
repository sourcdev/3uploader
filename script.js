document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            const paymentType = this.querySelector('span').textContent;
            if (paymentType.includes('PayPal')) {
                window.open('https://paypal.me/your-paypal-link', '_blank');
            } else if (paymentType.includes('Nequi')) {
                alert('Nequi Payment Information: Your-Nequi-Number');
            }
        });
    });
});