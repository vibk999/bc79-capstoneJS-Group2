/////
/////
/////
let renderProduct = (productArr) => {
  console.log("productArr", productArr);

  let contenHTML = "";

  productArr.forEach((product) => {
    let trString = `<div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="${product.img}" alt="Product" class="w-full max-h-96 object-cover">
                <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
                <p class="text-gray-500">$ ${product.price}</p>
                <div id = "footer_cart_${product.id}">
                  <button class="bg-blue-600 text-white px-4 py-2 rounded mt-2" id="btn_${product.id}" onclick ="addtocart(${product.id})">Thêm vào giỏ</button>
                </div>
            </div>`;

    contenHTML += trString;
  });

  document.getElementById("productList").innerHTML = contenHTML;
};
