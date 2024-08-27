const API_B = "https://66cca54aa4dd3c8a71b8583b.mockapi.io/ALI/MAXSULOT";
const edit = document.querySelector("#edit");
const delet = document.querySelector("#delete");
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const add = document.querySelector("#add");
const chiqish = document.querySelector("#close");
const elnone = document.querySelector(".none");

const admon = function () {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: form2.Login.value,
      password: form2.Password.value,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.token != json.token) {
        alert("KODI NOTOGRI CONSOLDAN TEKSHIRING");
      }
      window.location.replace("./Admin panel/index.html");
    });
};

function maxsulot() {
  fetch(API_B)
    .then((res) => res.json())
    .then((data) => {
      renderProducts(data);
    });
}
maxsulot();
const cart = [];
const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

function renderProducts(array) {
  productsContainer.textContent = null;
  array.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            `;

    productsContainer.appendChild(productElement);
  });
}

productsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = e.target.dataset.id;

    fetch(API_B + `/${id}`)
      .then((res) => res.json())
      .then((data) => {
        form.name.value = data.name;
        form.price.value = data.price;
        form.image.value = data.image;
        form.description.value = data.description;
        edit.addEventListener("click", () => {
          fetch(API_B + `/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: form.name.value,
              price: form.price.value,
              image: form.image.value,
              description: form.description.value,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              maxsulot();
            });
        });
      });
  }
  if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;

    fetch(API_B + "/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        maxsulot();
      });
  }
});

add.addEventListener("click", (e) => {
  e.preventDefault();

  admon();
});
console.log(`Login:mor_2314`);
console.log(`Parol:83r5^_`);
