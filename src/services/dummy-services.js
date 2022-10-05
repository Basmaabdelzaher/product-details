import productImg1 from '../images/Group 333.png';
import productImg2 from '../images/Group 331.png';
import productImg3 from '../images/Group 329.png';
import productImg4 from '../images/Group 335.png';
import productImg5 from '../images/tshirt.jpg';

export function getProductDetails() {
    return {
        logoPath: '../images/product-logo.svg',
        title: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        // images: ['../images/Group 333.png', '../images/Group 331.png', '../images/Group 329.png', '../images/Group 335.png', '../images/tshirt.jpg'],
        images: [productImg1, productImg2, productImg3, productImg4, productImg5],
        gender: 'Men',
        rate: 4.2,
        ratings: 20,
        price: 999,
        oldPrice: 999,
        discount: 30,
        availableSizes: ['Small', 'Medium', 'Large', 'x-Large', 'xx-Large'],
        availableColors: [
            {color: 'black', image: '../Group 354.png'},
            {color: 'red', image: '../Group 356.png'}
        ]

    };
}