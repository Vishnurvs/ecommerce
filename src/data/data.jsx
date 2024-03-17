import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


export const socialIcon = [
    {
      icon: <i className="fa fa-facebook-f"></i>,
      name: "facebook",
    },
    {
      icon: <i className="fa fa-twitter"></i>,
      name: "twitter",
    },
    {
      icon: <i class="fa fa-youtube-play"></i>,
      name: "youtube",
    },
    {
      icon: <i className="fa fa-instagram"></i>,
      name: "instagram",
    },
  ];
  
  export const products = [
    {
      id: 1,
      category: "Fruits",
      product_name: "Orange",
      product_img: "../assets/img/best-product-1.jpg",
      description:
        "The vitamin C found in oranges has other health benefits too: Forms blood vessels, muscles, cartilage, and collagen in your bones.",
      price: "106",
    },
  
    {
      id: 2,
      category: "Fruits",
      product_name: "Apple",
      product_img: "../assets/img/best-product-6.jpg",
      description:
        "Apples are touted for their health benefits, containing plant chemicals like flavonoids and fiber",
      price: "145",
    },
  
    {
      id: 3,
      category: "Fruits",
      product_name: "Pomegranate",
      product_img: "../assets/img/pomegranate.jpg",
      description:
        "Pomegranate is a source of fiber, which can promote weight loss, lower cholesterol, and ease constipation.",
      price: "141",
    },
  
    {
      id: 4,
      category: "Vegetables",
      product_name: "Califlower",
      product_img: "../assets/img/single-item.jpg",
      description:
        "Cauliflower is a vegetable. The head or curd of cauliflower is commonly eaten as food. It is also used as medicine.",
      price: "45",
    },
    {
      id: 5,
      category: "Bread",
      product_name: "Plain Bread",
      product_img: "../assets/img/normal.jpg",
      description:
        "There is no crust on the sides because they are baked in batches and then separated.",
      price: "40",
    },
  
    {
      id: 6,
      category: "Meat",
      product_name: "Chicken",
      product_img: "../assets/img/chicken.jpg",
      description:
        "Eating chicken can help to build stronger muscles and promote healthier bones,decreasing the risk of injuries.",
      price: "250",
    },
    {
      id: 12,
      category: "Bread",
      product_name: "Wheat Bread",
      product_img: "../assets/img/weat.jpg",
      description:
        "Wheat bread merely means the product is made using wheat flour, which is another term for refined white flour.",
      price: "50",
    },
    {
      id: 12,
      category: "Meat",
      product_name: "Mutton",
      product_img: "../assets/img/mutton.jpg",
      description:
        "Mutton is meat from a sheep over two years old, and has less tender flesh.",
      price: "550",
    },
    {
      id: 7,
      category: "Vegetables",
      product_name: "Poteto",
      product_img: "../assets/img/poteto.jpg",
      description:
        " People use potatoes for diabetes, heart disease, high blood pressure, indigestion (dyspepsia),and other conditions.",
      price: "60",
    },
    {
      id: 8,
      category: "Fruits",
      product_name: "Strawberry",
      product_img: "../assets/img/strawberry.jpg",
      description:
      "Strawberries are universally loved fruit, and which is used in the preparations of milkshakes, jellies, and jams to pastries.",      price: "3.99",
      price: "400",
    },
    {
      id: 10,
      category: "Fruits",
      product_name: "Watermelon",
      product_img: "../assets/img/watermelon.jpg",
      description:
        "Watermelon is around 90% water, which makes it useful for staying hydrated in the summer.",
      price: "130",
    },
    {
      id: 14,
      category: "Vegetables",
      product_name: "Pumpkin",
      product_img: "../assets/img/pumpkin.jpg",
      description:
        "Pumpkin provides calcium, potassium, and magnesium, which can help keep your heartbeat regular and your blood pressure low.",
      price: "63",
    },
    {
      id: 11,
      category: "Fruits",
      product_name: "Mango",
      product_img: "../assets/img/mango.jpg",
      description:
        "Mangos are a decent source of vitamin A, folate and are pretty high in fiber, which is beneficial for colon cancer prevention, heart disease and weight control.",
      price: "70",
    },
    {
      id: 14,
      category: "Fruits",
      product_name: "Tomato",
      product_img: "../assets/img/tomato2.jpg",
      description:
        "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant.It can be a valuable part of a healthy diet.",
      price: "30",
    },
  ];
  export const slids = [
    {
      category: "Fruit",
      slide_img: "../assets/img/hero-img-1.png",
    },
    {
      category: "Vegetable",
      slide_img: "../assets/img/hero-img-2.jpg",
    },
  ];
  export const features = [
    {
      id: 1,
      icon: [<i className="fa fa-car-side fa-3x text-white"><LocalShippingIcon style={{fontSize:"40px"}}/></i>],
      title: "Free Shipping",
      descript: "Free on order over $300",
    },
    {
      id: 2,
      icon: [<i className=" text-white"><SecurityIcon style={{fontSize:"40px"}}/></i>],
      title: "Security Payment",
      descript: "100% security payment",
    },
    {
      id: 3,
      icon: [<i className=" text-white"><CurrencyExchangeIcon style={{fontSize:"40px"}}/></i>],
      title: "30 Day Return",
      descript: "30 day money guarantee",
    },
    {
      id: 4,
      icon: [<i className=" text-white"><PhoneInTalkIcon style={{fontSize:"40px"}}/></i>],
      title: "24/7 Support",
      descript: "Support every time fast",
    },
  ];
  