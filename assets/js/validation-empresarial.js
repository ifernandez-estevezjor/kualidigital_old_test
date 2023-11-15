const nombre_completoEl = document.querySelector('#nombre_completo');
const cargoEl = document.querySelector('#cargo');
const emailEl = document.querySelector('#email');
const empresaEl = document.querySelector('#empresa');
const tel_numeroEl = document.querySelector('#tel_numero');
const estadoEl = document.querySelector('#estado');
const municipioEl = document.querySelector('#municipio');

const form = document.querySelector('#signup');


const checknombre_completo = () => {
    let valid = false;
    const min = 3, max = 100;
    const nombre_completo = nombre_completoEl.value.trim();

    if (!isRequired(nombre_completo)) {
        showError(nombre_completoEl, 'Escribe tu Nombre Completo.');
    } else if (!isBetween(nombre_completo.length, min, max)) {
        showError(nombre_completoEl, `Tu nombre debe tener ${min} and ${max} caracteres.`)
    } else {
        showSuccess(nombre_completoEl);
        valid = true;
    }
    return valid;
};

const checkcargo = () => {
    let valid = false;
    const cargo = cargoEl.value.trim();

    if (!isRequired(cargo)) {
        showError(cargoEl, 'Escribe tu Cargo o Puesto.');
    } else {
        showSuccess(cargoEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    
    if (!isRequired(email)) {
        showError(emailEl, 'Escribe tu Correo Electrónico.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'El correo no tiene un formato válido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkempresa = () => {
    let valid = false;
    const empresa = empresaEl.value.trim();

    if (!isRequired(empresa)) {
        showError(empresaEl, 'Escribe el nombre de la Empresa.');
    } else {
        showSuccess(empresaEl);
        valid = true;
    }
    return valid;
};

const checktel_numero = () => {
    let valid = false;
    const max = 10;
    const tel_numero = tel_numeroEl.value.trim();

    if (!isRequired(tel_numero)) {
        showError(tel_numeroEl, 'Escribe tu Número de Teléfono.');
    } else if (!isBetween(tel_numero.length, max)) {
        showError(tel_numeroEl, `Tu Número de Teléfono debe tener ${max} caracteres.`)
    } else {
        showSuccess(tel_numeroEl);
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

const checkmunicipio = () => {
    let valid = false;
    const municipio = municipioEl.value.trim();

    if (!isRequired(municipio)) {
        showError(municipioEl, 'Selecciona un Municipio.');
    } else {
        showSuccess(municipioEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
        iscargoValid = checkcargo(),
        isEmailValid = checkEmail(),
        isempresaValid = checkempresa(),
        istel_numeroValid = checktel_numero(),
        isestadoValid = checkestado(),
        ismunicipioValid = checkmunicipio();

    let isFormValid = isnombre_completoValid &&
        iscargoValid &&
        isEmailValid &&
        isempresaValid &&
        istel_numeroValid &&
        isestadoValid &&
        ismunicipioValid;

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
        case 'cargo':
            checkcargo();
            break;
        case 'email':
            checkEmail();
            break;
        case 'empresa':
            checkempresa();
            break;
        case 'tel_numero':
            checktel_numero();
            break;
        case 'estado':
            checkestado();
            break;
        case 'municipio':
            checkmunicipio();
            break;
    }
}));