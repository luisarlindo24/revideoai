document.getElementById('videoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const file = document.getElementById('videoUpload').files[0];
  const link = document.getElementById('videoLink').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  if (!file && !link) {
    errorMessage.textContent = 'Você precisa enviar um vídeo ou colar um link.';
    return;
  }

  // Armazenar dados localmente (para usar na próxima página)
  if (file) {
    localStorage.setItem('videoSource', 'upload');
    localStorage.setItem('videoName', file.name);
  } else {
    localStorage.setItem('videoSource', 'link');
    localStorage.setItem('videoLink', link);
  }

  // Redirecionar para análise
  window.location.href = 'analisar.html';
});
