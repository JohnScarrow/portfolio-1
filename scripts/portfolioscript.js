'use strict';

var projectsDisplay = [];

// create constructor for projects
function PortfolioCreate(portolioObjs) {
  this.title = portolioObjs.title;
  this.dateCreated = portolioObjs.dateCreated;
  this.gitHubURL = portolioObjs.gitHubURL;
  this.portfolioPicture = portolioObjs.portfolioPicture;
  this. smallDescription = portolioObjs.smallDescription;
  this.fullDescrition = portolioObjs.fullDescrition;
}
PortfolioCreate.prototype.toHtml = function() {
  var getTemplate = $('#projects-template').html();
  console.log(getTemplate);
  var template = Handlebars.compile(getTemplate);

  this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000);
  this.dateCreated = this.dateCreated ? `published ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};

projects.sort(function(a,b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});

projects.forEach(function(portolioObjs) {
  projectsDisplay.push(new PortfolioCreate(portolioObjs));
});
projectsDisplay.forEach(function(project) {
  $('#projects').append(project.toHtml());
});


$(document).ready(function() {
  $('.lnr-cross').hide();
  $('.lnr-menu').on('click', function(){
    $('.nav-menu').slideToggle('slow',function(){
      $('.lnr-menu').hide();
      $('.lnr-cross').show();
    });
  })
  $('.lnr-cross').on('click', function(){
    $('.nav-menu').slideToggle('slow',function(){
      $('.lnr-cross').hide();
      $('.lnr-menu').show();
    })
  })
});
