//Define class constructor and methods
class Product {
    constructor(name, image, rating, price, description){
      this.name = name;
      this.image = image;
      this.rating = rating;
      this.price = price
      this.description = description;
    }
    productDetailsSearchPage() {
      var nameLine = "<span><h2>" + this.name + "</h2></span>";
      var image = '<span><img src="' + this.image + '" class="searchresultimage"></span>';
      var rating = "<span><h2>Rating: </h2>" + this.rating + "<br></span>";
      var price = "<span><h2>Price: </h2> $" + this.price +" CAD</span>";
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
  productsArray[1] = new Product("Grey Sony PS1 Analog Controller Playstation",
                     "images/searchresult/product.jpg",
                     5,
                     12.99,
                     "Description");


 
  let container = document.getElementById("productGrid"); 

  for (let i = 0; i < productsArray.length; i++) {
    
    let productContainer = document.createElement("div");
    productContainer.setAttribute("class", "grid-item");
    container.appendChild(productContainer);
    
    document.getElementsByClassName("grid-item")[i].innerHTML = productsArray[i].productDetailsSearchPage() + '<input type="submit" value="Add to Cart">';
    


  }
