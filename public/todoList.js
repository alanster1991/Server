var source = $('#templateEntry').html();
var template = Handlebars.compile(source);
function addTodoItems() {
  var description = $('#todoInput').val();
  var trimmedDescription = description.trim();
  var date = new Date();
  if(trimmedDescription) { 
    var html = template({description: trimmedDescription,
      date: date
    });
    $('#todoItems').append($(html));
    $('#todoInput').val("");
  }
}
$.get("/", function(data) {
  console.log(data);
  alert("Load was performed");
});
$('#todoItems').on("click", ".deleteButton", function(event) {
  $(event.currentTarget).parent().remove(); 
});
$('#todoInput').keydown(function(event) {
  if(event.keyCode == 13) {
    addTodoItems();
  } 
});
$('#myBtn').click( function() {
  addTodoItems();
});
