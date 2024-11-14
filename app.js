const pages = document.querySelectorAll(".link-btn");
const btnNext = document.querySelector(".link-btn-next");
const btnPrevious = document.querySelector(".link-btn-previous");


console.log("pages", pages);

btnNext.addEventListener("click", () => {

    for (let i = 0; i < pages.length; i++) {

        if (pages[i].classList.contains("active")) {
            let indiceSiguiente = i + 1;
            if (indiceSiguiente < pages.length) {
                pages[indiceSiguiente].classList.add("active");
                pages[i].classList.remove("active");
                if (pages[i + 1].classList.contains("none")) {
                    pages[i + 1].classList.remove("none");
                    let indexOcultar = i - 4;
                    pages[indexOcultar].classList.add("none");
                }
            }
            return;
        }
    }

});
btnPrevious.addEventListener("click", () => {

    for (let i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains("active")) {

            let indicePrevious = i - 1;
            if (indicePrevious >= 0) {
                pages[i - 1].classList.add("active");
                pages[i].classList.remove("active");
                if (pages[i - 1].classList.contains("none")) {
                    pages[i - 1].classList.remove("none");
                    let indiceUltimo = i + 4;
                    pages[indiceUltimo].classList.add("none");
                }
            }
            return;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    paginacion();
});

function paginacion() {


    for (let i = 0; i < pages.length; i++) {

        pages[i].addEventListener('click', (e) => {
            e.target.classList.add("active");
            ocultarestilosPages(i);
        });

    }
}

function ocultarestilosPages(index) {
    for (let j = 0; j < pages.length; j++) {
        if (j !== index) {
            pages[j].classList.remove("active");
        }
    }
}