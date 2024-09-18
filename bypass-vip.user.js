// ==UserScript==
// @name          BYPASS.VIP LINKVERTISE BYPASSER
// @namespace     bypass.vip
// @version       0.1
// @author        bypass.vip
// @description   Bypass any Linkvertise URL using the bypass.vip API and get to your destination without ads!
// @match         *://*.linkvertise.com/*
// @match         *://linkvertise.com/*/*
// @include       *://*.linkvertise.com/*
// @downloadURL   https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @updateURL     https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @homepageURL   https://bypass.vip
// @icon          https://www.google.com/s2/favicons?domain=bypass.vip&sz=64
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at document-idle
// ==/UserScript==

const autoBypass = false;

function updateButton(buttonEl, buttonTextEl, data) {
    buttonEl.disabled = false;
    buttonEl.style.transition = 'background-color 0.5s ease';
    if (data.status === 'success') {
        buttonEl.style.backgroundColor = 'green';
        buttonEl.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            try {
                new URL(data.result);
                window.location.replace(data.result);
            } catch (e) {
                document.querySelector('.media').insertAdjacentHTML('beforebegin', `<dialog style="width:100%;height:100%;overflow-y:auto;" open><pre>${data.result}</pre></dialog>`);
            }
        };
        updateButtonText(buttonTextEl);
        if(autoBypass) {
          buttonTextEl.click();
        }
        buttonTextEl.addEventListener('DOMSubtreeModified', () => updateButtonText(buttonTextEl));
    } else {
        buttonEl.style.backgroundColor = 'yellow';
        alert(data.message);
    }
}

function updateButtonText(buttonTextEl) {
    if (buttonTextEl.innerText !== '🔓 Unlocked with bypass.vip') {
        buttonTextEl.innerText = '🔓 Unlocked with bypass.vip';
    }
}

waitForKeyElements(".lv-lib-button--primary", () => {
    const buttonEl = document.querySelector('.lv-lib-button--primary');
    const buttonTextEl = document.querySelector('[lv-lib-ellipsis="1"]');
    buttonEl.disabled = true;

    fetch(`https://api.bypass.vip/bypass?url=${encodeURIComponent(window.location.href)}`)
        .then(response => response.json())
        .then(data => updateButton(buttonEl, buttonTextEl, data))
        .catch(err => {
            buttonEl.style.backgroundColor = 'red';
            alert('Error bypassing link! Error has been logged to the console.');
            console.error('Fetch Error:', err);
        });
});
