import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="contact-page">
      <div class="contact-intro">
        <p class="eyebrow">Contact</p>
        <h1>Tell me about your idea and I&apos;ll draft the email for you.</h1>
        <p class="hero-text">
          This contact page prepares a message to
          <strong>ar.sabaripraveen@gmail.com</strong> using your default mail app, so you can send
          project details quickly without needing a backend service.
        </p>

        <div class="contact-cards">
          <article class="contact-card">
            <small>Email</small>
            <a href="mailto:ar.sabaripraveen@gmail.com">ar.sabaripraveen@gmail.com</a>
          </article>

          <article class="contact-card">
            <small>Best for</small>
            <span>Portfolio redesigns, frontend implementation, landing pages, and UI refinement.</span>
          </article>

          <article class="contact-card">
            <small>Need inspiration?</small>
            <span>Share your role, goals, timelines, and any websites whose tone you admire.</span>
          </article>
        </div>

        <div class="contact-note">
          <h3>Prefer to explore first?</h3>
          <p>
            You can return to the homepage to review services, selected work directions, and the
            overall approach before getting in touch.
          </p>
          <a routerLink="/" class="secondary-btn">Back to Portfolio</a>
        </div>
      </div>

      <div>
        <form class="contact-form" (ngSubmit)="sendEmail()">
          <div class="contact-form-grid">
            <label>
              <span>Your name</span>
              <input type="text" name="name" [(ngModel)]="name" required />
            </label>

            <label>
              <span>Your email</span>
              <input type="email" name="email" [(ngModel)]="email" required />
            </label>
          </div>

          <div class="contact-form-grid">
            <label>
              <span>Project type</span>
              <select name="projectType" [(ngModel)]="projectType">
                @for (option of projectTypes; track option) {
                  <option [value]="option">{{ option }}</option>
                }
              </select>
            </label>

            <label>
              <span>Timeline</span>
              <select name="timeline" [(ngModel)]="timeline">
                @for (option of timelineOptions; track option) {
                  <option [value]="option">{{ option }}</option>
                }
              </select>
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" [(ngModel)]="subject" required />
          </label>

          <label>
            <span>Project details</span>
            <textarea name="message" [(ngModel)]="message" rows="8" required></textarea>
          </label>

          <p class="contact-form-note">
            When you click send, your device will open a prefilled email addressed to
            <strong>ar.sabaripraveen@gmail.com</strong>.
          </p>

          <button type="submit" class="primary-btn form-submit">Open Email Draft</button>
        </form>
      </div>
    </section>
  `
})
export class ContactPageComponent {
  protected name = '';
  protected email = '';
  protected subject = 'Project enquiry from portfolio website';
  protected projectType = 'Portfolio Website';
  protected timeline = 'Within this month';
  protected message = '';
  protected readonly emailAddress = signal('ar.sabaripraveen@gmail.com');
  protected readonly projectTypes = [
    'Portfolio Website',
    'Landing Page',
    'Frontend Development',
    'Website Redesign',
    'UI Refinement'
  ];
  protected readonly timelineOptions = [
    'As soon as possible',
    'Within this month',
    'Next month',
    'Just exploring'
  ];

  protected sendEmail(): void {
    const body = [
      `Name: ${this.name}`,
      `Email: ${this.email}`,
      `Project Type: ${this.projectType}`,
      `Timeline: ${this.timeline}`,
      '',
      'Project Details:',
      this.message
    ].join('\n');

    const mailtoUrl =
      `mailto:${this.emailAddress()}?subject=${encodeURIComponent(this.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }
}
