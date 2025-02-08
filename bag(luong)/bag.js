// btn tru so luong di 1
let tru = (id) => {
  let number = document.querySelectorAll(".number_" + id);
  let lay_so_luong = --cart.find((item) => item.id == id).quantity;

  if (lay_so_luong == 0) {
    let footer_cart = document.getElementById("footer_cart_" + id);

    let contenHTML = `<button class="bg-blue-600 text-white px-4 py-2 rounded mt-2" id="btn_${id}" onclick ="addtocart(${id})">Thêm vào giỏ</button>`;
    footer_cart.innerHTML = contenHTML;

    let vi_tri = cart.findIndex((item) => item.id == id);
    cart.splice(vi_tri, 1);
    renderProduct_bag(cart);
  }

  number.forEach((item) => {
    item.innerHTML = lay_so_luong;
  });

  let soluong = parseInt(document.getElementById("soluong").textContent);
  let newsoluong = document.getElementById("soluong");
  soluong--;
  newsoluong.innerHTML = soluong;

  tongtien();
  luu_du_lieu(cart);
};

// btn cong so luong them 1
let cong = (id) => {
  let number = document.querySelectorAll(".number_" + id);
  let lay_so_luong = ++cart.find((item) => item.id == id).quantity;
  console.log(lay_so_luong);

  number.forEach((item) => {
    item.innerHTML = lay_so_luong;
  });

  let soluong = parseInt(document.getElementById("soluong").textContent);
  let newsoluong = document.getElementById("soluong");
  soluong++;
  newsoluong.innerHTML = soluong;

  tongtien();
};

// in tong tien trong gio hang
let tongtien = () => {
  if (cart.length == 0) {
    document.getElementById("productList_bag").innerHTML =
      "Bạn chưa chọn sản phẩm";
  } else {
    let tt = document.getElementById("tt_gio_hang");

    let sum_sp = 0;
    cart.forEach((item) => {
      sum_sp += item.price * item.quantity;
    });

    tt.innerHTML = sum_sp;
  }
  luu_du_lieu(cart);
};

// thanh toan gio hang
let thanhtoan = () => {
  cart.splice(0, cart.length);
  renderProduct_bag(cart);
  fetchProduct();
  let tt = document.getElementById("tt_gio_hang");
  tt.innerHTML = 0;
  let soluong = document.getElementById("soluong");
  soluong.innerHTML = 0;
  document.getElementById("productList_bag").innerHTML =
    "Bạn chưa chọn sản phẩm";
};

// luu du lieu vao localstorange
let luu_du_lieu = (cart) => {
  localStorage.setItem("product", JSON.stringify(cart));
};

luu_du_lieu(cart);