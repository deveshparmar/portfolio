import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;

  submit() {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) {
      alert('Please fill in all mandatory fields: Name, Email, and Message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.form.email.trim())) {
      alert('Please provide a valid email address.');
      return;
    }

    this.loading = true;

    const serviceID = environment.emailjs.serviceId;
    const templateID = environment.emailjs.templateId;
    const publicKey = environment.emailjs.publicKey;

    emailjs.send(serviceID, templateID, {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message
    }, publicKey)
    .then(() => {
      console.log('Email sent:', this.form);
      alert('✅ Message sent successfully!');

      // reset form
      this.form = { name: '', email: '', message: '' };
      this.loading = false;
    })
    .catch((error) => {
      console.error('Email error:', error);
      alert('❌ Failed to send message');
      this.loading = false;
    });
  }
}
