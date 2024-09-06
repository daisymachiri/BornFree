const featuredProducts = [
    {
      id: '1',
      name: '2-Cook 2',
      price: 'R600',
      images: [
        'images/03 Copy.jpg',
      ],
    },
    {
      id: '2',
      name: 'Whistling Kettle',
      price: 'R600',
      images: [
        'images/Camping kettle -Pink.jpg'
      ],
    },
    {
      id: '3',
      name: 'Foldable Table',
      price: 'R600',
      images: [
        'images/(958005) Foldable Table (3).jpg'
      ],
    },
    {
      id: '4',
      name: 'Commander 4',
      price: 'R600',
      images: [
        'images/Commander 4_Born Free.jpg'
      ],
    },
    {
      id: '6',
      name: 'Beach Canopy',
      price: 'R600',
      images: [
        'images/Beach Canopy.jpg'
      ],
    },
    {
      id: '7',
      name: 'Trigger-Lite Lighter<br>(2 PACK)',
      price: 'R600',
      images: [
        'images/Trigger-Lite Lighter (2 PACK).png'
      ],
    },
    {
      id: '8',
      name: 'Sun Lounger',
      price: 'R600',
      images: [
        'images/Sun Lounger.png'
      ],
    },
    {
      id: '9',
      name: 'ICE Trek 50',
      price: 'R600',
      images: [
        'images/Hard Cooler Box copy 2.png'
      ],
    },
    {
      id: '10',
      name: 'Patio BBQ Cover',
      price: 'R600',
      images: [
        'images/Patio BBQ Cover-3.BIG logo_grey copy.jpg'
      ],
    },
    {
      id: '11',
      name: 'Folding Camping Stove',
      price: 'R600',
      images: [
        'images/Folding Camping Stov Picture 2[35] copy.png'
      ],
    },
    {
      id: '12',
      name: 'Industrial Floor Fan',
      price: 'R400',
      images: [
        'images/Industrial Floor Fan.png'
      ],
    },
    {
        id: '12',
        name: 'Fan',
        price: 'R400',
        images: [
          'images/pic 5.png'
        ],
      },
      {
        id: '12',
        name: 'Portable Gas Stove',
        price: 'R400',
        images: [
          'images/Image 11.png'
        ],
      },
      {
        id: '12',
        name: 'Camp Cruiser',
        price: 'R400',
        images: [
          'images/Camp Cruiser.png'
        ],
      },
      {
        id: '12',
        name: 'EAZI Outdoor Shelter',
        price: 'R400',
        images: [
          'images/Eazi Outdoor Shelter.png'
        ],
      },
      {
        id: '12',
        name: 'Directors Camp Chair',
        price: 'R400',
        images: [
          'images/Image 12.png'
        ],
      },
      {
        id: '12',
        name: 'Quick Pitch Beach Shelter',
        price: 'R400',
        images: [
          'images/Quick Pitch Beach Shelter.png'
        ],
      },
      {
        id: '12',
        name: 'Quick Pitch Tent',
        price: 'R400',
        images: [
          'images/Quick Pitch Tent.png'
        ],
      }
];
function displayFeaturedProducts() {
    const container = document.querySelector('.featured-products');

    featuredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      // Create image elements for multiple images
      let imagesHtml = product.images.map((image, index) => {
        return `<img src="${image}" alt="${product.name} loading="lazy" ${index + 1}" class="product-image" style="display: ${index === 0 ? 'block' : 'none'};">`;
      }).join('');

      productCard.innerHTML = `
        <div class="product-images">
          ${imagesHtml}
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;

      container.appendChild(productCard);

      // No need for next and previous button functionality
    });
}

document.addEventListener('DOMContentLoaded', displayFeaturedProducts);
