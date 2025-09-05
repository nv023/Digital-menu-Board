
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
    name: "Warm & Comforting Hot Milk",
    price: 218,
    price1: 350,
    price2: 299,
    price3: 150,
    price4: 99,
    price5: 49,
    price6: 229,
    qty: 1
  };

  function updateModal() {
    // document.getElementById("qty").innerText = product.qty.toString().padStart(2, "0");
    // document.getElementById("grandTotal").innerText = product.price * product.qty;
    document.getElementById("grandTotal1").innerText = product.price1 * product.qty;
    document.getElementById("grandTotal2").innerText = product.price2 * product.qty;
    document.getElementById("grandTotal3").innerText = product.price3 * product.qty;
    document.getElementById("grandTotal4").innerText = product.price4 * product.qty;
    document.getElementById("grandTotal5").innerText = product.price5 * product.qty;
    document.getElementById("grandTotal6").innerText = product.price6 * product.qty;
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
