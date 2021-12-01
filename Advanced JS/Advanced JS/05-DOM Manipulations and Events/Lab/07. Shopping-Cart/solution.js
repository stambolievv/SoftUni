function solve() {
   const shop = document.getElementsByClassName('shopping-cart')[0];
   shop.addEventListener('click', onClick);

   const checkOutBtn = document.getElementsByClassName('checkout')[0];
   checkOutBtn.addEventListener('click', checkout);

   const cart = [];

   const output = document.getElementsByTagName('textarea')[0];

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.getElementsByClassName('product-title')[0].textContent;
         const price = Number(product.getElementsByClassName('product-line-price')[0].textContent);
         cart.push({ name, price });
         return output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }
   function checkout() {
      const items = cart.map(i => i.name).filter((v, i, a) => a.indexOf(v) === i);
      const total = cart.reduce((t, c) => t + c.price, 0);
      shop.removeEventListener('click', onClick);
      checkOutBtn.removeEventListener('click', checkout);
      return output.value += `You bought ${items.join(', ')} for ${total.toFixed(2)}.\n`;
   }
}