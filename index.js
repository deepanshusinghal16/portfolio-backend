const express = require('express');
const dotenv = require('dotenv');
const mailSender = require('./mailSender');
const { contactUsEmail } = require('./ContactFormRes');
dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body
        const emailRes = await mailSender(
            email,
            `Thanks ${name}, for showing interest`,
            contactUsEmail(email, name, message)
        )
        
        return res.json({
            success: true,
            message: "Email send successfully",
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong...",
        })
    }
});
app.get('/', (req, res) => { res.send("Hello from backend!") })
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
