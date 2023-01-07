/**
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
//Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const header = React.createElement(
//   "div",
//   { className: "title" },//we can multiple things here which will behave like props not only id and class

// [
//   React.createElement(
//   "h1",
//   {},
//   "Hi there"
// ),
// React.createElement(
//   "h2",
//   {},
//   "Welcome to react"
// ),
//  React.createElement(
//   "h3",
//   {},
//   "This is the nested reactCreateElement block"
// ),
// ],
// );
//Create the same element using JSX
// const header = (
// <div>
//   <h1>Hi there</h1>
//   <h2>Welcome to react</h2>
//   <h3>This is the nested reactCreateElement block</h3>
//   </div>
//   );
//Create a functional component of the same with JSX.
// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1>Hi there</h1>
//       <h2>Welcome to react</h2>
//       <h3>This is the nested reactCreateElement block</h3>
//     </div>
//   );
// };
//Pass attributes into the tag in JSX
// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1 className="first">Hi there</h1>
//       <h2 id="second">Welcome to react</h2>
//       <h3 style={{ color: "blue" }}>
//         {" "}
//         This is the nested reactCreateElement block
//       </h3>
//     </div>
//   );
// };
//Composition of Component(Add a component inside another)
// const PageComponent = () => {
//   return (
//     <div>
//       <HeaderComponent />
//       <h1>This is where the content goes</h1>
//     </div>
//   );
// };
// const LogoComponent = () => {
//   return (
//     // <a class="active" href="#"> <img src={require("./assets/image1.jpeg")} className="logo" /> Home</a>
//     <div id="logo">
//     <img src={require("./assets/image1.jpeg")} className="logo" alt="logo"/>
//     </div>
//   );
// };
// const SearchComponent = () => {
//   return (
//     <div id="search">
//     <input type='text'  className='search' placeholder="Search your destination" autofocus="true"/>
//     </div>
//   );
// };
// const UserComponent = () => {
//   return (
//     <div id="icon">
//       <svg class="icon" viewBox="0 0 20 20">
// 							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
// 						</svg>
//     </div>
//   );
// };

// const NavheaderComponent = () => {
//   return (
//     <div class="header">
//       <LogoComponent />
//       <SearchComponent />
//       <UserComponent/>
//       {/* <h1>This is where the content goes</h1> */}
//     </div>
//   );
// };

//Config Driven UI
const restaurantList= [
//  { name: "Kwality Walls",
//   image: "https://b.zmtcdn.com/data/pictures/chains/9/19085099/ae4bee1430d091eedd5c853b4bd91689_o2_featured_v2.jpg?output-format=webp",
//   cuisines: ["Icecream","Desserts"],
//   rating : "4.2"
// }

{
  type: "restaurant",
  data: {
    type: "F",
    id: "73011",
    name: "KFC",
    uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
    city: "22",
    area: "Anand Vihar Colony",
    totalRatingsString: "5000+ ratings",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["American", "Snacks", "Biryani"],
    tags: [],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 31,
    minDeliveryTime: 31,
    maxDeliveryTime: 31,
    slaString: "31 MINS",
    lastMileTravel: 6.199999809265137,
    slugs: {
      restaurant: "kfc-chukkuwala-chukkuwala",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
    locality: "Clock Tower",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "6.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "73011",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      lastMileTravel: 6.199999809265137,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.0",
    totalRatings: 5000,
    new: false,
  },
  subtype: "basic",
},
{
  type: "restaurant",
  data: {
    type: "F",
    id: "542132",
    name: "Domnik Pizza",
    uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
    city: "22",
    area: "Majra    Bansal Home",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
    cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
    tags: [],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 33,
    minDeliveryTime: 33,
    maxDeliveryTime: 33,
    slaString: "33 MINS",
    lastMileTravel: 0.6000000238418579,
    slugs: {
      restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
    locality: "Patel Nagar",
    parentId: 22321,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "0.6 kms",
    hasSurge: false,
    sla: {
      restaurantId: "542132",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      lastMileTravel: 0.6000000238418579,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "3.8",
    totalRatings: 50,
    new: false,
  },
  subtype: "basic",
},
{
  type: "restaurant",
  data: {
    type: "F",
    id: "321517",
    name: "FOOD PLANET RESTAURANT",
    uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
    city: "22",
    area: "Majra",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "ykboewqeoxnne8fgrnui",
    cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    slaString: "25 MINS",
    lastMileTravel: 0.699999988079071,
    slugs: {
      restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
    locality: "Patel Nagar",
    parentId: 81850,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "0.6 kms",
    hasSurge: false,
    sla: {
      restaurantId: "321517",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      lastMileTravel: 0.699999988079071,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "2.8",
    totalRatings: 50,
    new: false,
  },
  subtype: "basic",
},
{
  type: "restaurant",
  data: {
    type: "F",
    id: "311806",
    name: "Burger King",
    uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
    city: "22",
    area: "Anand Vihar Colony",
    totalRatingsString: "5000+ ratings",
    cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
    cuisines: ["Burgers", "American"],
    tags: [],
    costForTwo: 35000,
    costForTwoString: "₹350 FOR TWO",
    deliveryTime: 39,
    minDeliveryTime: 39,
    maxDeliveryTime: 39,
    slaString: "39 MINS",
    lastMileTravel: 6.300000190734863,
    slugs: {
      restaurant: "burger-king-chakrata-road-ballupur",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
    locality: "CHAKRATA ROAD",
    parentId: 166,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "60% off",
      shortDescriptionList: [
        {
          meta: "60% off | Use STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "60% off up to ₹120 | Use code STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "60% OFF",
      shortDescriptionList: [
        {
          meta: "Use STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "60% off up to ₹120 | Use code STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "6.3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "311806",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      lastMileTravel: 6.300000190734863,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.2",
    totalRatings: 5000,
    new: false,
  },
  subtype: "basic",
},
{
  type: "restaurant",
  data: {
    type: "F",
    id: "132460",
    name: "Annapurna Andhra Mess",
    uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
    city: "22",
    area: "Dehradun",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
    cuisines: ["South Indian", "Biryani", "North Indian"],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    slaString: "25 MINS",
    lastMileTravel: 1.399999976158142,
    slugs: {
      restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
    locality: "Patel Nagar",
    parentId: 33997,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "1.3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "132460",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      lastMileTravel: 1.399999976158142,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "4.0",
    totalRatings: 1000,
    new: false,
  },
  subtype: "basic",
},
{
  type: "restaurant",
  data: {
    type: "F",
    id: "496677",
    name: "Uncle Ji Restaurant",
    uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
    city: "22",
    area: "Patel Nagar",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
    cuisines: ["North Indian", "Snacks", "Beverages"],
    tags: [],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 31,
    minDeliveryTime: 31,
    maxDeliveryTime: 31,
    slaString: "31 MINS",
    lastMileTravel: 0.800000011920929,
    slugs: {
      restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
      city: "dehradun",
    },
    cityState: "22",
    address: "348 santosh tower, majra road gram majra dehradun 248001",
    locality: "Patel Nagar",
    parentId: 298209,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "0.8 kms",
    hasSurge: false,
    sla: {
      restaurantId: "496677",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      lastMileTravel: 0.800000011920929,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "--",
    totalRatings: 0,
    new: false,
  },
  subtype: "basic",
},
];
const LogoComponent = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  );
};
const HeaderComponent = () => {
  return (
    <div className="navbar">
      <LogoComponent />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
        {/* <SearchComponent />
      <UserComponent/> */}
        {/* <h1>This is where the content goes</h1> */}
      </div>
    </div>
  );
};
const RestaurantListComponent = () => {
  return <RestaurantCardComponent />;
};
//String interpolation with dynamic data
// const RestaurantCardComponent = () => {
//   return (
//     <div className="card">
//       <img
//         src={restaurantList[0].data.image}
//         alt="Restaurant Logo"
//       />
//       <div className ="cardDetails">
//       {/* <h4 >{restaurantList[0].data?.name}</h4> */}
//       {/* <p>{restaurantList.cuisines.join(",")}</p> */}
//       <h5>{restaurantList.rating}stars</h5>
//       </div>
//     </div>
//   );
// };

const RestaurantCardComponent = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

//Hardcoding the restaurant card component(basic version)
// const RestaurantCardComponent = () => {
//   return (
//     <div className="card">
//       <img
//         src="https://b.zmtcdn.com/data/pictures/chains/9/19085099/ae4bee1430d091eedd5c853b4bd91689_o2_featured_v2.jpg?output-format=webp"
//         alt="Restaurant Logo"
//       />
//       <div className ="cardDetails">
//       <h4 >Kwality Walls</h4>
//       <p>Icecream,Desserts</p>
//       <h5> 4.6 stars</h5>
//       </div>
//     </div>
//   );
// };

//props-properties
const BodyComponent = () => {
  {
    /* Level 0  (Optimizations) */
  }

  {
    /* { <RestaurantCards restuarantDetails={restuarantDetails[0]} />
      <RestaurantCards restuarantDetails={restuarantDetails[1]} /> } */
  }

  {
    /* Level 1 Optimization */
  }
  {
    /* Instead of repeating we pass it usin map */
    /* return <RestaurantCards restaurantDetails = {restuarantDetail} /> 
   restaurantDetails.name
   restaurantDetails.cusines */
  }

  {
    /* Level 2 Optimaization */
  }
  {
    // Spread the object, and in parameters just recieve individual keys
    /* return <RestaurantCards restaurantDetails = {...restuarantDetail} /> 
      ({name,cusine,rating})
      {name}
      {cusine}
      {rating} */
  }
  return (
    <>
          <div className="restaurant-list">

      {/* <RestaurantListComponent />
      <RestaurantListComponent />
      <RestaurantListComponent />
      <RestaurantListComponent />
      <RestaurantListComponent />
      <RestaurantListComponent />
      <RestaurantListComponent /> */}

{/* //key is used for React reconciliation */}
         {restaurantList.map((restaurant) => {
        return <RestaurantCardComponent {...restaurant.data} key={restaurant.data.id} />;
      })}
      </div>;
    </>
  );
};
const FooterComponent = () => {
  return <div className="foo">footer</div>;
};
const AppLayout = () => {
  return (
    <div className="app_root">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
root.render(<AppLayout />);
