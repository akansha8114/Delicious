import { createUntrackedSearchParams } from "next/dist/client/components/search-params";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

// Header
//  - Logo
//  - Nav links

// Body
//  - Search bar   
//  - Restaurant Container
//     - Restaurant createUntrackedSearchParams
//         - Image
//         - Name
//         - Rating
//         - Cuisines
//         - Delivery Time

// Footer      
//     - Copyrights
//     - Links
//     - Address
//     - Contact

//Step 2: Now lets make a component for Header:consistes Logo and NAv links
const Header = () => {
    return (
        <div className="header">
            <div className = "Logo-container">
               <img className = "Logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxnONLgBgcbMG675cs09vPk5I7-rwwmWVAw&s"></img>
            </div>

            <div className = "nav-items"> 
                {/* Nav items is a list of some links */}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
            
        </div>
    )
}

//Step 5 : Data of swiggy with the help of this data we will display things we want
//  on our browser.
const resobj = [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "30571",
    "name": "Biryani Blues",
    "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
    "locality": "Kalkaji",
    "areaName": "Kalkaji",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "Hyderabadi",
    "Lucknowi",
    "Kebabs",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "13813",
    "avgRatingString": "4.4",
    "totalRatingsString": "18K+",
    "sla": {
    "deliveryTime": 15,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-11 04:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹399",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "620"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=30571&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "93309",
    "name": "Zahra Restaurant & Cafe",
    "cloudinaryImageId": "stjcflwe1n7k8cx9ledz",
    "locality": "Zakir Nagar",
    "areaName": "Tikona Park",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Mughlai",
    "Biryani",
    "North Indian",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "229129",
    "avgRatingString": "4.3",
    "totalRatingsString": "27K+",
    "promoted": true,
    "adTrackingId": "cid=25038634~p=3~adgrpid=25038634#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=93309~eid=b09c9819-5d6a-4524-9402-ab8d895a3724~srvts=1739168672612~collid=83639",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-10 23:25:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹129",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.4",
    "ratingCount": "5.8K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "25038634"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=93309&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "148715",
    "name": "Bikkgane Biryani",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/10/91a05f97-bf44-481c-8093-94a014820c29_6c117b04-2120-4abe-afac-900deb1edbea.jpg",
    "locality": "Ajith Arcade",
    "areaName": "Kailash Colony",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "Mughlai",
    "North Indian"
    ],
    "avgRating": 4.3,
    "parentId": "5070",
    "avgRatingString": "4.3",
    "totalRatingsString": "16K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-11 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹124",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=148715&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "158885",
    "name": "Yours Truly Butter Chicken",
    "cloudinaryImageId": "iwctjeotsubz6tfweqzs",
    "locality": "Kailash Colony",
    "areaName": "Kailash Colony",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "North Indian",
    "Kebabs",
    "Mughlai"
    ],
    "avgRating": 4.2,
    "parentId": "10615",
    "avgRatingString": "4.2",
    "totalRatingsString": "3.3K+",
    "promoted": true,
    "adTrackingId": "cid=24725394~p=7~adgrpid=24725394#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=158885~eid=acaf54ac-1490-4201-8abc-f6f7d0015b52~srvts=1739168672612~collid=83639",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-11 04:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "24725394"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=158885&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "15664",
    "name": "Behrouz Biryani",
    "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
    "locality": "Jagdamba Road",
    "areaName": "Kalkaji",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Kebabs",
    "Mughlai",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "1803",
    "avgRatingString": "4.4",
    "totalRatingsString": "13K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-10 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "ABOVE ₹2500",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=15664&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1626",
    "name": "Tunday Kababi",
    "cloudinaryImageId": "htnzisrw7166lcjpf6fh",
    "locality": "Lajpat Nagar - 4",
    "areaName": "Lajpat Nagar - 4",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Mughlai",
    "Lucknowi",
    "Biryani",
    "Kebabs"
    ],
    "avgRating": 3.9,
    "parentId": "1053",
    "avgRatingString": "3.9",
    "totalRatingsString": "17K+",
    "promoted": true,
    "adTrackingId": "cid=24924397~p=10~adgrpid=24924397#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1626~eid=78663a8b-163f-435d-99ae-6d060fa687c7~srvts=1739168672612~collid=83639",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-10 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "2.6",
    "ratingCount": "35"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "24924397"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1626&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }]
    


//Step 4 : component of Restaurant card
const Restaurantcard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resdata?.card?.card?.info;  
    return (
        <div className = "res-card">
            <img className="res-logo" alt = "res-logo" src = {
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available"}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    );
};
    
//Step 3: Now lets make a component for Body
const Body = () => {
    return(
      <div className = "body">
         <div className = "Search">Search</div>
         <div className = "res-container">
            {/* mapping means looping at each restaurant in the resobj one by one */}
            {resobj.map((restaurant) => (
                <Restaurantcard key ={restaurant.card.card.info.id} resdata = {restaurant}/>
            ))}
         </div>

       </div>
    )
    
}


//Step1 : Lets make a one top level component in which all component resides
const AppLayout = () => {
    return (
        <div className="app">
            {/* In our our app we will keep 
            Header,Body,Footer*/}
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
 