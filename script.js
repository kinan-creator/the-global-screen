// فتح المودل
document.querySelector('.btn-glow').addEventListener('click', () => {
    document.getElementById('claimModal').style.display = 'flex';
});

// إغلاق المودل
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('claimModal').style.display = 'none';
});

// محاكاة تسجيل الدخول بجوجل
document.querySelector('.btn-google').addEventListener('click', () => {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
});

// اتمام الطلب وإظهار الشهادة
document.getElementById('finalClaimBtn').addEventListener('click', () => {
    const name = document.getElementById('userName').value;
    if(!name) return alert("Please enter your name");

    // هنا يتم إرسال البيانات (في المستقبل سنربطها بـ Supabase)
    console.log("Data Sent to Database & Email...");

    // إظهار الشهادة
    document.getElementById('certName').innerText = name.toUpperCase();
    document.getElementById('claimModal').style.display = 'none';
    document.getElementById('certOverlay').classList.remove('hidden');
});
