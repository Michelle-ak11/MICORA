# MICORA

**Your designs. Our print. Delivered.**

MICORA is a printing and branding order management system that allows customers to order printing services online, upload designs, receive quotations, make payments, and track their orders.

---

## Core Features

### Customers

- Register and login
- Browse printing and branding services
- Get instant quotations
- Upload design files
- Place orders
- Make mock payments
- Track order status


### Order Status

Pending → Printing → Ready → Delivered

---

## Architecture

React Frontend
      │
      │ REST API
      ▼
Spring Boot Backend
      │
      ▼
PostgreSQL Database

---

## Technology Stack

**Frontend:** React.js, JavaScript, HTML, CSS

**Backend:** Java, Spring Boot

**Database:** PostgreSQL



---

## API Endpoints

POST /api/auth/login

GET /api/services

GET /api/orders

POST /api/orders

---

## Project Objective

MICORA aims to simplify printing and branding orders by providing customers with a convenient online platform while giving administrators an organized way to manage services, customers, payments, and orders.
