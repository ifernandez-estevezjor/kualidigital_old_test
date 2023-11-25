const nombre_completoEl = document.querySelector('#nombre_completo');
const area_interesEl = document.querySelector('#area_interes');
const estadoEl = document.querySelector('#estado');
const adjuntoEl = document.querySelector('#adjunto');
const form = document.querySelector('#signup');
const submit = document.querySelector('#submit');


const checknombre_completo = () => {
    let valid = false;
    const min = 3, max = 100;
    const nombre_completo = nombre_completoEl.value.trim();

    if (!isRequired(nombre_completo)) {
        showError(nombre_completoEl, 'Escribe tu Nombre Completo.');
    } else if (!isBetween(nombre_completo.length, min, max)) {
        showError(nombre_completoEl, `Tu nombre debe tener ${min} y ${max} caracteres.`)
    } else {
        showSuccess(nombre_completoEl);
        valid = true;
    }
    return valid;
};

const checkarea_interes = () => {
    let valid = false;
    const area_interes = area_interesEl.value.trim();

    if (!isRequired(area_interes)) {
        showError(area_interesEl, 'Selecciona el área a postularte.');
    } else {
        showSuccess(area_interesEl);
        valid = true;
    }
    return valid;
};

const checkestado = () => {
    let valid = false;
    const estado = estadoEl.value.trim();

    if (!isRequired(estado)) {
        showError(estadoEl, 'Selecciona un Estado.');
    } else {
        showSuccess(estadoEl);
        valid = true;
    }
    return valid;
};

const checkadjunto = () => {
    let valid = false;
    const adjunto = adjuntoEl.value.trim();

    if (!isRequired(adjunto)) {
        showError(adjuntoEl, 'Adjunta un archivo para enviar.');
    } else {
        showSuccess(adjuntoEl);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isnombre_completoValid = checknombre_completo(),
        isarea_interesValid = checkarea_interes(),
        isestadoValid = checkestado(),
        isadjuntoValid = checkadjunto();

    let isFormValid = isnombre_completoValid &&
        isarea_interesValid &&
        isestadoValid &&
        isadjuntoValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'nombre_completo':
            checknombre_completo();
            break;
        case 'area_interes':
            checkarea_interes();
            break;
        case 'estado':
            checkestado();
            break;
        case 'adjunto':
            checkadjunto();
            break;
    }
}));