import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  submit() {
    console.log('Form Data:', this.form);
    alert('Message sent! 🚀');
  }
}
