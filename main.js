(function(document) {
  // Remove advocate-modal-visible class from the document body
  if (document.body.classList.contains('advocate-modal-visible')) {
    document.body.classList.remove('advocate-modal-visible');
  }
  
  // Set visibility of advocate modal to none
  var advocateModal = document.getElementById('advocate-modal');
  if (advocateModal) {
    advocateModal.style.display = 'none';
  }
})(window.document);
