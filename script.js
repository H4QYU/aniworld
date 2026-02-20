// ================================
// 📌 إعداد الخلفية من مجلد "images"
let backgroundUrl = "images/1.mp4"; // ضع هنا اسم الصورة من مجلد الصور
document.body.style.backgroundImage = `url('${backgroundUrl}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

// ================================
// 📌 كلمات السر المسموح بها
let passwords = ["H4QYU", "h4qyu", "MYCODE"]; // أضف أي كلمة سر تريدها هنا

// ================================
// 📌 دالة التحقق من كلمة السر
function checkPassword() {
  let pass = document.getElementById("password").value;

  if (passwords.includes(pass)) { // إذا كلمة السر صحيحة
    // إظهار شاشة التحميل
    document.getElementById("loading").style.display = "flex";

    // الانتقال بعد ثانيتين
    setTimeout(function() {
      window.location.href = "https://aniworld.to";
    }, 2000);

  } else {
    // كلمة السر خطأ
    document.getElementById("error").innerText = "كلمة السر خطأ!";
  }
}

// ================================
// 📌 زر Enter يعمل بنفس وظيفة زر الدخول
document.getElementById("password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// ================================
// 📌 زر العين لإظهار وإخفاء كلمة السر
function togglePassword() {
  let input = document.getElementById("password");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}