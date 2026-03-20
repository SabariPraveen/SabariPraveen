import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Sabari Praveen • Frontend Developer</p>
        <h1>I design and build portfolio websites that feel polished, fast, and memorable.</h1>
        <p class="hero-text">
          I create modern web experiences with clean structure, responsive behavior, and visual
          confidence. The goal is simple: help people trust your work within the first few seconds.
        </p>

        <div class="hero-actions">
          <a routerLink="/contact" class="primary-btn">Start a Conversation</a>
          <a href="#work" class="secondary-btn">Explore Projects</a>
        </div>

        <div class="hero-highlights">
          @for (item of highlights; track item.title) {
            <article>
              <strong>{{ item.value }}</strong>
              <span>{{ item.title }}</span>
            </article>
          }
        </div>
      </div>

      <aside class="hero-showcase">
        <div class="showcase-panel showcase-feature">
          <div class="showcase-kicker">
            <span>Selected Focus</span>
            <span>2026</span>
          </div>
          <h2>Professional portfolio systems with strong navigation, brand clarity, and smooth interaction.</h2>
          <p>
            I focus on the details that make a portfolio feel intentional: hierarchy, spacing,
            motion, content flow, and responsive layout decisions that still look sharp on mobile.
          </p>
        </div>

        <div class="showcase-grid">
          @for (item of showcaseCards; track item.title) {
            <article class="showcase-panel">
              <small>{{ item.label }}</small>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          }
        </div>
      </aside>
    </section>

    <section class="section-block section-intro" id="about">
      <div class="section-heading">
        <p>About</p>
        <h2>I blend visual polish with practical frontend execution.</h2>
      </div>

      <div class="about-layout">
        <article class="content-card content-card-large">
          <p class="body-copy">
            I care about websites that do more than look good in screenshots. They should load
            cleanly, read clearly, and guide visitors toward the next action without friction.
            Whether the goal is a personal portfolio, a product showcase, or a service-led landing
            page, I aim for interfaces that feel premium without becoming noisy.
          </p>
        </article>

        <article class="content-card stack-card">
          <small>Core stack</small>
          <div class="tag-list">
            @for (item of stack; track item) {
              <span>{{ item }}</span>
            }
          </div>
        </article>
      </div>
    </section>

    <section class="section-block" id="services">
      <div class="section-heading">
        <p>Services</p>
        <h2>What I can bring to your website project.</h2>
      </div>

      <div class="services-grid">
        @for (service of services; track service.title) {
          <article class="service-card">
            <span class="service-index">0{{ $index + 1 }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="section-block" id="work">
      <div class="section-heading">
        <p>Selected Work</p>
        <h2>Portfolio directions built to feel distinct and client-ready.</h2>
      </div>

      <div class="projects-grid">
        @for (project of projects; track project.title) {
          <article class="project-card">
            <div class="project-topline">
              <span>{{ project.type }}</span>
              <span>{{ project.year }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              @for (tag of project.tags; track tag) {
                <span>{{ tag }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>

    <section class="section-block process-block" id="process">
      <div class="section-heading">
        <p>Process</p>
        <h2>A simple flow that keeps design, content, and development aligned.</h2>
      </div>

      <div class="process-grid">
        @for (step of process; track step.title) {
          <article class="process-card">
            <strong>0{{ $index + 1 }}</strong>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p>Testimonials</p>
        <h2>How the work should feel to clients and collaborators.</h2>
      </div>

      <div class="testimonials-grid">
        @for (quote of testimonials; track quote.name) {
          <article class="quote-card">
            <p>{{ quote.quote }}</p>
            <footer>
              <strong>{{ quote.name }}</strong>
              <span>{{ quote.role }}</span>
            </footer>
          </article>
        }
      </div>
    </section>

    <section class="cta-banner">
      <div>
        <p>Ready to build</p>
        <h2>Let&apos;s create a portfolio that looks credible, modern, and unmistakably yours.</h2>
      </div>
      <a routerLink="/contact" class="primary-btn">Contact Me</a>
    </section>
  `
})
export class HomePageComponent {
  protected readonly highlights = [
    { value: 'Responsive', title: 'Layouts that stay sharp across devices' },
    { value: 'Elegant', title: 'Visual systems with premium restraint' },
    { value: 'Focused', title: 'Clear user paths and stronger conversion' }
  ];

  protected readonly showcaseCards = [
    {
      label: 'Navigation',
      title: 'Editorial menus with confident hierarchy',
      text: 'Structured links, clear calls to action, and mobile drawers designed with the same care as desktop.'
    },
    {
      label: 'Presentation',
      title: 'Project storytelling that feels credible',
      text: 'Case-study sections, supporting details, and content rhythm that make work easier to scan and trust.'
    }
  ];

  protected readonly stack = [
    'Angular',
    'TypeScript',
    'Responsive UI',
    'Modern CSS',
    'Landing Pages',
    'Portfolio Systems'
  ];

  protected readonly services = [
    {
      title: 'Portfolio Website Design',
      description: 'Distinct layouts, stronger content hierarchy, and a visual tone that feels more professional than template-driven.'
    },
    {
      title: 'Frontend Development',
      description: 'Responsive implementation with reusable structure, smooth behavior, and attention to polish across breakpoints.'
    },
    {
      title: 'Content-Led UX Refinement',
      description: 'Sharper messaging, clearer section flow, and calls to action that help visitors understand your value quickly.'
    }
  ];

  protected readonly projects = [
    {
      type: 'Personal Brand',
      year: '2026',
      title: 'Creative Developer Portfolio',
      description: 'A warm editorial layout that balances credibility with personality for a solo designer-developer.',
      tags: ['Brand System', 'Responsive Design', 'Motion Thinking']
    },
    {
      type: 'Studio Landing Page',
      year: '2026',
      title: 'Service-Led Agency Presence',
      description: 'A conversion-focused homepage built around trust, expertise, and well-structured service storytelling.',
      tags: ['Service Pages', 'Lead Generation', 'UI Direction']
    },
    {
      type: 'Case Study System',
      year: '2026',
      title: 'Project Archive Experience',
      description: 'A modular portfolio format for showcasing process, outcomes, and technical decisions without clutter.',
      tags: ['Case Studies', 'Content Strategy', 'Frontend Build']
    }
  ];

  protected readonly process = [
    {
      title: 'Clarify the positioning',
      description: 'We define the role, audience, and first impression the portfolio needs to communicate.'
    },
    {
      title: 'Shape the structure',
      description: 'Sections, navigation, and key content are organized to feel clear and easy to navigate.'
    },
    {
      title: 'Craft the visual language',
      description: 'Typography, spacing, color, and layout are refined into a more distinctive interface.'
    },
    {
      title: 'Polish for delivery',
      description: 'Responsive behavior, interaction details, and contact flow are tightened before launch.'
    }
  ];

  protected readonly testimonials = [
    {
      quote: 'The site felt clearer and more mature immediately. The design choices looked deliberate, not copied from a template.',
      name: 'Sample Client',
      role: 'Founder, Personal Brand Project'
    },
    {
      quote: 'What stood out most was the balance between visual style and practical structure. Everything felt easier to trust.',
      name: 'Sample Collaborator',
      role: 'Creative Partner'
    }
  ];
}
