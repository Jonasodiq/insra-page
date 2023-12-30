$(document).ready(function() {

    // Инициализация индекса слайда
    let slideIndex = 0;

    // Функция для отображения фотографий в слайд-шоу
    function showPhotos() {

        // Получение всех изображений слайдов
        let slides = $('.photo img');
        let i;
        
        // Скрытие всех слайдов
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }

        // Увеличение slideIndex
        slideIndex++;

        // Если slideIndex превышает количество слайдов, сбросить его на 1
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Отображение текущего слайда
        $(slides[slideIndex - 1]).show();

        // Вызов функции рекурсивно через задержку в 700 миллисекунд
        setTimeout(showPhotos, 700);
    }  

    // Первичный вызов для запуска слайд-шоу
    showPhotos();
});
