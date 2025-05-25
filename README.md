# IT Club Website

A full-stack web application for the IT Club, designed to showcase the club, accept new member applications, display a gallery, and provide an admin panel for content management.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [System Features](#system-features)
- [Getting Started](#getting-started)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The IT Club Website is a standalone platform representing the IT Club. It provides an informative homepage, an application form for new members, an image gallery, a contact form, and an admin panel for content management. The site is responsive, easy to use, and matches university branding.

## Technologies

- **Frontend:** React.js, JavaScript (ES6+), npm, Axios
- **Backend:** Java 17+, Spring Boot, Maven, JPA/Hibernate, Spring Security, Lombok, SLF4J
- **Database:** MySQL or PostgreSQL (configurable)
- **Other:** JWT for authentication, BCrypt for password hashing, Email service integration

## Project Structure

### Backend (`ITClub-backend/`)

    ITClub-backend/
    ├── src/
    │   ├── main/
    │   │   ├── java/com/example/ITClub/
    │   │   │   ├── controller/         # REST controllers (Auth, Contact, Application, Gallery, Admin)
    │   │   │   ├── model/              # JPA entities (User, Application, Image, ContactMessage)
    │   │   │   ├── repository/         # Spring Data JPA repositories
    │   │   │   ├── security/           # Security config, JWT, custom providers
    │   │   │   ├── service/            # Business logic (UserService, ApplicationService, GalleryService)
    │   │   │   └── util/               # Utilities (PasswordGenerator)
    │   │   └── resources/
    │   │       ├── application.properties
    │   │       └── static/
    │   └── test/
    │       └── java/com/example/ITClub/
    │           └── ...                 # Unit and integration tests
    ├── pom.xml
    └── README.md

### Frontend (`it-club-frontend/`)

    it-club-frontend/
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    ├── src/
    │   ├── components/         # Navbar, Footer, Forms, Gallery, ProtectedRoute
    │   ├── pages/              # Home, About, Application, Gallery, Contact, AdminDashboard, Login
    │   ├── services/           # API services (authService.js, api.js)
    │   ├── App.js
    │   ├── index.js
    │   └── styles/             # CSS/SCSS files (purple/gray/black theme)
    ├── package.json
    └── README.md

## System Features

- **Homepage:** Club info and navigation
- **About Us:** Club background and mission
- **Application Form:** For new member applications
- **Gallery:** Image uploads and display
- **Contact Form:** Sends email to club admins
- **Admin Panel:** Login, manage applications, gallery, and content (CRUD)
- **Security:** JWT-based authentication, BCrypt password hashing, HTTPS
- **Responsive Design:** Mobile and desktop support, university branding

## Getting Started

### Backend Setup

1. Navigate to backend:
    ```bash
    cd ITClub-backend
    ```
2. Configure database and email in `src/main/resources/application.properties`.
3. Build and run:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend Setup

1. Navigate to frontend:
    ```bash
    cd it-club-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start development server:
    ```bash
    npm start
    ```

## Usage

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080`
- Default admin login:
    - Username: admin
    - Password: 123

## Environment Variables

- Backend: `application.properties` for DB and email config
- Frontend: API base URL in `src/services/api.js`

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

This project is for educational purposes only.
