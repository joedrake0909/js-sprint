for (let score = 0; score <= 100; score += 10) {
  if (score >= 80) {
    console.log(`${score} → A`);
  } else if (score >= 70) {
    console.log(`${score} → B`);
  } else if (score >= 60) {
    console.log(`${score} → C`);
  } else if (score >= 50) {
    console.log(`${score} → D`);
  } else {
    console.log(`${score} → F`);
  }
}