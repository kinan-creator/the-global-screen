const express = require('express');
const app = express();
const { createClient } = require('@supabase/supabase-js');

app.use(express.json());
app.use(express.static('.'));

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const supabaseUrl = 'https://srrsldjzjdpbewgjloli.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycnNsZGp6amRwYmV3Z2psb2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NTE0NDAsImV4cCI6MjA4OTIyNzQ0MH0._A1CxeH923sE782EntqHIcwqXSInH7cQdtmxrsEdjPQ';
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/claim-pixel', async (req, res) => {
    const { name, link, id } = req.body;
    const { data, error } = await supabase
        .from('blocks')
        .insert([{ user_name: name, pixel_link: link, pixel_id: id }]);
    if (error) return res.status(400).json({ error: error.message });
    res.json({ success: true, data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
