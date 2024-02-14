
 ## Rental Apartment Booking System

Welcome to the Rental Apartment Booking System, a streamlined web application designed to facilitate the reservation process for a single rental property. This application integrates a user-friendly date picker for checking the availability and pricing of the property, and it incorporates Stripe for secure payment processing.

 ## Features
Date Picker: Users can easily view available dates and their associated prices for the rental apartment.
Availability Check: The system automatically displays only those dates that have not been booked, ensuring a smooth booking experience.
Secure Payment Processing: Through Stripe integration, users can securely pay for their bookings using a test card.
Booking Confirmation: After payment, a confirmation screen displays the booked dates, providing users with immediate verification of their reservation.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

 ## Prerequisites
Before setting up the project, ensure you have the following tools installed:
Node.js
npm or yarn
Git

 ## Installation
Clone the repository
git clone https://github.com/msanmaz/rental-apt.git
cd rental-apt
Install dependencies
npm install
# or
yarn install
Set up environment variables
Copy the .env.example file to a new file named .env, and fill it with your Stripe secret key and other necessary configurations.

cp .env.example .env
Run the development server
npm run dev

# or
yarn dev
Open http://localhost:3000 to view the application in your browser.

Stripe Configuration
To test payments, use Stripe's test card numbers. For example, 4242 4242 4242 4242 with any future expiration date and any CVC.

 ## Using the Application
Select Dates: Open the date picker on the homepage to view and select available dates for your stay.
Review Price: After selecting your dates, the total price for your stay will be displayed.
Enter Payment Details: Click the "Book Now" button to proceed to the payment form. Enter the test card details provided by Stripe for the payment process.
Complete Booking: After entering valid payment details, submit your booking. You will be redirected to a confirmation screen showing your selected dates and a confirmation of your successful booking.

 ## Contributing
We welcome contributions to improve the Rental Apartment Booking System. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

 ## Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
