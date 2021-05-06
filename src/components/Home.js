import React from "react";
import '../Home.css';
import Product from "./Product";

function Home() {
  return (
  <div className="home">
      <div className="home__container">
          <img src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="Homepage banner display ad for amazon prime paid service" className="home__image"></img>

          <div className="home__row">
          <Product
            id="12321341"
            title="Monstera Plant"
            price={30.99}
            rating={5}
            image="https://images.thdstatic.com/productImages/2057e277-4afc-4fff-a34d-7f77bcc312e0/svn/united-nursery-house-plants-21887-64_1000.jpg"
          />
          <Product
            id="49538094"
            title="Spider Plant"
            price={11.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61PPYUoc2aL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Snake Plant"
            price={12.99}
            rating={4}
            image="http://mobileimages.lowes.com/product/converted/100265/1002654958.jpg"
          />
          <Product
            id="23445930"
            title="Golden Pothos"
            price={16.99}
            rating={5}
            image="http://mobileimages.lowes.com/product/converted/100160/1001601144.jpg"
            // image="https://i.etsystatic.com/14339179/r/il/e626c6/2322638407/il_570xN.2322638407_4fsx.jpg"
          />
          <Product
            id="3254354345"
            title="Aloe Vera"
            price={13.99}
            rating={4}
            image="https://assets.eflorist.com/site/EF-2287/assets/products/PHR_/sku6701208.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Fiddle Leaf Fig"
            price={29.99}
            rating={4}
            image="http://mobileimages.lowes.com/product/converted/100248/1002482888.jpg"
          />
          <Product
            id="23445930"
            title="Golden Pothos"
            price={16.99}
            rating={5}
            image="http://mobileimages.lowes.com/product/converted/100160/1001601144.jpg"
            // image="https://i.etsystatic.com/14339179/r/il/e626c6/2322638407/il_570xN.2322638407_4fsx.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;