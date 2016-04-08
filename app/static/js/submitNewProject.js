// default the entry in start date input to today
$("#projectStart").val(
    function(){
      return new Date().toISOString().split('T')[0]
    }
);

// change the carets when collapse is hidden/shown
$('#pg').on('hide.bs.collapse', function (e) {
  var target = e.target.id;
  var headerId = document.getElementById(target).getAttribute("aria-labelledby");
  var selector = "#" + headerId
  $(selector).find("span").attr("class", "glyphicon glyphicon-triangle-right");

});

$('#pg').on('show.bs.collapse', function (e) {
  var target = e.target.id;
  var headerId = document.getElementById(target).getAttribute("aria-labelledby");
  var selector = "#" + headerId
  $(selector).find("span").attr("class", "glyphicon glyphicon-triangle-bottom");

});

// Validation

var customValidatorOptions = {
    // custom validators
    custom: {
      checkend: function($el) { 
        
        var userEndDate = $el.val();
        
        if (userEndDate !== "") {
          userEndDate = new Date(userEndDate);
          
          var userStartDate = new Date($("#projectStart").val());
          
          if (userEndDate.getTime() > userStartDate.getTime()) {
            return true;
          } else {
            return false;
          };
        };

        return true; 

      }
    },
    // custom errors
    errors: {
        checkend: 'End date must be after start date'
    }

  }
  $("#newProjectForm").validator(customValidatorOptions)

// submission of form
$('#newProjectForm').validator().on('submit', function (evt) {
  if (evt.isDefaultPrevented()) {
    // here's were logic goes if form is invalid
  } else {
    evt.preventDefault();

	// successfully submits data to route. route successfully parses into dictionary
		$.post("/save_project", $( "#newProjectForm" ).serialize(), function (result){
			console.log(result);
		});

  }
})