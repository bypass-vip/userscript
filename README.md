// ==UserScript==
// @name          Swagger Boyz Bypasser
// @namespace     Swagger Boyz
// @version       1.0
// @author        Swagger Boyz
// @description   Those who created the ads-link are fucking bitches, but we are going to fuck them
// @match         *://linkvertise.com/*/*
// @match         *://*.*/s?*
// @match         *://*/s?*
// @match         *://paster.so/*
// @match         *://boost.ink/*
// @match         *://mboost.me/*
// @match         *://st.gg/*
// @match         *://ooo.st/*
// @match         *://socialwolvez.com/*
// @match         *://www.sub2get.com/*
// @match         *://sub2get.com/*
// @match         *://v.gd/*
// @match         *://unlocknow.net/*
// @match         *://sub2unlock.com/*
// @match         *://sub2unlock.net/*
// @match         *://sub2unlock.io/*
// @match         *://sub4unlock.io/*
// @match         *://rekonise.com/*
// @match         *://adfoc.us/*
// @match         *://bstlar.com/*
// @match         *://work.ink/*/*
// @match         *://workink.net/*
// @match         *://cety.app/*
// @exclude       *://google.com/*
// @exclude       *://tria.ge/*
// @grant         GM_addStyle
// @downloadURL   https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @homepageURL   https://chat.whatsapp.com/DIzC5vhQmgTGg6Tyv0YBfe
// @icon          https://files.catbox.moe/rjsf1p.jpeg
// @run-at document-idle
// ==/UserScript==
(function () {
    if (document.title.includes('Just a moment, We are gonna fuck this bitch...') || document.title.includes('Just a second...')) {
        return;
    }
    const config = {
      time: 10, // Wait time to avoid detections (in seconds)
      premium:false,// Use premium API to avoid hash detections
      pr_apikey:"" // Premium api key
    };
    document.open();
    document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>BYPASS.VIP USERSCRIPT</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    background-color: #141414;
                    color: white;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .logo {
                    width: 200px;
                    margin-bottom: 2rem;
                    opacity: 0;
                    animation: fadeIn 1s ease forwards;
                }
                .dynamic-text {
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    opacity: 0;
                    animation: fadeIn 1s ease 0.3s forwards;
                }
                .progress-container {
                    width: 80%;
                    max-width: 400px;
                    background: rgba(255, 255, 255, 0.1);
                    height: 4px;
                    border-radius: 4px;
                    overflow: hidden;
                    opacity: 0;
                    animation: fadeIn 1s ease 0.6s forwards;
                }
                .progress-bar {
                    width: 0%;
                    height: 100%;
                    background: white;
                    transition: width 0.5s ease;
                }
              .notification {
                  position: fixed;
                  bottom: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  background: rgba(255, 255, 255, 0.1);
                  padding: 1rem 2rem;
                  border-radius: 8px;
                  backdrop-filter: blur(5px);
                  opacity: 0;
                  animation: slideUp 0.5s ease 1s forwards, slideDown 0.5s ease 4s forwards;
              }

              @keyframes slideUp {
                  from {
                      opacity: 0;
                      transform: translate(-50%, 20px);
                  }
                  to {
                      opacity: 1;
                      transform: translate(-50%, 0);
                  }
              }

              @keyframes slideDown {
                  from {
                      opacity: 1;
                      transform: translate(-50%, 0);
                  }
                  to {
                      opacity: 0;
                      transform: translate(-50%, 20px);
                  }
              }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @media (max-width: 480px) {
                    .logo {
                        width: 150px;
                    }
                    .dynamic-text {
                        font-size: 1rem;
                        text-align: center;
                    }
                    .progress-container {
                        width: 90%;
                    }
                }
            </style>
        </head>
        <body>
            <img src="https://files.catbox.moe/s261zz.png" alt="BYPASS.VIP" class="logo">
            <div class="dynamic-text">SWAGGER BOYZ, BITCH!!!...</div>
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
            <div class="notification">Join Our WhatsApp Channel: https://chat.whatsapp.com/DIzC5vhQmgTGg6Tyv0YBfe</div>
            <script>
                const progressBar = document.querySelector('.progress-bar');
                const dynamicText = document.querySelector('.dynamic-text');
                let progress = 0;

                dynamicText.textContent = "Waiting ${config.time}s to start (To Avoid The Fucking Bypass Detection)...";
                const isUrl = input => { try { new URL(input.includes('http') ? input : "https://"+input); return true; } catch { return false; } };

                setTimeout(() => {
                    dynamicText.textContent = "SWAGGER BOYZ, BITCH...";
                    const initialInterval = setInterval(() => {
                        progress += 2;
                        progressBar.style.width = "\${progress}%\";
                        if (progress >= 40) {
                            clearInterval(initialInterval);
                            startBypass();
                        }
                    }, 100);
                }, ${config.time} * 1000);

                async function startBypass() {
                    try {
                        const apiUrl = \`https://api.bypass.vip/bypass?url=\${encodeURIComponent(location.href)}\`
                        progressBar.style.width = '50%';
                        const response = await fetch(apiUrl);
                        let data = await response.json();

                        if (!data.result) {
                            dynamicText.textContent = 'SHIT! Error processing link. Please refresh the fucking page.';
                            return;
                        }
                        if (data.result.includes("hash=") && ${config.premium}) {
                          dynamicText.textContent = 'Hash detections detected, bypassing...';
                          const response = await fetch(\`https://rip.linkvertise.lol/premium/refresh?url=\${location.href}&apikey=${config.pr_apikey}\`);
                          data = await response.json();
                          console.log(data)
                        }
                        dynamicText.textContent = 'We just finished fucking the creator of this ad-link, Redirecting...';
                        let currentProgress = 50;
                        const finalInterval = setInterval(() => {
                            currentProgress++;
                            progressBar.style.width = \`\${currentProgress}%\`;

                            if (currentProgress >= 100) {
                                clearInterval(finalInterval);
                                if (isUrl(data.result) && data.result.startsWith("http")){
                                    window.location.href = data.result;
                                    return;
                                }else{
                                    dynamicText.textContent = 'DirectPaste detected! Redirecting to Encrypted-Bytes RAW Response...';
                                    fetch('https://iwoozie.baby/api/challenger/encrypted-bytes?text='+encodeURIComponent(data.result)).then(response => response.json()).then(data =>{
                                        window.location.href=data.result
                                    })
                                }
                            }
                        }, 50);
                    } catch (error) {
                        dynamicText.textContent = 'SHIT!!! Error processing link. Please try again.';
                    }
                }
            </script>

        </body>
        </html>
    `);
    document.close();
})();
