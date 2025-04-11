//Load Cart Items from Local Storage
function loadCart()
{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    //Check if Cart is Empty
    if (cart.length === 0)
    {
        //Display if Cart is Empty
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
    else
    {
        let total = 0;
        //Loop through each Item in the Cart and Display them using Rows
        cart.forEach(item =>
            {
            let itemRow = document.createElement('div');
            itemRow.classList.add('row', 'mb-3');
            
            itemRow.innerHTML = `
                <div class="col-md-8">${item.name} (x${item.quantity})</div>
                <div class="col-md-4 text-end">$${item.totalPrice.toFixed(2)}</div>
            `;
            
            cartItemsContainer.appendChild(itemRow);
            total += item.totalPrice;
        });

        //Create new Row to Display Total Price
        let totalRow = document.createElement('div');
        totalRow.classList.add('row', 'mt-3');
        totalRow.innerHTML = `
            <div class="col-md-8"><strong>Total</strong></div>
            <div class="col-md-4 text-end"><strong>$${total.toFixed(2)}</strong></div>
        `;
        cartItemsContainer.appendChild(totalRow);
    }
}
//Clear the Cart from Local Storage
function clearCart()
{
    localStorage.removeItem('cart');
    loadCart();
}

//Run the LoadCart on Page Load
window.onload = function()
{
    loadCart();
};
