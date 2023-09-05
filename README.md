# *Organick*

## Technologies
<div align="center">
<img alt="Badge" src="https://img.shields.io/badge/React-blue">
<img alt="Badge" src="https://img.shields.io/badge/Node.js-3c873a">
<img alt="Badge" src="https://img.shields.io/badge/SCSS-bf4080">
<img alt="Badge" src="https://img.shields.io/badge/MySQL-e48f3a">
<br><img alt="Badge" src="https://img.shields.io/badge/Axios-052636">
<img alt="Badge" src="https://img.shields.io/badge/Express-052636">
<img alt="Badge" src="https://img.shields.io/badge/Formik-052636">
<img alt="Badge" src="https://img.shields.io/badge/BEM metodology-052636">
</div>

## Project installation
Clone the repository: 
```
git clone https://github.com/you-liia/SSWU_5.git
```
In the **server** and **client** folders run: 
- to install all dependencies:
```
npm install
```
- to start the project:
```
npm start
```
The server part should be accessible at http://localhost:8000
and the client part at http://localhost:3000.

## Project details

### Homepage

- On the main page, 8 products are displayed, with discounted items shown first, and the rest following. The descriptions and information about these products are stored in the database.

- After clicking the "Load More" button, all the products from the database are loaded along with specific information about each item.

- If a user likes a specific product, they can click on it to open a modal window that provides more detailed information about the product, both primary and additional details. Additionally, the user has the option to add a certain quantity of the product to their cart.

- If, after opening the modal window, the user decides not to order the product, they can close it by clicking outside the modal window or by pressing the close button. After closing the modal window, all products become available for viewing again.

- If the user doesn't want to view all the products, they can click the "Hide All" button, and only the first 8 products, currently offering a discount, will remain on the page.

- The user can place their order by navigating to the shopping cart.

### Cart

- In the shopping cart, each item is represented by a product image, its name, the regular price, and the discounted price. The total price of the products and the discount amount are updated in real-time as the user makes changes in the cart. The user can modify the quantity of a specific item or remove items from the cart.

- After clicking the "To Order" button, a form opens that the user needs to fill out and confirm their personal information and order details.

- Order details are stored in the database so that administrators can process all orders in the future.
