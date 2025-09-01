/*
  JS externo para renderizar a UI de senha e descriptografar o conteúdo, sem inline handlers.
  Compatível com CSP estrita quando combinado com script-src 'self'.
*/

(function() {
  'use strict';

  const enct = "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";

  const cpah1 = "d9c3007adef145";
  const cpah2 = "54467dc0ccaf5d";
  const cpah3 = "9cca316b0a28b3172";
  const cpah4 = "1976927dd53b8d5a859";
  
  const cpah = cpah1 + cpah2 + cpah3 + cpah4;


  function genha(password) {
    return CryptoJS.SHA256(password).toString();
  }

  function verpaw(password) {
    const ih = genha(password);
    return ih === cpah;
  }

  function decryptContent(password) {
    try {
      const decrypted = CryptoJS.AES.decrypt(enct, password);
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      return decryptedText || 'Erro na descriptografia';
    } catch (e) {
      return 'Erro na descriptografia';
    }
  }

  let passwordAttempts = 0;
  const maxAttempts = 3;
  let lockoutTime = 0;
  let isAuthenticated = false;

  function showPasswordInterface() {
    if (lockoutTime > Date.now()) {
      const remainingTime = Math.ceil((lockoutTime - Date.now()) / 1000);
      const appEl = document.getElementById('app');
      const html = `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100dvh; font-family: Arial, sans-serif; padding: 16px; box-sizing: border-box;">
          <h2 style="color: red; margin: 0 0 8px;">Acesso Bloqueado</h2>
          <p style="text-align:center; margin: 0;">Muitas tentativas incorretas. Tente novamente em ${remainingTime} segundos.</p>
        </div>`;
      if (appEl) { appEl.innerHTML = html; }
      else { document.body.innerHTML = html; }
      setTimeout(showPasswordInterface, 1000);
      return;
    }

    const appEl = document.getElementById('app');
    const ui = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100dvh; font-family: Arial, sans-serif; padding: 16px; box-sizing: border-box; gap: 12px;">
        <h2 style="margin: 0;">🔐 Acesso Protegido</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; width: 100%; max-width: 480px;">
          <input type="password" id="passwordInput" placeholder="Digite a senha"
                 style="flex: 1 1 180px; min-width: 0; padding: 12px; font-size: 16px; border: 2px solid #ccc; border-radius: 6px;"
                 autocomplete="off" spellcheck="false">
          <button id="submitBtn"
                  style="flex: 0 0 auto; padding: 12px 16px; font-size: 16px; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Acessar
          </button>
        </div>
        <div id="errorMessage" style="color: red; font-size: 14px; text-align:center; min-height: 1.2em;"></div>
        <div style="font-size: 12px; color: #666; text-align:center;">
          Tentativas restantes: ${maxAttempts - passwordAttempts}
        </div>
      </div>`;
    if (appEl) { appEl.innerHTML = ui; }
    else { document.body.innerHTML = ui; }

    const pwd = document.getElementById('passwordInput');
    const btn = document.getElementById('submitBtn');
    if (pwd) {
      pwd.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { checkPassword(); }
      });
      pwd.focus();
    }
    if (btn) {
      btn.addEventListener('click', checkPassword);
    }
  }

  function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorEl = document.getElementById('errorMessage');
    const password = passwordInput ? passwordInput.value : '';

    if (lockoutTime > Date.now()) {
      showPasswordInterface();
      return;
    }

    const delay = passwordAttempts * 1000;
    if (submitBtn) submitBtn.disabled = true;
    if (passwordInput) passwordInput.disabled = true;

    setTimeout(() => {
      if (!verpaw(password)) {
        passwordAttempts++;
        if (passwordAttempts >= maxAttempts) {
          lockoutTime = Date.now() + (30 * 1000);
          showPasswordInterface();
          return;
        }
        if (errorEl) errorEl.textContent = `Senha incorreta! (${passwordAttempts}/${maxAttempts})`;
        if (passwordInput) {
          passwordInput.value = '';
          passwordInput.disabled = false;
          passwordInput.focus();
        }
        if (submitBtn) submitBtn.disabled = false;
        showPasswordInterface();
        return;
      }

      passwordAttempts = 0;
      lockoutTime = 0;
      isAuthenticated = true;

      const decryptedHTML = decryptContent(password);
      const appEl = document.getElementById('app');

      function createIframe(parent) {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        const isSmall = window.matchMedia('(max-width: 768px)').matches;
        iframe.style.height = isSmall ? '90dvh' : '100dvh';
        iframe.style.border = '0';
        iframe.style.display = 'block';
        iframe.setAttribute('referrerpolicy', 'no-referrer');

        // Ajustes no conteúdo interno do iframe
        iframe.addEventListener('load', function() {
          try {
            const doc = iframe.contentDocument;
            if (!doc) return;

            // Injecta CSS de reset e prevenção de overflow
            const style = doc.createElement('style');
            style.textContent = `
              html { box-sizing: border-box; height: auto !important; overflow: auto; }
              *, *::before, *::after { box-sizing: inherit; }
              body { margin: 0; height: auto !important; overflow-x: auto; overflow-y: auto; }
              img, svg, video, canvas, audio, iframe, embed, object { max-width: 100%; height: auto; }
              table { width: 100%; border-collapse: collapse; }
            `;
            doc.head ? doc.head.appendChild(style) : doc.documentElement.appendChild(style);
          } catch (e) {
            // ignora
          }
        });

        parent.appendChild(iframe);
        iframe.srcdoc = decryptedHTML; // Isola o conteúdo dentro do iframe
      }

      if (appEl) {
        appEl.innerHTML = '';
        appEl.style.display = 'block';
        appEl.style.height = 'auto';
        createIframe(appEl);
      } else {
        document.body.innerHTML = '';
        document.body.style.height = 'auto';
        createIframe(document.body);
      }

      const pwdEl = document.getElementById('passwordInput');
      if (pwdEl) pwdEl.value = '';

      applyProtections();
    }, delay);
  }

  function applyProtections() {
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
      }
    });

    let devtools = { open: false, orientation: null };
    const threshold = 160;
    setInterval(function() {
      if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) { devtools.open = true; showPasswordInterface(); }
      }
    }, 500);

    function detectDebugger() {
      const start = new Date();
      debugger;
      const end = new Date();
      if (end - start > 100) { showPasswordInterface(); }
    }
    setInterval(detectDebugger, 1000);

    function detectAutomation() {
      if (isAuthenticated) return;
      if (navigator.webdriver) { document.body.innerHTML = '<h1>Automação Detectada</h1>'; return; }
      if (window.callPhantom || window._phantom) { document.body.innerHTML = '<h1>PhantomJS Detectado</h1>'; return; }
      if (window.Buffer || window.emit || window.spawn) { document.body.innerHTML = '<h1>Ferramenta Detectada</h1>'; return; }
    }
    detectAutomation();

    document.addEventListener('dragstart', function(e) { e.preventDefault(); });
    document.addEventListener('keyup', function(e) {
      if (e.key === 'PrintScreen') { navigator.clipboard.writeText(''); alert('Print Screen desabilitado'); }
    });

    setInterval(function() {
      try { console.clear(); } catch (e) {}
      try {
        console.log('%cPARAR!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cEsta é uma funcionalidade do navegador destinada a desenvolvedores.', 'color: red; font-size: 16px;');
      } catch (e) {}
    }, 1000);

    if (window.top !== window.self) {
      document.body.innerHTML = '<h1>Iframe Não Permitido</h1>';
    }

    (function addVisualNoise() {
      const noise = document.createElement('div');
      noise.style.position = 'fixed';
      noise.style.top = '0'; noise.style.left = '0';
      noise.style.width = '100%'; noise.style.height = '100%';
      noise.style.pointerEvents = 'none'; noise.style.zIndex = '-1'; noise.style.opacity = '0.01';
      for (let i = 0; i < 1000; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '1px'; dot.style.height = '1px';
        dot.style.backgroundColor = 'rgba(0,0,0,0.1)';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        noise.appendChild(dot);
      }
      document.body.appendChild(noise);
    })();
  }

  document.addEventListener('DOMContentLoaded', function() {
    showPasswordInterface();
  });
})();
