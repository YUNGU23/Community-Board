const data = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/9a/8c/bd/9a8cbdfdcdaba6be9d7b7601b1540e18.jpg",
    name: "Hong Kong Street Food",
    description: "Embark on a culinary adventure through the vibrant streets of Hong Kong with our authentic Hong Kong Street Food truck. Discover the rich tapestry of flavors that define Hong Kong cuisine, from the irresistible aroma of steaming hot dim sum to the delicate sweetness of freshly baked egg tarts. Each dish is meticulously crafted using time-honored recipes passed down through generations, ensuring an unforgettable dining experience that captures the essence of Hong Kong's bustling street food scene.",
    region: "Chinese",
    menu: [
      { name: "Dim Sum", price: 5.99, img: "https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg"},
      { name: "Egg Tart", price: 3.50, img: "https://www.saveur.com/uploads/2019/11/18/U5CWL2CXTVHXZIGW6ZLSCRF37M.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440"},
      { name: "Bubble Tea", price: 4.75, img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.616.411.suffix/1686684207354.jpeg"}
    ],
    address:"123 Main Street, San Jose, CA 95112",
    latitude:37.3377,
    longitude:-121.8863,
    review1:"Absolutely delicious! The dim sum here is top-notch, and the egg tarts are to die for. Friendly service and authentic flavors make this food truck a must-visit.",
    review2:"Had a fantastic experience trying out the bubble tea here. It was perfectly sweetened and refreshing. The variety of options on the menu is impressive. Will definitely be coming back!",
    review3:"Hong Kong Street Food never disappoints! Their dim sum is always fresh and flavorful, and the egg tarts are heavenly. A true gem in the food truck scene!",
    review4:"Great selection of traditional Chinese street food. Loved the authenticity of the flavors. Dim sum was particularly delicious. Friendly staff too!",
    review5:"The bubble tea here is addictive! Perfectly brewed and served with tapioca pearls. Great spot to satisfy your craving for authentic Hong Kong street food.",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/41/b2/b6/41b2b6e6ed4a048ab630c295c948b87e.jpg",
    name: "Smash Burger Truck",
    description: "Get ready to indulge in the ultimate comfort food experience with our Smash Burger Truck. Bite into our mouthwatering burgers crafted from the finest cuts of beef, seasoned to perfection, and grilled to juicy perfection. Whether you're craving a classic cheeseburger or something with a bit more flair, our diverse menu has something to satisfy every burger lover's cravings. And don't forget to pair your burger with a side of crispy golden fries for the perfect meal.",
    region: "American",
    menu: [
      { name: "Classic Burger", price: 8.99, img: "https://www.unileverfoodsolutions.com.sg/dam/global-ufs/mcos/SEA/calcmenu/recipes/SG-recipes/vegetables-&-vegetable-dishes/%E7%BB%8F%E5%85%B8%E8%8A%9D%E5%A3%AB%E6%B1%89%E5%A0%A1/main-header.jpg"},
      { name: "Cheeseburger", price: 9.99, img: "https://www.foodandwine.com/thmb/qEZ3iMxsIKQ85j5flvS5k5Ng2yI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg"},
      { name: "Fries", price: 3.50, img: "https://www.seriouseats.com/thmb/dWuLBGrNYuDAq2YSMctpzO_ongI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg"}
    ],
    address:"456 Elm Street, Santa Clara, CA 95051",
    latitude:37.3205,
    longitude:-121.9474,
    review1:"Juicy burgers with a perfect char! The classic burger was flavorful and cooked to perfection. Fries were crispy and delicious too. Great spot for a quick and satisfying meal.",
    review2:"Hands down the best cheeseburger I've ever had! The patty was juicy, the cheese was melted to perfection, and the bun was soft and fresh. Will definitely be back for more!",
    review3:"Smash Burger Truck never disappoints! Their burgers are consistently delicious, and the fries are addictive. The staff is always friendly and welcoming too.",
    review4:"I'm a burger aficionado, and Smash Burger Truck exceeded my expectations! The Classic Burger was simple yet packed with flavor. Fries were crispy and seasoned just right. Highly recommend!",
    review5:"Great burgers at affordable prices! Loved the classic cheeseburger. It hit the spot after a long day. Will definitely be back to try more items on the menu.",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/b3/c3/64/b3c36434c4da0789dcae949257078ac7.jpg",
    name: "The El Tacos",
    description: "Dive into the vibrant world of Mexican cuisine with The El Tacos food truck. Our menu features an array of authentic Mexican delights, from savory tacos to hearty burritos and cheesy quesadillas. Each dish is bursting with bold flavors and fresh ingredients, transporting your taste buds to the bustling streets of Mexico City. Whether you're a spice enthusiast or prefer milder flavors, there's something for everyone to enjoy at The El Tacos.",
    region: "Mexican",
    menu: [
      { name: "Taco", price: 2.99, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"},
      { name: "Burrito", price: 6.50, img: "" },
      { name: "Quesadilla", price: 4.75, img: }
    ],
    address:"789 Oak Avenue, Sunnyvale, CA 94086",
    latitude:37.3352,
    longitude:-121.8811,
    review1:"Authentic Mexican food at its finest! The tacos here are bursting with flavor, and the burritos are massive and satisfying. Don't miss out on the quesadillas too!",
    review2:"Tacos were flavorful and filling. Loved the variety of meats and toppings available. Great spot for a quick and tasty meal!",
    review3:"Delicious Mexican street food! The burrito was massive and packed with flavor. Quesadillas were cheesy and satisfying. Will definitely be back!",
    review4:"Tried the tacos and burritos here, and they were fantastic! Generous portions and authentic flavors. Can't wait to come back and try more items on the menu.",
    review5:"The El Tacos never disappoints! Their tacos are consistently delicious, and the burritos are massive. The quesadillas are a hidden gem. Highly recommend!",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/f8/35/62/f835627e40d95872910bcf95d7ef0846.jpg",
    name: "The Little Taqueua",
    description: "Experience the taste of Italy with The Little Taqueria food truck. Our menu celebrates the rich culinary heritage of Italy, offering a tantalizing selection of traditional favorites such as wood-fired pizzas, flavorful pastas, and creamy gelato. Each dish is crafted with care using only the finest ingredients, ensuring a dining experience that is both authentic and unforgettable. Join us on a culinary journey to Italy's charming streets and savor the flavors of la dolce vita.",
    region: "Italian",
    menu: [
      { name: "Pizza", price: 10.99 },
      { name: "Pasta", price: 8.50 },
      { name: "Gelato", price: 4.75 }
    ],
    address:"101 Maple Street, Mountain View, CA 94041",
    latitude:37.3742,
    longitude:-121.8165,
    review1:"Authentic Italian cuisine that transports you to the streets of Italy! The pizza was perfectly baked with fresh toppings. Pasta was al dente and flavorful. Gelato was the perfect ending to the meal.",
    review2:"The pizza here is out of this world! The Margherita Pizza was simple yet bursting with flavor. Pasta dishes were also delicious, especially the Spaghetti Carbonara. Gelato was creamy and indulgent. A must-visit!",
    review3:"The Little Taqueria never fails to impress! Their pizza is always fresh and delicious, and the pasta dishes are authentic and flavorful. Gelato is a must-try! Great ambiance and friendly staff.",
    review4:"Amazing Italian food! Loved the Margherita Pizza and Spaghetti Carbonara. Gelato was the perfect dessert. Cozy atmosphere and great service. Will definitely be back!",
    review5:"Delicious Italian street food! The pizza was cooked to perfection, and the pasta dishes were rich and flavorful. Gelato was a delightful treat. Highly recommend!",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/92/d1/e0/92d1e086649b6fc42b38367ddfde9524.jpg",
    name: "Indian Food",
    description: "Spice up your day with the exotic flavors of Indian cuisine from our Indian Food truck. Our menu showcases the diverse culinary traditions of India, from aromatic curries to flavorful biryanis and freshly baked naan bread. Each dish is carefully prepared using traditional spices and cooking techniques, resulting in a symphony of flavors that will transport you to the bustling streets of Mumbai or the vibrant markets of Delhi. Whether you're a seasoned curry connoisseur or new to Indian cuisine, there's something for everyone to enjoy at Indian Food.",
    region: "Indian",
    menu: [
      { name: "Chicken Tikka Masala", price: 12.99 },
      { name: "Saag Paneer", price: 9.50 },
      { name: "Naan Bread", price: 2.25 }
    ],
    address:"234 Cherry Lane, Cupertino, CA 95014",
    latitude:37.3639,
    longitude:-121.9289,
    review1:"Hands down the best Indian food truck in town! Chicken Tikka Masala was flavorful and rich, and the Saag Paneer was creamy and delicious. Naan bread was soft and fluffy. A must-visit for Indian cuisine lovers!",
    review2:"Tried the Chicken Tikka Masala and Saag Paneer here, and they were fantastic! Authentic flavors and generous portions. Naan bread was the perfect accompaniment. Will definitely be back for more!",
    review3:"Absolutely delicious Indian food! The Chicken Tikka Masala was perfectly spiced, and the Saag Paneer was creamy and satisfying. Naan bread was soft and warm. Great spot for a flavorful meal!",
    review4:"Indian Food never disappoints! The Chicken Tikka Masala was mouthwatering, and the Saag Paneer was creamy and flavorful. Naan bread was fresh and delicious. Highly recommend!",
    review5:"Delicious and authentic Indian cuisine! The Chicken Tikka Masala was perfectly seasoned, and the Saag Paneer was creamy and delicious. Naan bread was soft and warm. Great service too!",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/7b/bc/ce/7bbccee406d6438688caa8897ab13807.jpg",
    name: "Gelati",
    description: "Treat yourself to a taste of Thailand with Gelati food truck. Our menu features a delightful selection of Thai street food favorites, from fragrant Pad Thai to creamy Green Curry and sweet Mango Sticky Rice. Each dish is crafted with care using authentic Thai ingredients and traditional recipes, ensuring an unforgettable culinary experience that captures the essence of Thai cuisine. Join us on a flavorful journey through the bustling streets of Bangkok and indulge in the bold and vibrant flavors of Gelati.",
    region: "Thai",
    menu: [
      { name: "Pad Thai", price: 11.99 },
      { name: "Green Curry", price: 10.50 },
      { name: "Mango Sticky Rice", price: 5.75 }
    ],
    address:"567 Pine Avenue, Los Gatos, CA 95030",
    latitude:37.3227,
    longitude:-121.9435,
    review1:"Authentic Thai flavors that transport you to the streets of Thailand! Pad Thai was flavorful and perfectly balanced, and the Green Curry was rich and aromatic. Mango Sticky Rice was the perfect dessert. A must-visit!",
    review2:"Tried the Pad Thai and Green Curry here, and they were fantastic! Authentic flavors and generous portions. Mango Sticky Rice was a delightful treat. Will definitely be back for more!",
    review3:"Absolutely delicious Thai food! Pad Thai was flavorful and satisfying, and the Green Curry was rich and creamy. Mango Sticky Rice was the perfect ending to the meal. Great spot for authentic Thai cuisine!",
    review4:"Gelati never disappoints! Their Pad Thai is consistently delicious, and the Green Curry is packed with flavor. Mango Sticky Rice is a must-try! Cozy atmosphere and friendly staff.",
    review5:"Delicious Thai street food! The Pad Thai was flavorful, and the Green Curry was rich and aromatic. Mango Sticky Rice was the perfect dessert. Highly recommend!",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/09/d1/0e/09d10e0ca39ad5c922effbc1f6a92110.jpg",
    name: "Japanese Food",
    description: "Discover the artistry of Japanese cuisine with our Japanese Food truck. Our menu features an exquisite selection of sushi rolls, savory ramen, and indulgent mochi ice cream. Each dish is crafted with precision and attention to detail, using the freshest ingredients and traditional Japanese techniques. Whether you're a sushi aficionado or new to Japanese cuisine, our food truck offers a culinary experience that is both authentic and unforgettable. Join us and experience the flavors of Japan's rich culinary heritage.",
    region: "Japanese",
    menu: [
      { name: "Sushi Roll", price: 8.99 },
      { name: "Ramen", price: 10.50 },
      { name: "Mochi Ice Cream", price: 4.75 }
    ],
    address:"890 Cedar Street, Milpitas, CA 95035",
    latitude:37.3250,
    longitude:-121.8641,
    review1:"Great spot for authentic Japanese cuisine! Sushi rolls were fresh and flavorful, and the ramen was comforting and delicious. Mochi ice cream was a delightful treat. Will definitely be back!",
    review2:"Amazing Japanese food! Sushi rolls were expertly crafted, and the ramen was rich and flavorful. Mochi ice cream was the perfect ending to the meal. Cozy ambiance and friendly staff.",
    review3:"Tried the sushi rolls and ramen here, and they were fantastic! Authentic flavors and generous portions. Mochi ice cream was a must-try! Will definitely be returning.",
    review4:"Fantastic Japanese cuisine! Sushi rolls were fresh and delicious, and the ramen was flavorful and comforting. Mochi ice cream was a delightful dessert. Highly recommend!",
    review5:"Delicious Japanese street food! Sushi rolls were packed with flavor, and the ramen was rich and satisfying. Mochi ice cream was a perfect ending to the meal. Great spot for Japanese food lovers!",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/9a/65/cc/9a65ccd138c7915037a8b645a9cf244a.jpg",
    name: "BabCha Korea",
    description: "Experience the bold flavors of Korea with BabCha Korea food truck. Our menu showcases the diverse and vibrant culinary traditions of Korea, from savory Bibimbap to spicy Kimchi and succulent Korean BBQ. Each dish is crafted with care using authentic Korean ingredients and traditional recipes, ensuring an authentic dining experience that captures the essence of Korean cuisine. Whether you're a fan of fiery flavors or prefer milder dishes, there's something for everyone to enjoy at BabCha Korea.",
    region: "Korean",
    menu: [
      { name: "Bibimbap", price: 11.99 },
      { name: "Kimchi", price: 6.50 },
      { name: "Korean BBQ", price: 15.75 }
    ],
    address:"345 Walnut Avenue, Saratoga, CA 95070",
    latitude:37.3373,
    longitude:-121.9298,
    review1:"Authentic Korean flavors that transport you to Seoul! Bibimbap was flavorful and satisfying, and the Kimchi was deliciously tangy. Korean BBQ was perfectly grilled. A must-visit for Korean food enthusiasts!",
    review2:"The best Korean food truck in town! Bibimbap was perfectly seasoned, and the Kimchi was authentic and delicious. Korean BBQ was tender and flavorful. Will definitely be back!",
    review3:"Tried the Bibimbap and Kimchi here, and they were fantastic! Authentic flavors and generous portions. Korean BBQ was a must-try! Will definitely be returning.",
    review4:"Amazing Korean cuisine! Bibimbap was flavorful, and the Kimchi was perfectly fermented. Korean BBQ was juicy and tender. Highly recommend!",
    review5:"Delicious Korean street food! Bibimbap was packed with flavor, and the Kimchi was tangy and delicious. Korean BBQ was perfectly grilled. Great spot for Korean food lovers!",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/aa/c9/ab/aac9ab18645af833774265e8f782f859.jpg",
    name: "Boba Tea",
    description: "Quench your thirst and tantalize your taste buds with the refreshing flavors of Boba Tea. Our menu features a delightful selection of classic milk teas, fruity bubble teas, and indulgent matcha lattes. Each drink is made to order using high-quality ingredients and traditional brewing methods, ensuring a flavorful and satisfying beverage experience. Whether you're in the mood for something sweet, creamy, or refreshing, Boba Tea has the perfect drink to satisfy your cravings.",
    region: "Chinese",
    menu: [
      { name: "Classic Milk Tea", price: 4.99 },
      { name: "Taro Bubble Tea", price: 5.50 },
      { name: "Matcha Latte", price: 6.75 }
    ],
    address:"678 Olive Street, Campbell, CA 95008",
    latitude:37.3330,
    longitude:-121.8863,
    review1:"Amazing selection of bubble teas! Classic milk tea was creamy and delicious, and the Taro bubble tea was perfectly sweet. Matcha latte was refreshing. Great spot for bubble tea enthusiasts!",
    review2:"The best bubble tea in town! Classic milk tea was rich and satisfying, and the Taro bubble tea was incredibly flavorful. Matcha latte was smooth and refreshing. Will definitely be back!",
    review3:"Tried the classic milk tea and Taro bubble tea here, and they were fantastic! Authentic flavors and generous portions. Matcha latte was a must-try! Will definitely be returning.",
    review4:"Fantastic bubble tea! Classic milk tea was perfectly brewed, and the Taro bubble tea had a great balance of flavors. Matcha latte was creamy and delicious. Highly recommend!",
    review5:"Delicious bubble tea selection! Classic milk tea was smooth and satisfying, and the Taro bubble tea was wonderfully sweet. Matcha latte was a perfect pick-me-up. Great spot for bubble tea lovers!",
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/3b/7f/7c/3b7f7c95128b9d46dc62e9abd3b94539.jpg",
    name: "Coffee & TEA",
    description: "Indulge in a moment of relaxation with Coffee & TEA food truck. Our menu features a curated selection of premium coffees, aromatic teas, and indulgent beverages. From rich and robust espressos to creamy cappuccinos and soothing chai lattes, each drink is crafted with care by our skilled baristas using the finest ingredients and brewing techniques. Whether you're in need of a morning pick-me-up or a soothing afternoon treat, Coffee & TEA has the perfect beverage to elevate your day.",
    region: "Mediterranean",
    menu: [
      { name: "Espresso", price: 2.99 },
      { name: "Cappuccino", price: 4.50 },
      { name: "Chai Latte", price: 5.75 }
    ],
    address:"901 Peach Street, Palo Alto, CA 94301",
    latitude:37.2913,
    longitude:-121.8734,
    review1:"Great spot for coffee and tea lovers! Espresso was bold and flavorful, and the cappuccino was perfectly frothy. Chai latte was aromatic and delicious. Will definitely be back!",
    review2:"Amazing coffee and tea selection! Espresso was rich and robust, and the cappuccino was expertly crafted. Chai latte was perfectly spiced. Cozy ambiance and friendly staff.",
    review3:"Tried the espresso and cappuccino here, and they were fantastic! Authentic flavors and generous portions. Chai latte was a must-try! Will definitely be returning.",
    review4:"Fantastic coffee and tea! Espresso was perfectly brewed, and the cappuccino had a great balance of flavors. Chai latte was creamy and delicious. Highly recommend!",
    review5:"Delicious coffee and tea selection! Espresso was smooth and satisfying, and the cappuccino was wonderfully frothy. Chai latte was a perfect blend of spices. Great spot for coffee and tea lovers!",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/f6/0f/1c/f60f1cb435e68b8490aa1c53ae5c7dbe.jpg",
    name: "Beverage",
    description: "Elevate your beverage experience with our Beverage food truck. Our menu features a diverse selection of refreshing drinks, from classic Greek frappes to indulgent iced Greek coffees and aromatic retsina wines. Each beverage is crafted with care using authentic ingredients and traditional recipes, ensuring a taste experience that is both authentic and unforgettable. Whether you're in the mood for something bold and flavorful or light and refreshing, our Beverage food truck has something for everyone to enjoy.",
    region: "Greek",
    menu: [
      { name: "Greek Frappe", price: 5.99 },
      { name: "Iced Greek Coffee", price: 4.50 },
      { name: "Retsina Wine", price: 12.75 }
    ],
    address:"432 Vine Street, Fremont, CA 94536",
    latitude:37.3671,
    longitude:-121.8431,
    review1:"Excellent selection of Greek beverages! Greek frappe was refreshing and energizing, and the iced Greek coffee was wonderfully aromatic. Retsina wine was smooth and flavorful. Great spot for Greek drinks!",
    review2:"Authentic Greek beverages! Loved the Greek frappe and iced Greek coffee, they were perfectly brewed. Retsina wine was a delightful surprise! Cozy atmosphere and friendly service.",
    review3:"Tried the Greek frappe and iced Greek coffee here, and they were fantastic! Great flavors and generous portions. Retsina wine was a must-try! Will definitely be back.",
    review4:"Fantastic Greek beverages! Greek frappe was expertly made, and the iced Greek coffee had a great aroma. Retsina wine was delightful. Highly recommend!",
    review5:"Delicious Greek drinks! Greek frappe was creamy and satisfying, and the iced Greek coffee was wonderfully refreshing. Retsina wine was a perfect accompaniment. Great spot for Greek beverage lovers!",
  },
  {
    id: 12,
    img: "https://i.pinimg.com/564x/60/f5/62/60f5625cc3902309500f754205492f90.jpg",
    name: "The Street",
    description: "Savor the flavors of Italy with The Street food truck. Our menu celebrates the rich culinary heritage of Italy, offering a tantalizing selection of classic Italian dishes, from mouthwatering margherita pizzas to creamy spaghetti carbonara and indulgent tiramisu. Each dish is crafted with care using authentic Italian ingredients and traditional recipes, ensuring an unforgettable dining experience that captures the essence of Italy's vibrant street food culture. Join us on a culinary journey through the charming streets of Italy and indulge in the flavors of la dolce vita.",
    region: "Italian",
    menu: [
      { name: "Margherita Pizza", price: 10.99 },
      { name: "Spaghetti Carbonara", price: 12.50 },
      { name: "Tiramisu", price: 6.75 }
    ],
    address:"789 Willow Avenue, Morgan Hill, CA 95037",
    latitude:37.3317,
    longitude:-121.8909,
    review1:"Amazing Italian street food! Margherita pizza was flavorful and authentic, and the spaghetti carbonara was rich and creamy. Tiramisu was the perfect ending to a delicious meal.",
    review2:"Delicious Italian street food! Margherita pizza was perfectly baked, and the spaghetti carbonara was to die for. Tiramisu was heavenly! Will definitely be back!",
    review3:"Tried the Margherita pizza and spaghetti carbonara here, and they were fantastic! Authentic flavors and generous portions. Tiramisu was a must-try! Will definitely be returning.",
    review4:"Fantastic Italian street food! Margherita pizza was mouthwatering, and the spaghetti carbonara was deliciously creamy. Tiramisu was divine. Highly recommend!",
    review5:"Delicious Italian cuisine! Margherita pizza was perfectly cooked, and the spaghetti carbonara was rich and flavorful. Tiramisu was a delightful treat. Great spot for authentic Italian street food!",
  },
];

export default data;