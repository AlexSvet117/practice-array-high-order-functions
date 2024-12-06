// given array 
const products = [
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with 40 hours of playtime.",
      year: 2023,
      price: 199.99,
      image: "https://example.com/images/headphones.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "10%"
      },
      quantity: 50
    },
    {
      title: "Smartphone",
      description: "Latest model with 128GB storage and 5G connectivity.",
      year: 2022,
      price: 899.99,
      image: "https://example.com/images/smartphone.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 20
    },
    {
      title: "Gaming Laptop",
      description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
      year: 2023,
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "15%"
      },
      quantity: 10
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with customizable keys.",
      year: 2021,
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 100
    },
    {
      title: "Smartwatch",
      description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
      year: 2022,
      price: 249.99,
      image: "https://example.com/images/smartwatch.jpg",
      isDiscounted: true,
      isRefurbished: true,
      discount: {
        discountAvailable: "5%"
      },
      quantity: 30
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with 20W output and 12-hour battery life.",
      year: 2023,
      price: 49.99,
      image: "https://example.com/images/speaker.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 200
    },
    {
      title: "4K Monitor",
      description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
      year: 2023,
      price: 399.99,
      image: "https://example.com/images/monitor.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "20%"
      },
      quantity: 25
    },
    {
      title: "Fitness Tracker",
      description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
      year: 2021,
      price: 69.99,
      image: "https://example.com/images/fitness-tracker.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 150
    },
    {
      title: "Drone",
      description: "Camera drone with 4K video and 30-minute flight time.",
      year: 2023,
      price: 999.99,
      image: "https://example.com/images/drone.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "25%"
      },
      quantity: 15
    },
    {
      title: "Electric Scooter",
      description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
      year: 2022,
      price: 499.99,
      image: "https://example.com/images/scooter.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 40
    }
  ];

// write code here
// 1. Console Log All Products
for (const item of products) {
  console.log(`${item.title} - ${item.price}` )
}

// 2. Filter Products with Long Descriptions
let shortItems = products.filter((item) => item.description.length < 30)
console.log('Products with short Descriptions')
console.log(shortItems)

// 3. Products in Price Range $200-$400
let selectedPriceRange = products.filter((item) => item.price >= 200 && item.price <= 400)
console.log('Products in Price Range $200-$400')
console.log(selectedPriceRange)

// 4. Filter Discounted Products
let discountedProducts = products.filter((item) => item.isDiscounted === true)
console.log('Discounted Products')
console.log(discountedProducts)

// 5. Filter Products with 15% or More Discount
let largeDiscounts = products.filter((item) => parseFloat(item.discount.discountAvailable) >= 15)
console.log('Products with 15% or More Discount')
console.log(largeDiscounts)

// 6. Filter New Products
let newProducts = products.filter((item) => item.year == 2024)
console.log('New Products')
console.log(newProducts)