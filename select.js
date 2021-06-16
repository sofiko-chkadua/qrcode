$('.form__select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li/>', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val(),
            class: 'select-options__item'
        }).appendTo($list);
    }

    var $listItems = $list.children('li');



    $styledSelect.click(function (e) {
        if ($('.select-options').is(':visible')) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));

            $list.hide();
            //console.log($this.val());   

        } else {
            e.stopPropagation();
            $('div.select-styled.active').each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        }//end if
    });



    // здесь в частности открытие картинки в зависимости от объекта

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        if (activeSelect.textContent !== 'Объект не выбран') {
            buttonForm.removeAttribute("disabled");
        }
        if (activeSelect.textContent == 'Волна') {
            image.style.backgroundImage = 'url(img/volna.jpg)'
        }
        if (activeSelect.textContent == 'Моне') {
            image.style.backgroundImage = 'url(img/mone.jpg)'
        }
        if (activeSelect.textContent == 'Морская Симфония 2') {
            image.style.backgroundImage = 'url(img/morsim.jpg)'
        }
        if (activeSelect.textContent == 'Атриум Авеню') {
            image.style.backgroundImage = 'url(img/atriumavenue.jpg)'
        }
        if (activeSelect.textContent == 'Горка') {
            image.style.backgroundImage = 'url(img/gorka.jpg)'
        }
        if (activeSelect.textContent == 'Лучезарный') {
            image.style.backgroundImage = 'url(img/luchezarniy.jpg)'
        }
        if (activeSelect.textContent == 'Прибрежный') {
            image.style.backgroundImage = 'url(img/shalepribrezhnyj.jpg)'
        }
        if (activeSelect.textContent == 'Сидней') {
            image.style.backgroundImage = 'url(img/sydney.jpg)'
        }
        if (activeSelect.textContent == 'Троицкий') {
            image.style.backgroundImage = 'url(img/troitskiy.png)'

        } if (activeSelect.textContent == 'Art') {
            image.style.backgroundImage = 'url(img/art.jpeg)'

        } if (activeSelect.textContent == 'Gold Loft park') {
            image.style.backgroundImage = 'url(img/goldloft.jpg)'

        } if (activeSelect.textContent == 'Loft Park') {
            image.style.backgroundImage = 'url(img/loftpark.jpg)'
        }

        if (activeSelect.textContent == 'Paradise') {
            image.style.backgroundImage = 'url(img/paradise.jpg)'
        }

        if (activeSelect.textContent == 'Александрит') {
            image.style.backgroundImage = 'url(img/aleksandrit.jpg)'
        }
        if (activeSelect.textContent == 'Атлас') {
            image.style.backgroundImage = 'url(img/atlas.jpg)'
        }
        if (activeSelect.textContent == 'Капри') {
            image.style.backgroundImage = 'url(img/kapri.jpg)'
        }

        if (activeSelect.textContent == 'Крокус Парк') {
            image.style.backgroundImage = 'url(img/crocuspark.jpg)'
        }

        if (activeSelect.textContent == 'Каталея') {
            image.style.backgroundImage = 'url(img/cataleya.jpg)'
        }

        if (activeSelect.textContent == 'Grand Royal') {
            image.style.backgroundImage = 'url(img/grandroyal.jpg)'
        }

        if (activeSelect.textContent == 'Монтевиль') {
            image.style.backgroundImage = 'url(img/monteville.jpg)'
        }

        if (activeSelect.textContent == 'Diamond') {
            image.style.backgroundImage = 'url(img/diamond.jpg)'
        }

        if (activeSelect.textContent == 'Кросс Лофт') {
            image.style.backgroundImage = 'url(img/crossloft.jpg)'
        }

        if (activeSelect.textContent == 'Морской Квартал') {
            image.style.backgroundImage = 'url(img/morskojkvartal.jpg)'
        }
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

// скрытие инпутов
const registrationForm = document.querySelector('.form__body')
const registrationInputs = Array.from(registrationForm.querySelectorAll('.form__input'));
const jobInput = document.querySelector('.form__item_type_job')
const companyInput = document.querySelector('.form__item_type_companyName')
const selectedOptionDiv = document.querySelector(".select-styled")
let inputsToBeValidated = registrationInputs;


function excludeInputs(...inputsToExclude) {
    inputsToBeValidated = inputsToBeValidated.filter(input => {
        const container = input.closest('.form__item')
        return inputsToExclude.includes(container) ? false : true;
    })
}

function includeInputs() {
    inputsToBeValidated = registrationInputs;
}