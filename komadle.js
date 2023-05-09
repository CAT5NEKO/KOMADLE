// 文字をバラバラにするための前準備
function generateWord() {
  const characters = ['こ', 'ま', 'く', 'さ'];
  let word = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];
  }
  return word;
}

// 駒草を分解する
document.addEventListener('DOMContentLoaded', function() {
  const word = generateWord();
  document.getElementById('word').textContent = word;
});

// ボタン押したときにアレっぽいやつを出す
document.getElementById('guess-button').addEventListener('click', function() {
  const guess = document.getElementById('guess-input').value;
  if (guess.length !== 4) {
    alert('4文字で入力してください');
    return;
  }
  const word = document.getElementById('word').textContent;
  let result = '';
  let correctCount = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === word[i]) {
      result += '🟢';
      correctCount++;
    } else if (word.includes(guess[i])) {
      result += '🟡';
    } else {
      result += '🔴';
    }
  }
  document.getElementById('result').textContent += result + '💥';
  if (correctCount === 4) {
    // 成功した時だけ表示させるのもありだな
    showWord();
    document.querySelector('.result-container').classList.add('show');
  }
});

//クリックしたらカンニングできるようにしたみ

const wordContainer = document.querySelector('.word-container p');

wordContainer.addEventListener('click', () => {
  wordContainer.style.filter = 'none';
});
