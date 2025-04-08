const sendEmail = require('./sendEmail'); // adjust path if needed

sendEmail({
  to: 'ogunneyeoyinkansola5@gmail.com',
  subject: 'Hello from Library!',
  text: 'This is a test email from your app 🎉'
})
.then(() => console.log('✅ Test email sent successfully!'))
.catch((err) => console.error('❌ Error sending test email:', err));
