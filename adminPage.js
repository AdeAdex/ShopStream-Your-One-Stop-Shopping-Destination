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
    <div class="d-flex flex-column w-100 shadow text-dark pt-5 px-3" style="background-color: #ddd;">
        <h2 class="admin-h2 text-capitalize fw-bold mx-auto">welcome to adex admin page</h2>
        <button class="my-auto mx-auto btn btn-lg btn-primary" id="adminInitBtn" onclick="text()">Click to Continue</button>
      </div>
    `
  } else {

    if (!localStorage.adminDetails) {
      let adminName = []
      if (localStorage.adminDetails) {
        adminName = JSON.parse(localStorage.getItem("adminDetails"));
      }

  
      Swal.fire({
        title: `What's Your Name`,
        input: "text",
        allowOutsideClick: false,
        allowEscapeKey: false,
        inputAttributes: {
          autocapitalize: "on",
        },
        showCancelButton: false,
        confirmButtonText: "Save changes",
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
          if (!name || name.trim() === "") {
            Swal.showValidationMessage("Please enter your name");
          } else {
            Swal.fire("Good job!", `Welcome ${name}`, "success");

            let theAdminName = {
              adminFName: name,
            };
            adminName.push(theAdminName);
            localStorage.setItem("adminDetails", JSON.stringify(adminName));
            adminName.map((eachAdmin, index) => {
              localStorage.setItem("currentAdminIndex", index);
            });
            window.location.href = `adminPage.html`;
          }
        },
      });
  
      
      
    } else {
      adminName = JSON.parse(localStorage.getItem("adminDetails"));
      currentAdminIndex = localStorage.getItem("currentAdminIndex");
      adminName.map((eachAdmin, index) => {
        adminFullName.innerHTML = `${adminName[currentAdminIndex].adminFName}`
      })
      adminMain.innerHTML = `
    <div class="shadow admin-btn-container d-flex flex-column w-25 pb-3">
        <h4 class="text-center mb-3 pt-3 text-capitalize">${adminName[currentAdminIndex].adminFName}</h4>
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
            <img src="Images/adexlogo.png" class="adex-logo h-75 my-auto" alt="" onclick="window.location.href = 'index.html'"/>
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
                <option value="Clothing & Apparel">Clothing & Apparel</option>
                <option value="Footwear & Shoes">Footwear & Shoes</option>
                <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                <option value="Games & Toys">Games & Toys</option>
                <option value="Veterinary & Pet Items">Veterinary & Pet Items</option>
                <option value="Food and Beverages">Food and Beverages</option>
                <option value="Furniture and Decor">Furniture and Decor</option>
                <option value="Phones and Tablets">Phones and Tablets</option>
                <option value="Stationery">Stationery</option>
                <option value="Household items">Household Items</option>
                <option value="Hand & Power Tools">Hand & Power Tools</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Tupperware">Tupperware</option>
                <option value="Sports Products">Sports Products</option>
                <option value="Health and Safety">Health and Safety</option>
                <option value="Others">Others</option>
              </select>
            </div><div class="col-lg-12 col-sm-12 mb-2">
            <label for="exampleInputEmail1" class="form-label"
              >Choose Product Sub-Category</label
            >
            <select
              class="form-select position-relative"
              id="productSubCategory"
              aria-describedby="validationServer04Feedback"
              required
            >
              <option selected disabled value="">Choose Sub-Category</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Mobile Phone Accessories">Mobile Phone Accessories</option>
              <option value="Tablets">Tablets</option>
              <option value="Tablets Accessories">Tablets Accessories</option>
              <option value="Television">Television</option>
              <option value="Cameras">Cameras</option>
              <option value="Games and Consoles">Games and Consoles</option>
              <option value="Home Theatres and Audio System">Home Theatres and Audio System</option>
              <option value="DVD Players and Recorders">DVD Players and Recorders</option>
              <option value="Women's Wears">Women's Wears</option>
              <option value="Women's Accessories">Women's Accessories</option>
              <option value="Women's Shoes">Women's Shoes</option>
              <option value="Men's Wears">Men's Wears</option>
              <option value="Men's Accessories">Men's Accessories</option>
              <option value="Men's Shoes">Men's Shoes</option>
              <option value="Laptops">Laptops</option>
              <option value="Desktop and Monitors">Desktop and Monitors</option>
              <option value="Computing Accessories">Computing Accessories</option>
              <option value="Printers">Printers</option>
              <option value="Scanners & Accessories">Scanners & Accessories</option>
              <option value="Wifi & Networking">Wifi & Networking</option>
              <option value="PC Gaming">PC Gaming</option>
              <option value="Projectors">Projectors</option>
              <option value="Softwares">Softwares</option>
              <option value="Kitchen & Dining">Kitchen & Dining</option>
              <option value="Furniture">Furniture</option>
              <option value="Home Furnishings">Home Furnishings</option>
              <option value="Beverages">Beverages</option>
              <option value="Frozen Food">Frozen Food</option>
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
              onclick="addProduct()"
              class="btn btn-primary mx-auto mt-4"
              style="width: 95%"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    `
    }
    
  }
};

addProduct = () => {
  allProducts.map((eachPro, index) => {
    localStorage.setItem("hello", index)
  })
  if (productOnPage.value == "TodaysDealProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: Number(productOldPrice.value),
        productNewPrice: Number(productNewPrice.value),
        productCategory: productCategory.value,
        productSubCategory: productSubCategory.value,
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
    Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
      text: 'Do you want to add another product?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Proceed',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        window.location.href = `index.html`;
      }
    })
  } else if (productOnPage.value == "SponsoredProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: Number(productOldPrice.value),
        productNewPrice: Number(productNewPrice.value),
        productCategory: productCategory.value,
        productSubCategory: productSubCategory.value,
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
      localStorage.setItem("currentUserIndex", index);
    }
    Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
      text: 'Do you want to add another produc?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Proceed',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        window.location.href = `index.html`;
      }
    })
  } else if (productOnPage.value == "RecommendedProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: Number(productOldPrice.value),
        productNewPrice: Number(productNewPrice.value),
        productCategory: productCategory.value,
        productSubCategory: productSubCategory.value,
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
      localStorage.setItem("currentUserIndex", index);
    }
    Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
      text: 'Do you want to add another produc?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Proceed',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        window.location.href = `index.html`;
      }
    })
  } else if (productOnPage.value == "InspiredProducts") {
    for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: Number(productOldPrice.value),
        productNewPrice: Number(productNewPrice.value),
        productCategory: productCategory.value,
        productSubCategory: productSubCategory.value,
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
      localStorage.setItem("currentUserIndex", index);
    }
    Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
      text: 'Do you want to add another produc?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Proceed',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        window.location.href = `index.html`;
      }
    })
  }else if (productOnPage.value == "BrowsingHistoryProducts") {
     for (let index = 0; index < allProducts.length; index++) {
      let topDealProduct = {
        productImg: productImg,
        productFullName: productLongName.value,
        productName: productSortName.value,
        productOldPrice: Number(productOldPrice.value),
        productNewPrice: Number(productNewPrice.value),
        productCategory: productCategory.value,
        productSubCategory: productSubCategory.value,
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
    localStorage.setItem("currentUserIndex", index);
  }
  Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
      text: 'Do you want to add another produc?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Proceed',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        window.location.href = `index.html`;
      }
    })
  } else {
    swal.fire({
      title: 'Error!',
      text: 'Select where product should be added to.',
      timer: 3000
    })
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

// similarImg = () => {
//   const file = similarProductImg.files[0];
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//     console.log(reader.result);
//     similarProductImg = reader.result;
//   });
//   reader.readAsDataURL(file);
// }
