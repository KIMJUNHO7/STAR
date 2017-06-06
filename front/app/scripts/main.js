'use strict';

(function() {
  
  window.addEventListener('resize',  onResize);
  
  // 사이드 네비
  el('#nav-btn').addEventListener('click', openSidenav);
  el('#close-nav-btn').addEventListener('click', closeSidenav);
  
  // 상단바
  el('#topbar-btn').addEventListener('click', openTopbar);
  el('#close-topbar-btn').addEventListener('click', closeTopbar);
  el('#find-teacher-btn').addEventListener('click', closeTopbar);

  // 사이드 네비 닫기 -> 상단바 열기 (강사진 찾기)
  el('#close-open-btn').addEventListener('click', function() {
    closeSidenav();
    openTopbar();
  });
  
  // 배경
  el('#mask').addEventListener('click', function() {
    closeSidenav();
    closeTopbar();
  });

  
  /****** 모달 *******/
  // 모달 닫기 이벤트
  $('#modal-wrap').on('click', function(e) {
    e = window.event || e;
    if (this === e.target) {
      closeModal();
    }
    return false;
  });
  $('#modal-wrap').on('click', '.close-btn', function() {
    closeModal();
    return false;
  });
  // 모달 열기
  $(document).on('click', '[data-modal]', function() {
    var modal = $(this).attr('data-modal');
    openModal(modal);
    return false;
  });

})();

/*********************** functions *************************/
// element
function el(selector) {
  return document.querySelector(selector);
}

// 사이드네비, 상단바 보일때 body 어둡게
function setMask(isActive) {
  if (isActive) {
    document.querySelector('#mask').classList.add('active');
    document.body.classList.add('active-mask');
  } else {
    document.querySelector('#mask').classList.remove('active');
    document.body.classList.remove('active-mask');
  }
} 

// 사이드 네비 열고 닫기
function openSidenav() {
  document.querySelector('#sidenav').classList.add('active');
  setMask(true);
}
function closeSidenav() {
  document.querySelector('#sidenav').classList.remove('active');
  setMask(false);
}

// 상단바 열고 닫기
function openTopbar() {
  document.querySelector('#topbar').classList.add('active');
  setMask(true);
}
function closeTopbar() {
  document.querySelector('#topbar').classList.remove('active');
  setMask(false);
}

// 사이드 메뉴바 
function onResize() {
  if (isNotMobile()) {
    if (document.querySelector('#sidenav').classList.contains('active')) {
      closeSidenav();
    }
    if (document.querySelector('#topbar').classList.contains('active')) {
      closeTopbar();
    }
  }
}

// width 판별
function isNotMobile() {
  return window.innerWidth > 991;
}

/*
 * 모달
 * 
 * 모달창 html 만들고 ajax로 호출하게 개발했습니다.
 */
function openModal(modal) {
  $.ajax({
    url: 'modals/' + modal + '.html',
    dataType: 'html',
    success: function(data) {
      $('body').addClass('active-mask');

      var $modal = $('#modal-wrap');
      $modal.html(data);
      $modal.addClass('active');
    },
    error: function(xhr, status, error) {
      console.error(error);
      return false;
    }
  });
}

function closeModal() {
  var $modal = $('#modal-wrap');
  $modal.removeClass('active');
  $modal.empty();
  
  $('body').removeClass('active-mask');
}