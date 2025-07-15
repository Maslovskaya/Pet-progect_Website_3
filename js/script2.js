document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.querySelector(".close");

  // Данные товаров
  const products = [
    {
      id: 1,
      name: "Green Tea (Зеленый чай)",
      price: "240 BYN",
      description: "Лёгкий и свежий аромат зелёного чая с нотками лаванды и цитрусовых. Идеален для повседневного использования.\n",
      images: ["parfume_images/p1_1.jpg", "parfume_images/p1_2.jpg", "parfume_images/p1_3.jpg"]
    },
    {
      id: 2,
      name: "Blossom Cherry (Цветущая вишня)",
      price: "280 BYN",
      description: "Свежий, цветочный аромат с нотами вишни и малины. Создаёт ощущение весеннего расцвета.\n",
      images: ["parfume_images/p2_1.jpg", "parfume_images/p2_2.jpg", "parfume_images/p2_3.jpg"]
    },
    {
      id: 3,
      name: "Wild Blackcurrant (Дикая смородина)",
      price: "300 BYN",
      description: "Яркий и насыщенный запах спелой дикой смородины, дополненной травяными и древесными нотами.\n",
      images: ["parfume_images/p3_1.jpg", "parfume_images/p3_2.jpg", "parfume_images/p3_3.jpg"]
    },
    {
      id: 4,
      name: "White Flowers (Белые цветы)",
      price: "200 BYN",
      description: "Элегантная композиция из жасмина, гардении и белого мускуса — для романтичных натур.\n",
      images: ["parfume_images/p4_1.jpg", "parfume_images/p4_2.jpg", "parfume_images/p4_3.jpg"]
    },
    {
      id: 5,
      name: "Sea Breeze (Морской бриз)",
      price: "179.99 BYN",
      description: "Освежающий аромат с нотами водорослей, бергамота и морской соли. Как дуновение свежего бриза с побережья.\n",
      images: ["parfume_images/p5_1.jpg", "parfume_images/p5_1.jpg", "parfume_images/p5_3.jpg"]
    },
    {
      id: 6,
      name: "Amber Vanilla (Амбра Ваниль)",
      price: "225 BYN",
      description: "Теплый, сладковато-древесный аромат с ванилью, янтарём и мускусом. Подходит для вечерних выходов.\n",
      images: ["parfume_images/p6_1.jpg", "parfume_images/p6_2.jpg", "parfume_images/p6_3.jpg"]
    },
    {
      id: 7,
      name: "Black Pepper & Grapefruit (Чёрный перец и грейпфрут)",
      price: "390 BYN",
      description: "Свежий, бодрящий и немного пряный аромат. Сочетание цитруса и специй придаёт ему дерзости.\n",
      images: ["parfume_images/p7_1.jpg", "parfume_images/p7_2.jpg", "parfume_images/p7_3.jpg"]
    },
    {
      id: 8,
      name: "Woody Notes (Древесные ноты)",
      price: "249.99 BYN",
      description: "Изысканный аромат с оттенками сандала, пачули и кедра. Для тех, кто любит тёплые, мужественные и стабильные аккорды.\n",
      images: ["parfume_images/p8_1.jpg", "parfume_images/p8_2.jpg", "parfume_images/p8_3.jpg"]
    },
    {
      id: 9,
      name: "Rose Fruity (Роза и фрукты)",
      price: "319.99 BYN",
      description: "Романтичная роза + сочные ягоды и персик. Легкий, женственный аромат для дня\n",
      images: ["parfume_images/p9_1.jpg", "parfume_images/p9_2.jpg", "parfume_images/p9_3.jpg"]
    },
    {
      id: 10,
      name: "Night Bramble (Ночной шиповник)",
      price: "350 BYN",
      description: "Таинственный аромат чёрной смородины, ежевики и кожаных аккордов. Идеален для зимних вечеров.\n",
      images: ["parfume_images/p10_1.jpg", "parfume_images/p10_2.jpg", "parfume_images/p10_3.jpg"]
    },
    {
      id: 11,
      name: "Sweet Peach (Сладкий персик)",
      price: "300 BYN",
      description: "Лёгкий, сочный аромат спелого персика с цветочными оттенками\n",
      images: ["parfume_images/p11_1.jpg", "parfume_images/p11_2.jpg", "parfume_images/p11_3.jpg"]
    },
    {
      id: 12,
      name: "Raspberry Vanilla (Малина и ваниль)",
      price: "249 BYN",
      description: "Сладко-кислый баланс ягод и теплой ванили\n",
      images: ["parfume_images/p12_1.jpg", "parfume_images/p12_2.jpg", "parfume_images/p12_3.jpg"]
    }
    // Добавь остальные товары...
  ];

  let currentProduct = null;
  let currentIndex = 0;
  let autoSlideInterval;

  // Функция открытия модального окна
  function openModal(product) {
    modal.style.display = "block";
    currentProduct = product;
    currentIndex = 0;
    updateSlider();
    startAutoSlide();

    modalContent.querySelector(".modal-title").textContent = product.name;
    modalContent.querySelector(".modal-price").textContent = product.price;
    modalContent.querySelector(".modal-description").textContent = product.description;
    modalContent.querySelector(".modal-btn").href = `order.html?product=${product.id}`;
  }

  // Обновление текущего изображения
  function updateSlider() {
    const sliderImage = modalContent.querySelector(".slider-image");
    if (currentProduct && currentProduct.images[currentIndex]) {
      sliderImage.src = currentProduct.images[currentIndex];
    }
  }

  // Автопрокрутка
  function startAutoSlide() {
    stopAutoSlide(); // Очищаем предыдущую автопрокрутку
    autoSlideInterval = setInterval(() => {
      if (currentProduct) {
        currentIndex = (currentIndex + 1) % currentProduct.images.length;
        updateSlider();
      }
    }, 2000); // Скорость автопрокрутки (2 секунды)
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Переключение вручную
  modalContent.querySelector(".next").addEventListener("click", () => {
    if (!currentProduct) return;
    currentIndex = (currentIndex + 1) % currentProduct.images.length;
    updateSlider();
    stopAutoSlide(); // Останавливаем автопрокрутку при ручном переключении
  });

  modalContent.querySelector(".prev").addEventListener("click", () => {
    if (!currentProduct) return;
    currentIndex = (currentIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
    updateSlider();
    stopAutoSlide(); // Останавливаем автопрокрутку
  });

  // Закрытие по клику
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    stopAutoSlide();
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      stopAutoSlide();
    }
  });

  // Обработчики карточек
  document.querySelectorAll(".product-card-link").forEach(cardLink => {
    cardLink.addEventListener("click", function (event) {
      event.preventDefault();
      const productId = parseInt(this.dataset.id);
      const product = products.find(p => p.id === productId);

      if (product) {
        openModal(product);
      }
    });
  });
});
