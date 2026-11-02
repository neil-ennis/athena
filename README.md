# Athena Practical AI

A static, responsive business website for Harrison Ennis. Working brand: **Athena Practical AI**. Tagline: **Less busywork. More business.**

## Run locally

Requires Python 3 for preview only; the website itself has no dependencies or build step.

```powershell
cd C:\Repos\athena
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173 in a browser. You can also open index.html directly.

## Files

- `index.html`: page content, services, examples, founder credentials, FAQ and contact form.
- `styles.css`: responsive layout and visual design, with reduced-motion support.
- `app.js`: example tabs, illustrative savings calculator, mobile navigation and email-draft creation.
- `favicon.svg`: original geometric Athena mark.

## What works

- Three illustrative workflow examples, with keyboard-operable tabs.
- Time-value calculator: hours saved per week × hourly value × 48 working weeks. This is potential capacity, not promised cash savings; software and service costs are excluded.
- Expandable FAQ, mobile navigation and accessible form labels.
- Contact form opens the visitor's email app with a prefilled draft addressed to Harrison's public portfolio email. The visitor must send it. There is no backend, mailing list, database or form storage. If no email handler is installed, the page provides a direct email address.
- No external scripts, fonts, analytics, cookies or remote image dependencies. A future hosting service may independently collect request logs.

## Brand and offer

Athena is a proposed trading identity, not a statement of registration. Business-name, trademark and domain availability have **not** been checked. Check those before adopting the name commercially.

The copy deliberately uses real credentials and public portfolio work, without invented clients, testimonials, financial savings or delivery history. Sources checked during authoring:

- https://hasslius.github.io/
- https://github.com/Hasslius/local-ai-rocm
- https://github.com/Hasslius/mobile-forensics-mvt-lab
- https://github.com/Hasslius/flengine-loader-threat-analysis

Confirm Harrison is comfortable with the copy and receiving enquiries at `h.ennis.cyber@gmail.com`. Search both HTML and JavaScript when changing that address.

The founding-client pilot is an invitation to agree a suitable project, not unlimited free consulting. Suggested private scoping: one recurring task, one input format, one output, one revision, handover, and up to 8–12 hours of work over two weeks. Software costs are separately agreed. Remove or change the pilot invitation when filled.

## Publishing

No deployment, push or domain purchase is performed by this project. It is portable static HTML suitable for a conventional static host, including GitHub Pages. All asset links are relative, so repository-subpath hosting works. Publish the root files after review. No secrets or API keys are needed.

Before public launch: confirm the trading name and offer; review contact details and qualifications; select hosting; and retest the email draft on the devices customers use. Set canonical/Open Graph URLs once the final domain is known.

## Validation

Syntax check: `node --check app.js`. Visual and interactive checks should cover desktop and mobile, example tabs, keyboard navigation, calculator values and invalid inputs, FAQ disclosure, and email draft behaviour. The email form does not itself send a message.

Verified during creation: desktop (1440px) and mobile (390px) layout; no horizontal overflow at those widths; in-page anchor targets; mobile navigation; mouse and keyboard example tabs; FAQ disclosure; calculator default, changed rate and invalid input; and email-draft encoding in an isolated harness. JavaScript syntax passed. No email was sent. Actual email-app handoff remains device-dependent. Independent copy/code review completed; no-JavaScript form submission is disabled to avoid URL disclosure.
