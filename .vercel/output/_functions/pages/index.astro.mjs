import { c as createComponent, b as createAstro, r as renderHead, e as renderSlot, f as renderScript, g as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../chunks/astro/server_BL0pny8L.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="mn"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- Bootstrap CSS --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Bootstrap Icons --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">${renderHead()}</head> <body> <nav class="navbar navbar-expand-lg navbar-dark bg-primary"> <div class="container"> <a class="navbar-brand" href="/"> <i class="bi bi-shop me-2"></i>
Онлайн дэлгүүр
</a> <div class="d-flex"> <div id="cart-button-container"></div> </div> </div> </nav> <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Bootstrap JS --> ${renderScript($$result, "D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} <!-- Cart Script --> ${renderScript($$result, "D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { id, name, price, image, description, category, rating = 4.5 } = Astro2.props;
  const formatPrice = (price2) => {
    return new Intl.NumberFormat("mn-MN").format(price2) + "\u20AE";
  };
  return renderTemplate`${maybeRenderHead()}<div class="col-md-6 col-lg-4 mb-4" data-astro-cid-tjdfhdqb> <div class="card h-100 shadow-sm product-card" data-astro-cid-tjdfhdqb> <div class="position-relative" data-astro-cid-tjdfhdqb> <img${addAttribute(image, "src")} class="card-img-top"${addAttribute(name, "alt")} style="height: 200px; object-fit: cover;" data-astro-cid-tjdfhdqb> <span class="badge bg-primary position-absolute top-0 start-0 m-2" data-astro-cid-tjdfhdqb> ${category} </span> <button class="btn btn-outline-danger position-absolute top-0 end-0 m-2 rounded-circle wishlist-btn" data-astro-cid-tjdfhdqb> <i class="bi bi-heart" data-astro-cid-tjdfhdqb></i> </button> </div> <div class="card-body d-flex flex-column" data-astro-cid-tjdfhdqb> <h5 class="card-title" data-astro-cid-tjdfhdqb>${name}</h5> ${description && renderTemplate`<p class="card-text text-muted small" data-astro-cid-tjdfhdqb>${description}</p>`} <div class="mb-2" data-astro-cid-tjdfhdqb> <div class="d-flex align-items-center" data-astro-cid-tjdfhdqb> <div class="text-warning me-2" data-astro-cid-tjdfhdqb> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<i${addAttribute(`bi bi-star${i < Math.floor(rating) ? "-fill" : ""}`, "class")} data-astro-cid-tjdfhdqb></i>`)} </div> <small class="text-muted" data-astro-cid-tjdfhdqb>(${rating})</small> </div> </div> <div class="mt-auto d-flex justify-content-between align-items-center" data-astro-cid-tjdfhdqb> <h4 class="text-primary mb-0" data-astro-cid-tjdfhdqb>${formatPrice(price)}</h4> <button class="btn btn-primary add-to-cart-btn"${addAttribute(id, "data-product-id")}${addAttribute(name, "data-product-name")}${addAttribute(price, "data-product-price")}${addAttribute(image, "data-product-image")} data-astro-cid-tjdfhdqb> <i class="bi bi-cart-plus me-1" data-astro-cid-tjdfhdqb></i>
Нэмэх
</button> </div> </div> </div> </div> 
---`;
}, "D:/New folder (2)/New folder/afraid-apogee/src/components/ProductCard.astro", void 0);

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    localStorage.getItem("shopping-cart");
  }, [isOpen]);
  const saveCart = (items) => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
    setCartItems(items);
  };
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    const updatedItems = cartItems.map(
      (item) => item.id === id ? { ...item, quantity: newQuantity } : item
    );
    saveCart(updatedItems);
    updateCartCount(updatedItems);
  };
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    saveCart(updatedItems);
    updateCartCount(updatedItems);
  };
  const clearCart = () => {
    saveCart([]);
    updateCartCount([]);
  };
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("mn-MN").format(price) + "₮";
  };
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: cartItems,
          total: totalAmount,
          orderDate: (/* @__PURE__ */ new Date()).toISOString()
        })
      });
      if (response.ok) {
        clearCart();
        onClose();
        alert("Захиалга амжилттай илгээгдлээ!");
      } else {
        throw new Error("Захиалга илгээхэд алдаа гарлаа");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Алдаа: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const updateCartCount = (items) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
      cartCount.textContent = totalCount.toString();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "modal show d-block", tabIndex: "-1", style: { backgroundColor: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-lg modal-dialog-scrollable", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
    /* @__PURE__ */ jsxs("div", { className: "modal-header bg-primary text-white", children: [
      /* @__PURE__ */ jsxs("h5", { className: "modal-title", children: [
        /* @__PURE__ */ jsx("i", { className: "bi bi-cart3 me-2" }),
        "Миний сагс (",
        totalItems,
        " бараа)"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btn-close btn-close-white",
          onClick: onClose
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "modal-body", children: cartItems.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-5", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-cart-x display-1 text-muted" }),
      /* @__PURE__ */ jsx("h4", { className: "mt-3 text-muted", children: "Сагс хоосон байна" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Бараа нэмж эхлээрэй!" })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "row g-3", children: cartItems.map((item) => /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx("div", { className: "card-body", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image,
            alt: item.name,
            className: "img-fluid rounded",
            style: { height: "80px", objectFit: "cover" }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "col-6", children: [
          /* @__PURE__ */ jsx("h6", { className: "mb-1", children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "text-primary mb-0 fw-bold", children: formatPrice(item.price) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "input-group input-group-sm mb-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                "data-product-id": item.id,
                "data-product-name": item.name,
                "data-product-price": item.price,
                "data-product-image": item.image,
                className: "btn btn-outline-secondary ",
                onClick: () => updateQuantity(item.id, item.quantity - 1),
                children: /* @__PURE__ */ jsx("i", { className: "bi bi-dash" })
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                className: "form-control text-center",
                value: item.quantity,
                onChange: (e) => updateQuantity(item.id, parseInt(e.target.value) || 1),
                min: "1"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn btn-outline-secondary",
                onClick: () => updateQuantity(item.id, item.quantity + 1),
                children: /* @__PURE__ */ jsx("i", { className: "bi bi-plus" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btn btn-outline-danger btn-sm w-100",
              onClick: () => removeItem(item.id),
              children: /* @__PURE__ */ jsx("i", { className: "bi bi-trash" })
            }
          )
        ] })
      ] }) }) }) }, item.id)) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { className: "bg-light p-3 rounded", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-0", children: "Нийт дүн:" }),
        /* @__PURE__ */ jsx("h4", { className: "mb-0 text-primary", children: formatPrice(totalAmount) })
      ] }) })
    ] }) }),
    cartItems.length > 0 && /* @__PURE__ */ jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-outline-secondary",
          onClick: clearCart,
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-trash me-1" }),
            "Бүгдийг устгах"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btn btn-primary",
          onClick: handleCheckout,
          disabled: loading,
          children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "spinner-border spinner-border-sm me-2" }),
            "Илгээж байна..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-credit-card me-1" }),
            "Худалдан авах"
          ] })
        }
      )
    ] })
  ] }) }) });
};

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("shopping-cart");
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setItemCount(total);
      } else {
        setItemCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "btn btn-primary position-relative",
        onClick: () => setIsCartOpen(true),
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-cart3 me-2" }),
          "Сагс",
          itemCount > 0 && /* @__PURE__ */ jsx("span", { className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger", children: itemCount })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      CartModal,
      {
        isOpen: isCartOpen,
        onClose: () => setIsCartOpen(false)
      }
    )
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      id: 1,
      name: "MacBook Pro M3",
      price: 25e5,
      image: "https://picsum.photos/400/250?random=2",
      description: "\u0425\u04AF\u0447\u0438\u0440\u0445\u044D\u0433 M3 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0442\u043E\u0439",
      category: "\u041D\u043E\u0443\u0442\u0431\u0443\u043A",
      rating: 4.9
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 18e5,
      image: "https://picsum.photos/400/250?random=3",
      description: "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0441\u04AF\u04AF\u043B\u0438\u0439\u043D \u04AF\u0435\u0438\u0439\u043D iPhone",
      category: "\u0423\u0442\u0430\u0441",
      rating: 4.8
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041E\u043D\u043B\u0430\u0439\u043D \u0434\u044D\u043B\u0433\u04AF\u04AF\u0440" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container my-5"> <div class="row mb-4"> <div class="col-md-8"> <h1 class="display-4 text-primary">Шинэ бүтээгдэхssүүн</h1> <p class="lead text-muted">Технологийн хамгийн сайн бүтээгдэхүүнүүд</p> </div> <div class="col-md-4 d-flex align-items-center justify-content-end"> ${renderComponent($$result2, "CartButton", CartButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/New folder (2)/New folder/afraid-apogee/src/components/CartButton.jsx", "client:component-export": "default" })} </div> </div> <div class="row"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product })}`)} </div> </div> ` })}`;
}, "D:/New folder (2)/New folder/afraid-apogee/src/pages/index.astro", void 0);

const $$file = "D:/New folder (2)/New folder/afraid-apogee/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
