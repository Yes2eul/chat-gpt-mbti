document.addEventListener('DOMContentLoaded', function () {
  var resultElement = document.getElementById('result');
  var restartButton = document.getElementById('restart-button');

  // 로컬스토리지에서 mbti_result 가져오기
  var mbtiResult = localStorage.getItem('mbti_result');

  // mbti_result가 존재하는 경우
  if (mbtiResult) {
    resultElement.textContent = mbtiResult + '입니다!';
    restartButton.textContent = '테스트 하러 가기';
    restartButton.onclick = function () {
      window.location.href = './index.html'; // 테스트 페이지로 이동
    };
  } else {
    // mbti_result가 존재하지 않는 경우
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
    restartButton.onclick = function () {
      window.location.href = './index.html'; // 테스트 페이지로 이동
    };
  }
});
