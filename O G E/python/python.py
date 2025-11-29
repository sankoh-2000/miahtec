from flask import Flask, render_template, request, redirect, flash
from flask_mail import Mail, Message
import config

app = Flask(__name__)
app.secret_key = 'your_secret_key'
app.config.from_object(config)

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def book():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        date = request.form['date']
        message = request.form['message']

        msg = Message(
            subject=f"New Booking from {name}",
            sender=email,
            recipients=[app.config['MAIL_USERNAME']],
            body=f"Name: {name}\nEmail: {email}\nDate: {date}\nMessage: {message}"
        )
        mail.send(msg)
        flash('Booking request sent successfully!')
        return redirect('/')
    return render_template('booking_form.html')