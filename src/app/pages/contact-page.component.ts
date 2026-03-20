import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact-page">
      <div class="contact-intro">
        <p class="eyebrow">Contact</p>
        <h1>Let&apos;s build something thoughtful and useful.</h1>
        <p class="hero-text">
          Use the form below and your default mail app will open a drafted message addressed to
          <strong>ar.sabaripraveen@gmail.com</strong>.
        </p>

        <div class="contact-cards">
          <article class="contact-card">
            <small>Email</small>
            <a href="mailto:ar.sabaripraveen@gmail.com">ar.sabaripraveen@gmail.com</a>
          </article>
          <article class="contact-card">
            <small>Response style</small>
            <span>Freelance, portfolio, and collaboration enquiries</span>
          </article>
        </div>
      </div>

      <form class="contact-form" (ngSubmit)="sendEmail()">
        <label>
          <span>Your name</span>
          <input type="text" name="name" [(ngModel)]="name" required />
        </label>

        <label>
          <span>Your email</span>
          <input type="email" name="email" [(ngModel)]="email" required />
        </label>

        <label>
          <span>Subject</span>
          <input type="text" name="subject" [(ngModel)]="subject" required />
        </label>

        <label>
          <span>Message</span>
          <textarea name="message" [(ngModel)]="message" rows="7" required></textarea>
        </label>

        <button type="submit" class="primary-btn form-submit">Send Email</button>
      </form>
    </section>
  `
})
export class ContactPageComponent {
  protected name = '';
  protected email = '';
  protected subject = '';
  protected message = '';
  protected readonly emailAddress = signal('ar.sabaripraveen@gmail.com');

  protected sendEmail(): void {
    const body = [
      `Name: ${this.name}`,
      `Email: ${this.email}`,
      '',
      this.message
    ].join('\n');

    const mailtoUrl =
      `mailto:${this.emailAddress()}?subject=${encodeURIComponent(this.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }
}
