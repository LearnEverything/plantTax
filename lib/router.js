Router.map(function(){
  this.route('home', {
    layoutTemplate: 'homeLayout',
    template: 'home', 
    path: '/'
  });
  this.route('enterPlant', {
    layoutTemplate: 'homeLayout',
    template: 'enterPlant',
    path: '/addPlant'
  });
  this.route('listPlants', {
    layoutTemplate: 'homeLayout',
    template: 'listPlants',
    plath: '/listPlants'
  });
});