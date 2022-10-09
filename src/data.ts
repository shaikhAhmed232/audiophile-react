export type LinkType = {
    id: string,
    name: string,
    link: string,
}

export const links:LinkType[] = [
    {
        id: "home",
        name: "Home",
        link: "/"
    },
    {
        id: "headphones",
        name: "Headphones",
        link: "/headphones"
    },
    {
        id: "speakers",
        name: "Speakers",
        link: "/speakers"
    },
    {
        id: "earphones",
        name: "Earphones",
        link: "/earphones"
    }
]

export type ProductType = {
    id: number,
    productName: string,
    productDescription: string,
    productImg: string,
    productPrice: number,
    isNew: boolean,
    features: string[],
    includes: string[],
    category: string, 
}

export const products: ProductType[] = [
    {
        id: 1,
        productName: "Earphones Urban 1 True Wireless Black",
        productDescription: "True Wireless earphones to listen to your music wirelessly. Answer calls in crystal clear stereo sound thanks to Bluetooth 5.0 and the built-in microphones. Enjoy up to 20 hours of battery life with the charging case.",
        productImg: "https://www.energysistem.com/cdnassets/products/44976/principal_2000.jpg",
        productPrice: 230,
        isNew: false,
        features: [
            "Certified for Microsoft Teams. Connect Surface Headphones 2+ for Business to your PC with the Surface USB Link and get intuitive touch control of Teams features and functionality.",
            "Stay in control.",
            "Crystal-clear sound.",
            "Long-lasting battery.",
            "Use your voice."
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'earphones',
    },
    {
        id: 2,
        productName: "1MORE Piston Fit Wired Earphone With Mic",
        productDescription: "The 1MORE Piston Fit earphone comes with a Dynamic Driver which consists of a dual-layer composite driver with aerospace grade titanium, as well as a well-engineered design with elegant yet vibrant colour choices, making it our most awarded pair of in-ear headphones till date.",
        productImg: "https://cdn.shopify.com/s/files/1/1644/5237/products/1more-pistonfit-earphones-earphone-headphones-headsets-earbuds-with-mic1_530x.jpg?v=1585551514",
        productPrice: 899,
        isNew: false,
        features: [
            "Type: LiPo.",
            "Capacity: 40 mAh.",
            "Voltage: 3.7 V.",
            "Battery life - Normal use: 5 h.",
            "Charging system: microUSB.",
            "Charging case: Yes.",
            "Charging case - Type: LiPo.",
            "Charging case - Capacity: 300 mAh.",
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'earphones',
    },
    {
        id:3,
        productName: "In-ear wireless Earphones",
        productDescription: "These ultra light headphones are extremely comfortable and are suitable for everyday use. They come with a handy cable that connects the two earpieces, preventing them from falling. Two rubber pads that will fit anyone's ears are also included in the package.",
        productImg: "https://www.sbsmobile.com/che/205532-home_default/in-ear-wireless-earphones.jpg",
        productPrice: 1199,
        isNew: false,
        features: [
            "Type: LiPo.",
            "Capacity: 40 mAh.",
            "Voltage: 3.7 V.",
            "Battery life - Normal use: 5 h.",
            "Charging system: microUSB.",
            "Charging case: Yes.",
            "Charging case - Type: LiPo.",
            "Charging case - Capacity: 300 mAh.",
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'earphones',
    },
    // Headphones
    {
        id:4,
        productName: "Surface Headphones 2+ for Business",
        productDescription: "Featuring 13 levels of active noise cancellation, these headphones give employees immersive, distraction-free focus for clear communication on calls.",
        productImg: "https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-studio-xe-UP3JTmhZ.png",
        productPrice: 2099,
        isNew: true,
        features: [
            "Certified for Microsoft Teams. Connect Surface Headphones 2+ for Business to your PC with the Surface USB Link and get intuitive touch control of Teams features and functionality.",
            "Stay in control.",
            "Crystal-clear sound.",
            "Long-lasting battery.",
            "Use your voice."
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'headphones',
    },
    {
        id: 5,
        productName: "Beats Studio3 Wireless Over‑Ear Headphones - White",
        productDescription: "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real time, optimising sound output to preserve a premium listening experience the way artists intended.",
        productImg: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX3Y2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420157712",
        productPrice: 3999,
        isNew: false,
        features: [
            "Type: LiPo.",
            "Capacity: 40 mAh.",
            "Voltage: 3.7 V.",
            "Battery life - Normal use: 5 h.",
            "Charging system: microUSB.",
            "Charging case: Yes.",
            "Charging case - Type: LiPo.",
            "Charging case - Capacity: 300 mAh.",
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'headphones',
    },
    {
        id: 6,
        productName: "boAt Rockerz 550",
        productDescription: "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
        productImg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
        productPrice: 1549,
        isNew: false,
        features: [
            "Type: LiPo.",
            "Capacity: 40 mAh.",
            "Voltage: 3.7 V.",
            "Battery life - Normal use: 5 h.",
            "Charging system: microUSB.",
            "Charging case: Yes.",
            "Charging case - Type: LiPo.",
            "Charging case - Capacity: 300 mAh.",
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'headphones',
    },
    // speaker
    {
        id: 7,
        productName: "YU2",
        productDescription: "A design element in its own right, YU2 brings character and substance to your desktop. Its built-in soundcard lets you stream high-quality audio directly from your computer’s USB port, delivering sound that challenges the notion that bigger is better. Choose a color that reflects your personality and space.",
        productImg: "https://www.kantoaudio.com/wp-content/uploads/yu2mb_main.png",
        productPrice: 4999,
        isNew: false,
        features: [
            "Type: LiPo.",
            "Capacity: 40 mAh.",
            "Voltage: 3.7 V.",
            "Battery life - Normal use: 5 h.",
            "Charging system: microUSB.",
            "Charging case: Yes.",
            "Charging case - Type: LiPo.",
            "Charging case - Capacity: 300 mAh.",
        ],
        includes: ["Kanto Living YU2 Powered Desktop Speakers (Bamboo, Pair)",
            "8 x Self-Adhesive Rubber Feet.",
            "USB Cable.",
            "6.5' 1/8 Aux Cable.",
            "10' Speaker Wire.",
            "AC/DC Adapter.",
            "Limited 2-Year Warranty."],
        category: 'speakers',
    },
]

export const newProduct = () => {
    const newProduct = products.filter((product) => product.isNew)[0]
    return newProduct
}

export type CategoryType = {
    id:string,
    category: string,
    img: string,
}

export const productCategories:CategoryType[] = [
    {
        id: "headphones",
        category: "Headphones",
        img: "https://www.jabra.in/-/media/Images/Products/Jabra-Elite-45h/Product/elite_45e_copperblack_1.png?la=en-IN&hash=FD23FBD342318936C564A1BFF5953730FCEF60E3"
    },
    {
        id: "speakers",
        category: "Speakers",
        img: "https://www.kantoaudio.com/wp-content/uploads/yu2mb_main.png",
    },
    {
        id: "earphones",
        category: "Earphones",
        img: "https://image01-in.oneplus.net/ebp/202207/27/1-m00-3e-0b-cpgm7wlhhmaapehcaanye9tk-mc807.png",
    },
]

export const pickRandomProducts = () => {
    const randomProducts:ProductType[] = []
    while (randomProducts.length < 3) {
        const image = products[Math.floor(Math.random()*products.length)]
        if(!randomProducts.includes(image)) {
            randomProducts.push(image)
        }
        continue;
    }
    return randomProducts
}

export const loadingImgUrl = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"

export const manWidthHeadphonesUrl:string = "https://media.istockphoto.com/photos/africanamerican-ethnicity-person-at-the-studio-with-professional-picture-id1312006927?k=20&m=1312006927&s=612x612&w=0&h=KqT7bwse6G30D6WAEcvAam2uU145WzddxPg9ICilAco="

export const productPageCommonColor:string = "https://images.indianexpress.com/2022/04/Urbanista-los-angeles-review-featured.jpg"

export const productPageCommonBW:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCn-rvvj-EzfbHdf86lypmSI8f1SKEtbNQw&usqp=CAU"

export const deliveryCharge = 30

export const calculateGST = (totalAmount:number) => {
    let amount = ( 18 * totalAmount) / 100
    return parseFloat(amount.toFixed(2))
}

export const calculateGrandTotal = (totalAmount:number) => {
    let gstAmount = calculateGST(totalAmount)
    return totalAmount + gstAmount + deliveryCharge
}