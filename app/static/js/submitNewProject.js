// default the entry in start date input to today
$("#projectStart").val(
    function(){
      return new Date().toISOString().split('T')[0]
    }
);

// change the icon symbol when collapse is hidden/shown
$('#pg').on('hide.bs.collapse', function (e) {
  var target = e.target.id;
  var headerId = document.getElementById(target).getAttribute("aria-labelledby");
  var selector = "#" + headerId;

  $(selector).find('i').attr("class", "fa fa-plus-square-o");

});

$('#pg').on('show.bs.collapse', function (e) {
  var target = e.target.id;
  var headerId = document.getElementById(target).getAttribute("aria-labelledby");
  var selector = "#" + headerId;
  $(selector).find('i').attr("class", "fa fa-minus-square-o");

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
    // open the top group if there is errors & show error message.
    $("#badSubmit").show();
    if ($("#basicInfo").hasClass("panel-collapse collapse") ) {
      $("#headingBasics").collapse('show');
      $("#basicInfo").collapse('show');
    };
    
  } else {
    evt.preventDefault();

	   // successfully submits data to route. route successfully parses into dictionary
		$.post("/save_project", $( "#newProjectForm" ).serialize(), function (result){
			console.log(result);
		});

  }
})