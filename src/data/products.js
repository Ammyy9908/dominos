const products = [
    {
        id:1,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/PIZ0167.jpg",
        name:"The Unthinkable Pizza",
        dsecription:"Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!",
        price:249,
        size:"regular"
    },
    {
        id:2,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/PIZ0170.jpg",
        name:"The Cheese Dominator",
        dsecription:"Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza topped with a generous helping of herb sprinkle",
        price:319,
        size:"regular"
    },
    {
        id:3,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/PIZ0171.jpg",
        name:"The 4 Cheese Pizza",
        dsecription:"Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese",
        price:319,
        size:"regular"
    },
    {
        id:4,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_peppy_paneer.jpg",
        name:"Peppy Paneer",
        dsecription:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
        price:229,
        size:"regular"
    },
    {
        id:5,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_veg_extravaganza.jpg",
        name:"Veg Extravaganza",
        dsecription:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
        price:249,
        size:"regular"
    },
    {
        id:6,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_margherita_2502.jpg",
        name:"Margherita",
        dsecription:"Classic delight with 100% real mozzarella cheese",
        price:199,
        size:"regular"
    },
    {
        id:7,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/double_cheese_margherita_2502.jpg",
        name:"Double Cheese Margherita",
        dsecription:"A classic delight loaded with extra 100% real mozzarella cheese",
        price:339,
        size:"regular"
    },
    {
        id:8,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/farmhouse.png",
        name:"Farmhouse",
        dsecription:"Delightful combination of onion, capsicum, tomato & grilled mushroom",
        price:399,
        size:"regular"
    },
    {
        id:9,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_peppy_paneer.jpg",
        name:"Peppy Paneer",
        dsecription:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
        price:399,
        size:"regular"
    },
    {
        id:10,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_mexican_green_wave.jpg",
        name:"Mexican Green Wave",
        dsecription:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
        price:399,
        size:"regular"
    },
    {
        id:11,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_deluxe_veggie.jpg",
        name:"Deluxe Veggie",
        dsecription:"Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
        price:459,
        size:"regular"
    },
    {
        id:12,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_veggie_paradise.jpg",
        name:"Veggie Paradise",
        dsecription:"The awesome foursome! Golden corn, black olives, capsicum, red paprika",
        price:399,
        size:"regular"
    },
    {
        id:13,
        type:"Pizza",
        category:"veg",
        cover:"https://images.dominos.co.in/new_cheese_n_corn.jpg",
        name:"Cheese n Corn",
        dsecription:"A delectable combination of sweet & juicy golden corn",
        price:309,
        size:"regular"
    },
    {
        id:14,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/BEV0119_1.jpg",
        name:"Pepsi (500ml)",
        dsecription:"Sparkling and Refreshing Beverage",
        price:60,
        size:null
    },
    {
        id:15,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/7up_new_2202.jpg",
        name:"7up (500ml)",
        dsecription:"Refreshing clear drink with a natural lemon flavor",
        price:60,
        size:null
    },
    {
        id:16,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/mirinda.jpg",
        name:"Mirinda (500ml)",
        dsecription:"Delicious Orange Flavoured beverage",
        price:60,
        size:null
    },
    {
        id:17,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/pepsi_black.png",
        name:"Pepsi Black Can",
        dsecription:"Maximum Taste Zero Calories",
        price:60,
        size:null
    },
    {
        id:18,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/mountain_dew.jpg",
        name:"Mountain Dew (500ml)",
        dsecription:"Strong and Refreshing",
        price:60,
        size:null
    },
    {
        id:19,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/ALPHONSO.jpg",
        name:"B Natural Alphonsos from Ratnagiri (300 ml)",
        dsecription:"Alphonsos only from Ratnagiri with the Goodness of Fiber",
        price:70,
        size:null
    },
    {
        id:20,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/PINKGUAVA.jpg",
        name:"B Natural Pink Guavas from Dakshin India (300 ml)",
        dsecription:"Pulpy Pink Guavas with the Goodness of Fiber",
        price:70,
        size:null
    },
    {
        id:21,
        type:"Beverages",
        category:"beverage",
        cover:"https://images.dominos.co.in/MIXEDFRUIT.jpg",
        name:"B Natural Mixed Fruit from Himalayas (300 ml)",
        dsecription:"Premium fruits from Himalayas with the Goodness of Fiber",
        price:70,
        size:null
    },
    {
        id:22,
        type:"Pizza",
        category:"non-veg",
        cover:"https://images.dominos.co.in/new_chicken_dominator.jpg",
        name:"Chicken Dominator",
        dsecription:"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
        price:579,
        size:"regular"
    },
    {
        id:23,
        type:"Pizza",
        category:"non-veg",
        cover:"https://images.dominos.co.in/new_chicken_golden_delight.jpg",
        name:"Chicken Golden Delight",
        dsecription:"Double pepper barbecue chicken, golden corn and extra cheese, true delight",
        price:459,
        size:"regular"
    },
    {
        id:24,
        type:"Pizza",
        category:"non-veg",
        cover:"https://images.dominos.co.in/new_non_veg_supreme.jpg",
        name:"Non Veg Supreme",
        dsecription:"Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri",
        price:579,
        size:"regular"
    },
    {
        id:25,
        type:"Pizza",
        category:"non-veg",
        cover:"https://images.dominos.co.in/cheesepepperoni.png",
        name:"Chicken Pepperoni",
        dsecription:"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
        price:579,
        size:"regular"
    },
]

export default products;