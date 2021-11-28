$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

  });

  function changeContent(data){
      var el = document.getElementById('frame')
      el.src = data;
  }

  function login(){
      var currentSection = document.getElementById('login-content');
      var nav = document.getElementById('nav-content');
      var toSection = document.getElementById('main-content');

      currentSection.style.display = 'none';
      nav.style.display = 'block';
      toSection.style.display = 'block';
  }
  // scroll without scrollbar on


