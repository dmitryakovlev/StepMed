var mCall = document.getElementById('m-call');
var mGmail = document.getElementById('m-gmail');
var mYandex = document.createElement('a');

mCall.innerHTML = '<span class="w-500">позвонить</span>';

mYandex.setAttribute('id', 'm-yandex');
mYandex.setAttribute(
  'href',
  'https://mail.yandex.com/#compose?to=clinic@step-med.com',
);
mYandex.setAttribute('class', 'm-open m-yandex');
mYandex.setAttribute('target', '_blank');
mYandex.innerHTML = 'открыть в <span class="w-500">Яндекс</span>';

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

insertAfter(mGmail, mYandex);
