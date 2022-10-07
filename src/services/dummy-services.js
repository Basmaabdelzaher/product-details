import brandLogoImg from "../images/product-logo.svg";
import productImg1 from "../images/Group 1441@2x.png";
import productImg2 from "../images/Group 331@2x.png";
import productImg3 from "../images/Group 329@2x.png";
import productImg4 from "../images/Group 335@2x.png";
import productImg5 from "../images/Group 333@2x.png";
import colorImg1 from "../images/Group 354.png";
import colorImg2 from "../images/Group 356.png";
import imageSimilar1 from "../images/Group 575@2x.png";
import imageSimilar2 from "../images/Group 583@2x.png";
import imageSimilar3 from "../images/Group 589@2x.png";
import imageSimilar4 from "../images/Group 597@2x.png";


const mainProduct = {
    logo: brandLogoImg,
    title:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    //images: ['../images/Group 333.png', '../images/Group 331.png', '../images/Group 329.png', '../images/Group 335.png', '../images/tshirt.jpg'],
    images: [productImg1, productImg2, productImg3, productImg4, productImg5],
    gender: "Men",
    rate: 4.2,
    ratings: 20,
    price: 9.999,
    oldPrice: 9.999,
    discount: 30,
    availableSizes: [
      {
        id: 0,
        size: "Small",
      },
      {
        id: 1,
        size: "Medium",
      },
      {
        id: 2,
        size: "Large",
      },
      {
        id: 3,
        size: "x-Large",
      },
      {
        id: 4,
        size: "xx-Large",
      },
    ],
    availableColors: [
      { id: 0, color: "black", image: colorImg1 },
      { id: 1, color: "red", image: colorImg2 },
    ],
  };

  const similarProducts = [
    {
        id: 1,
        image: imageSimilar1,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        price: 9.999,
        oldPrice: 9.999,
        discount: 50,
        rate: 4.2,
        logo: brandLogoImg,
        insideEgypt: true,
        pickupInfo: ['Genena Mall']
    },
    {
        id: 2,
        image: imageSimilar2,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        price: 9.999,
        oldPrice: 9.999,
        discount: 30,
        rate: 4.2,
        logo: brandLogoImg,
        outSideEgypt: false,
        pickupInfo: ['UK', 'Egypt', 10]
    },
    {
        id: 3,
        image: imageSimilar3,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        price: 9.999,
        oldPrice: 9.999,
        discount: 20,
        rate: 4.2,
        logo: brandLogoImg,
        insideEgypt: true,
        pickupInfo: ['Genena Mall']
    },
    {
        id: 4,
        image: imageSimilar4,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        price: 9.999,
        oldPrice: 9.999,
        discount: 50,
        rate: 4.2,
        logo: brandLogoImg,
        outSideEgypt: false,
        pickupInfo: ['UK', 'Egypt', 10]
    }
  ];

export function getProductDetails() {
  return mainProduct;
}

export function getSimilarProducts() {
    return similarProducts;
  }


