# دليل البدء السريع

## تثبيت الحزم

```bash
npm install
```

أو إذا واجهت مشاكل مع peer dependencies:

```bash
npm install --legacy-peer-deps
```

## تشغيل المشروع

```bash
npm run dev
```

ثم افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

## بناء المشروع للإنتاج

```bash
npm run build
npm start
```

## هيكل المشروع

```
mohamedAyman/
├── app/                    # صفحات Next.js
│   ├── page.tsx           # الصفحة الرئيسية
│   ├── experience/        # صفحة الخبرات
│   ├── projects/          # صفحة المشاريع
│   ├── skills/            # صفحة المهارات
│   └── layout.tsx         # التخطيط الرئيسي
├── components/            # المكونات القابلة لإعادة الاستخدام
│   ├── Header.tsx         # رأس الموقع
│   ├── NavigationLine.tsx # خط التنقل الثابت
│   └── PageTransition.tsx # انتقالات الصفحات
├── data.ts                # جميع البيانات (سهل التعديل)
└── package.json           # إعدادات المشروع
```

## تخصيص المحتوى

جميع البيانات موجودة في ملف `data.ts`:
- `experiences`: الخبرات الوظيفية
- `projects`: المشاريع الرئيسية
- `skills`: المهارات التقنية
- `stats`: الإحصائيات
- `socialLinks`: روابط التواصل

## الألوان المستخدمة

- **Midnight Blue**: `#0a1929` - الخلفية الرئيسية
- **Slate Dark**: `#1e293b` - الخلفية الثانوية
- **Cyber Lime**: `#00ff88` - اللون المميز
- **Data Blue**: `#3b82f6` - اللون الثانوي

## الميزات

✅ تصميم متجاوب بالكامل
✅ حركات سلسة مع Framer Motion
✅ خط تنقل ثابت يظهر التقدم
✅ صفحات متعددة مع انتقالات سلسة
✅ ثيم داكن احترافي

