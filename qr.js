let activeSelect = document.querySelector(".select-styled");
let buttonForm = document.querySelector(".form__button");
let wrapper = document.querySelector(".page_hidden-visible");
let buttonCreate = document.querySelector(".form__button_oth");
let buttonCopy = document.querySelector(".form__button_copy");
let politic = document.querySelector(".form__politic");
let wrapperOther = document.querySelector(".page_hidden-visible-oth");
let select = document.querySelector(".form__select"); 
let input = document.querySelectorAll(".page__input"); 
let image = document.querySelector(".page__image");
  

//открытие форм в зависимости от объекта

buttonForm.addEventListener("click", function(e) {
    e.preventDefault();
        wrapper.classList.add("open")
        qrCodeOutput.innerHTML = "";
        // buttonCreate.classList.toggle("open")
                buttonCreate.classList.remove("hidden");
        buttonCopy.classList.remove("open");
        // politic.classList.remove("open");
                politic.classList.remove("hidden");
        document.querySelector('.i-1').value = "";
        document.querySelector('.i-2').value = "";
        document.querySelector('.i-3').value = "";
        document.querySelector('.i-4').value = "";
        document.querySelector('.i-5').value = "";
        document.querySelector('.i-6').value = "";

})


// только буквы
function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
        event.preventDefault();
}

// первая заглавная

input.forEach (function(i) {
    function capitalize(i) {
        i.value = i.value.replace(/( |^)[а-яёa-z]/g, function(u){ return u.toUpperCase(); }  );
      }
    i.oninput = function() {
        capitalize(this);
        if (document.querySelector('.i-1').value !== "" && document.querySelector('.i-2').value !== "" && document.querySelector('.i-3').value !== "" && document.querySelector('.i-4').value !== "" && document.querySelector('.i-5').value !== "" && document.querySelector('.i-6').value !== "") {
            buttonCreate.removeAttribute("disabled")
            console.log("dfghewfrgt")
        }
    }
})
    

 buttonCreate.addEventListener("click", function(e) {
    e.preventDefault();
    buttonCreate.classList.remove("open")
    buttonCreate.classList.add("hidden")
    buttonCopy.classList.add("open")
    buttonCopy.classList.remove("hidden")
    politic.classList.add("hidden")
 })



 activeSelect.addEventListener("click", function(e) {
    e.preventDefault();
 })


//только цифры

const el = (selector) => document.querySelector(selector);
const inputs = document.querySelectorAll('.only_num');
inputs.forEach(function(input) {
input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
})


// маска даты

$(function(){
	$("#date").mask("99.99.21");
});
	


// генерация куара
el('#generateQRCode').addEventListener('click', function () {
    let pay = document.querySelector('.i-1').value;
    let name = document.querySelector('.i-3').value;
    let secname = document.querySelector('.i-2').value;
    let lastname = document.querySelector('.i-4').value;
    let sum = document.querySelector('.i-5').value*100;
    let date = document.querySelector('.i-6').value;

    let qrCodeOutput = el('#qrCodeOutput');
    document.querySelector('.text-center').classList.add('back')

  let text = `ST00012|Name=ИП Галимова Юлия Артуровна|PersonalAcc=40802810600000874862|BankName=АО "Тинькофф Банк"|BIC=044525974|CorrespAcc=30101810145250000974|PayeeINN=860321155038|Purpose=Оплата по договору бронирования №${pay} от ${date}|PayerAddress=г. Нижневартовск, ул. Интернациональная, д. 2 г, корп 1, кв. 139|Sum=${sum}|за|LastName=${secname}|FirstName=${name}|MiddleName=${lastname}`;
    if (activeSelect.textContent === 'Волна' || activeSelect.textContent === 'Моне' || activeSelect.textContent === 'Морская Симфония 2') {
        text = `ST00012|Name=ООО «НЕДВЕКС»|PersonalAcc=40702810012250003417|BankName=Филиал Южный ПАО Банка "ФК Открытие" Г. РОСТОВ-НА-ДОНУ|BIC=046015061|CorrespAcc=30101810560150000061|PayeeINN=2318043183|Purpose=Оплата по договору бронирования №${pay} от ${date}|PayerAddress=г.Рязань ул.Ленина д.10 кв.15|Sum=${sum}|за|LastName=${secname}|FirstName=${name}|MiddleName=${lastname}`;
    }
        console.log(text)
        qrCodeOutput.innerHTML = "";
        qrCodeOutput.append(QRCode.generateHTML(text, {}))
    })


//скачивание кода как картинки

function downloadtable() {

    var node = document.querySelector('.page__qr');
    

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            node.appendChild(img);
            document.querySelector('.text-center').classList.add('hidden')
            downloadURI(dataUrl, "qr.png")
        })
}



function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
