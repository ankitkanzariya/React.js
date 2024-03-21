function calculateSubtotal() {
    var productPrice = parseFloat(document.getElementById("product").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var subtotal = productPrice * quantity;
  
    // Display the subtotal with formatting
    document.getElementById("subtotal").textContent = 
      "Subtotal: $" + subtotal.toFixed(2);
  }
  