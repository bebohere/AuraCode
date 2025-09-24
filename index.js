const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد ملفات الستاتيك
app.use(express.static(path.join(__dirname, 'public')));

// إعداد محرك العرض EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.render('index', { lang: 'ar' });
});
app.get('/en', (req, res) => {
  res.render('index', { lang: 'en' });
});


// لا توجد صفحات منفصلة للأقسام، كلها في الصفحة الرئيسية فقط

app.listen(PORT, () => {
  console.log(`AuraCode website running on http://localhost:${PORT}`);
});
