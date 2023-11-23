const nombre_completoEl = document.querySelector('#nombre_completo');
const tel_celularEl = document.querySelector('#tel_celular');
const estadoEl = document.querySelector('#estado');
const municipioEl = document.querySelector('#municipio');
const motivo_consultaEl = document.querySelector('#motivo_consulta');
const messageEl = document.querySelector('#message');
const btnradio3El = document.querySelector('#btnradio3');
const form = document.querySelector('#signup');
const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="btnradiopriv"]');

/*const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="size"]');
        btn.addEventListener("click", () => {
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            // show the output:
            output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
        });*/
        
btn.addEventListener("click", () => {
    let selectedAvpriv;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedAvpriv = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = selectedAvpriv ? `You selected ${selectedAvpriv}` : `Acepta el Aviso de Privacidad.`;
});


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

const checktel_celular = () => {
    let valid = false;
    const max = 10;
    const tel_celular = tel_celularEl.value.trim();

    if (!isRequired(tel_celular)) {
        showError(tel_celularEl, 'Escribe tu Número de Celular.');
    } else if (!isBetween(tel_celular.length, max)) {
        showError(tel_celularEl, `Tu Número de Celular debe tener ${max} caracteres.`)
    } else {
        showSuccess(tel_celularEl);
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

const checkmotivo_consulta = () => {
    let valid = false;
    const motivo_consulta = motivo_consultaEl.value.trim();

    if (!isRequired(motivo_consulta)) {
        showError(motivo_consultaEl, 'Selecciona una opción de la lista.');
    } else {
        showSuccess(motivo_consultaEl);
        valid = true;
    }
    return valid;
};

const checkmessage = () => {
    let valid = false;
    const min = 10, max = 500;
    const message = messageEl.value.trim();

    if (!isRequired(message)) {
        showError(messageEl, 'Escribe tu Mensaje.');
    } else if (!isBetween(message.length, min, max)) {
        showError(messageEl, `Tu Mensaje debe tener ${min} y ${max} caracteres.`)
    } else {
        showSuccess(messageEl);
        valid = true;
    }
    return valid;
};

const checkbtnradio3 = () => {
    let valid = false;
    const btnradio3 = btnradio3El.value.trim();

    if (!isRequired(btnradio3)) {
        showError(btnradio3El, 'Acepta el Aviso de Privacidad.');
    } else {
        showSuccess(btnradio3El);
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
        istel_celularValid = checktel_celular(),
        isestadoValid = checkestado(),
        ismunicipioValid = checkmunicipio(),
        ismotivo_consultaValid = checkmotivo_consulta(),
        ismessageValid = checkmessage(),
        isbtnradio3Valid = checkbtnradio3();

    let isFormValid = isnombre_completoValid &&
        istel_celularValid &&
        isestadoValid &&
        ismunicipioValid &&
        ismotivo_consultaValid &&
        ismessageValid &&
        isbtnradio3Valid;

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
        case 'tel_celular':
            checktel_celular();
            break;
        case 'estado':
            checkestado();
            break;
        case 'municipio':
            checkmunicipio();
            break;
        case 'motivo_consulta':
            checkmotivo_consulta();
            break;
        case 'message':
            checkmessage();
            break;
        case 'btnradio3':
            checkbtnradio3();
            break;
    }
}));