<br/>
<p align="center">
  <h3 align="center">Scandiweb Test Assignment</h3>

  <p align="center">
    <a href="https://github.com/IlyashenkoA/scandiweb-react">View Demo</a>
  </p>
</p>



## About The Project

Welcome to the Scandiweb Test Assignment—a dynamic React and PHP web application meticulously crafted for streamlined product management. This project revolves around two distinct pages, each designed to enhance your control and efficiency in handling products.

The first page presents an organized list of products, thoughtfully categorized into three distinct types: DVD, Furniture, and Book. This categorization ensures a comprehensive overview, simplifying your decision-making process.

A second, equally vital page is dedicated to adding new products to your inventory. Embrace the power of customization as you effortlessly input essential fields like SKU, name, price, and more. What sets this page apart is its adaptability, seamlessly adjusting fields based on the specific product type—ensuring precision and relevance.

Experience the harmonious blend of React and PHP, coupled with a user-centric approach, ushering in a new era of effective product management. Join us on this journey as we redefine the way you interact with your inventory, empowering you with clarity, control, and confidence.

<img src="https://github.com/IlyashenkoA/scandiweb-react/assets/12977611/079037f4-a484-4b9a-a307-365e7249e99a" />
<img src="https://github.com/IlyashenkoA/scandiweb-react/assets/12977611/20dc4092-92b8-432f-99c2-3ef3bfabaff0" />


## Built With

* React
* TypeScript
* PHP
* react-hook-form

## Getting Started


### Prerequisites

1. Make sure you have Node.js and npm (Node Package Manager) installed. You can download them from https://nodejs.org/.
2. Ensure you have PHP installed on your machine. You can download it from https://www.php.net/downloads.php.
3. Install a local development environment such as XAMPP (https://www.apachefriends.org/) or MAMP (https://www.mamp.info/) to serve your PHP files.

### Installation

1. **Clone the Repository:**
   Open your terminal and execute the following command to clone the repository:
   ```
   git clone https://github.com/IlyashenkoA/scandiweb-react.git
   ```

2. **Install React Dependencies:**
   Navigate into the `frontend` folder of the cloned project in the terminal and install the React dependencies:
   ```
   cd scandiweb-react/frontend
   npm install
   ```

3. **Configure PHP Server:**
   If you're using XAMPP, copy the `backend` folder and its contents into the `htdocs` directory of your XAMPP installation. For MAMP users, copy it to the `htdocs` directory of MAMP.

4. **Configure Environment Variables:**
   - In the `frontend` folder, create a `.env` file based on the provided `.env.example`.
   - Set the URL for the PHP server in the `.env` file:
     ```
     REACT_APP_PUBLIC_URL=http://localhost:YOUR_PHP_PORT
     ```

5. **Configure Database (backend folder):**
   - In the `backend` folder, create a `.env` file based on the provided `.env.example`.
   - Add your database configurations to the `.env` file:
     ```
     PUBLIC_URL=http://localhost:YOUR_PHP_PORT
     USERNAME=your_database_username
     PASSWORD=your_database_password
     DB_NAME=your_database_name
     ```

6. **Create Database:**
   - Create a MySQL database with a table named "products".
   - Define the following table structure:
     - `id`: INT (primary key)
     - `sku`: VARCHAR
     - `name`: VARCHAR
     - `price`: FLOAT
     - `size`: INT
     - `height`: INT
     - `weight`: INT
     - `length`: INT
     - `width`: INT
     - `type`: VARCHAR

   - Note: Fields `size`, `height`, `weight`, `length`, and `width` can be nullable.

7. **Run the Project (frontend folder):**
   - Start the project by running the following command within the `frontend` folder:
     ```
     npm run start
     ```
   - Access the application in your web browser at `http://localhost:3000` (or the specified port).

You're now fully equipped to install and run the Scandiweb React + PHP project on your local machine, complete with the precise details of the "products" table structure. Happy development!
