
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }



  // model cart 
 
  // Product details (you can make this dynamic later)
  let product = {
    name: "Mexican Grilled Chicken & Cheese Burger + Fries (M)",
    price: 218,
    qty: 1
  };

  function updateModal() {
    document.getElementById("qty").innerText = product.qty.toString().padStart(2, "0");
    document.getElementById("grandTotal").innerText = product.price * product.qty;
  }

  function increaseQty() {
    product.qty++;
    saveToCart();
    updateModal();
  }

  function decreaseQty() {
    if (product.qty > 1) {
      product.qty--;
      saveToCart();
      updateModal();
    }
  }

  function saveToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existing = cart.find(item => item.name === product.name);
    if (existing) {
      existing.qty = product.qty;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Initialize modal with default values
  updateModal();
  saveToCart();


  // cart page 
