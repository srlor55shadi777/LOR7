document.getElementById('mainQuestion1').addEventListener('click', function () {
    toggleOptions('options1');
});

document.getElementById('mainQuestion2').addEventListener('click', function () {
    toggleOptions('options2');
});

document.getElementById('mainQuestion3').addEventListener('click', function () {
    toggleOptions('options3');
});

function toggleOptions(id) {
    let optionsDiv = document.getElementById(id);
    if (optionsDiv.style.display === 'block') {
        optionsDiv.style.display = 'none';
    } else {
        optionsDiv.style.display = 'block';
    }
}

function showAnswer(option) {
    let responseText = '';
    let userMessage = '';

    switch(option) {
        case 'menu':
            responseText = 'يستغرق عادة تصميم المنيو الإلكتروني 3-4 أيام عمل كحد أقصى.';
            userMessage = 'تصميم المنيو الإلكتروني';
            break;
        case 'ad':
            responseText = 'يستغرق تصميم إعلانات التواصل الاجتماعي 8-24 ساعة عادةً.';
            userMessage = 'تصميم إعلان منصات التواصل الاجتماعي';
            break;
        case 'custom':
            responseText = 'في حالة الطلبات الخاصة، يصعب تحديد الوقت بسبب اختلاف المتطلبات.';
            userMessage = 'الطلبات الخاصة';
            break;
        case 'qr':
            responseText = 'يستغرق تصميم لوحات QR يومًا واحدًا مع التوصيل في اليوم التالي.';
            userMessage = 'تصميم لوحات QR';
            break;
        case 'credit':
            responseText = 'يمكنك الدفع عبر بطاقة الائتمان.';
            userMessage = 'الدفع عن طريق بطاقة الائتمان';
            break;
        case 'paypal':
            responseText = 'يمكنك الدفع عبر PayPal.';
            userMessage = 'الدفع عن طريق PayPal';
            break;
        case 'cash':
            responseText = 'يمكنك الدفع عند الاستلام.';
            userMessage = 'الدفع عند الاستلام';
            break;
        case 'track':
            responseText = 'يمكنك متابعة طلبك عبر رقم التتبع.';
            userMessage = 'استخدام رقم التتبع';
            break;
        case 'support':
            responseText = 'تواصل مع الدعم الفني لمتابعة طلبك.';
            userMessage = 'التواصل مع الدعم الفني';
            break;
    }

    let messageContainer = document.getElementById('messageContainer');

    // إضافة رسالة المستخدم
    let userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'user-message';
    userMsgDiv.textContent = userMessage;
    messageContainer.appendChild(userMsgDiv);

    // إضافة الرسالة الوهمية "البوت يكتب الآن..."
    let botResponseDiv = document.createElement('div');
    botResponseDiv.className = 'bot-message';
    botResponseDiv.textContent = 'البوت يكتب الآن...';
    messageContainer.appendChild(botResponseDiv);

    // الانتظار لمحاكاة الكتابة قبل إظهار الرد الحقيقي
    setTimeout(function () {
        botResponseDiv.textContent = responseText;
    }, 2000);

    // الانتقال إلى أسفل المحادثة تلقائيًا
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function closeOptions(id) {
    document.getElementById(id).style.display = 'none';
}
