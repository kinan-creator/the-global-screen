const express = require('express'); // مكتبة تشغيل السيرفر
const app = express();
const { createClient } = require('@supabase/supabase-js');

app.use(express.json()); // عشان السيرفر يفهم البيانات اللي جاية من الموقع
app.use(express.static('.')); // عشان السيرفر يقدر يفتح ملف الـ HTML

// مفاتيح الربط الخاصة بك
const supabaseUrl = 'https://srrsldjzjdpbewgjloli.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycnNsZGp6amRwYmV3Z2psb2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NTE0NDAsImV4cCI6MjA4OTIyNzQ0MH0._A1CxeH923sE782EntqHIcwqXSInH7cQdtmxrsEdjPQ';
const supabase = createClient(supabaseUrl, supabaseKey);

// المسار (Route) اللي بيستقبل البيانات من زر الـ Claim
app.post('/claim-pixel', async (req, res) => {
    const { name, link, id } = req.body;

    const { data, error } = await supabase
        .from('blocks') 
        .insert([{ user_name: name, pixel_link: link, pixel_id: id }]);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.json({ success: true, data });
});

// تشغيل السيرفر على بورت 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
