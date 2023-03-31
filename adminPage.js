let allProducts = [];
if (localStorage.companyProduct) {
  allProducts = JSON.parse(localStorage.getItem("companyProduct"));
}

text = () => {
  let products = {
    topDeal: [],
    sponsorProduct: [],
    recommendedProduct: [],
    inspiredProduct: [],
    browsingProduct: [],
    laptops: [],
    smartPhone: [],
    healthBeauty: [],
    groceries: [],
    videoGames: [],
    mobileAccessories: [],
    homeFurnishings: [],
    fitnessToolsEquipment: [],
    kidsWearAccessories: [],
    topDealOnTelevision: [],
  };
  allProducts.push(products);
  localStorage.setItem("companyProduct", JSON.stringify(allProducts));
  window.location.reload();
};

check = () => {
  if (!(localStorage.companyProduct)) {
    adminMain.innerHTML = `
    <div class="d-flex flex-column w-100 shadow text-white pt-5 px-3" style="background-color: #9e4172;">
        <h2 class="admin-h2 text-capitalize fw-bold mx-auto">welcome to adex admin page</h2>
        <button class="my-auto mx-auto btn btn-lg btn-primary" id="adminInitBtn" onclick="text()">Click to Continue</button>
      </div>
    `
  } else {
    adminMain.innerHTML = `
    <div class="shadow admin-btn-container d-flex flex-column w-25 pb-3">
        <h4 class="text-center mb-3 pt-3">Admin</h4>
        <div class="d-flex justify-content-center mb-5">
          <img
            src="Images/avatar.png"
            alt="Admin Photograph"
            style="width: 100px; height: 100px; border-radius: 50%"
          />
        </div>
        <button class="admin-profile-btn btn11">profile</button>
        <button class="admin-profile-btn">categories</button>
        <button class="admin-profile-btn">browse categories</button>
        <button class="admin-profile-btn">add products</button>
        <button class="admin-profile-btn">view products</button>
        <button class="admin-profile-btn">new user request</button>
        <button class="admin-profile-btn">view user</button>
        <div class="mt-auto d-flex">
          <button class="btn btn-success col-12" onclick="window.location.href = 'index.html'">Go Home</button>
        </div>
      </div>
      <div class="add-product col-lg-6 col-sm-12">
        <div
          class="admin-nav d-flex justify-content-between px-3 text-white"
          style="background-color: #ed017f; height: 60px"
        >
          <div class="d-flex gap-2">
            <i
              class="fas fa-bars fs-3 my-auto"
              style="cursor: pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            ></i>
            <img src="Images/adexlogo.png" class="h-75 my-auto" alt="" />
          </div>
          <h3 class="my-auto">Add Products</h3>
          <button
            class="h-75 my-auto text-white"
            style="
              border-radius: 3px;
              border-color: unset;
              padding: 0px 5px;
              background-color: inherit;
            "
          >
            Logout
          </button>
        </div>
        <div class="mt-5 w-100 h-100">
          <div class="product-form row mx-auto col-lg-8 pb-5">
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label text-danger"
                >Upload Product Images</label
              >
              <input
                type="file"
                class="form-control text-capitalize"
                id="productImg"
                onchange="setPage()"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
            <label for="exampleInputEmail1" class="form-label"
              >Choose Where To Add Product To</label
            >
            <select
              class="form-select position-relative"
              id="productOnPage"
              aria-describedby="validationServer04Feedback"
              required
            >
              <option selected disabled value="">Choose Where to add product</option>
              <option value="TodaysDealProducts">Todays Deal Products</option>
              <option value="SponsoredProducts">Sponsored Products</option>
              <option value="RecommendedProducts">Recommended Products</option>
              <option value="InspiredProducts">Inspired Products</option>
              <option value="BrowsingHistoryProducts">Browsing History Products</option>
            </select>
          </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Product Sort Name</label
              >
              <input
                type="text"
                class="form-control text-capitalize"
                id="productSortName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Enter Product Long Name</label
              >
              <input
                type="text"
                class="form-control text-capitalize"
                id="productLongName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Enter Product Old Price</label
              >
              <input
                type="number"
                class="form-control text-capitalize"
                id="productOldPrice"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Enter product New Price</label
              >
              <input
                type="number"
                class="form-control text-capitalize"
                id="productNewPrice"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Choose Product Category</label
              >
              <select
                class="form-select position-relative"
                id="productCategory"
                aria-describedby="validationServer04Feedback"
                required
              >
                <option selected disabled value="">Choose...</option>
                <option value="electronics">Electronics</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Choose Product Brand</label
              >
              <select
                class="form-select position-relative"
                id="productBrand"
                aria-describedby="validationServer04Feedback"
                required
              >
                <option selected disabled value="">Choose...</option>
                <option value="electronics">Electronics</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Enter Product Seller Name</label
              >
              <input
                type="text"
                class="form-control text-capitalize"
                id="productSellerName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col-lg-12 col-sm-12 mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Enter Product Total Items</label
              >
              <input
                type="number"
                class="form-control text-capitalize"
                id="productNumberOfItems"
                aria-describedby="emailHelp"
              />
            </div>
            <!-- <div class="col-lg-12 bg-black mx-auto col-sm-12"> -->
            <button
              type="button"
              onclick="setTodaysDeal()"
              class="btn btn-primary mx-auto mt-4"
              style="width: 95%"
            >
              Add Product
            </button>
            <!-- </div> -->
          </div>
        </div>
      </div>
    `
  }
};

setTodaysDeal = () => {
  if (productOnPage.value == "TodaysDealProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: productOldPrice.value,
        productNewPrice: productNewPrice.value,
        productCategory: productCategory.value,
        productBrand: productBrand.value,
        productBy: productSellerName.value,
        productTotalItem: productNumberOfItems.value,
        productIDNumber: Math.floor(Math.random() * 1000000),
        productSavePrice: productOldPrice.value - productNewPrice.value,
        productOff: Math.ceil(
          ((productOldPrice.value - productNewPrice.value) / productOldPrice.value) *
            100
        ),
      };
      allProducts[index].topDeal.push(topDealProduct);
      localStorage.setItem("companyProduct", JSON.stringify(allProducts));
      localStorage.setItem("currentUserIndex", index);
    }
  } else if (productOnPage.value == "SponsoredProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: productOldPrice.value,
        productNewPrice: productNewPrice.value,
        productCategory: productCategory.value,
        productBrand: productBrand.value,
        productBy: productSellerName.value,
        productTotalItem: productNumberOfItems.value,
        productIDNumber: Math.floor(Math.random() * 1000000),
        productSavePrice: productOldPrice.value - productNewPrice.value,
        productOff: Math.ceil(
          ((productOldPrice.value - productNewPrice.value) / productOldPrice.value) *
            100
        ),
      };
      allProducts[index].sponsorProduct.push(topDealProduct);
      localStorage.setItem("companyProduct", JSON.stringify(allProducts));
      // localStorage.setItem("currentUserIndex", index);
    }
  } else if (productOnPage.value == "RecommendedProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: productOldPrice.value,
        productNewPrice: productNewPrice.value,
        productCategory: productCategory.value,
        productBrand: productBrand.value,
        productBy: productSellerName.value,
        productTotalItem: productNumberOfItems.value,
        productIDNumber: Math.floor(Math.random() * 1000000),
        productSavePrice: productOldPrice.value - productNewPrice.value,
        productOff: Math.ceil(
          ((productOldPrice.value - productNewPrice.value) / productOldPrice.value) *
            100
        ),
      };
      allProducts[index].recommendedProduct.push(topDealProduct);
      localStorage.setItem("companyProduct", JSON.stringify(allProducts));
      // localStorage.setItem("currentUserIndex", index);
    }
  } else if (productOnPage.value == "InspiredProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: productOldPrice.value,
        productNewPrice: productNewPrice.value,
        productCategory: productCategory.value,
        productBrand: productBrand.value,
        productBy: productSellerName.value,
        productTotalItem: productNumberOfItems.value,
        productIDNumber: Math.floor(Math.random() * 1000000),
        productSavePrice: productOldPrice.value - productNewPrice.value,
        productOff: Math.ceil(
          ((productOldPrice.value - productNewPrice.value) / productOldPrice.value) *
            100
        ),
      };
      allProducts[index].inspiredProduct.push(topDealProduct);
      localStorage.setItem("companyProduct", JSON.stringify(allProducts));
      // localStorage.setItem("currentUserIndex", index);
    }
  }else if (productOnPage.value == "BrowsingHistoryProducts") {
     for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: productOldPrice.value,
        productNewPrice: productNewPrice.value,
        productCategory: productCategory.value,
        productBrand: productBrand.value,
        productBy: productSellerName.value,
        productTotalItem: productNumberOfItems.value,
        productIDNumber: Math.floor(Math.random() * 1000000),
        productSavePrice: productOldPrice.value - productNewPrice.value,
        productOff: Math.ceil(
          ((productOldPrice.value - productNewPrice.value) / productOldPrice.value) *
            100
        ),
      };
    allProducts[index].browsingProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
  } else {
    alert(6)
  }
};

setPage = () => {
  const file = productImg.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    console.log(reader.result);
    productImg = reader.result;
  });
  reader.readAsDataURL(file);
};
