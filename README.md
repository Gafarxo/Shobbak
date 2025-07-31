# Shobbak Application

Link to try the project: [https://urcfwpus.manus.space](https://urcfwpus.manus.space)

## Project Overview

Shobbak (شباك) is a modern, responsive digital government document application designed to streamline the process of applying for and managing government services. Built with React, this application provides a user-friendly interface for Sudanese citizens to access various public services, including document issuance and renewal. The application simulates a complete workflow from initial application submission to final document download, incorporating features like AI validation, officer review, and real-time status tracking.

This project was developed with a strong focus on user experience, offering full Arabic language support with Right-to-Left (RTL) layout, a professional government theme, and a robust authentication system. It aims to provide a seamless and efficient digital experience for government interactions.

## Key Features

-   **Professional Homepage**: A welcoming landing page with a hero banner, clear navigation (Home, Services, About, Contact Us, Sign-in/Sign-up), and service cards for different ministries (e.g., مجمع خدمات الجمهور, وزارة الصحة, وزارة التعليم).
-   **Complete Authentication System**: Secure sign-in and sign-up pages with form validation, session management, and user state persistence.
-   **Enhanced Service Selection Workflow**: An intuitive, step-by-step process for selecting services, including options for new issuance or renewal, and a dropdown for various document types with associated processing times.
-   **Refined Application Process**: A comprehensive application form with pre-populated user information, service context display, robust form validation, and file upload capabilities.
-   **Real-time Status Tracking**: Users can track their application status with unique application IDs (e.g., SHB-XXXXXXX) and receive real-time updates and notifications.
-   **AI Validation Simulation**: The application simulates an AI validation process, randomly determining successful issuance or denial (with a 70% success rate) for demonstration purposes.
-   **Officer Review and Internal Verification**: Simulation of backend processes including officer review and internal verification steps.
-   **Multilingual Support**: Full Arabic language support with RTL layout, and a language toggle button for seamless switching between Arabic and English.
-   **Responsive Design**: The application is fully responsive, ensuring optimal viewing and interaction across various devices, from desktops to mobile phones.
-   **Professional Government Theme**: A consistent and professional visual theme, adhering to government branding guidelines.
-   **Comprehensive Information Pages**: Dedicated pages for 'About Us', 'Contact Us' (with a functional contact form), and a searchable 'FAQ' section with categorized questions and answers.

## Technologies Used

Shobbak is built using a modern web development stack to ensure performance, scalability, and maintainability:

-   **React 19**: A JavaScript library for building user interfaces, providing a component-based architecture for efficient development.
-   **Vite**: A fast frontend build tool that provides a lightning-fast development experience.
-   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs directly in your HTML.
-   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
-   **React Router v6**: For declarative routing within the application, enabling seamless navigation between different pages.
-   **Zod**: A TypeScript-first schema declaration and validation library, used for robust form validation.
-   **React Hook Form**: A library for flexible and extensible forms with easy-to-use validation.
-   **Lucide React**: A collection of beautiful, pixel-perfect icons.
-   **date-fns**: A modern JavaScript date utility library.
-   **Embla Carousel React**: A lightweight, dependency-free, and flexible carousel library.
-   **Framer Motion**: A production-ready motion library for React, used for animations.
-   **Sonner**: A toast library for React.
-   **Next.js Themes**: For managing themes within the application.




## Setup and Installation

To get a local copy of Shobbak up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your system:
-   **Node.js**: Version 18 or higher (LTS recommended). You can download it from [nodejs.org](https://nodejs.org/).


### Installation

1.  **Clone the repository** (if applicable, or extract the provided package):
    ```bash
    git clone <repository-url>
    cd shobbak-app
    ```

2.  **Install dependencies**:
    Navigate to the `shobbak-app` directory and install all required packages using pnpm:
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server**:
    Once dependencies are installed, you can start the local development server:
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:5173/` (or another available port).

2.  **Open in browser**:
    Open your web browser and navigate to the address provided in your terminal (e.g., `http://localhost:5173/`).


## Usage

Upon launching the Shobbak application, users are greeted with a professional homepage designed for easy navigation and service discovery. The application guides users through a seamless process for accessing government services.

### Homepage and Navigation

-   **Hero Banner**: Features a compelling hook and a "Start Now" (ابدأ الآن) Call-to-Action (CTA) button that directs users to the sign-in page.
-   **Navigation Bar**: Provides quick access to key sections:
    -   **Sign-in/Sign-up**: For user authentication and registration.
    -   **Home**: Returns to the main landing page.
    -   **Services**: Displays available government services.
    -   **About Us**: Information about the Shobbak platform, its mission, and vision.
    -   **Contact Us**: Provides contact details and a form for inquiries.
-   **Service Cards**: Prominently displays cards for various services, such as "مجمع خدمات الجمهور" (Public Services Complex), "وزارة الصحة" (Ministry of Health), and "وزارة التعليم" (Ministry of Education).

### Authentication

-   **Sign-in**: Users can log in with existing credentials. For demonstration purposes, use `demo@example.com` with password `123456`.
-   **Sign-up**: New users can register for an account.

### Service Selection and Application Workflow

1.  **Select Service**: From the homepage or services page, click on a service card (e.g., "مجمع خدمات الجمهور").
2.  **Choose Service Type**: Select between "Renewal" (تجديد) or "New Issuance" (إصدار جديد).
3.  **Select Document**: A dropdown menu will appear, allowing users to choose the specific document they wish to apply for (e.g., Passport, ID, Birth Certificate). The estimated processing time for each document is displayed.
4.  **Application Form**: Complete the detailed application form. This form includes pre-populated user information, fields for necessary data, and file upload functionalities.
5.  **Submission**: Submit the application. The system will generate a unique application ID (e.g., SHB-XXXXXXX).

### Application Status Tracking

After submission, users can track the real-time status of their application. The application simulates various stages:

-   **AI Validation**: An initial automated check (simulated with a 1-second delay and a 70% success rate).
-   **Officer Review**: The application moves to a simulated officer review stage.
-   **Internal Verification**: Further internal checks are simulated.
-   **Approval/Denial**: The application status will update to either approved or denied. If approved, a simulated document download option becomes available.

### Language Toggle

-   A language toggle button (العربية | English) is available in the navigation bar, allowing users to switch between Arabic and English interfaces. The application supports Right-to-Left (RTL) layout for Arabic.

## Contributing

We welcome contributions to the Shobbak project! If you have suggestions for improvements or new features, please feel free to contribute.

## Contact

For any inquiries or support, please contact:

-   **Email**: gafar.aamir11@gmail.com
-   **Phone**: +249 994001957
-   **Address**: Kedah, Malaysia

Project Link: [https://urcfwpus.manus.space](https://urcfwpus.manus.space)


