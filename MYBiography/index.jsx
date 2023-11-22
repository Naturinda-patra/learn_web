<!DOCTYPE HTML>
<Html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kemi Fast Foods - Menu</title>
    <style>
        /* Menu-specific styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f8f8;
            background-image: url('one.jpeg.jpeg');
            margin: 0;
            padding: 0;
        }

        .menu-container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: orange;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            text-align: center;
            color: #333;
            text-transform: uppercase;
        }

        .menu-item {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }

        .menu-item h3 {
            margin-bottom: 5px;
            color: #f44336;
        }

        .menu-item p {
            margin: 0;
            color: black;
        }

        .menu-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .price {
            color: #555;
            font-weight: bold;
        }

        /* Image styles */
        .menu-image {
            width: 100px; /* Set your preferred width */
            height: 100px; /* Set your preferred height */
            border-radius: 50px;
            margin-bottom: 10px;
            display: inline-block;
            margin: 0 auto;
        }

        .menu-heading {
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            color: #ff6347;
            margin-top: 20px;
            font-size: 3rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: neon 1.5s ease-in-out infinite alternate;
            /* Gradient background */
            background-image: linear-gradient(to right, #ff6a88, #ff99cc);
            -webkit-background-clip: text;
            background-clip: text;
        }

        /* Neon animation */
        @keyframes neon {
            from {
                text-shadow: 0 0 10px #fff, 0 0 20px #ff6347, 0 0 30px #ff6347;
            }
            to {
                text-shadow: 0 0 5px #fff, 0 0 10px #ff6347, 0 0 15px #ff6347;
            }
        }

    </style>
</head>
<body>
    <div class="menu-container">
        <h1 class="menu-heading">Kemi fast foods Menu</h1>
        
        <div class="menu-item">
            <h3>Burger</h3>
            <img class="menu-image" src="burger.jpeg" alt="Burger">
            <p>A delicious burger with all the fixings</p>
            <p class="price">12000shs</p>
        </div>



        <div class="menu-item">
            <h3>Pizza</h3>
            <img class="menu-image" src="pizza.jpeg" alt="Pizza">
            <p>Freshly baked pizza with assorted toppings</p>
            <p class="price">One slice @4000shs</p>
            <p class="price">Small@12000shs</p>
            <p class="price">Medium@20000shs</p>
            <p class="price">Large@25000shs</p>
            
        </div>
        
        <div class="menu-item">
            <h3>Salad</h3>
            <img class="menu-image" src="salads.jpeg" alt="Salad">
            <p>Fresh garden salad with dressing options</p>
            <p class="price">5000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>Pasta</h3>
            <img class="menu-image" src="mariana.jpeg" alt="Pasta">
            <p>Homemade pasta with marinara sauce</p>
            <p class="price">5000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>Steak</h3>
            <img class="menu-image" src="steak.jpeg" alt="Steak">
            <p>Grilled steak with choice of sides</p>
            <p class="price">25000shs</p>
        </div>

        <div class="menu-item">
            <h3>Sandwich</h3>
            <img class="menu-image" src="sandwich.jpeg" alt="Sandwich">
            <p>Assorted fresh sandwiches</p>
            <p class="price">5000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>Chicken Wings</h3>
            <img class="menu-image" src="chickenwings.jpeg" alt="Chicken Wings">
            <p>Spicy and crispy chicken wings</p>
            <p class="price">20000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>French Fries</h3>
            <img class="menu-image" src="frenchfries.jpeg" alt="French Fries">
            <p>Golden and crispy French fries</p>
            <p class="price">9000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>Ice Cream</h3>
            <img class="menu-image" src="ice.jpeg" alt="Ice Cream">
            <p>Delicious ice cream flavors</p>
            <p class="price">@5000shs</p>
        </div>
        
        <div class="menu-item">
            <h3>Soda</h3>
            <img class="menu-image" src="soda.jpeg" alt="Soda">
            <p>Assorted carbonated drinks</p>
            <p class="price">smallbottle@2000</p>
            <p class="price">mediumbbottle3000</p>
            <p class="price">largebottle@6000</p>
        </div>
        
        
        <div class="menu-item">
            <h3>Coffee</h3>
            <img class="menu-image" src="coffee.jpeg" alt="Coffee">
            <p>Hot and flavorful coffee</p>
            <p class="price">3000shs</p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="order.html" style="text-decoration: none; color: white; background-color: #333; padding: 10px 20px; border-radius: 5px;">Place an Order</a>
        </div>
    </div>
</body>
</html>

