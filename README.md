# 🚀 Multi-Tenant Booking System

A robust and scalable booking system built with TypeScript, designed to support multiple tenants.

## About

This project is a multi-tenant booking system designed to allow different businesses or organizations (tenants) to manage their bookings independently within a single application instance. It provides a scalable and secure solution for managing appointments, reservations, and scheduling.

The system addresses the need for a centralized booking platform that can be easily customized and scaled to accommodate multiple users and organizations. It leverages TypeScript for type safety and maintainability, and can be built upon with various backend frameworks and databases depending on specific requirements. The target audience includes businesses offering services that require booking, such as salons, clinics, rental services, and event organizers.

Key technologies used in this project include NextJS, TypeScript, and a multi-tenant architecture. The unique selling point is its ability to isolate data and configurations for each tenant, ensuring privacy and security while simplifying management and deployment.

## ✨ Features

- 🎯 **Multi-Tenancy**: Supports multiple independent tenants within a single application instance.
- ⚡ **Scalability**: Designed to handle a growing number of tenants and bookings.
- 🎨 **Customizable**: Adaptable to different business needs with configurable settings.
- 📱 **Responsive**: Accessible on various devices and screen sizes.
- 🛠️ **Extensible**: Easily extendable with new features and integrations.

## 🎬 Demo

🔗 **Live Demo**: [https://booking-system-multi-tenant.vercel.app/center1](https://booking-system-multi-tenant.vercel.app/center1)

## 🚀 Quick Start

Clone and run in 3 steps:

```bash
git clone https://github.com/lucasellery/booking-system-multi-tenant.git
cd booking-system-multi-tenant
pnpm i
pnpm dev
```

Open [http://localhost:3000/center1](http://localhost:3000/center1) to view it in your browser.
_or replace from 'center1' to 'center2' to check other tenants_

## 📁 Project Structure

```
booking-system-multi-tenant/
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router (routes, pages, layouts)
│   ├── 📁 components/         # Shared UI components used across the app
│   ├── 📁 components/ui       # ShadCN UI components and design system primitives
│   ├── 📁 contexts/           # React Context providers (e.g., CenterContext)
│   ├── 📁 hooks/              # Custom React hooks (e.g., useCenterData, useLocalStorage)
│   ├── 📁 lib/                # Utility functions and helper modules
│   ├── 📁 schema/             # Validation schemas (Zod) for forms and data
│   └── 📁 types/              # Global TypeScript types and interfaces
├── 📁 public/                 # Static assets (logos, images, favicons, etc.)
├── 📁 node_modules/           # Project dependencies (auto-generated)
├── 📁 .next/                  # Next.js build output (auto-generated)
├── 📄 .gitignore              # Files and folders ignored by Git
├── 📄 package.json            # Project metadata, scripts, and dependencies
├── 📄 README.md               # Project documentation
└── 📄 components.json         # ShadCN component configuration
└── 📄 eslint.config.mjs       # ESLint configuration for linting and code style
└── 📄 next.config.ts          # Next.js configuration file
└── 📄 pnpm-lock.yaml          # Lockfile for deterministic dependencies (pnpm)
└── 📄 postcss.config.mjs      # PostCSS + TailwindCSS configuration
└── 📄 tsconfig.json           # TypeScript configuration for the project

```

## Technical decisions

🌀 TailwindCSS
Utility-first CSS framework used for building responsive and consistent layouts quickly.  
It ensures a clean, scalable design system without writing repetitive CSS.

🎨 ShadCN/UI
A modern, accessible component library built on top of Radix UI and TailwindCSS.  
Used to create a cohesive and professional-looking interface with minimal effort.

🧩 Zod
Type-safe schema validation library for JavaScript and TypeScript.  
Used to validate form inputs and ensure data consistency throughout the app.

🪶 React Hook Form
Lightweight form management library for React.  
Integrated with Zod to provide real-time validation, better performance, and cleaner code for form handling.


## More information


### ⏱️ Time invested
- 17 hours

### ⚙️ AI Tools
- I used ChatGPT and GeminiAI for helping on the project development
- They helped me to setup the project and fix some bugs through the development

  #### Pros:
  - Helpful in fix a lot of code
  - Uses the tools correctly

  #### Cons
  - Sometimes the AI get lost on the conversation and starts to answser old questions
  - In some cases I needed to check other projects I have to fix a bug because AI was causing more bugs than helping to solve

###  🔮 Future Improvements
  - Improve the data persistence using backend tools or Supabase

  #### 🧭 Multi-Tenant Enhancements
  - Add more details about the reservations
  - Custom themes and branding per tenant (colors, logos, slogans)

  #### ⏱️ Booking & Scheduling
  - Time slot availability per service
  - Automated email or SMS reminders
  - Integration with Google Calendar / Outlook API

  #### 👤 User Experience
  - Client account creation and login
  - Booking history and rebooking option
  - Dark mode support

  #### 📱 Responsiveness & Accessibility
  - Improve mobile UX for quick booking