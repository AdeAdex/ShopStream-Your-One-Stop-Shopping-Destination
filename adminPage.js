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
  if (allProducts.length == "") {
  } else {
    adminSponsorPush.disabled = true;
  }
};

setTodaysDeal = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: productImg,
      productFullName: adminDealFullName.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: adminDealCategory.value,
      productNewPrice: adminNewPrice.value,
      productBy: adminDealBy.value,
      productBrand: adminBrand.value,
      productTotalItem: adminTotalItem.value,
      productIDNumber: Math.floor(Math.random() * 1000000),
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].topDeal.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    localStorage.setItem("currentUserIndex", index);
  }
};

document.getElementById("adminDealImg").addEventListener("change", () => {
  const file = adminDealImg.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    //   productPicture.innerHTML = ""
    //   productPicture.style.backgroundImage = `url(${reader.result})`
    console.log(reader.result);
    productImg = reader.result;
  });
  reader.readAsDataURL(file);
});
