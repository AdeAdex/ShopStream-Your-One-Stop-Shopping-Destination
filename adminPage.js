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
    <div class="d-flex flex-column w-100 shadow text-white pt-5 px-3" style="background-color: #ddd;">
        <h2 class="admin-h2 text-capitalize fw-bold mx-auto">welcome to adex admin page</h2>
        <button class="my-auto mx-auto btn btn-lg btn-primary" id="adminInitBtn" onclick="text()">Click to Continue</button>
      </div>
    `
  } else {
    let adminName = []
    if (localStorage.adminDetails) {
      adminName = JSON.parse(localStorage.getItem("adminDetails"));
    }
    

    Swal.fire({
      title: `What's Your Name`,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: false,
      confirmButtonText: 'Save changes',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Good job!',
           `Wlcome ${result.value}`,
          'success'
        )
      }

      let theAdminName = {
        adminFName: result.value
      }
      adminName.push(theAdminName);
      localStorage.setItem("adminDetails", JSON.stringify(adminName));
      adminName.map((eachAdmin, index) => {
        localStorage.setItem("currentAdminIndex", index);
      })
    })

    
    currentAdminIndex = localStorage.getItem("currentAdminIndex");
    adminName.map((eachAdmin, index) => {
      offcanvasWithBothOptionsLabel.innerHTML = `${adminName[index].adminFName}`
    })
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
                <option selected disabled value="">Choose category</option>
                <option value="Automotive and Transport">Automotive and Transport</option>
                <option value="Business and Finance">Business and Finance</option>
                <option value="Chemicals and Materials">Chemicals and Materials</option>
                <option value="Consumer Goods and Services">Consumer Goods and Services</option>
                <option value="Energy and Natural Resources">Energy and Natural Resources</option>
                <option value="Food and Beverages">Food and Beverages</option>
                <option value="Government and Public Sector">Government and Public Sector</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Books">Books</option>
                <option value="Manufacturing and Construction">Manufacturing and Construction</option>
                <option value="Military Aerospace and Defence">Military Aerospace and Defence</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Telecommunication and Computing">Telecommunication and Computing</option>
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
                <option selected disabled value="">Choose brand</option>
                <option value="Netflix">Netflix</option>
                <option value="Costco">Costco</option>
                <option value="Chick-fil-A">Chick-fil-A</option>
                <option value="Amazon">Amazon</option>
                <option value="Apple">Apple</option>
                <option value="Nike">Nike</option>
                <option value="Target">Target</option>
                <option value="Google">Google</option>
                <option value="Spotify">Spotify</option>
                <option value="Trader Joe's">Trader Joe's</option>
                <option value="Zoom">Zoom</option>
                <option value="Roblox">Roblox</option>
                <option value="Vans">Vans</option>
                <option value="Nintendo">Nintendo</option>
                <option value="Headspace Health">Headspace Health</option>
                <option value="Rei">Rei</option>
                <option value="Lego Group">Lego Group</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Instagram">Instagram</option>
                <option value="Linkedln">Linkedln</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
                <option value="Red Bull">Red Bull</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Porsche">Porsche</option>
                <option value="Shopify">Shopify</option>
                <option value="Coca-Cola">Coca-Cola</option>
                <option value="Adidas">Adidas</option>
                <option value="PUMA">PUMA</option>
                <option value="Versace">Versace</option>
                <option value="Visa">Visa</option>
                <option value="Cisco">Cisco</option>
                <option value="Samsung">Samsung</option>
                <option value="Tecno">Tecno</option>
                <option value="Infinix">Infinix</option>
                <option value="Nokia">Nokia</option>
                <option value="Toyota">Toyota</option>
                <option value="Mastercard">Mastercard</option>
                <option value="7-Eleven">7-Eleven</option>
                <option value="Philips">Philips</option>
                <option value="Hisense">Hisense</option>
                <option value="LG">LG</option>
                <option value="Paystack">Paystack</option>
                <option value="Intel">Intel</option>
                <option value="HP">HP</option>
                <option value="Dell">Dell</option>
                <option value="Sony">Sony</option>
                <option value="Deloitte">Deloitte</option>
                <option value="Chevron">Chevron</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Others">Others</option>
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
