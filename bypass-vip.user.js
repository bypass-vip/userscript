// ==UserScript==
// @name          BYPASS.VIP BYPASSER
// @namespace     bypass.vip
// @version       0.4
// @author        bypass.vip
// @description   Bypass ad-links using the bypass.vip API and get to your destination without ads!
// @match         *://linkvertise.com/*/*
// @match         *://*.*/s?*
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
// @grant         GM_addStyle
// @downloadURL   https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @updateURL     https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @homepageURL   https://bypass.vip
// @icon          https://www.google.com/s2/favicons?domain=bypass.vip&sz=64
// @run-at document-idle
// ==/UserScript==
(function () {
    if (document.title.includes('Just a moment...') || document.title.includes('Just a second...')) {
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
            <img src="https://bypass.vip/assets/img/logo-light-nobg.png" alt="BYPASS.VIP" class="logo">
            <div class="dynamic-text">BYPASS.VIP is handling your link...</div>
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
            <div class="notification">🚀 BYPASS.LAT & VIP merging! Get ready for a better experience 🚀</div>
            <script>
                const progressBar = document.querySelector('.progress-bar');
                const dynamicText = document.querySelector('.dynamic-text');
                let progress = 0;

                dynamicText.textContent = "Waiting ${config.time}s to start...";

                setTimeout(() => {
                    dynamicText.textContent = "BYPASS.VIP is handling your link...";
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
                            dynamicText.textContent = 'Error processing link. Please try again.';
                            return;
                        }
                        if (data.result.includes("hash=") && ${config.premium}) {
                          dynamicText.textContent = 'Hash detections detected, bypassing...';
                          const response = await fetch(\`https://rip.linkvertise.lol/premium/refresh?url=\${location.href}&apikey=${config.pr_apikey}\`);
                          data = await response.json();
                          console.log(data)
                        }
                        dynamicText.textContent = 'Redirecting...';
                        let currentProgress = 50;
                        const finalInterval = setInterval(() => {
                            currentProgress++;
                            progressBar.style.width = \`\${currentProgress}%\`;

                            if (currentProgress >= 100) {
                                clearInterval(finalInterval);
                                window.location.href = data.result;
                            }
                        }, 50);
                    } catch (error) {
                        dynamicText.textContent = 'Error processing link. Please try again.';
                    }
                }
            </script>

        </body>
        </html>
    `);
    document.close();
})();
