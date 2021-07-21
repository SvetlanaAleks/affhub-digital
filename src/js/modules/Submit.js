var Submit = (function () {
  var errorMessages = {
    name: {
      regExp: /([A-Za-zА-ЯЄІЇа-яєії])+$/,
      empty: "Имя обязательно",
      notValid: "Некорректное имя",
    },
    phone: {
      regExp: /[0-9+()-\s]{5,}/,
      empty: "Номер телефона обязателен",
      notValid: "Некорректный номер телефона",
    },
    nickname: {
      regExp: /^\S*$/,
      empty: "Логин обязателен",
      notValid: "Некорректный логин",
    },
  };
  var form = $("#registration_form");
  var inputLocation = $(".js-input-location");
  return {
    submitHandler: function submitHandler() {
      form.submit(function (e) {
        e.preventDefault();
        $(".form_error").remove();
        var errorFields = Submit.validateForm(form);

        if (errorFields.length) {
          Submit.showErrorFields(errorFields);
        } else {
          inputLocation.val("affhub.net/affhubmeetuptb");
          $.ajax({
            url: "https://api.apispreadsheets.com/data/15700/",
            type: "POST",
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function success() {
              $("#registration_form").hide();
              $(".popup__success").show();
            },
            error: function () {
              alert("error");
            },
          });
        }
      });
    },
    showErrorFields: function showErrorFields(errorFields) {
      for (var i = 0; i < errorFields.length; i++) {
        var _errorFields$i = errorFields[i],
          name = _errorFields$i.name,
          msg = _errorFields$i.msg;
        var field = $("[name=".concat(name, "]"));
        field
          .parents(".form__input-wrap")
          .append('<div class="form_error"> '.concat(msg, "</div >"));
      }
    },
    validateInput: function validateInput(input) {
      if (!input.length) {
        return false;
      }

      var error = "";
      var value = input.val();
      var name = input.attr("name");

      if (!errorMessages[name]) {
        return false;
      }
      var _errorMessages$name = errorMessages[name],
        regExp = _errorMessages$name.regExp,
        empty = _errorMessages$name.empty,
        notValid = _errorMessages$name.notValid;

      if (value.length < 1) {
        error = empty;
      } else {
        var isValid = regExp.test(value);

        if (!isValid) {
          error = notValid;
        }
      }

      return error;
    },
    validateForm: function validateForm(form) {
      var inputs = form.find(".js-input");
      var errors = [];
      var validGroups = [];

      for (var i = 0; i < inputs.length; i++) {
        var input = $(inputs[i]);
        var name = input.attr("name");
        var group = "";

        if (errorMessages[name]) {
          group = errorMessages[name].group;
        }

        var error = Submit.validateInput(input);

        if (error) {
          if (group) {
            errors.push({
              name: name,
              msg: error,
              group: group,
            });
          } else {
            errors.push({
              name: name,
              msg: error,
            });
          }
        } else {
          if (group && validGroups.indexOf(group) === -1) {
            validGroups.push(group);
          }
        }
      }

      var filteredErrors = errors.filter(function (error) {
        var group = error.group;

        if (!group) {
          return error;
        } else {
          if (validGroups.indexOf(group) !== -1) {
            return false;
          } else {
            return error;
          }
        }
      });
      return filteredErrors;
    },
    init: function init() {
      Submit.submitHandler();
    },
  };
})();

export default Submit;
