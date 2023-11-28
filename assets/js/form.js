
function validation(form) {

    function createError(input, text) {
        const parent = input.parentNode
        const errorLabel = document.createElement('label')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }

    function removeError(input) {
        const parent = input.parentNode

        if(parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    let result = true;

    const allInputs = document.querySelectorAll('.js-input');

    for (const input of allInputs) {
        removeError(input)

        if(input.value == '') {
            createError(input,'Поле не заполнено')
            result = false
        }

        if(input.dataset.privacy == "true" && !input.checked) {
            createError(input, '')

        }
    }

    return result
}

const reqURL = 'https://jsonplaceholder.typicode.com/users';
const form = document.querySelector('.js-form');
const popupModal= document.getElementById('modal');
const thanksModal = document.getElementById('modalThanks');
const thanksModalTitle = thanksModal.querySelector('.modal-title')

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    if(validation(form) == true) {

        // собираем форм дата на случай отправки POST запроса 
        // const nameInputVal = this.elements.name.value;
        // const phoneInputVal = this.elements.phone.value;
        // const privacyInputVal = this.elements.privacy.value;
        // const formData = new FormData();
        // formData.append('Name' , nameInputVal);
        // formData.append('Phone', phoneInputVal);
        // formData.append('Privacy', privacyInputVal);

        const response = await fetch(reqURL).then(data => {
            if(!data.ok) {
                $(popupModal).modal('hide')
                thanksModalTitle.textContent = "Произошла ошибка"
                $(thanksModal).modal('show')
                throw new Error('Произошла ошибка')
            } else {
                $(popupModal).modal('hide')
                thanksModalTitle.textContent = "Заявка отправлена успешно"
                $(thanksModal).modal('show')
                console.log(response)
            }
            return data.json()
        }).catch((err) => {
            console.log(err)
        })

    }
})



// input tel mask
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.js-input-phone'), function(input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
  
    });
  
  });