let renderProduct_bag = (productArr) => {
  let contenHTML = "";

  productArr.forEach((product) => {
    let trString = `<tr>
                    <td>
                      <img src="${product.img}" alt="">
                    </td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                    <button class="minus" id="minus" onclick="tru(${product.id})">
                        <i class="fa fa-minus"></i>
                    </button>
                    <span class="number number_${product.id}" id="number_${product.id}">${cart[cart.findIndex((item) => item.id == product.id)].quantity}</span>
                    <button class="plus" id="plus" onclick="cong(${product.id})">
                        <i class="fa fa-plus"></i>
                    </button>
                    </td>
                  </tr>`;

    contenHTML += trString;
  });

  document.getElementById("productList_bag").innerHTML = contenHTML;
};

let add_quantity = (id) => {
  axios
    .get(`${BASE_URL}/${id}`)
    .then((result) => {
      // let kt = cart.some((item) => item.id == result.data.id);
      // if (!kt) {
      cart.push(result.data);
      cart.find((item) => item.id == id).quantity = 1;
      console.log(cart);
      renderProduct_bag(cart);

      // }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

let laythongtin1sp = (list) => {
  list.forEach((sp) => {
    let name = sp.name;
    let price = sp.price;
    let screen = sp.screen;
    let backCamera = sp.backCamera;
    let frontCamera = sp.frontCamera;
    let img = sp.img;
    let desc = sp.desc;
    let type = sp.type;
    let id = sp.id;

    let product = new Product(
      name,
      price,
      screen,
      backCamera,
      frontCamera,
      img,
      desc,
      type,
      id
    );
    dssp.push(product);
  });
};
