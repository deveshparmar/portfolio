import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


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
    // 🛡️ BASIC VALIDATION
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

    const serviceID = 'service_rxjn2z8';
    const templateID = 'template_phzjprf';
    const publicKey = 's4_61gVeL98FkqiCR';

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
