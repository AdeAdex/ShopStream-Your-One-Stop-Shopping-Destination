// window.onscroll = function() {myFunction()};
// let sticky = nav.offsetTop;

// function myFunction() {
//         if (window.pageYOffset >= sticky) {
//           navbar.classList.add("sticky")
//         } else {
//           navbar.classList.remove("sticky");
//         }
//       }

// let topbutton = document.querySelector("#topBtn");
// let sidenav = document.querySelector(".quick-menu");

function navDropdown(parameters) {
  let x = document.getElementById("nav");
  if (x.className === "nav-bar" && parameters == 'dropdownAll') {
    x.className += " responsive";
    category.style.setProperty("background-color", "#535353", "important");
    category.style.setProperty("color", "white", "important");
    cate.style.setProperty("justify-content", "center", "important")
    cateAngle.style.setProperty("display", "flex", "important")
    // dropIcon.classList.toggle("fa-xmark");
  } else if (x.className === "nav-bar" && parameters == 'browseAll') {
    x.className += " responsive";
    loginSignupOnSmallScreen.style.setProperty("display", "none", "important");
    tracksOnSmallScreen.style.setProperty("display", "none", "important");
    category.style.setProperty("background-color", "#535353", "important");
    category.style.setProperty("color", "white", "important");
    cate.style.setProperty("justify-content", "center", "important")
    cateAngle.style.setProperty("display", "flex", "important")
  } else {
    x.className = "nav-bar";
    // dropIcon.classList.toggle("fa-border-all");
  }
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    nav.style.top = "-40px";
  } else {

  }
}

closeThis = () => {
  cate.innerText = `Categories`
  bringItUp.style.setProperty("display", "none", "important")
}

dropDropdown = (parameter) => {
  bringItUp.innerHTML = ""
  bringItUp.style.setProperty("display", "flex", "important")
  if (parameter == "computer") {
    cate.innerText = `Computers and Accessories`
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">laptops<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">desktop and monitors<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">computing accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">printers, scanner and accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">wifi and network<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">pC gaming<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">software<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">projectors<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `
  } else if (parameter == "phone") {
    cate.innerText = `Phones and Tablets`
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">mobile phones<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">mobile phones accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">tablets<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">tablets and accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">shop by price<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `
  } else if (parameter == "electronics") {
    cate.innerText = `Electronics`
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">television<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">DVD players and recorders<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">cameras<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">home theaters and audio systems<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">gams and consoles<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">electronics bundles<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `
  }
}

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// const dropdowns = Array.from(
//   document.getElementsByClassName("dropdown-content")
// );
// const dropdownButtons = Array.from(document.getElementsByClassName("dropbtn"));

// let currentDropdown = 0;
// let dropdownAmount = 0;

// dropdownButtons.forEach(function (dropdownBtn, index) {
//   dropdownBtn.addEventListener("mouseover", function (e) {
//     e.stopPropagation();
//     dropdowns[index].classList.toggle("show");
//     currentDropdown = index;
//     dropdownAmount++;

//     if (dropdownAmount > 1) {
//       // closes other dropdowns if more than one is open
//       for (let i = 0; i < dropdowns.length; i++) {
//         const openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains("show") && i !== currentDropdown) {
//           openDropdown.classList.remove("show");
//         }
//       }
//       dropdownAmount = 1;
//     }
//   });
// });

// window.addEventListener("click", function (event) {
//   for (let i = 0; i < dropdowns.length; i++) {
//     const openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains("show")) {
//       openDropdown.classList.remove("show");
//     }
//     dropdownAmount = 0;
//   }
// });

let allProducts = [];
if (localStorage.companyProduct) {
  allProducts = JSON.parse(localStorage.getItem("companyProduct"));
}

text = () => {
  let products = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
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

  // window.location.href = `index.html`;
};

// let myPic = ""

function readURL(input)
{
    img.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            img.src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// if(localStorage.getItem('img-BASE64')){
//   document.querySelector('#img').src=localStorage.getItem('img-BASE64')
// }
// function getBase64(file) {
//   return new Promise((resolve,reject)=>{
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     resolve(reader.result)
//   };
//   reader.onerror = reject
//   })
// }
// document.querySelector('#adminDealImg').addEventListener('change', async(e)=>{
//   const data = await getBase64(e.target.files[0])
//   console.log(e)
//   localStorage.setItem('img-BASE64', data)
// })

setTodaysDeal = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(((adminOldPrice.value - adminNewPrice.value) / (adminOldPrice.value)) * 100)
    };
    allProducts[index].topDeal.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    localStorage.setItem("currentUserIndex", index);
  }
};

setSponsored = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(((adminOldPrice.value - adminNewPrice.value) / (adminOldPrice.value)) * 100)
    };
    allProducts[index].sponsorProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setRecommended = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(((adminOldPrice.value - adminNewPrice.value) / (adminOldPrice.value)) * 100)
    };
    allProducts[index].recommendedProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setInspired = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(((adminOldPrice.value - adminNewPrice.value) / (adminOldPrice.value)) * 100)
    };
    allProducts[index].inspiredProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setBrowsingHistory = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(((adminOldPrice.value - adminNewPrice.value) / (adminOldPrice.value)) * 100)
    };
    allProducts[index].browsingProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};


// if(localStorage.getItem('img-BASE64')){
//   document.querySelector('#img').src=localStorage.getItem('img-BASE64')
// }
// function getBase64(file) {
//   return new Promise((resolve,reject)=>{
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     resolve(reader.result)
//   };
//   reader.onerror = reject
//   })
// }
// document.querySelector('#adminDealImg').addEventListener('change', async(e)=>{
//   const data = await getBase64(e.target.files[0])
//   localStorage.setItem('img-BASE64', data)
// })

currentProductIndex = localStorage.getItem("currentUserIndex");

displayProducts = () => {
  todaysDeal.innerHTML = "";
  eachTopDealProduct = allProducts[currentProductIndex].topDeal;
  for (let index = 0; index < eachTopDealProduct.length; index++) {
    todaysDeal.innerHTML += `
    <div
    onclick="topDealProductPage(${index})"
    class="d-flex p-3 shadow each-todays-deal gap-3 position-relative"
    id="eachTodaysDeal"
    style="width: 32.7%; height: 120px; cursor: pointer"
  >
    <div
      id="percentOff"
      class="text-white fw-bold d-flex position-absolute"
      style="
        width: 55px;
        height: 35px;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
        background-color: #ff3b3b;
        font-size: 10px;
      "
    >
      <span class="my-auto mx-auto"
        >${eachTopDealProduct[index].productOff}% OFF</span
      >
    </div>
    <img src="${e.target.files[0]}" alt="" id="dealsImg" />
    <div class="d-flex flex-column gap-3 pro-details w-100" id="proDetails">
      <div class="text-capitalize" style="font-size: 14px" id="dealsProductName">
        ${eachTopDealProduct[index].productName}
      </div>
      <div class="">
        <div class="d-flex gap-2">
          <div class="fw-bold fs-5" id="dealsNewPrice">
            ₦${eachTopDealProduct[index].productNewPrice}
          </div>
          <div
            class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
            id="dealsOldPrice"
          >
            ₦${eachTopDealProduct[index].productOldPrice}
          </div>
        </div>
        <div
          class="fw-bold"
          style="font-size: 10px; color: #33b27b"
          id="dealsSave"
        >
          You save ₦${eachTopDealProduct[index].productSavePrice}
        </div>
      </div>
    </div>
  </div>
        `;
  }

  eachSponsoredProduct = allProducts[currentProductIndex].sponsorProduct;
  for (let index = 0; index < eachSponsoredProduct.length; index++) {
  sponsoredPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="sponsoredProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachSponsoredProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/sponsor14.jpg"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 12px;">${eachSponsoredProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ₦${eachSponsoredProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ₦${eachSponsoredProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ₦${eachSponsoredProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `
  };
  
  eachRecommendedProduct = allProducts[currentProductIndex].recommendedProduct;
  for (let index = 0; index < eachRecommendedProduct.length; index++) {
    recommendedPro.innerHTML += `
    <div
    onclick="topDealProductPage(${index})"
    class="d-flex p-3 shadow each-todays-deal gap-3 position-relative"
    id="eachTodaysDeal"
    style="width: 32.5%; height: 120px; cursor: pointer"
  >
    <div
      id="percentOff"
      class="text-white fw-bold d-flex position-absolute"
      style="
        width: 55px;
        height: 35px;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
        background-color: #ff3b3b;
        font-size: 10px;
      "
    >
      <span class="my-auto mx-auto"
        >${eachRecommendedProduct[index].productOff}% OFF</span
      >
    </div>
    <img src="Images/recommended2.webp" alt="" id="dealsImg" />
    <div class="d-flex flex-column gap-3 pro-details w-100" id="proDetails">
      <div class="text-capitalize" id="dealsProductName" style="font-size: 14px">
        ${eachRecommendedProduct[index].productName}
      </div>
      <div class="">
        <div class="d-flex gap-2">
          <div class="fw-bold fs-5" id="dealsNewPrice">
            ₦${eachRecommendedProduct[index].productNewPrice}
          </div>
          <div
            class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
            id="dealsOldPrice"
          >
            ₦${eachRecommendedProduct[index].productOldPrice}
          </div>
        </div>
        <div
          class="fw-bold"
          style="font-size: 10px; color: #33b27b"
          id="dealsSave"
        >
          You save ₦${eachRecommendedProduct[index].productSavePrice}
        </div>
      </div>
    </div>
  </div>
        `;
  }

  eachInspiredProduct = allProducts[currentProductIndex].inspiredProduct;
  for (let index = 0; index < eachInspiredProduct.length; index++) {
  inspiredPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="inspiredProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachInspiredProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/inspiredby6.webp"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 14px;">${eachInspiredProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ₦${eachInspiredProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ₦${eachInspiredProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ₦${eachInspiredProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `
  };

  eachBrowsingProduct = allProducts[currentProductIndex].browsingProduct;
  for (let index = 0; index < eachBrowsingProduct.length; index++) {
    browsingHistoryPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="browsingProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachBrowsingProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/browsingHistory2.webp"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 14px;">${eachBrowsingProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ₦${eachBrowsingProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ₦${eachBrowsingProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ₦${eachBrowsingProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `
  };
}

showForEach = (param) => {
  showThis.innerHTML = "";
  // let mumu = document.querySelectorAll('.each-click')
  // for (let index = 0; index < mumu.length; index++) {
  //   mumu[index].style.color = "red"
  // }
  if (param == "overview") {
    showThis.innerHTML = `
    <h6 class="text-uppercase text-secondary">features</h6>
        <ul class="text-secondary">
                <li>Enjoy 4G Speeds on your 3G Device</li>
                <li>Connects up to 10 users on WIFI</li>
                <li>Up to 8 hours of battery backup</li>
                <li>Fits in Pocket</li>
        </ul>
    `;
  } else if (param == 'description') {
    showThis.innerHTML = `
    <div class="text-secondary px-2">
    <div class="d-flex w-100">
      <div
        class="border border-secondary py-2 px-2 fw-bold"
        style="width: 15%"
      >
        colour
      </div>
      <div class="border border-secondary py-2 px-2" style="width: 85%">
        Not Available
      </div>
    </div>
    <div class="pt-2">
      Adex 5G Internet Pocket Mifi offers super-fast 4G LTE internet
      browsing and download speed, for home, office, and when you are on
      the move.
    </div>
    <div class="pt-4">
      It is a battery-operated 4G Hotspot LTE Router with Wi-Fi support.
      You just need to slip it into your pocket and create a Wi-Fi zone
      anywhere you go.
    </div>
    <h6 class="text-uppercase text-secondary mt-4">features</h6>
    <ul class="text-secondary">
      <li>Enjoy 4G Speeds on your 3G Device</li>
      <li>Connects up to 10 users on WIFI</li>
      <li>Up to 8 hours of battery backup</li>
      <li>Fits in Pocket</li>
    </ul>
    <h6 class="text-uppercase text-secondary mt3">customer benefits</h6>
    <ul class="text-secondary">
      <li>UP TO 150GB BONUS DATA</li>
      <li>Comes with 30GB of data free valid for 30 days</li>
      <li>
        100% BONUS monthly for 6 months upon recharge of N5,000- N15,000
        bundles
      </li>
      <li>Connects up to 10 WiFi-enabled devices at once</li>
      <li>
        Pocket Wifi now includes a WPS push button for ease of connection
      </li>
      <li>Up to 8 hours battery life</li>
    </ul>
  </div>
    `
  } else if (param == "shipping") {
    showThis.innerHTML = `
    <div class="d-flex gap-3">
              <img
                src="Images/pink-truck-icon.png"
                alt=""
                style="
                  width: 50px;
                  height: 50px;
                  background-color: #f2f2f2;
                  border-radius: 5px;
                "
              />
              <div class="d-grid" style="font-size: 12px">
                <div>Delivery</div>
                <div class="text-secondary">
                  Estimated delivery time: 1 - 7 days
                </div>
              </div>
            </div>
    `;
  } else if (param == "warranty") {
    showThis.innerHTML = `
    <div>Warranty information unavailable for this item.</div>
    `;
  } else if (param == "reviews") {
    showThis.innerHTML = `
    <div>No product review yet. Be the first to review this product.</div>
    `;
  } else if (param == "returnPolicy") {
    showThis.innerHTML = `
    <div class="d-flex gap-3">
              <img
                src="Images/NTFS_icon_restart.png"
                alt=""
                style="
                  width: 60px;
                  height: 40px;
                  background-color: #f2f2f2;
                  border-radius: 5px;
                "
              />
              <div class="d-grid" style="font-size: 12px">
                <div>7 Day Return Guarantee</div>
                <div class="text-secondary">
                For more information on the return shipping options, go to <a href="" style="color: #ed017f" class="text-decoration-none">Adex Return Policy</a>
                </div>
              </div>
            </div>
    `;
  }
};



topDealProductPage = (eachTopDeal) => {
  // alert(eachTopDealProduct[eachTopDeal].productName)
 productPageDetails.innerHTML = "";
  eachTopDealProduct = allProducts[currentProductIndex].topDeal;
  eachTopDealProduct.map((eachUser, index) => {
   productPageDetails.innerHTML = `
  <h2>${eachTopDealProduct[eachTopDeal].productName}</h2>
  <h5 class="d-flex gap-2" style="font-size: 14px; color: gray">
    Product Code:
    <div class="text-dark">5754251</div>
  </h5>
  <hr />
  <div class="d-flex gap-3">
    <h4 class="fw-bold my-auto">₦7,500</h4>
    <h6 class="my-auto text-decoration-line-through text-secondary">
      ₦15,000
    </h6>
    <h6 class="my-auto text-success" style="font-size: 12px">
      You save ₦7,500
    </h6>
  </div>
  <hr />
  <div class="d-flex gap-4">
    Quantity:
    <div class="d-flex cart-btn-container">
      <button
        class="btn btn-light btn-sm border fw-bold"
        style="border-radius: 2px 0px 0px 2px"
      >
        -
      </button>
      <button
        class="btn btn-light btn-sm border px-3"
        style="border-radius: 0px 0px 0px 0px"
      >
        0
      </button>
      <button
        class="btn btn-light btn-sm border fw-bold"
        style="border-radius: 0px 2px 2px 0px"
      >
        +
      </button>
    </div>
  </div>

  <div class="d-flex flex-column mt-4">
    <span class="text-secondary" style="font-size: 14px"
      >Call us for bulk purchases:</span
    >
    <a
      href="tel:+2347033959586"
      class="text-decoration-none"
      style="font-size: 14px; color: #ed017f"
      >Click here to show phone number</a
    >
  </div>
  <hr />
  <div class="d-flex gap-4">
    <button
      class="text-capitalize btn w-50 text-white"
      style="background-color: #33b27b"
    >
      buy now
    </button>
    <div class="d-flex gap-2">
      <i
        class="fas fa-heart text-white justify-content-center d-flex fs-5 cart-heart"
        style="
          cursor: pointer;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: gray;
          padding: 10px 0px;
        "
      ></i>
      <span class="my-auto text-capitalize" style="font-size: 14px"
        >save For Later</span
      >
    </div>
  </div>
  <div
    class="d-flex gap-3 mt-4"
    style="height: 70px; background-color: #f8f8f8"
  >
    <img src="Images/Rectangle_81.webp" style="height: 100%" alt="" />
    <a href="" class="my-auto" style="color: #ed017f"
      >Get free delivery on items above ₦4,599 in LAGOS, ABUJA &
      PORTHARCOURT</a
    >
  </div>
  <div class="d-flex mt-4 gap-5">
    <div class="d-flex position-relative gap-4">
      <img
        src="Images/pink-building-icon.png"
        style="height: 30px"
        alt=""
      />
      <img
        src="Images/pink-truck-icon.png"
        style="height: 30px; z-index: 1 !important"
        class="position-absolute"
        alt=""
      />
      <div class="my-auto" style="font-size: 14px">
        Pickup & Pay on Collection Available
      </div>
    </div>
    <div class="d-flex gap-3">
      <img
        src="Images/pink-building2.png"
        style="height: 30px"
        alt=""
      />
      <div class="my-auto" style="font-size: 14px">
        Konga Warehouse
      </div>
    </div>
  </div>
  <hr />
  <div class="d-flex gap-3" style="font-size: 14px">
    <div>Next Day Delivery Available at:</div>
    <div
      class="w-75 py-2 px-2"
      style="height: 50px; background-color: #f8f8f8"
    >
      <div
        class="d-flex justify-content-center"
        style="
          width: 80px;
          height: 100%;
          border-radius: 45%;
          background-color: orange;
          padding-top: 4px;
        "
      >
        Lagos
      </div>
    </div>
  </div>
  <div class="d-grid gap-2 mt-4" style="font-size: 14px">
    <div class="">Share With Friends</div>
    <div class="d-flex gap-3">
      <i
        class="fab fa-facebook-f border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #39579a;
        "
      ></i>
      <i
        class="fab fa-twitter border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #03a9f4;
        "
      ></i>
      <i
        class="fab fa-whatsapp border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #3ec850;
        "
      ></i>
    </div>
  </div>
  `;
  });

};

// displayProductOnProductPage = (eachTopDeal) => {

// }


var mediaQuery = window.matchMedia("(max-width: 600px)")
if (mediaQuery.matches) {
  othersAdsOne.src = "Images/ads.jpg";
}

function readMore() {
  if (readDots.style.display === "none") {
    readDots.style.display = "inline";
    readBtn.innerHTML = "Read more"; 
    moreText.style.display = "none";
    readBtn.style.backgroundColor = "blue"
  } else {
    readDots.style.display = "none";
    readBtn.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    readBtn.style.backgroundColor = "purple"
  }
}

// footerOthersHeading.addEventListener('click', dropMore)
let showFooter = document.querySelectorAll('.footer-dropdown')
let footericon = document.querySelectorAll('.fa-plus')
function dropMore(eachDropdown) {
  for (let index = 0; index < showFooter.length; index++) {
    showFooter[index].classList.toggle("footer-dropdown");
    // footericon.classList.toggle("fa-square-minus");
  }
}