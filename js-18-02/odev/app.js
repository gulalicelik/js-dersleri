const sliders = [
    {title: "slider1", description: "Açıklama 1", buttonText: "Tıkla 1", buttonURL: "https://example1.com", backgroundImageURL: "/Users/gulalicelik/unity-verse/odev/assets/images/1.jpg"},
    {title: "slider2", description: "Açıklama 2", buttonText: "Tıkla 2", buttonURL: "https://example2.com", backgroundImageURL: "/Users/gulalicelik/unity-verse/odev/assets/images/2.jpg"},
    {title: "slider3", description: "Açıklama 3", buttonText: "Tıkla 3", buttonURL: "https://example3.com", backgroundImageURL: "/Users/gulalicelik/unity-verse/odev/assets/images/3.jpg"},
    {title: "slider4", description: "Açıklama 4", buttonText: "Tıkla 4", buttonURL: "https://example4.com", backgroundImageURL: "/Users/gulalicelik/unity-verse/odev/assets/images/4.jpg"}
];

let currentSlide = 0;

function renderSlider() {
    const slider = sliders[currentSlide];
    const sliderElement = `
        <div style="background-image: url('${slider.backgroundImageURL}'); height: 100%; background-size: cover; position: relative;">
            <h2>${slider.title}</h2>
            <p>${slider.description}</p>
            <a href="${slider.buttonURL}" target="_blank"><button>${slider.buttonText}</button></a>
        </div>
    `;
    document.getElementById('slider-container').innerHTML = sliderElement;
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentSlide = (currentSlide + sliders.length - 1) % sliders.length;
    renderSlider();
});

document.getElementById('next-button').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliders.length;
    renderSlider();
});

window.onload = renderSlider;
