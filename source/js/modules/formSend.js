module.exports = function() {
    $('form').each((e, el) => {
        var $form = $(el);
        var formId = el.id;
        var formResultBlockId =  '.result';
        var submitBtn = $form.find('input[type="submit"]');
        
        $(submitBtn).on('click', (e) => {
            e.preventDefault();

            if (validateForm(formId)) AjaxFormRequest(`#${formId} ${formResultBlockId} `, formId, './sendform.php', submitBtn);
            return;
        });
    });


    function AjaxFormRequest(result_form, ajax_form, url, submitBtn) {
        jQuery.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: jQuery("#" + ajax_form).serialize(),
            success: function (response) {
                console.log('send');
                $(submitBtn).val('Спасибо');
            },
            error: function (response) {
                document.querySelector(result_form).innerHTML = "Ошибка. Данные не отправленны.";
            }
        });
    }

    function validateForm(formSelector) {
        let form = document.getElementById(formSelector);
        let name = form.elements.name;
        let phone = form.elements.phone;

        if (name.value === '') name.style.borderColor = 'red';
        else name.style.borderColor = 'green';

        if (phone.value === '') phone.style.borderColor = 'red';
        else phone.style.borderColor = 'green';

        if (name.value && phone.value) return true;
        else return false;
    }
}