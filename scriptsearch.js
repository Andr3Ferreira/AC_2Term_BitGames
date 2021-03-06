//Define class constructor and methods
class Product {
  constructor(name, image, rating, price, description) {
      this.name = name;
      this.image = image;
      this.rating = rating;
      this.price = price
      this.description = description;
  }

  productDetailsSearchPage() {
      var nameLine = "<span><h2>" + this.name + "</h2></span>";
      var image = '<span><img src="' + this.image + '" class="searchresultimage"></span>';
      var rating = "<span><h2>Rating: </h2>" + displayRating(this.rating) + "<br></span>";
      var price = "<span><h2>Price: </h2> $" + this.price + " CAD</span>";
      return (nameLine + image + rating + price);
  }
}


// Create the objects
var productsArray = [];
productsArray[0] = new Product("Grey Sony PS1 Analog Controller Playstation",
  "images/searchresult/product.jpg",
  5,
  12.99,
  "Description");
productsArray[1] = new Product("PlayStation System PS1 Console",
  "images/searchresult/product1.jpg",
  4,
  64.99,
  "Description");
productsArray[2] = new Product("Game Boy Pocket Green MGB-001 System Console",
  "images/searchresult/product2.jpg",
  2,
  89.99,
  "Description");
productsArray[3] = new Product("Nintendo 64 System Jungle Green Console N64",
  "images/searchresult/product3.jpg",
  3,
  249.99,
  "Description");
productsArray[4] = new Product("Gamecube System Platinum Silver Console",
  "images/searchresult/product4.jpg",
  1,
  119.99,
  "Description");


let container = document.getElementById("productGrid");


//functions
function displayRating(rating) {
  var ratingHTML = "";
  for (let i = 0; i < rating; i++) {
      ratingHTML = ratingHTML.concat('<span class="fa fa-star checked"></span>');
  }
  for (let i = 0; i < (5 - rating); i++) {
      ratingHTML = ratingHTML.concat('<span class="fa fa-star"></span>')
  }
  return ratingHTML;
}

function filterRating(stars) {

  let filteredProducts = [];
  for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].rating >= stars) {
          filteredProducts.push(productsArray[i]);
      }
  }
  return filteredProducts;
}

function filterPrice(low, high) {

  let filteredProducts = [];
  for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].price >= low && productsArray[i].price <= high) {
          filteredProducts.push(productsArray[i]);
      }
  }
  return filteredProducts;
}

function sortRating() {
  return productsArray.sort(function(b, a) {
      return a.rating - b.rating
  });

}

function sortPriceHighLow() {
  return productsArray.sort(function(b, a) {
      return a.price - b.price
  });

}

function sortPriceLowHigh() {
  return productsArray.sort(function(a, b) {
      return a.price - b.price
  });

}

function displayProduct(filteredProducts) {
  for (let i = 0; i < filteredProducts.length; i++) {

      let productContainer = document.createElement("div");
      productContainer.setAttribute("class", "grid-item");
      container.appendChild(productContainer);

      document.getElementsByClassName("grid-item")[i].innerHTML = filteredProducts[i].productDetailsSearchPage() + '<form><input type="submit" value="Add to Cart"></form>';
  }
}

displayProduct(sortPriceLowHigh());