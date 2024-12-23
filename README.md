This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies using NPM:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assessment Notes
This web application is built using Next.js, which is a framework for React. It consists of two main components:

1. A server-side component called "get-contacts" that retrieves contact information from an API when the app loads in the browser.
2. A "contact-form" component that displays an order form on the client side. It uses a `useActionState` hook to call a server action, tracks the state, and returns operation results to the client.
