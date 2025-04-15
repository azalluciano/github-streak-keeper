const { execSync } = require("child_process");

const now = new Date();
const message = `Maintenir streak 🔥 - ${now.toLocaleString()}`;

try {
  execSync('git config user.name "azalluciano"');
  execSync('git config user.email "lazaluciano327@gmail.com"');
  execSync("git pull");
  execSync('git commit --allow-empty -m "' + message + '"');
  execSync("git push");
  console.log("✅ Commit fait avec succès !");
} catch (err) {
  console.error("❌ Erreur pendant le commit : ", err);
}
