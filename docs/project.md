# Expenses Manager

## Introduction & Goal

This project is a modern web application designed to help users manage their 
expenses with ease and security. Built with a robust tech stack that includes
Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL, it offers a fast
and responsive user experience, both on the frontend and backend.

State management is handled efficiently using Zustand, ensuring a lightweight 
yet powerful client-side architecture. For user authentication, the app 
leverages JWTs (JSON Web Tokens) powered by the jose library, combined with 
HTTP-only session cookies to ensure secure and tamper-resistant session 
handling. This hybrid approach allows for both stateless auth and strong 
protection against XSS attacks.

The application is structured to follow best practices in modern full-stack 
development, focusing on modularity, maintainability, and performance. 
It serves as a practical and secure solution for tracking personal or shared 
expenses, while also being a solid foundation for scaling into more 
complex financial tools.


## User Stories

### As a user, I want to:

- **Create an account** so I can securely access my expense data from any
  device.

- **Log In** using my credentials and stay authenticated via secure session
  cookies.

- **Add a new expense** with details like amount, category, date and
  description.

- **Edit or delete an expense** if I made a mistake, cancelled the payment,
  or want update it.

- **View a list of all expenses** sorted by date or category.

- **Filter expenses** by category, date range, or amount to analyze my
  spending.

- **See a summary** of my spending (e.g., total per category or per month)

- **Stay logged in** across sessions using HTTP-only cookies and JWT-based
  authentication.


### As a returning user, I want to:

- **Quickly resume where I left off** thanks to persistent sessions.

- **View recent expenses at a glance** without having to search manually.

- **Update my profile settings**, such as changing my password or email.


### As a developer/admin, I want to:

- **Use stateless JWT's for scalable authentication**, while maintaining secure
  sessions with HTTP-only cookies.

- **Enforce validation** on all inputs to avoid incorrect or malicious data.

- **Log errors and track performance metrics** to maintain app reliability.
