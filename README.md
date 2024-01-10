# My Design E-Commerce Project

Welcome to the My Design E-Commerce project! 🛋️🍽️ This project is a web application built with React, Node.js, Express, and PostgreSQL. Users can explore and purchase articles for the bedroom, kitchen, and furniture.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/my-design.git
    cd my-design
    ```

2. **Install dependencies:**

    Navigate to the project root and install both frontend and backend dependencies.

    ```bash
    # Install frontend dependencies
    cd client
    npm install

    # Install backend dependencies
    cd ../server
    npm install
    ```

3. **Set up the database:**

    - Create a PostgreSQL database for the project.
    - Update the database configuration in `server/config/db.config.js` with your database details.

4. **Run database migrations:**

    ```bash
    cd server
    npm run migrate
    ```

5. **Start the backend server:**

    ```bash
    # Navigate to the server directory
    cd server

    # Start the server
    npm start
    ```

    The backend server will run on `http://localhost:3001`.

6. **Start the React frontend:**

    Open a new terminal window, navigate to the project root, and run:

    ```bash
    # Navigate to the client directory
    cd client

    # Start the React app
    npm start
    ```

    The React app will run on `http://localhost:3000`.

7. **Access the application:**

    Open your web browser and go to `http://localhost:3000` to view and interact with the My Design E-Commerce application.

## Additional Information

- The React frontend is built using functional components and utilizes state management with React Hooks.
- The Node.js backend is built with Express and connects to a PostgreSQL database using Sequelize as the ORM.
- The project follows a modular structure, separating frontend and backend code for better maintainability.

Feel free to explore and enhance the features of this My Design E-Commerce project! If you have any questions or encounter issues, please refer to the documentation or reach out to the project contributors.

Happy coding! 🚀
