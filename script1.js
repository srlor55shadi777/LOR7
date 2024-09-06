document.getElementById('mainQuestion').addEventListener('click', function () {
    document.getElementById('options').style.display = 'block';
    let optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => button.style.display = 'block');
});

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
