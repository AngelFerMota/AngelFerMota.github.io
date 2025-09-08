import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  sent = false;
  form = new FormBuilder().group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) return;
    const { name, email, message } = this.form.value as any;
    window.location.href = `mailto:angelfernandezmota@gmail.com?subject=${
      encodeURIComponent('Portfolio Contact - ' + name)
    }&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    this.sent = true;
  }
}
