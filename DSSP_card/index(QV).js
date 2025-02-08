const BASE_URL = "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct";

let dssp = [];

fetchProduct = () => {
  axios
    .get(BASE_URL)
    .then((result) => {
      console.log("thành công", result);
      list = result.data;
      // laythongtin1sp(list);
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
      // console.log("test" + newds[i]);
    } else if (filter.value == "Điện thoại") {
      newds = dssp;
    }
  }
  renderProduct(newds);
  newds = [];
});

// them vao gio hang bang giao dien user
const cart = [];

let addtocart = (id) => {
  let ctrl_btn = document.getElementById("btn_" + id);
  let footer_cart = document.getElementById("footer_cart_" + id);
  let contenHTML = `<button class="minus" id="minus" onclick="tru(${id})">
                        <i class="fa fa-minus"></i>
                    </button>
                    <span class="number number_${id}" id="number_${id}">1</span>
                    <button class="plus" id="plus" onclick="cong(${id})">
                        <i class="fa fa-plus"></i>
                    </button>`;
  ctrl_btn.style.display = "none";
  footer_cart.innerHTML = contenHTML;

  let soluong = parseInt(document.getElementById("soluong").textContent);
  let newsoluong = document.getElementById("soluong");
  soluong++;
  newsoluong.innerHTML = soluong;

  add_quantity(id);
  renderProduct_bag(cart);
  luu_du_lieu(cart);
};
