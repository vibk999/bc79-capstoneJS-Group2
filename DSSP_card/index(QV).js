const BASE_URL = "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct";

let dssp = [];

fetchProduct = () => {
  axios
    .get(BASE_URL)
    .then((result) => {
      console.log("thành công", result);
      list = result.data;
      dssp = list;
      renderProduct(list);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

fetchProduct();

// su kien thay doi filter
let newds = [];
let filter = document.getElementById("danhmuc");
filter.addEventListener("change", function () {
  for (let i = 0; i < dssp.length; i++) {
    if (dssp[i].type == filter.value) {
      newds.push(dssp[i]);
      console.log("test" + newds[i]);
    } else if (filter.value == "Điện thoại") {
      newds = dssp;
    }
  }
  renderProduct(newds);
  newds = [];
});

// them vao gio hang bang giao dien user
let cart = [];

let addtocart = (id) => {
  let soluong = parseInt(document.getElementById("soluong").textContent);
  let newsoluong = document.getElementById("soluong");
  soluong++;
  newsoluong.innerHTML = soluong;
  for (let i = 0; i < dssp.length; i++) {
    if (dssp[i].id == id) {
      if (!dssp.find((item) => item.id === cart[i].id)) {
        cart.push(dssp[i]);
      }
    }
  }
  console.log(cart);
};
