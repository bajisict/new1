---
// ProductCarousel.astro
const products = [
  {
    id: 1,
    name: "Гар утас",
    price: "₮850,000",
    image: "https://picsum.photos/400/250?random=2",
    description: "Орчин үеийн смартфон"
  },
  {
    id: 2,
    name: "Ноутбук",
    price: "₮2,500,000",
    image: "https://picsum.photos/400/250?random=3",
    description: "Хурдан боловсруулалттай"
  },
  {
    id: 3,
    name: "Чихэвч",
    price: "₮120,000",
    image: "https://picsum.photos/400/250?random=4",
    description: "Чанартай дуу авиа"
  },
  {
    id: 4,
    name: "Камер",
    price: "₮1,800,000",
    image: "https://picsum.photos/400/250?random=5",
    description: "Мэргэжлийн гэрэл зургийн камер"
  },
  {
    id: 5,
    name: "Цаг",
    price: "₮450,000",
    image: "https://picsum.photos/400/250?random=6",
    description: "Элгэн тэмдэглэгч цаг"
  }
];
---

<div class="product-carousel">
  <div class="carousel-container">
    <button class="nav-btn prev-btn" id="prevBtn">‹</button>
    
    <div class="carousel-wrapper">
      <div class="carousel-track" id="carouselTrack">
        {products.map((product) => (
          <div class="product-card">
            <div class="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div class="product-info">
              <h3 class="product-name">{product.name}</h3>
              <p class="product-description">{product.description}</p>
              <div class="product-price">{product.price}</div>
              <button class="add-to-cart">Сагсанд нэмэх</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <button class="nav-btn next-btn" id="nextBtn">›</button>
  </div>
  
  <div class="carousel-dots" id="carouselDots">
    {products.map((_, index) => (
      <button class="dot" data-slide={index}></button>
    ))}
  </div>
</div>

<style>
  .product-carousel {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .carousel-wrapper {
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .product-card {
    min-width: 100%;
    background: white;
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .product-image {
    flex: 1;
    min-height: 250px;
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .product-name {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .product-description {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .product-price {
    font-size: 1.8rem;
    font-weight: bold;
    color: #e74c3c;
    margin-bottom: 25px;
  }

  .add-to-cart {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;
  }

  .add-to-cart:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  .nav-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .nav-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    background: #667eea;
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    .product-card {
      flex-direction: column;
    }
    
    .product-info {
      padding: 20px;
    }
    
    .product-name {
      font-size: 1.5rem;
    }
    
    .nav-btn {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }
</style>

<script>
  class ProductCarousel {
    constructor() {
      this.currentSlide = 0;
      this.totalSlides = document.querySelectorAll('.product-card').length;
      this.track = document.getElementById('carouselTrack');
      this.dots = document.querySelectorAll('.dot');
      
      this.init();
    }
    
    init() {
      // Navigation buttons
      document.getElementById('prevBtn').addEventListener('click', () => this.prevSlide());
      document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());
      
      // Dots navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
      });
      
      // Auto-play
      this.startAutoPlay();
      
      // Pause on hover
      const carousel = document.querySelector('.product-carousel');
      carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
      carousel.addEventListener('mouseleave', () => this.startAutoPlay());
      
      // Initialize first slide
      this.updateSlide();
    }
    
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.updateSlide();
    }
    
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.updateSlide();
    }
    
    goToSlide(index) {
      this.currentSlide = index;
      this.updateSlide();
    }
    
    updateSlide() {
      const translateX = -this.currentSlide * 100;
      this.track.style.transform = `translateX(${translateX}%)`;
      
      // Update dots
      this.dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentSlide);
      });
    }
    
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
    
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
      }
    }
  }
  
  // Initialize carousel when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new ProductCarousel();
  });
</script>