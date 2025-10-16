
const products = [
    { id: 'prod1', name: 'Monstera Deliciosa', description: 'Lush, tropical, and iconic.', price: 6424, img: './plant1.png', category: 'Lush' },
    { id: 'prod2', name: 'Snake Plant', description: 'Hardy and air-purifying.', price: 3080, img: './plants2.png', category: 'Lush' },
    { id: 'prod3', name: 'Fiddle Leaf Fig', description: 'A stylish statement piece.', price: 6864, img: './plant3.png', category: 'Lush' },
    { id: 'prod4', name: 'Calathea Orbifolia', description: 'Beautifully striped leaves.', price: 4400, img: './plant4.png', category: 'Lush' },
    { id: 'prod5', name: 'Pilea Peperomioides', description: 'Chinese Money Plant.', price: 2464, img: './plant8.jpg', category: 'Lush' },
    { id: 'prod6', name: 'ZZ Plant', description: 'Thrives on neglect.', price: 3520, img: './plant6.png', category: 'Lush' },
    { id: 'prod7', name: 'Bird of Paradise', description: 'Majestic and tropical.', price: 7480, img: './plant7.png', category: 'Lush' },
    { id: 'prod8', name: 'String of Pearls', description: 'Peacock Plant" with intricate, feather-like leaf patterns.', price: 2200, img: './plant9.png', category: 'Lush' },
    { id: 'prod9', name: 'Golden Pothos', description: 'A forgiving, fast-growing vine with heart-shaped leaves.', price: 3080, img: './golden.png', category: 'Lush' },
    { id: 'prod10', name: 'Spider Plant', description: 'Classic and easy, known for its air-purifying qualities.', price: 2640, img: './plant12.png', category: 'Lush' },
    { id: 'prod11', name: 'Aglaonema (Chinese Evergreen)', description: 'Hardy plant with beautifully patterned, colorful leaves.', price: 4840, img: './algona.png', category: 'Lush' },
    { id: 'prod12', name: 'Dracaena Marginata', description: ' A slender, tree-like plant with spiky, red-edged leaves.', price: 6160, img: './dracena.png', category: 'Lush' },
    { id: 'prod13', name: 'Cast Iron Plant', description: 'Nearly indestructible, thrives in very low light.', price: 5720, img: './cast..png', category: 'Lush' },
    { id: 'prod14', name: ' Maranta (Prayer Plant)', description: 'Unique trailing succulent.', price: 6072, img: './marantra.png', category: 'Lush' },
    { id: 'prod15', name: 'Calathea Makoyana', description: 'Arrow-shaped leaves, available in shades of green and pink.', price: 440, img: './calathena.png', category: 'Lush' },
    { id: 'prod16', name: 'Syngonium (Arrowhead Plant)', description: 'Unique trailing succulent.', price: 4752, img: './syngnoum.png', category: 'Lush' },
    { id: 'prod17', name: "Croton 'Petra'", description: 'A riot of color with yellow, red, and orange veined leaves.', price: 2024, img: './croton.png', category: 'Lush' },
    { id: 'prod18', name: 'Rubber Plant (Ficus elastica)', description: 'Bold, glossy leaves in dark green, burgundy, or variegated.', price: 880, img: './rubber.png', category: 'Lush' },
    { id: 'prod19', name: ' Peace Lily', description: 'Elegant white flowers and glossy, dark green leaves.', price: 1232, img: './peace.png', category: 'Flowering' },
    { id: 'prod20', name: 'Anthurium', description: 'Heart-shaped, waxy "flowers" in vibrant red, pink, or white.', price: 2552, img: './anthurium.png', category: 'Flowering' },
    { id: 'prod21', name: 'Phalaenopsis Orchid', description: 'The classic, elegant orchid, a symbol of luxury.', price: 3168, img: './phapanio.png', category: 'Flowering' },
    { id: 'prod22', name: 'Kalanchoe', description: 'A cheerful succulent with long-lasting, colorful blooms.', price: 6864, img: './kalchoe.png', category: 'Flowering' },
    { id: 'prod23', name: ' African Violet', description: 'Fuzzy leaves and delicate flowers in shades of purple and pink.', price: 1760, img: './african.png', category: 'Flowering' },
    { id: 'prod24', name: ' Aloe Vera', description: ' Famous for its soothing gel and architectural shape.', price: 1848, img: './aloera.png', category: 'Lush' },
    { id: 'prod25', name: ' Jade Plant', description: 'A symbol of good luck with tree-like stems and oval leaves.', price: 1320, img: './jade.png', category: 'Lush' },
    { id: 'prod26', name: 'Haworthia (Zebra Plant)', description: 'A small succulent with striking white, stripey bands.', price: 2112, img: './haworita.png', category: 'Lush' },
    { id: 'prod27', name: ' Echeveria', description: 'Beautiful, rosette-shaped succulents in various colors.', price: 2464, img: './echeria.png', category: 'Lush' },
    { id: 'prod28', name: ' Bunny Ear Cactus', description: 'A quirky, low-maintenance cactus with pad-like stems.', price: 3080, img: './bunny.png', category: 'Lush' },
    { id: 'prod29', name: " Alocasia 'Polly'", description: 'Dramatic, arrow-shaped leaves with bright white veins', price: 1320, img: './polly.png', category: 'Lush' },
    { id: 'prod30', name: " Raven ZZ Plant", description: ' A striking, all-black version of the classic ZZ Plant.', price: 6864, img: './razan.png', category: 'Lush' },
    { id: 'prod31', name: " Philodendron 'Birkin'", description: 'A trendy plant with creamy white pinstripes on its leaves.', price: 7656, img: './philodendron.png', category: 'Lush' },
    { id: 'prod32', name: " Schefflera (Umbrella Plant)", description: 'Lush, glossy leaves that form elegant umbrella-like clusters.', price: 4312, img: './umbrella.png', category: 'Lush' },

    // 30 Flowering Plants
    { id: 'fp1', name: 'Jasmine (Mogra)', description: 'Known for its intensely fragrant white flowers.', price: 1500, img: './jasmin.png', category: 'Flowering' },
    { id: 'fp2', name: 'Hibiscus', description: 'Vibrant, trumpet-shaped flowers in various colors.', price: 1350, img: './hibiscous.png', category: 'Flowering' },
    { id: 'fp3', name: 'Marigold', description: 'Cheerful orange and yellow flowers, popular in festivals.', price: 450, img: './marigold.png', category: 'Flowering' },
    { id: 'fp4', name: 'Rose', description: 'The classic symbol of love and beauty, available in many varieties.', price: 1800, img: '/rose.png', category: 'Flowering' },
    { id: 'fp5', name: 'Bougainvillea', description: 'Vibrant, papery bracts in a variety of bright colors.', price: 1650, img: './begonia.png', category: 'Flowering' },
    { id: 'fp6', name: 'Lotus', description: 'Sacred and serene, grows in shallow water.', price: 2200, img: './lotus.png', category: 'Flowering' },
    { id: 'fp7', name: 'Zinnia', description: 'Easy-to-grow flowers that attract butterflies and bees.', price: 350, img: './zinnia.png', category: 'Flowering' },
    { id: 'fp8', name: 'African Marigold (Genda)', description: 'Large, bright yellow flowers, a staple in Indian gardens.', price: 500, img: './african_mari.png', category: 'Flowering' },
    { id: 'fp9', name: 'Dahlia', description: 'Large, intricate blooms in a wide range of colors.', price: 950, img: './dahlia.png', category: 'Flowering' },
    { id: 'fp10', name: 'Pansy', description: 'Charming flowers resembling faces, perfect for cool weather.', price: 700, img: './pansy.png', category: 'Flowering' },
    { id: 'fp11', name: 'Petunia', description: 'Trumpet-shaped flowers that bloom profusely in sunny spots.', price: 650, img: './petunia.png', category: 'Flowering' },
    { id: 'fp12', name: 'Frangipani (Plumeria)', description: 'Exotic, fragrant flowers with a distinct, beautiful shape.', price: 2500, img: './plumeria.png', category: 'Flowering' },
    { id: 'fp13', name: 'Crossandra', description: 'Also known as Firecracker Flower, with bright orange blooms.', price: 1100, img: './crossandra.png', category: 'Flowering' },
    { id: 'fp14', name: 'Adenium (Desert Rose)', description: 'A sculptural succulent with striking, desert-rose-like flowers.', price: 1900, img: './desert_rose.png', category: 'Flowering' },
    { id: 'fp15', name: 'Ixora (Jungle Geranium)', description: 'Dense clusters of small, star-shaped flowers.', price: 1450, img: './ixora.png', category: 'Flowering' },
    { id: 'fp16', name: 'Periwinkle (Sadabahar)', description: 'Hardy and low-maintenance, blooms year-round.', price: 550, img: './sadha.png', category: 'Flowering' },
    { id: 'fp17', name: 'Madagascar Jasmine', description: 'A vine with waxy, white, fragrant flowers.', price: 1750, img: './madagascar.png', category: 'Flowering' },
    { id: 'fp18', name: 'Tuberose (Rajnigandha)', description: 'Known for its beautiful white flowers and intense fragrance.', price: 900, img: './tuberose.png', category: 'Flowering' },
    { id: 'fp19', name: 'Rangoon Creeper', description: 'A fragrant, tropical climber with clusters of flowers that change color.', price: 2100, img: './creeper.png', category: 'Flowering' },
    { id: 'fp20', name: 'Night-blooming Jasmine (Raat ki Rani)', description: 'Flowers open at night, releasing a strong, sweet fragrance.', price: 1600, img: './night-blom.png', category: 'Flowering' },
    { id: 'fp21', name: 'African Lily (Agapanthus)', description: 'Large, beautiful globe-like flowers on long stalks.', price: 1950, img: './african_lilly.jpg', category: 'Flowering' },
    { id: 'fp22', name: 'Balsam (Gulmehndi)', description: 'Vibrant, multi-colored flowers that resemble small roses.', price: 400, img: './balsam.png', category: 'Flowering' },
    { id: 'fp23', name: 'Cape Primrose', description: 'Delicate, long-lasting blooms in various shades.', price: 1200, img: './primrose.png', category: 'Flowering' },
    { id: 'fp24', name: 'Amaryllis', description: 'Large, trumpet-shaped flowers perfect for a showstopper display.', price: 1850, img: './amarylis.jpg', category: 'Flowering' },
    { id: 'fp25', name: 'Gloxinia', description: 'Velvety, bell-shaped flowers in rich colors.', price: 1550, img: './gloxina.png', category: 'Flowering' },
    { id: 'fp26', name: 'Begonia', description: 'Easy-to-grow plant with waxy foliage and colorful flowers.', price: 980, img: './begonia.png', category: 'Flowering' },
    { id: 'fp27', name: 'Chrysanthemum', description: 'Symbolizes happiness and long life, with beautiful, dense flowers.', price: 1050, img: './chrysanthem.png', category: 'Flowering' },
    { id: 'fp28', name: 'Poinsettia', description: 'Famous for its vibrant, colorful leaves used in festive decorations.', price: 1700, img: './poinsettia.png', category: 'Flowering' },
    { id: 'fp29', name: 'Gerbera Daisy', description: 'Cheery and colorful blooms that add charm to any space.', price: 850, img: './daisy.png', category: 'Flowering' },
    { id: 'fp30', name: 'Lantana', description: 'Drought-tolerant plant with small flowers in multi-colored clusters.', price: 600, img: './lantana.png', category: 'Flowering' },

    // Accessories
    { id: 'acc1', name: 'Ceramic Watering Can', description: 'Stylish and functional. 1L capacity.', price: 1500, img: './ceramic-watering.png', category: 'Accessory' },
    { id: 'acc2', name: 'Brass Plant Mister', description: 'A fine mist sprayer for humidity-loving plants.', price: 800, img: './misting.png', category: 'Accessory' },
    { id: 'acc3', name: 'Organic Potting Mix', description: 'Premium soil blend for houseplants. 5kg bag.', price: 750, img: './organic.png', category: 'Accessory' },
    { id: 'acc4', name: 'Fertilizer Spikes', description: 'Slow-release food for vibrant growth. Pack of 20.', price: 400, img: './fertiliser2.jpg', category: 'Accessory' },
    { id: 'acc5', name: 'Decorative Ceramic Pot', description: 'Modern, minimalist pot with drainage hole.', price: 1100, img: './ceramic-pot.png', category: 'Accessory' },
    { id: 'acc6', name: 'Gardening Gloves', description: 'Durable, one-size-fits-all gloves with claws for digging.', price: 300, img: './gloves.png', category: 'Accessory' },
    { id: 'acc7', name: 'Hand Trowel', description: 'Ergonomic hand trowel for digging and potting.', price: 250, img: './trowel.png', category: 'Accessory' },
    { id: 'acc8', name: 'Pruning Shears', description: 'Sharp bypass pruners for trimming stems and branches.', price: 550, img: './pruning-shears.png', category: 'Accessory' },
    { id: 'acc9', name: 'Soil Moisture Meter', description: 'Measures soil moisture, light, and pH levels.', price: 600, img: './moisture.png', category: 'Accessory' },
    { id: 'acc10', name: 'Plant Trellis', description: 'A decorative metal trellis to support climbing plants.', price: 700, img: './trellis.png', category: 'Accessory' },
    { id: 'acc11', name: 'Coco Coir Bricks', description: 'Expands into a rich, soil-like medium when watered. 5-pack.', price: 350, img: './Bricks.png', category: 'Accessory' },
    { id: 'acc12', name: 'Plant Support Stakes', description: 'Bamboo stakes for supporting tall plants. Pack of 10.', price: 200, img: './stakes.png', category: 'Accessory' },
    { id: 'acc13', name: 'Hanging Planter', description: 'Macrame hanging basket for pots.', price: 450, img: './hanging.png', category: 'Accessory' },
    { id: 'acc14', name: 'Pebble Stones', description: 'Decorative white pebbles for top dressing. 1kg bag.', price: 250, img: './stones.png', category: 'Accessory' },
    { id: 'acc15', name: 'Neem Oil Spray', description: 'Natural and organic pest control spray.', price: 480, img: './oil-spray.png', category: 'Accessory' },
    { id: 'acc16', name: 'Plant Tags', description: 'T-type markers for labeling plants. Pack of 50.', price: 150, img: './plant-tags.png', category: 'Accessory' },
    { id: 'acc17', name: 'Self-Watering Pot', description: 'Pot with a reservoir for continuous watering.', price: 900, img: './self-water.png', category: 'Accessory' },
    { id: 'acc18', name: 'LED Grow Light', description: 'Full-spectrum grow light for indoor plants.', price: 1200, img: './LED-grow.png', category: 'Accessory' },
    { id: 'acc19', name: 'Small Shovel', description: 'Miniature shovel for small gardening tasks.', price: 220, img: './shovel.png', category: 'Accessory' },
    { id: 'acc20', name: 'Watering Bulbs', description: 'Decorative glass bulbs that slowly release water.', price: 650, img: './glass-water.png', category: 'Accessory' },
    { id: 'acc21', name: 'Compost Bin', description: 'Compact kitchen compost bin for organic waste.', price: 1800, img: './compost-bin.png', category: 'Accessory' },
    { id: 'acc22', name: 'Misting Bottle', description: 'Fine mist spray bottle for high-humidity plants.', price: 380, img: './plant-mister-pump.png', category: 'Accessory' },
    { id: 'acc23', name: 'Hanging Rail Planter', description: 'Metal pot with hooks for balcony railings.', price: 750, img: './hangin-rail.png', category: 'Accessory' },
    { id: 'acc24', name: 'Rooting Hormone Powder', description: 'Helps new plant cuttings develop roots.', price: 300, img: './hormoe-pow.png', category: 'Accessory' },
    { id: 'acc25', name: 'Repotting Mat', description: 'Waterproof mat for mess-free repotting.', price: 450, img: './repott-mat.png', category: 'Accessory' },
    { id: 'acc26', name: 'Decorative Stones', description: 'Colorful polished stones for decorative use. 500g bag.', price: 320, img: './polished-stone.png', category: 'Accessory' },
    { id: 'acc27', name: 'Weed Puller', description: 'Handheld tool for removing weeds by the root.', price: 400, img: './weed-puller.png', category: 'Accessory' },
    { id: 'acc28', name: 'Plant Stand', description: 'Elegant metal stand for a single potted plant.', price: 1100, img: './plant-sand.png', category: 'Accessory' },
    { id: 'acc29', name: 'Garden Fork', description: 'Small hand fork for aerating soil.', price: 280, img: './garden-fork.png', category: 'Accessory' },
    { id: 'acc30', name: 'Grow Bags', description: 'Durable fabric bags for growing plants. Set of 3.', price: 600, img: './grow-bag.png', category: 'Accessory' },
    { id: 'acc31', name: 'Mini Watering Can', description: 'Small can perfect for watering tabletop plants.', price: 350, img: './mini-water.png', category: 'Accessory' },
    { id: 'acc32', name: 'Moss Pole', description: 'A support for climbing plants like Monstera and Pothos.', price: 550, img: './moss-pole.png', category: 'Accessory' },
    { id: 'acc33', name: 'Plant Mister with Pump', description: 'Pressure sprayer for even, fine misting.', price: 750, img: './misting.png', category: 'Accessory' },
    { id: 'acc34', name: 'Liquid Plant Food', description: 'All-purpose liquid fertilizer. 500ml bottle.', price: 490, img: './liquid-plant-foos.png', category: 'Accessory' },
    { id: 'acc35', name: 'Ceramic Snails', description: 'Cute decorative snails for pots. Set of 3.', price: 250, img: './snails.png', category: 'Accessory' },
    { id: 'acc36', name: 'Plant Saucer', description: 'Clear plastic saucer to catch water runoff. 4-pack.', price: 180, img: './saucer.png', category: 'Accessory' },
    { id: 'acc37', name: 'Metal Pot with Stand', description: 'Contemporary pot and stand combination.', price: 1400, img: './metal-pot.png', category: 'Accessory' },
    { id: 'acc38', name: 'Wick Watering System', description: 'DIY self-watering kit for multiple plants.', price: 650, img: './wick-water.png', category: 'Accessory' },
    { id: 'acc39', name: 'Gardening Apron', description: 'Heavy-duty canvas apron with multiple pockets.', price: 850, img: './garden-apron.png', category: 'Accessory' },
    { id: 'acc40', name: 'Miniature Birdhouse', description: 'Small decorative birdhouse for your indoor garden.', price: 450, img: './birdhouse.png', category: 'Accessory' },
   
];

const lushPlants = products.filter(p => p.category === 'Lush');
const floweringPlants = products.filter(p => p.category === 'Flowering');
const accessories = products.filter(p => p.category === 'Accessory');

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let currentCart = getFromStorage('terra-cart');
let currentWishlist = getFromStorage('terra-wishlist');
let myOrders = getFromStorage('terra-orders');

// --- ELEMENTS ---
const lushPlantsSection = document.getElementById('lush-plants-section');
const floweringPlantsSection = document.getElementById('flowering-plants-section');
const accessoriesSection = document.getElementById('accessories-section');

const lushPlantsGrid = document.getElementById('lush-plants-grid');
const floweringPlantsGrid = document.getElementById('flowering-plants-grid');
const accessoriesGrid = document.getElementById('accessories-grid');

const navLush = document.getElementById('nav-lush');
const navFlowering = document.getElementById('nav-flowering');
const navAccessories = document.getElementById('nav-accessories');

const cartSidebar = document.getElementById('cart-sidebar');
const cartBtn = document.getElementById('cart-button');
const cartCountEl = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const wishlistBtn = document.getElementById('wishlist-button');
const wishlistCountEl = document.getElementById('wishlist-count');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutContent = document.getElementById('checkout-content');
const checkoutBtn = document.getElementById('checkout-btn');
const ordersModal = document.getElementById('orders-modal');
const ordersModalContent = document.getElementById('orders-modal-content');

const searchInputLush = document.getElementById('search-input-lush');
const sortSelectLush = document.getElementById('sort-select-lush');
const searchInputFlowering = document.getElementById('search-input-flowering');
const sortSelectFlowering = document.getElementById('sort-select-flowering');
const searchInputAccessories = document.getElementById('search-input-accessories');
const sortSelectAccessories = document.getElementById('sort-select-accessories');


// --- INITIALIZATION ---
function main() {
    renderAllSections();
    renderCart();
    updateWishlistCount(currentWishlist.length);
    setupUIEventListeners();
}

main();

// --- SEARCH AND SORT LOGIC ---
function filterAndSortProducts(category, searchTerm, sortBy) {
    let filteredProducts;
    if (category === 'Lush') {
        filteredProducts = lushPlants.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm));
    } else if (category === 'Flowering') {
        filteredProducts = floweringPlants.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm));
    } else if (category === 'Accessory') {
        filteredProducts = accessories.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm));
    } else {
        return;
    }

    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (category === 'Lush') {
        renderProducts(filteredProducts, lushPlantsGrid);
    } else if (category === 'Flowering') {
        renderProducts(filteredProducts, floweringPlantsGrid);
    } else if (category === 'Accessory') {
        renderProducts(filteredProducts, accessoriesGrid);
    }
}

// --- RENDER FUNCTIONS ---
function renderProductCard(product) {
    const isInWishlist = currentWishlist.includes(product.id);
    return `
                <div class="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div class="relative">
                        <img src="${product.img}" alt="${product.name}" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                                <i class="fas fa-heart bg-white/80 p-3 rounded-full"></i>
                            </button>
                            <button class="add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-plus bg-green-600 text-white p-3 rounded-full"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-semibold">${product.name}</h3>
                        <p class="text-gray-500 mt-1">${product.description}</p>
                        <p class="mt-4 text-xl font-bold text-green-700">₹${product.price}</p>
                    </div>
                </div>`;
}

function renderProducts(productsToRender, container) {
    container.innerHTML = productsToRender.map(renderProductCard).join('');
}

function renderAllSections() {
    renderProducts(lushPlants, lushPlantsGrid);
    renderProducts(floweringPlants, floweringPlantsGrid);
    renderProducts(accessories, accessoriesGrid);
}

function renderCart() {
    if (currentCart.length === 0) {
        cartItemsEl.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty.</p>';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cartItemsEl.innerHTML = currentCart.map(cartItem => {
            const product = products.find(p => p.id === cartItem.id);
            if (!product) return '';
            return `
                        <div class="flex items-center space-x-4 mb-4" data-id="${product.id}">
                            <img src="${product.img}" alt="${product.name}" class="w-20 h-20 object-cover rounded-md">
                            <div class="flex-grow">
                                <h4 class="font-semibold">${product.name}</h4>
                                <p class="text-gray-500">₹${product.price}</p>
                                <div class="flex items-center mt-2">
                                    <button class="cart-quantity-btn" data-action="decrease">-</button>
                                    <span class="px-3">${cartItem.quantity}</span>
                                    <button class="cart-quantity-btn" data-action="increase">+</button>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-bold">₹${(product.price * cartItem.quantity).toFixed(2)}</p>
                                <button class="cart-remove-btn text-red-500 hover:text-red-700 text-sm mt-1">Remove</button>
                            </div>
                        </div>`;
        }).join('');
    }
    updateCartSubtotalAndCount();
}

function renderWishlistModal() {
    if (currentWishlist.length === 0) {
        modalContent.innerHTML = '<p class="text-gray-500 text-center py-8">Your wishlist is empty.</p>';
    } else {
        modalContent.innerHTML = currentWishlist.map(productId => {
            const product = products.find(p => p.id === productId);
            return `
                        <div class="flex items-center space-x-4 p-2 border-b last:border-b-0" data-id="${product.id}">
                            <img src="${product.img}" alt="${product.name}" class="w-16 h-16 object-cover rounded-md">
                            <div class="flex-grow">
                                <h4 class="font-semibold">${product.name}</h4>
                                <p class="text-lg font-bold text-green-700">₹${product.price}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button class="wishlist-add-to-cart-btn bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200">Add to Cart</button>
                                <button class="wishlist-remove-btn text-red-500 hover:text-red-700 px-3 py-2 rounded-md"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>`;
        }).join('');
    }
}

// --- EVENT HANDLERS & ACTIONS ---
function setupUIEventListeners() {
    document.addEventListener('click', e => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (addToCartBtn) addToCart(addToCartBtn.dataset.id);
        if (wishlistBtn) toggleWishlist(wishlistBtn.dataset.id);
    });

    // Add event listeners for search and sort for each section
    searchInputLush.addEventListener('input', () => filterAndSortProducts('Lush', searchInputLush.value.toLowerCase(), sortSelectLush.value));
    sortSelectLush.addEventListener('change', () => filterAndSortProducts('Lush', searchInputLush.value.toLowerCase(), sortSelectLush.value));

    searchInputFlowering.addEventListener('input', () => filterAndSortProducts('Flowering', searchInputFlowering.value.toLowerCase(), sortSelectFlowering.value));
    sortSelectFlowering.addEventListener('change', () => filterAndSortProducts('Flowering', searchInputFlowering.value.toLowerCase(), sortSelectFlowering.value));

    searchInputAccessories.addEventListener('input', () => filterAndSortProducts('Accessory', searchInputAccessories.value.toLowerCase(), sortSelectAccessories.value));
    sortSelectAccessories.addEventListener('change', () => filterAndSortProducts('Accessory', searchInputAccessories.value.toLowerCase(), sortSelectAccessories.value));


    // Navbar category clicks
    navLush.addEventListener('click', (e) => {
        e.preventDefault();
        showCategory('Lush');
    });
    navFlowering.addEventListener('click', (e) => {
        e.preventDefault();
        showCategory('Flowering');
    });
    navAccessories.addEventListener('click', (e) => {
        e.preventDefault();
        showCategory('Accessory');
    });


    cartItemsEl.addEventListener('click', e => {
        const quantityBtn = e.target.closest('.cart-quantity-btn');
        const removeBtn = e.target.closest('.cart-remove-btn');
        if (!e.target.closest('[data-id]')) return;
        const productId = e.target.closest('[data-id]').dataset.id;
        if (quantityBtn) updateCartQuantity(productId, quantityBtn.dataset.action);
        if (removeBtn) removeFromCart(productId);
    });

    modal.addEventListener('click', e => {
        if (e.target.closest('.wishlist-add-to-cart-btn')) {
            const productId = e.target.closest('[data-id]').dataset.id;
            addToCart(productId);
            toggleWishlist(productId);
            renderWishlistModal();
        }
        if (e.target.closest('.wishlist-remove-btn')) {
            toggleWishlist(e.target.closest('[data-id]').dataset.id);
            renderWishlistModal();
        }
    });

    cartBtn.addEventListener('click', () => openSidebar(cartSidebar));
    document.getElementById('close-cart-btn').addEventListener('click', () => closeSidebar(cartSidebar));

    wishlistBtn.addEventListener('click', () => {
        modalTitle.textContent = "Your Wishlist";
        renderWishlistModal();
        openModal(modal);
    });

    document.getElementById('book-consultation-btn').addEventListener('click', () => {
        modalTitle.textContent = "Book a Consultation";
        modalContent.innerHTML = `
                    <p class="mb-4">Schedule a 30-minute call with our plant expert for ₹2,200.</p>
                    <form id="booking-form">
                        <input type="text" placeholder="Your Name" class="w-full p-2 mb-2 border rounded" required>
                        <input type="email" placeholder="Your Email" class="w-full p-2 mb-4 border rounded" required>
                        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md">Confirm Booking</button>
                    </form>
                `;
        openModal(modal);
    });

    modal.addEventListener('submit', e => {
        if (e.target.id === 'booking-form') {
            e.preventDefault();
            modalContent.innerHTML = `<p class="text-center py-8">Thank you! We've sent a confirmation to your email.</p>`;
        }
    });

    overlay.addEventListener('click', () => {
        closeSidebar(cartSidebar);
        closeModal(modal);
        closeModal(checkoutModal);
        closeModal(ordersModal);
    });
    document.getElementById('close-modal-btn').addEventListener('click', () => closeModal(modal));
    document.getElementById('mobile-menu-button').addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));

    document.getElementById('get-recommendation-btn').addEventListener('click', async () => {
        const userQuery = document.getElementById('plant-prompt').value.trim();
        if (!userQuery) {
            showNotification("Please describe your space first!", "bg-yellow-500");
            return;
        }
        modalTitle.textContent = "AI Recommendations";
        modalContent.innerHTML = `<div class="flex justify-center items-center py-8"><div class="loader"></div></div>`;
        openModal(modal);

        try {
            const recommendations = await getAiRecommendations(userQuery);
            displayRecommendations(recommendations);
        } catch (error) {
            console.error("Error fetching AI recommendations:", error);
            modalContent.innerHTML = `<div class="text-center text-red-500 py-8"><p>Oops! Something went wrong.</p></div>`;
        }
    });

    // --- CHECKOUT LISTENERS ---
    checkoutBtn.addEventListener('click', handleCheckout);
    document.getElementById('close-checkout-modal-btn').addEventListener('click', () => closeModal(checkoutModal));
    checkoutContent.addEventListener('click', handleCheckoutEvents);
    checkoutContent.addEventListener('submit', handleCheckoutFormSubmit);

    // --- ORDERS LISTENERS ---
    document.getElementById('my-orders-btn').addEventListener('click', fetchAndShowOrders);
    document.getElementById('mobile-my-orders-btn').addEventListener('click', fetchAndShowOrders);
    document.getElementById('close-orders-modal-btn').addEventListener('click', () => closeModal(ordersModal));
    ordersModalContent.addEventListener('click', handleOrdersModalClick);
}

function showCategory(category) {
    // Hide all category sections
    lushPlantsSection.classList.add('hidden');
    floweringPlantsSection.classList.add('hidden');
    accessoriesSection.classList.add('hidden');

    // Reset all search and sort fields
    searchInputLush.value = '';
    sortSelectLush.value = 'default';
    searchInputFlowering.value = '';
    sortSelectFlowering.value = 'default';
    searchInputAccessories.value = '';
    sortSelectAccessories.value = 'default';

    // Show the selected category and re-render its products
    if (category === 'Lush') {
        lushPlantsSection.classList.remove('hidden');
        renderProducts(lushPlants, lushPlantsGrid);
    } else if (category === 'Flowering') {
        floweringPlantsSection.classList.remove('hidden');
        renderProducts(floweringPlants, floweringPlantsGrid);
    } else if (category === 'Accessory') {
        accessoriesSection.classList.remove('hidden');
        renderProducts(accessories, accessoriesGrid);
    }
}

function addToCart(productId) {
    let itemInCart = currentCart.find(item => item.id === productId);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        currentCart.push({ id: productId, quantity: 1 });
    }
    saveToStorage('terra-cart', currentCart);
    renderCart();
    showNotification("Item added to cart!");
}

function updateCartQuantity(productId, action) {
    let itemInCart = currentCart.find(item => item.id === productId);
    if (!itemInCart) return;

    if (action === 'increase') {
        itemInCart.quantity++;
    } else if (action === 'decrease') {
        itemInCart.quantity--;
    }

    if (itemInCart.quantity <= 0) {
        currentCart = currentCart.filter(item => item.id !== productId);
    }
    saveToStorage('terra-cart', currentCart);
    renderCart();
}

function removeFromCart(productId) {
    currentCart = currentCart.filter(item => item.id !== productId);
    saveToStorage('terra-cart', currentCart);
    renderCart();
}

function toggleWishlist(productId) {
    const index = currentWishlist.indexOf(productId);
    if (index > -1) {
        currentWishlist.splice(index, 1);
    } else {
        currentWishlist.push(productId);
    }
    saveToStorage('terra-wishlist', currentWishlist);
    renderAllSections();
    updateWishlistCount(currentWishlist.length);
}

// --- CHECKOUT AND PAYMENT LOGIC ---
function handleCheckout() {
    if (currentCart.length === 0) return;
    closeSidebar();
    renderShippingStep();
    openModal(checkoutModal);
}

function handleCheckoutEvents(e) {
    const paymentTab = e.target.closest('.payment-method-tab');
    if (paymentTab) {
        document.querySelectorAll('.payment-method-tab').forEach(t => t.classList.remove('active'));
        paymentTab.classList.add('active');

        const method = paymentTab.dataset.method;
        document.querySelectorAll('[data-payment-details]').forEach(d => d.classList.add('hidden'));
        document.querySelector(`[data-payment-details="${method}"]`).classList.remove('hidden');
    }
}

function handleCheckoutFormSubmit(e) {
    e.preventDefault();
    if (e.target.id === 'shipping-form') {
        const formData = new FormData(e.target);
        const shippingDetails = Object.fromEntries(formData.entries());
        renderPaymentStep(shippingDetails);
    } else if (e.target.id === 'payment-form') {
        const paymentMethod = document.querySelector('.payment-method-tab.active').dataset.method;
        const shippingDetails = JSON.parse(e.target.dataset.shipping);

        const placeOrderBtn = e.target.querySelector('button[type="submit"]');
        placeOrderBtn.disabled = true;
        placeOrderBtn.innerHTML = `<div class="loader mx-auto"></div>`;

        setTimeout(() => {
            processOrder(shippingDetails, paymentMethod);
        }, 1500);
    }
}

function processOrder(shippingDetails, paymentMethod) {
    const orderTotal = currentCart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    const orderData = {
        id: 'order_' + new Date().getTime(),
        shippingDetails,
        paymentMethod,
        items: currentCart,
        total: orderTotal,
        createdAt: new Date().toISOString(),
        status: 'Placed'
    };

    myOrders.push(orderData);
    saveToStorage('terra-orders', myOrders);

    currentCart = [];
    saveToStorage('terra-cart', currentCart);
    renderCart();

    closeModal(checkoutModal);
    modalTitle.textContent = "Order Confirmed!";
    modalContent.innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
                    <p>Thank you for your order! A confirmation has been sent to your email.</p>
                </div>
            `;
    openModal(modal);
}

function renderShippingStep() {
    checkoutContent.innerHTML = `
                <form id="shipping-form">
                    <h4 class="text-xl font-semibold mb-4">Shipping Details</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="fullName" type="text" placeholder="Full Name" class="w-full p-2 border rounded" required>
                        <input name="phone" type="tel" placeholder="Phone Number" class="w-full p-2 border rounded" required>
                    </div>
                    <input name="email" type="email" placeholder="Email Address" class="w-full p-2 border rounded mt-4" required>
                    <textarea name="address" placeholder="Full Address" class="w-full p-2 border rounded mt-4" rows="3" required></textarea>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <input name="city" type="text" placeholder="City" class="w-full p-2 border rounded" required>
                        <input name="state" type="text" placeholder="State / Province" class="w-full p-2 border rounded" required>
                        <input name="zip" type="text" placeholder="ZIP / Postal Code" class="w-full p-2 border rounded" required>
                    </div>
                    <button type="submit" class="w-full mt-6 bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700">Continue to Payment</button>
                </form>
            `;
}

function renderPaymentStep(shippingDetails) {
    const subtotal = currentCart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    checkoutContent.innerHTML = `
                <form id="payment-form" data-shipping='${JSON.stringify(shippingDetails)}'>
                    <h4 class="text-xl font-semibold mb-4">Payment Method</h4>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="payment-method-tab active border-2 rounded-lg p-4 text-center cursor-pointer" data-method="card">
                            <i class="fas fa-credit-card text-2xl mb-2"></i><p>Credit/Debit Card</p>
                        </div>
                        <div class="payment-method-tab border-2 rounded-lg p-4 text-center cursor-pointer" data-method="cod">
                            <i class="fas fa-hand-holding-usd text-2xl mb-2"></i><p>Cash on Delivery</p>
                        </div>
                    </div>
                    
                    <div data-payment-details="card">
                        <input type="text" placeholder="Card Number" class="w-full p-2 border rounded mb-4" required>
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM / YY" class="w-full p-2 border rounded" required>
                            <input type="text" placeholder="CVC" class="w-full p-2 border rounded" required>
                        </div>
                    </div>

                    <div data-payment-details="cod" class="hidden text-center bg-gray-100 p-4 rounded-md">
                        <p>You'll pay with cash upon delivery of your order.</p>
                    </div>

                    <div class="mt-6 border-t pt-4">
                        <div class="flex justify-between items-center font-bold text-lg mb-4">
                            <span>Total to Pay</span>
                            <span>₹${subtotal.toFixed(2)}</span>
                        </div>
                        <button type="submit" class="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700">Place Order</button>
                    </div>
                </form>
            `;
}

// --- ORDER HISTORY & TRACKING ---
function fetchAndShowOrders() {
    document.getElementById('mobile-menu').classList.add('hidden');
    ordersModalContent.innerHTML = `<div class="flex justify-center items-center py-8"><div class="loader"></div></div>`;
    openModal(ordersModal);

    setTimeout(() => { // Simulate network delay
        const sortedOrders = [...myOrders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        renderOrderHistory(sortedOrders);
    }, 500);
}

function renderOrderHistory(orders) {
    document.getElementById('orders-modal-title').textContent = 'My Orders';
    if (orders.length === 0) {
        ordersModalContent.innerHTML = '<p class="text-center text-gray-500 py-8">You have no past orders.</p>';
        return;
    }

    ordersModalContent.innerHTML = `
                <div class="space-y-4">
                    ${orders.map(order => `
                        <div class="border rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <p class="font-semibold">Order #${order.id.substring(6, 13)}</p>
                                <p class="text-sm text-gray-500">Placed on ${new Date(order.createdAt).toLocaleDateString()}</p>
                                <p class="text-sm font-bold mt-1">₹${order.total.toFixed(2)}</p>
                            </div>
                            <button class="track-order-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300" data-order-id="${order.id}">
                                Track Order
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
}

function handleOrdersModalClick(e) {
    const trackBtn = e.target.closest('.track-order-btn');
    const backBtn = e.target.closest('.back-to-orders-btn');

    if (trackBtn) {
        const orderId = trackBtn.dataset.orderId;
        const order = myOrders.find(o => o.id === orderId);
        if (order) {
            renderOrderTracking(order);
        }
    } else if (backBtn) {
        fetchAndShowOrders();
    }
}

function renderOrderTracking(order) {
    document.getElementById('orders-modal-title').textContent = `Tracking Order #${order.id.substring(6, 13)}`;

    const statuses = ['Placed', 'Processing', 'Shipped', 'Delivered'];
    const currentStatusIndex = statuses.indexOf(order.status);

    const timelineHTML = statuses.map((status, index) => {
        const isActive = index <= currentStatusIndex;
        const isLast = index === statuses.length - 1;
        const connectorIsActive = index < currentStatusIndex;

        return `
                <div class="relative pl-12 ${isLast ? '' : 'pb-12'}">
                    ${!isLast ? `<div class="absolute top-2 left-4 w-0.5 h-full ${connectorIsActive ? 'bg-green-500' : 'bg-gray-300'}"></div>` : ''}
                    
                    <div class="flex items-center relative">
                        <div class="absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-white ${isActive ? 'bg-green-500' : 'bg-gray-300'}">
                            <i class="fas ${status === 'Placed' ? 'fa-box' : status === 'Processing' ? 'fa-cogs' : status === 'Shipped' ? 'fa-truck' : 'fa-check'}"></i>
                        </div>
                        <p class="font-semibold ${isActive ? 'text-gray-800' : 'text-gray-500'}">${status}</p>
                    </div>
                </div>
                `;
    }).join('');

    const itemsHTML = order.items.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        return `
                    <div class="flex items-center space-x-4 py-2 border-b last:border-0">
                        <img src="${product.img}" class="w-16 h-16 object-cover rounded-md">
                        <div>
                            <p class="font-semibold">${product.name}</p>
                            <p class="text-sm text-gray-600">Qty: ${item.quantity}</p>
                        </div>
                        <p class="ml-auto font-bold">₹${(product.price * item.quantity).toFixed(2)}</p>
                    </div>
                `;
    }).join('');

    ordersModalContent.innerHTML = `
                <button class="back-to-orders-btn mb-6 text-sm text-green-700 font-semibold">&larr; Back to all orders</button>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <h4 class="text-xl font-semibold mb-4">Order Status</h4>
                        <div class="mb-8">${timelineHTML}</div>
                        <h4 class="text-xl font-semibold mb-4">Items</h4>
                        <div>${itemsHTML}</div>
                    </div>
                    <div>
                        <h4 class="text-xl font-semibold mb-4">Details</h4>
                        <div class="bg-gray-100 p-4 rounded-lg space-y-3">
                            <div><strong>Name:</strong> ${order.shippingDetails.fullName}</div>
                            <div><strong>Location:</strong> ${order.shippingDetails.address}, ${order.shippingDetails.city}</div>
                            <div><strong>Phone:</strong> ${order.shippingDetails.phone}</div>
                            <div><strong>Payment:</strong> <span class="capitalize">${order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card'}</span></div>
                            <div class="font-bold text-lg pt-2 border-t"><strong>Total:</strong> ₹${order.total.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            `;
}

// --- UI & MODAL LOGIC ---
function updateCartSubtotalAndCount() {
    const subtotal = currentCart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
    cartSubtotalEl.textContent = `₹${subtotal.toFixed(2)}`;

    const totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
    cartCountEl.classList.toggle('updated', true);
    setTimeout(() => cartCountEl.classList.remove('updated'), 200);
}

function updateWishlistCount(count) {
    wishlistCountEl.textContent = count;
    wishlistCountEl.classList.toggle('updated', true);
    setTimeout(() => wishlistCountEl.classList.remove('updated'), 200);
}

function showNotification(message, bgColor = 'bg-green-600') {
    const notificationEl = document.getElementById('notification');
    notificationEl.textContent = message;
    notificationEl.className = `fixed bottom-5 right-5 text-white px-5 py-3 rounded-lg shadow-lg opacity-0 translate-y-4 transition-all duration-300 ${bgColor}`;
    notificationEl.classList.remove('opacity-0', 'translate-y-4');
    setTimeout(() => notificationEl.classList.add('opacity-0', 'translate-y-4'), 3000);
}

function openSidebar() {
    cartSidebar.classList.add('open');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.add('hidden');
}

function openModal(modalElement) {
    modalElement.classList.remove('hidden');
    modalElement.classList.add('flex');
    overlay.classList.remove('hidden');
}

function closeModal(modalElement) {
    modalElement.classList.add('hidden');
    modalElement.classList.remove('flex');
    if (!cartSidebar.classList.contains('open') && Array.from(document.querySelectorAll('.modal')).every(m => m.classList.contains('hidden'))) {
        overlay.classList.add('hidden');
    }
}

// --- SIMULATED GEMINI AI FEATURE ---
function displayRecommendations(text) {
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>').replace(/\n/g, '<br>');
    modalContent.innerHTML = `<div class="text-gray-600 space-y-4">${html}</div>`;
}

function getAiRecommendations(userQuery) {
    console.log("Simulating AI call for query:", userQuery);
    return new Promise(resolve => {
        setTimeout(() => {
            let responseText = "Of course! Based on your space, here are a few great options from our collection:\n\n";
            if (userQuery.toLowerCase().includes("cat") || userQuery.toLowerCase().includes("pet")) {
                responseText += "**Calathea Orbifolia**: This plant is a fantastic choice because it's completely non-toxic to pets. Its beautiful, large striped leaves will add a touch of the tropics to your shady room.\n\n";
                responseText += "**Pilea Peperomioides**: Also known as the Chinese Money Plant, this one is pet-safe and does well in medium to low light. Its unique, coin-shaped leaves are a real conversation starter!";
            } else if (userQuery.toLowerCase().includes("shady") || userQuery.toLowerCase().includes("low light")) {
                responseText += "**Snake Plant**: This is one of the hardiest plants you can own! It thrives in low light and is known for its air-purifying qualities. A perfect, low-maintenance choice for a darker corner.\n\n";
                responseText += "**ZZ Plant**: If you want a plant that thrives on neglect, this is it. It tolerates low light extremely well and requires very infrequent watering. Its glossy, dark green leaves look great in any setting.";
            } else {
                responseText += "**Monstera Deliciosa**: This iconic plant loves bright, indirect light and makes a stunning statement. Its unique split leaves are instantly recognizable and bring a lush, jungle feel to any room.\n\n";
                responseText += "**Fiddle Leaf Fig**: A true designer's favorite! It needs a bright spot to thrive and can be a bit particular, but its large, elegant leaves are worth the effort for a bright space.";
            }
            resolve(responseText);
        }, 1500); // Simulate network delay
    });
}