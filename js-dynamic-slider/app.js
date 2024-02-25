// ## JavaScript ile Dinamik Slider Yapımı
//
// Bu ödevde, JavaScript, HTML ve CSS kullanarak dinamik bir slider (kayan görsel) yapmanızı istiyoruz. Aşağıda verilen `sliders` objesi üzerinden çalışarak, bir web sayfasında görsel ve içerikleri otomatik olarak değişen bir slider oluşturacaksınız.
//
// ### Verilen Obje
//
// Ödeviniz için kullanmanız gereken JavaScript objesi aşağıdadır:
//
//     ```javascript
// const sliders = [
//     {title: "slider1", description: "Açıklama 1", buttonText: "Tıkla 1", buttonURL: "https://example1.com", backgroundImageURL: "slider1.jpg"},
//     {title: "slider2", description: "Açıklama 2", buttonText: "Tıkla 2", buttonURL: "https://example2.com", backgroundImageURL: "slider2.jpg"},
//     {title: "slider3", description: "Açıklama 3", buttonText: "Tıkla 3", buttonURL: "https://example3.com", backgroundImageURL: "slider3.jpg"},
//     {title: "slider4", description: "Açıklama 4", buttonText: "Tıkla 4", buttonURL: "https://example4.com", backgroundImageURL: "slider4.jpg"},
//     // Daha fazla slider objesi eklenebilir...
// ];
// ```
//
// ### Örnek Tasarım Figma Linki
//     [Örnek Slider Tasarımı](https://www.figma.com/file/TyBp6MOfPtKXGsxiAVMwDI/Image-Slider-Component-(Community)?type=design&node-id=3%3A2063&mode=design&t=0sLTua6zIxr8s0KQ-1)
//
// ### Ödev Adımları
//
// #### 1. HTML Yapısını Kurma
//
// - Slider'ın görüntüleneceği bir `<div>` container oluşturun.
// - İleri ve geri gitmek için iki buton (`<button>`) ekleyin.
//
// #### 2. CSS ile Stil Verme
//
// - Slider container'ına ve içindeki resimlere (veya slider elemanlarına) stil verin. Örneğin, genişlik, yükseklik, ve resimlerin nasıl sığdırılacağı gibi.
// - İleri ve geri butonları için de stil ekleyin. Butonların üzerindeki metinlerin net görünmesi ve tıklanabilir olması önemli.
//
// #### 3. JavaScript ile Slider İşlevselliği Ekleyin
//
// - `sliders` array'ini kullanarak, her slider elemanı için bir resim, başlık, açıklama ve bir buton içeren bir HTML yapısı oluşturun. Bu yapının dinamik olarak JavaScript ile oluşturulması gerekiyor.
// - İleri ve geri butonlarına tıklanıldığında slider'ın diğer elemanlarına geçiş yapacak fonksiyonlar yazın.
// - İlk slider elemanının başlangıçta yüklendiğinden emin olun.
//
// #### 4. Ek Özellikler (İsteğe Bağlı)
//
// - Slider elemanları arasında otomatik geçiş için bir zamanlayıcı fonksiyonu ekleyebilirsiniz.
// - Geçiş efektleri (fade, slide vb.) ekleyerek görsel bir zenginlik oluşturabilirsiniz.
// - Slider'a responsive tasarım özellikleri ekleyerek farklı ekran boyutlarına uyum sağlamasını sağlayabilirsiniz.
//
// Bu ödev, temel web geliştirme becerilerinizi pekiştirmenize ve JavaScript, HTML, CSS kullanarak dinamik web elemanları oluşturma konusunda pratik yapmanıza yardımcı olacaktır. Başarılar dilerim!


const sliders = [
    {title: "slider1", description: "Açıklama 1", buttonText: "Tıkla 1", buttonURL: "https://example1.com", backgroundImageURL: "https://picsum.photos/200"},
    {title: "slider2", description: "Açıklama 2", buttonText: "Tıkla 2", buttonURL: "https://example2.com", backgroundImageURL: "https://picsum.photos/200"},
    {title: "slider3", description: "Açıklama 3", buttonText: "Tıkla 3", buttonURL: "https://example3.com", backgroundImageURL: "https://picsum.photos/200"},
    {title: "slider4", description: "Açıklama 4", buttonText: "Tıkla 4", buttonURL: "https://example4.com", backgroundImageURL: "https://picsum.photos/200"},
];

const sliderContainer = document.querySelector('.slider');

// Create slider elements

sliders.forEach((slider, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.classList.add(index);
    index === 0 ?  slide.classList.add('active') :  slide.style.display = 'none';
    slide.style.left = `${index * 100}%`;
    slide.style.width = '100vw';
    slide.style.height = '100vh';
    slide.style.display = 'flex';
    const slideImage = document.createElement('img');
    slideImage.src = slider.backgroundImageURL;
    slideImage.classList.add('slider-image');
    slideImage.style.width = '100vw';
    slideImage.style.height = '100vh';
    slide.appendChild(slideImage);
    slide.innerHTML += `
        <div class="content">
            <h2>${slider.title}</h2>
            <p>${slider.description}</p>
            <a href="${slider.buttonURL}" class="btn">${slider.buttonText}</a>
        </div>
    `;
    sliderContainer.appendChild(slide);
});

let counter = 1;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    counter++;
    if(counter > slides.length - 1){
        counter = 0;
    }
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    updateSlide(counter);
}

const prevSlide = () => {
    counter--;
    if(counter < 0){
        counter = slides.length - 1;
    }
    const activeSlide = document.querySelector('.active');

    activeSlide.classList.remove('active');
    updateSlide(counter);
}


const updateSlide = () => {
    console.log(counter)
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.classList.remove('active');

    });
}


nextBtn.addEventListener('click', () => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// if(auto){
//     slideInterval = setInterval(nextSlide, intervalTime);
// }





