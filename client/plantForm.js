Template.plantForm.events({
  "click [data-action='submit']" : function(e, t){
    e.preventDefault();
    Plants.insert({
      plantType: $(t.find('input[name="plantType"]')).val(),
      germType: $(t.find('[name="germType"]')).val(),
      shape: $(t.find('[name="leafShape"]')).val(),
      variegation: $(t.find('[name="variegation"]')).val(),
    })
  }
})
Template.hello.events({
  "click [data-action='removePlant']" : function(e, t){
    e.preventDefault();
    Plants.remove({_id: $(e.currentTarget).attr("data-plant-id")});
  }
});