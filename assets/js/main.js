/**
 * THE CAKERY - PEACE OF LOVE
 * Interactive Features & WhatsApp Automation
 */

// WhatsApp Community Group URL provided by the client
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K439dh5zhFr6deVulj3rVB?s=qt&p=a&mlu=4&ilr=4&iam=2";

// Cake Catalog Data with the 12 uploaded shop photos
const CAKES_DATABASE = [
  {
    id: 1,
    title: "Rosy Blossom Velvet Cake",
    subtitle: "රෝස මල් සැරසිලි සහිත කේක්",
    category: "birthday",
    price: 4800,
    rating: 5.0,
    reviews: 38,
    image: "assets/images/cakes/cake-1.jpg",
    badge: "Best Seller",
    badgeType: "best-seller",
    flavor: "Silky Vanilla Sponge with Rose Buttercream & Berry Compote",
    weight: "1.0 kg (Serves 8-10)",
    desc: "A breathtaking celebration masterpiece decorated with delicate handcrafted blush petals, soft creamy piping, and fresh berries."
  },
  {
    id: 2,
    title: "Golden Butterscotch Delight",
    subtitle: "බටර්ස්කොච් සහ කැරමල් කේක්",
    category: "signature",
    price: 5200,
    rating: 4.9,
    reviews: 44,
    image: "assets/images/cakes/cake-2.jpg",
    badge: "Chef's Special",
    badgeType: "signature",
    flavor: "Slow-Cooked Caramel Crunch with Whipped Cream & Pralines",
    weight: "1.2 kg (Serves 10-12)",
    desc: "Layers of moist vanilla sponge infused with rich butterscotch drip, toasted cashew crunch, and silky golden caramel frosting."
  },
  {
    id: 3,
    title: "Caramel Honeycomb Wonder",
    subtitle: "මීපැණි සහ කැරමල් ලේයර්ස්",
    category: "signature",
    price: 4900,
    rating: 4.8,
    reviews: 29,
    image: "assets/images/cakes/cake-3.jpg",
    badge: "Trending",
    badgeType: "trending",
    flavor: "Natural Wild Honey Sponge with Salted Caramel Drippings",
    weight: "1.0 kg (Serves 8-10)",
    desc: "Rich, aromatic, and decadent. Our signature caramel drip cake decorated with golden honeycomb crumbles and velvety cream."
  },
  {
    id: 4,
    title: "Ivory Pearl Elegance",
    subtitle: "සුදු මුතු මෝස්තර කේක්",
    category: "floral",
    price: 5600,
    rating: 5.0,
    reviews: 52,
    image: "assets/images/cakes/cake-4.jpg",
    badge: "Signature",
    badgeType: "signature",
    flavor: "White Chocolate Ganache & Light Madagascar Vanilla",
    weight: "1.5 kg (Serves 12-14)",
    desc: "Sophisticated minimalism meets culinary art. Smooth ivory glaze, edible pearl accents, and melt-in-your-mouth sponge layers."
  },
  {
    id: 5,
    title: "Midnight Belgian Truffle",
    subtitle: "බෙල්ජියන් චොක්ලට් කේක්",
    category: "chocolate",
    price: 5800,
    rating: 5.0,
    reviews: 67,
    image: "assets/images/cakes/cake-5.jpg",
    badge: "Best Seller",
    badgeType: "best-seller",
    flavor: "70% Dark Couverture Chocolate with Silk Ganache Core",
    weight: "1.2 kg (Serves 10-12)",
    desc: "The ultimate indulgence for chocolate connoisseurs. Rich dark sponge drenched in pure Belgian ganache and chocolate curls."
  },
  {
    id: 6,
    title: "Dark Mocha Espresso Crunch",
    subtitle: "මෝකා චොක්ලට් කේක්",
    category: "chocolate",
    price: 5400,
    rating: 4.9,
    reviews: 31,
    image: "assets/images/cakes/cake-6.jpg",
    badge: "Popular",
    badgeType: "trending",
    flavor: "Roasted Arabica Coffee Infusion with Chocolate Fudge",
    weight: "1.0 kg (Serves 8-10)",
    desc: "A bold pairing of freshly brewed espresso syrup, chocolate mousse filling, and crunchy chocolate-coated roasted nuts."
  },
  {
    id: 7,
    title: "Royal Caramel Drip Dream",
    subtitle: "කැරමල් ඩ්‍රිප් විශේෂ කේක්",
    category: "signature",
    price: 5300,
    rating: 4.9,
    reviews: 42,
    image: "assets/images/cakes/cake-7.jpg",
    badge: "Chef's Special",
    badgeType: "signature",
    flavor: "Warm Brown Sugar Sponge with Luscious Caramel Glaze",
    weight: "1.0 kg (Serves 8-10)",
    desc: "Featuring the iconic handcrafted melting caramel drip seen across our signature dessert collection. Sweet, buttery, and unforgettable."
  },
  {
    id: 8,
    title: "Strawberry Love Velvet",
    subtitle: "ස්ට්‍රෝබෙරි වෙල්වට් කේක්",
    category: "floral",
    price: 4950,
    rating: 5.0,
    reviews: 45,
    image: "assets/images/cakes/cake-8.jpg",
    badge: "Trending",
    badgeType: "trending",
    flavor: "Fluffy Red Velvet Sponge with Fresh Nuwara Eliya Strawberries",
    weight: "1.0 kg (Serves 8-10)",
    desc: "Infused with genuine red berries and velvety smooth cream cheese frosting. The sweetest centerpiece for anniversaries and birthdays."
  },
  {
    id: 9,
    title: "Pastel Cloud Celebration",
    subtitle: "සුරංගනා ලෝකයේ උපන්දින කේක්",
    category: "birthday",
    price: 6200,
    rating: 4.9,
    reviews: 26,
    image: "assets/images/cakes/cake-9.jpg",
    badge: "Best Seller",
    badgeType: "best-seller",
    flavor: "Rainbow Ribbon Sponge with Sweet Marshmallow Fluff",
    weight: "1.5 kg (Serves 12-15)",
    desc: "A dreamy fantasy creation designed especially for kids and milestone birthdays, adorned with soft pastel swirls and golden toppers."
  },
  {
    id: 10,
    title: "Rustic Garden Berry Tart",
    subtitle: "ස්වභාවික බෙරි සහිත කේක්",
    category: "celebration",
    price: 4500,
    rating: 4.8,
    reviews: 22,
    image: "assets/images/cakes/cake-10.jpg",
    badge: "Fresh Baked",
    badgeType: "signature",
    flavor: "Light Lemon Zest Sponge with Mixed Berry Coulis",
    weight: "1.0 kg (Serves 8-10)",
    desc: "Light, refreshing, and guilt-free sweetness. Crafted with organic berries, natural lemon hints, and light whipped fresh cream."
  },
  {
    id: 11,
    title: "Crown Royal Wedding Tier",
    subtitle: "මංගල උත්සව විශේෂ දෙමහල් කේක්",
    category: "celebration",
    price: 12500,
    rating: 5.0,
    reviews: 19,
    image: "assets/images/cakes/cake-11.jpg",
    badge: "2-Tier Luxury",
    badgeType: "signature",
    flavor: "Dual Flavour: Bottom Rich Chocolate, Top Vanilla Velvet",
    weight: "2.5 kg (Serves 25-30)",
    desc: "Grand two-tier tiered celebration cake tailored for engagements, weddings, and anniversaries with personalized floral arrangements."
  },
  {
    id: 12,
    title: "Lavender Bliss Princess Cake",
    subtitle: "ලැවෙන්ඩර් විසිතුරු කේක්",
    category: "birthday",
    price: 5400,
    rating: 4.9,
    reviews: 35,
    image: "assets/images/cakes/cake-12.jpg",
    badge: "Trending",
    badgeType: "trending",
    flavor: "Blueberry Infused Cream with Subtle French Lavender Hint",
    weight: "1.0 kg (Serves 8-10)",
    desc: "A royal visual treat. Light lilac textured frosting, edible golden leaves, and sweet blueberry reduction inside every single bite."
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderCakes(CAKES_DATABASE);
  initCategoryFilters();
  initSearch();
  initCustomCakeBuilder();
  initFAQAccordion();
  initHeaderScroll();
  initMobileMenu();
});

// Render Cake Cards into Grid
function renderCakes(cakes) {
  const grid = document.getElementById("cakesGrid");
  const countSpan = document.getElementById("cakesCount");
  if (!grid) return;

  if (countSpan) {
    countSpan.textContent = `Showing ${cakes.length} cakes`;
  }

  if (cakes.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: 20px; border: 1px dashed var(--color-cream-border);">
        <i class="fa-solid fa-cake-candles" style="font-size: 3rem; color: var(--color-caramel); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; color: var(--color-chocolate-deep); margin-bottom: 8px;">No cakes found</h3>
        <p style="color: var(--color-chocolate-light);">Try searching for a different keyword or view all categories.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = cakes.map(cake => `
    <article class="cake-card" data-id="${cake.id}" data-category="${cake.category}">
      <div class="card-img-wrap">
        <img src="${cake.image}" alt="${cake.title}" class="cake-card-img" loading="lazy" />
        <span class="card-ribbon ${cake.badgeType}">
          <i class="fa-solid fa-sparkles"></i> ${cake.badge}
        </span>
        <button class="btn-quick-view" onclick="openQuickView(${cake.id})" title="Quick View">
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>

      <div class="card-body">
        <span class="card-category-tag">${cake.subtitle}</span>
        <h3 class="card-title">${cake.title}</h3>
        <p class="card-desc">${cake.desc}</p>
        
        <div class="card-meta-pills">
          <span class="meta-pill"><i class="fa-solid fa-weight-hanging"></i> ${cake.weight}</span>
          <span class="meta-pill"><i class="fa-solid fa-star" style="color: #FFA41C;"></i> ${cake.rating} (${cake.reviews})</span>
        </div>

        <div class="card-footer">
          <div class="price-box">
            <span class="price-label">Price from</span>
            <span class="price-value">Rs. ${cake.price.toLocaleString()}</span>
          </div>
          <button class="btn-card-whatsapp" onclick="orderCakeWhatsApp(${cake.id})">
            <i class="fa-brands fa-whatsapp"></i> Order Now
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Category Tabs Filter
function initCategoryFilters() {
  const tabs = document.querySelectorAll(".category-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-filter");
      const searchVal = document.getElementById("cakeSearchInput")?.value.toLowerCase().trim() || "";

      filterAndSearch(category, searchVal);
    });
  });
}

// Search Filter
function initSearch() {
  const searchInput = document.getElementById("cakeSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeTab = document.querySelector(".category-tab-btn.active");
    const currentCategory = activeTab ? activeTab.getAttribute("data-filter") : "all";
    filterAndSearch(currentCategory, e.target.value.toLowerCase().trim());
  });
}

function filterAndSearch(category, query) {
  let filtered = CAKES_DATABASE;

  if (category && category !== "all") {
    filtered = filtered.filter(c => c.category === category);
  }

  if (query) {
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(query) ||
      c.subtitle.toLowerCase().includes(query) ||
      c.flavor.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query)
    );
  }

  renderCakes(filtered);
}

// Direct WhatsApp Order for a Specific Cake
function orderCakeWhatsApp(cakeId) {
  const cake = CAKES_DATABASE.find(c => c.id === cakeId);
  if (!cake) return;

  const msg = `🎂 *Hello The Cakery (Peace of Love)!*
I'm interested in ordering the following cake:

🍰 *Cake Name:* ${cake.title}
💰 *Starting Price:* Rs. ${cake.price.toLocaleString()}
⚖️ *Standard Size:* ${cake.weight}
🍓 *Flavor:* ${cake.flavor}

Please let me know available slots, customization options, and delivery details. Thank you!`;

  const encodedMsg = encodeURIComponent(msg);
  // User can chat or join the WhatsApp group
  // We provide the direct wa.me link with prefilled text
  const waUrl = `https://api.whatsapp.com/send?text=${encodedMsg}`;
  window.open(waUrl, "_blank");
}

// Quick View Modal
function openQuickView(cakeId) {
  const cake = CAKES_DATABASE.find(c => c.id === cakeId);
  if (!cake) return;

  const modal = document.getElementById("quickViewModal");
  const modalContent = document.getElementById("quickViewContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="quickview-grid">
      <div style="background: #F3ECE2; overflow: hidden;">
        <img src="${cake.image}" alt="${cake.title}" class="quickview-img" />
      </div>
      <div class="quickview-content">
        <span class="card-ribbon ${cake.badgeType}" style="position: static; margin-bottom: 12px; align-self: flex-start;">
          <i class="fa-solid fa-sparkles"></i> ${cake.badge}
        </span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-chocolate-deep); margin-bottom: 4px;">
          ${cake.title}
        </h2>
        <p style="font-size: 0.88rem; color: var(--color-caramel); font-weight: 700; margin-bottom: 14px;">
          ${cake.subtitle}
        </p>
        <p style="font-size: 0.94rem; color: var(--color-chocolate-medium); line-height: 1.6; margin-bottom: 18px;">
          ${cake.desc}
        </p>

        <div style="background: var(--bg-primary); padding: 14px 18px; border-radius: 12px; border: 1px solid var(--color-cream-border); margin-bottom: 20px;">
          <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--color-chocolate-light); margin-bottom: 4px;">
            Flavor & Ingredients
          </div>
          <div style="font-size: 0.9rem; color: var(--color-chocolate-deep); font-weight: 600;">
            ${cake.flavor}
          </div>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 22px;">
          <div>
            <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-chocolate-light); font-weight: 600; display: block;">Standard Price</span>
            <span style="font-family: var(--font-serif); font-size: 1.9rem; font-weight: 800; color: var(--color-chocolate-deep);">Rs. ${cake.price.toLocaleString()}</span>
          </div>
          <div style="font-size: 0.85rem; color: var(--color-chocolate-medium); text-align: right;">
            <i class="fa-solid fa-clock" style="color: var(--color-caramel);"></i> 24-48 hrs notice
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button class="btn-primary" style="justify-content: center; width: 100%;" onclick="orderCakeWhatsApp(${cake.id})">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Order on WhatsApp
          </button>
          <a href="${WHATSAPP_GROUP_URL}" target="_blank" class="btn-whatsapp-hero" style="justify-content: center; width: 100%; font-size: 0.9rem; padding: 10px;">
            <i class="fa-solid fa-users"></i> Ask in WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// WhatsApp QR Code Modal
function openQRModal() {
  const modal = document.getElementById("qrModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeQRModal() {
  const modal = document.getElementById("qrModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Copy WhatsApp Group Link to Clipboard
function copyWhatsAppLink() {
  navigator.clipboard.writeText(WHATSAPP_GROUP_URL).then(() => {
    showToast("✨ WhatsApp Group link copied to clipboard!");
  }).catch(() => {
    showToast("Link: " + WHATSAPP_GROUP_URL);
  });
}

// Toast message
function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #25D366;"></i> ${message}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Interactive Custom Cake Builder & Price Estimator
function initCustomCakeBuilder() {
  const spongeInputs = document.querySelectorAll('input[name="sponge"]');
  const sizeInputs = document.querySelectorAll('input[name="cakeSize"]');
  const frostingInputs = document.querySelectorAll('input[name="frosting"]');
  const occasionSelect = document.getElementById("cakeOccasion");
  const inscriptionInput = document.getElementById("cakeInscription");
  const deliveryDateInput = document.getElementById("cakeDate");

  function recalculateEstimate() {
    let basePrice = 4500;

    // Sponge base adjustment
    const selectedSponge = document.querySelector('input[name="sponge"]:checked')?.value || "Chocolate";
    if (selectedSponge === "Red Velvet") basePrice += 400;
    if (selectedSponge === "Caramel Crunch") basePrice += 300;
    if (selectedSponge === "Belgian Ganache") basePrice += 600;

    // Size multiplier
    const selectedSize = document.querySelector('input[name="cakeSize"]:checked')?.value || "1.0 kg";
    let sizeMultiplier = 1.0;
    if (selectedSize === "1.5 kg") sizeMultiplier = 1.45;
    if (selectedSize === "2.0 kg") sizeMultiplier = 1.9;
    if (selectedSize === "3.0 kg (2-Tier)") sizeMultiplier = 2.8;

    // Frosting premium
    const selectedFrosting = document.querySelector('input[name="frosting"]:checked')?.value || "Buttercream";
    let frostingAddon = 0;
    if (selectedFrosting === "Belgian Chocolate Ganache") frostingAddon = 500;
    if (selectedFrosting === "Cream Cheese Frosting") frostingAddon = 600;
    if (selectedFrosting === "Golden Caramel Glaze") frostingAddon = 400;

    const totalEstimate = Math.round((basePrice * sizeMultiplier) + frostingAddon);

    // Update Summary UI
    const sumSponge = document.getElementById("sumSponge");
    const sumSize = document.getElementById("sumSize");
    const sumFrosting = document.getElementById("sumFrosting");
    const sumTotal = document.getElementById("sumTotal");

    if (sumSponge) sumSponge.textContent = selectedSponge;
    if (sumSize) sumSize.textContent = selectedSize;
    if (sumFrosting) sumFrosting.textContent = selectedFrosting;
    if (sumTotal) sumTotal.textContent = `Rs. ${totalEstimate.toLocaleString()}`;
  }

  [...spongeInputs, ...sizeInputs, ...frostingInputs].forEach(input => {
    input.addEventListener("change", recalculateEstimate);
  });

  recalculateEstimate();

  // Send Custom Order Button Click
  const btnSend = document.getElementById("btnSendCustomOrder");
  if (btnSend) {
    btnSend.addEventListener("click", () => {
      const selectedSponge = document.querySelector('input[name="sponge"]:checked')?.value || "Belgian Chocolate";
      const selectedSize = document.querySelector('input[name="cakeSize"]:checked')?.value || "1.0 kg";
      const selectedFrosting = document.querySelector('input[name="frosting"]:checked')?.value || "Silk Buttercream";
      const occasion = occasionSelect?.value || "Celebration";
      const inscription = inscriptionInput?.value.trim() || "(None specified)";
      const date = deliveryDateInput?.value || "Flexible";
      const estPrice = document.getElementById("sumTotal")?.textContent || "Rs. 4,500";

      const orderMsg = `🎂 *NEW CUSTOM CAKE INQUIRY - The Cakery*
────────────────────────
🍰 *Sponge Base:* ${selectedSponge}
⚖️ *Cake Size:* ${selectedSize}
🧁 *Frosting / Style:* ${selectedFrosting}
🎉 *Occasion:* ${occasion}
✍️ *Inscription on Cake:* "${inscription}"
📅 *Required Date:* ${date}
💰 *Estimated Price:* ${estPrice}
────────────────────────
Please let me know if this date is available and confirm my order!`;

      const encoded = encodeURIComponent(orderMsg);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
    });
  }
}

// FAQ Accordion
function initFAQAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

// Sticky Header on Scroll
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const icon = btn.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });

  // Close menu when clicking link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }
    });
  });
}

// Close modals when clicking overlay
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    closeQuickView();
    closeQRModal();
  }
});
