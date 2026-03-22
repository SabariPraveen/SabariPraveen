import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Sabari Praveen / Frontend Developer</p>
        <h1>I design portfolio websites that look premium and feel clear from the first scroll.</h1>
        <p class="hero-text">
          I build presentation-focused websites with stronger hierarchy, sharper storytelling, and
          polished responsive behavior so your work feels more credible across desktop, tablet, and mobile.
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
            <span>Design Direction</span>
            <span>2026</span>
          </div>
          <h2>Editorial layouts, confident navigation, and content sections that actually guide attention.</h2>
          <p>
            Instead of generic blocks stacked one after another, I shape sections with stronger rhythm,
            contrast, and visual pacing so the page feels intentional from top to bottom.
          </p>

          <div class="feature-metrics">
            @for (item of featureMetrics; track item.label) {
              <article>
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </article>
            }
          </div>
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

    <section class="section-block section-story" id="about">
      <div class="section-heading">
        <p>About</p>
        <h2>Designing the content is just as important as designing the interface.</h2>
      </div>

      <div class="about-layout">
        <article class="content-card content-card-large">
          <p class="body-copy">
            A portfolio should not feel like a collection of random sections. It needs a story:
            who you are, what kind of work you do, why your approach is valuable, and what someone
            should do next. I focus on that flow so the design supports the message instead of distracting from it.
          </p>

          <div class="insight-grid">
            @for (item of insights; track item.title) {
              <article class="insight-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </article>
            }
          </div>
        </article>

        <article class="content-card stack-card">
          <small>Core stack</small>
          <div class="tag-list">
            @for (item of stack; track item) {
              <span>{{ item }}</span>
            }
          </div>

          <div class="profile-card">
            <span class="profile-label">Working style</span>
            <h3>Calm, structured, and detail-driven.</h3>
            <p>I care about how the site reads, how it moves, and how it feels once real content is added.</p>
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
            <div class="service-topline">
              <span class="service-index">0{{ $index + 1 }}</span>
              <span>{{ service.kicker }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="mini-list">
              @for (point of service.points; track point) {
                <span>{{ point }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>

    <section class="section-block" id="work">
      <div class="section-heading">
        <p>Selected Work</p>
        <h2>Designed as complete presentation systems, not isolated sections.</h2>
      </div>

      <div class="projects-grid">
        @for (project of projects; track project.title) {
          <article class="project-card">
            <div class="project-visual" [style.--project-tone]="project.tone">
              <div class="project-badge">{{ project.type }}</div>
              <div class="project-window">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

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
        <h2>A clear flow that turns rough ideas into polished portfolio experiences.</h2>
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

    <section class="section-block section-proof">
      <div class="section-heading">
        <p>Testimonials</p>
        <h2>Content and layout should work together to build trust naturally.</h2>
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
        <h2>Let&apos;s create a portfolio that feels more intentional, more modern, and more you.</h2>
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

  protected readonly featureMetrics = [
    { value: '01', label: 'Narrative-led sections' },
    { value: '02', label: 'Visual rhythm across the page' },
    { value: '03', label: 'Professional polish in the details' }
  ];

  protected readonly showcaseCards = [
    {
      label: 'Navigation',
      title: 'Menus with clear hierarchy',
      text: 'Brand, primary links, and call to action all stay readable without looking like a stock template.'
    },
    {
      label: 'Content',
      title: 'Sections with stronger presentation',
      text: 'Project cards, story blocks, and service areas are shaped to keep the page visually alive.'
    }
  ];

  protected readonly insights = [
    {
      title: 'Content-first thinking',
      text: 'The layout is designed around the message, not the other way around.'
    },
    {
      title: 'Visual hierarchy',
      text: 'Contrast, spacing, and scale are used to guide the eye section by section.'
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
      kicker: 'Brand Presence',
      title: 'Portfolio Website Design',
      description: 'Distinct layouts, stronger hierarchy, and a visual tone that feels more professional than template-driven.',
      points: ['Homepage direction', 'Section design', 'Visual identity']
    },
    {
      kicker: 'Build Quality',
      title: 'Frontend Development',
      description: 'Responsive implementation with reusable structure, smooth behavior, and attention to polish across breakpoints.',
      points: ['Angular build', 'Responsive logic', 'Interaction details']
    },
    {
      kicker: 'Clarity',
      title: 'Content-Led UX Refinement',
      description: 'Sharper messaging, better pacing, and calls to action that help visitors understand your value faster.',
      points: ['Section flow', 'Messaging cleanup', 'Stronger conversion']
    }
  ];

  protected readonly projects = [
    {
      type: 'Personal Brand',
      year: '2026',
      title: 'Creative Developer Portfolio',
      description: 'A warm editorial layout that balances credibility with personality for a solo designer-developer.',
      tags: ['Brand System', 'Responsive Design', 'Motion Thinking'],
      tone: 'linear-gradient(135deg, #f6d7bf, #d8b08d)'
    },
    {
      type: 'Studio Landing Page',
      year: '2026',
      title: 'Service-Led Agency Presence',
      description: 'A conversion-focused homepage built around trust, expertise, and well-structured service storytelling.',
      tags: ['Service Pages', 'Lead Generation', 'UI Direction'],
      tone: 'linear-gradient(135deg, #d8d5cb, #b6aea1)'
    },
    {
      type: 'Case Study System',
      year: '2026',
      title: 'Project Archive Experience',
      description: 'A modular portfolio format for showcasing process, outcomes, and technical decisions without clutter.',
      tags: ['Case Studies', 'Content Strategy', 'Frontend Build'],
      tone: 'linear-gradient(135deg, #edd8cf, #d4c0b7)'
    }
  ];

  protected readonly process = [
    {
      title: 'Clarify the positioning',
      description: 'We define the audience, tone, and first impression the portfolio needs to communicate.'
    },
    {
      title: 'Shape the content system',
      description: 'The sections, story flow, and conversion points are organized before details are polished.'
    },
    {
      title: 'Design the experience',
      description: 'Typography, layout, cards, and visual contrast are crafted into a stronger presentation.'
    },
    {
      title: 'Refine the delivery',
      description: 'Responsive behavior, finishing details, and contact flow are tightened for launch.'
    }
  ];

  protected readonly testimonials = [
    {
      quote: 'The layout immediately felt more intentional. It looked like a real brand presence instead of a starter portfolio.',
      name: 'Sample Client',
      role: 'Founder, Personal Brand Project'
    },
    {
      quote: 'What changed most was the way the content was presented. The site started telling a clearer story without feeling busy.',
      name: 'Sample Collaborator',
      role: 'Creative Partner'
    }
  ];
}
