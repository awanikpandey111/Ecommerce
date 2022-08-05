const Product = require("../models/Product.model");

// add product

const addProduct = (req, res) => {
  const products = [
    {
      info: {
        name: "Apple iPhone 8 Plus",
        dimensions: "158.4 x 78.1 x 7.5 mm",
        weight: "202 g",
        displayType: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
        displaySize: '5.5"',
        displayResolution: "1080 x 1920 pixels",
        os: "iOS 11",
        cpu: "Hexa-core (2x Monsoon + 4x Mistral)",
        internalMemory: "256 GB",
        ram: "3 GB",
        camera: "Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)",
        batery: "Non-removable Li-Ion 2691 mAh battery (10.28 Wh)",
        color: "White",
        price: 700,
        photo:
          "https://www.bing.com/images/search?view=detailV2&ccid=rv8W1b7A&id=43BA7CFC54543B3D324F5283C049266B64E900DA&thid=OIP.rv8W1b7A-2CmgGvX6-zXFgHaHa&mediaurl=https%3a%2f%2fwww.ourshopee.com%2fourshopee-img%2fourshopee_products%2f27431911771.jpg&exph=1000&expw=1000&q=iphone+jpg&simid=608031511102318845&FORM=IRPRST&ck=0D97D69AC0D71C4380D363355F364707&selectedIndex=2",
      },
      tags: {
        priceRange: "500-750",
        brand: "apple",
        color: "white",
        os: "ios",
        internalMemory: "256",
        ram: "3",
        displaySize: "5.5",
        displayResolution: "1080x1920",
        camera: "12",
        cpu: "hexa_core",
      },
    },
    {
      info: {
        name: "Apple iPhone X",
        dimensions: "143.6 x 70.9 x 7.7 mm",
        weight: "174 g",
        displayType: "Super AMOLED capacitive touchscreen, 16M colors",
        displaySize: '5.8"',
        displayResolution: "1125 x 2436 pixels",
        os: "iOS 11.1.1",
        cpu: "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
        internalMemory: "256 GB",
        ram: "3 GB",
        camera: "Dual: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)",
        batery: "Non-removable Li-Ion 2716 mAh battery (10.35 Wh)",
        color: "Black",
        price: 950,
        photo:
          "data:image/jpeg;base64,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",
      },
      tags: {
        priceRange: "750>",
        brand: "apple",
        color: "black",
        os: "ios",
        internalMemory: "256",
        ram: "3",
        displaySize: "5.8",
        displayResolution: "1125x2436",
        camera: "12",
        cpu: "hexa_core",
      },
    },
    {
      info: {
        name: "HTC U11",
        dimensions: "153.9 x 75.9 x 7.9 mm",
        weight: "169 g",
        displayType: "Super LCD5 capacitive touchscreen, 16M colors",
        displaySize: '5.5"',
        displayResolution: "1440 x 2560 pixels",
        os: "Android 7.1 (Nougat)",
        cpu: "Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)",
        internalMemory: "128 GB",
        ram: "6 GB",
        camera: "12 MP (f/1.7, 1.4 µm, Dual Pixel PDAF, 5-axis OIS)",
        batery: "Non-removable Li-Ion 3000 mAh battery",
        color: "Ice White",
        price: 450,
        photo:
          "https://www.bing.com/images/search?view=detailV2&ccid=wkfJLR46&id=50A5E2EF1B9BEA602171636A48A6E6545D6E71BE&thid=OIP.wkfJLR46CZW5GwQhj__qCQHaG4&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c247c92d1e3a0995b91b04218fffea09%3frik%3dvnFuXVTmpkhqYw%26riu%3dhttp%253a%252f%252faptgadget.com%252fwp-content%252fuploads%252f2016%252f04%252fHTC-10-7.jpg%26ehk%3dgjD9bjKGrfJkNz0LN%252bhdEWmfdRs%252f2Vmi%252f2w9Lmn0Z3M%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2937&expw=3160&q=htc&simid=608042398834235470&FORM=IRPRST&ck=7835CFEA6D9FC2C01036FAF16CAA257E&selectedIndex=2",
      },
      tags: {
        priceRange: "250-500",
        brand: "htc",
        color: "white",
        os: "android",
        internalMemory: "128",
        ram: "6",
        displaySize: "5.5",
        displayResolution: "1440x2560",
        camera: "12",
        cpu: "octa_core",
      },
    },
    {
      info: {
        name: "Huawei Mate 10 Pro",
        dimensions: "154.2 x 74.5 x 7.9 mm",
        weight: "178 g",
        displayType: "AMOLED capacitive touchscreen, 16M colors",
        displaySize: '6.0"',
        displayResolution: "1080 x 1920 pixels",
        os: "Android 8.0 (Oreo)",
        cpu: "Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)",
        internalMemory: "128 GB",
        ram: "6 GB",
        camera: "Dual: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)",
        batery: "Non-removable Li-Po 4000 mAh battery",
        color: "Titanium Gray",
        price: 800,
        photo:
          "data:image/jpeg;base64,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",
      },
      tags: {
        priceRange: "750>",
        brand: "huawei",
        color: "grey",
        os: "android",
        internalMemory: "128",
        ram: "6",
        displaySize: "6.0",
        displayResolution: "1080x1920",
        camera: "12",
        cpu: "octa_core",
      },
    },
    {
      info: {
        name: "Huawei P10",
        dimensions: "145.3 x 69.3 x 7 mm",
        weight: "145 g",
        displayType: "IPS-NEO LCD capacitive touchscreen, 16M colors",
        displaySize: '5.1"',
        displayResolution: "1080 x 1920 pixels",
        os: "Android 7.0 (Nougat)",
        cpu: "Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)",
        internalMemory: "64 GB",
        ram: "4 GB",
        camera: "Dual: 12 MP (f/2.2, PDAF, OIS) + 20 MP",
        batery: "Non-removable Li-Ion 3200 mAh battery",
        color: "Mystic Silver",
        price: 680,
        photo:
          "https://th.bing.com/th/id/OIP.U8TNNqpdojTMgNGKwaZ7gAHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "500-750",
        brand: "huawei",
        color: "grey",
        os: "android",
        internalMemory: "64",
        ram: "4",
        displaySize: "5.1",
        displayResolution: "1080x1920",
        camera: "12",
        cpu: "octa_core",
      },
    },
    {
      info: {
        name: "LG G6",
        dimensions: "148.9 x 71.9 x 7.9 mm",
        weight: "163 g",
        displayType: "IPS LCD capacitive touchscreen, 16M colors",
        displaySize: '5.8"',
        displayResolution: "1440 x 2880 pixels",
        os: "Android 7.0 (Nougat)",
        cpu: "Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)",
        internalMemory: "128 GB",
        ram: "4 GB",
        camera:
          'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
        batery: "Non-removable Li-Po 3300 mAh battery",
        color: "Ice Platinum",
        price: 800,
        photo:
          "https://th.bing.com/th/id/OIP.1Pdbz0K3GmRbc3-a5xwjaQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "750>",
        brand: "lg",
        color: "grey",
        os: "android",
        internalMemory: "128",
        ram: "4",
        displaySize: "5.8",
        displayResolution: "1440x2880",
        camera: "13",
        cpu: "quad_core",
      },
    },
    {
      info: {
        name: "LG V30",
        dimensions: "151.7 x 75.4 x 7.3 mm",
        weight: "158 g",
        displayType: "P-OLED capacitive touchscreen, 16M colors",
        displaySize: '6.0"',
        displayResolution: "1440 x 2880 pixels",
        os: "Android 7.1.2 (Nougat)",
        cpu: "Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)",
        internalMemory: "64 GB",
        ram: "4 GB",
        camera:
          "Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)",
        batery: "Non-removable Li-Po 3300 mAh battery",
        color: "Aurora Black",
        price: 800,
        photo:
          "https://th.bing.com/th/id/OIP._uJj1Kde5AHvH40nvUq5uwHaGn?w=207&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "750>",
        brand: "lg",
        color: "black",
        os: "android",
        internalMemory: "64",
        ram: "4",
        displaySize: "6.0",
        displayResolution: "1440x2880",
        camera: "16",
        cpu: "octa_core",
      },
    },
    {
      info: {
        name: "Samsung Galaxy A3",
        dimensions: "130.1 x 65.5 x 6.9 mm",
        weight: "110.3 g",
        displayType: "Super AMOLED capacitive touchscreen, 16M colors",
        displaySize: '4.5"',
        displayResolution: "540 x 960 pixels",
        os: "Android 4.4.4 (KitKat)",
        cpu: "Quad-core 1.2 GHz Cortex-A53",
        internalMemory: "16 GB",
        ram: "1 GB",
        camera: "8 MP (f/2.4, 31mm), autofocus, LED flash",
        batery: "Non-removable Li-Ion 1900 mAh battery",
        color: "Silver",
        price: 150,
        photo:
          "https://th.bing.com/th/id/OIP.x067ZZMrIvsVSLD_32ZH0wHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "<250",
        brand: "samsung",
        color: "grey",
        os: "android",
        internalMemory: "16",
        ram: "1",
        displaySize: "4.5",
        displayResolution: "540x960",
        camera: "8",
        cpu: "quad_core",
      },
    },
    {
      info: {
        name: "Samsung Galaxy Note 8",
        dimensions: "162.5 x 74.8 x 8.6 mm",
        weight: "195.3 g",
        displayType: "Super AMOLED capacitive touchscreen, 16M colors",
        displaySize: '6.3"',
        displayResolution: "1440 x 2960 pixels",
        os: "Android 7.1.1 (Nougat)",
        cpu: "Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA",
        internalMemory: "256 GB",
        ram: "6 GB",
        camera:
          'Dual: 12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm) + 12MP (f/2.4, 52mm, 1/3.6", 1 µm)',
        batery: "Non-removable Li-Ion 3300 mAh battery",
        color: "Midnight Black",
        price: 800,
        photo:
          "https://th.bing.com/th/id/OIP.4Bc2oT5wHOQUlWE8ozACjQHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "750>",
        brand: "samsung",
        color: "black",
        os: "android",
        internalMemory: "256",
        ram: "6",
        displaySize: "6.3",
        displayResolution: "1440x2960",
        camera: "12",
        cpu: "octa_core",
      },
    },
    {
      info: {
        name: "Samsung Galaxy S8",
        dimensions: "148.9 x 68.1 x 8 mm",
        weight: "155 g",
        displayType: "Super AMOLED capacitive touchscreen, 16M colors",
        displaySize: '5.8"',
        displayResolution: "1440 x 2960 pixels",
        os: "Android 7.0 (Nougat)",
        cpu: "Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA",
        internalMemory: "64 GB",
        ram: "4 GB",
        camera:
          '12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm, Dual Pixel PDAF), phase detection autofocus, OIS',
        batery: "Non-removable Li-Ion 3000 mAh battery",
        color: "Midnight Black",
        price: 720,
        photo:
          "https://th.bing.com/th/id/OIP.xjktuqT1A0jSEhH_oSZ79QHaHZ?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      },
      tags: {
        priceRange: "500-750",
        brand: "samsung",
        color: "black",
        os: "android",
        internalMemory: "64",
        ram: "4",
        displaySize: "5.8",
        displayResolution: "1440x2960",
        camera: "12",
        cpu: "octa_core",
      },
    },
  ];
  products.forEach((product) => {
    Product.create(product, (err, createdProduct) => {
      if (err) {
        res.send(err);
      } else {
        createdProduct.save();
      }
    });
  });
  res.send("Product added");
};

// get product

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (product == 0) {
      return res.send("Product is not available at this time");
    }
    res.send(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getProduct,
  addProduct,
};
