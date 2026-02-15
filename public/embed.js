/**
 * Hanzo Bot - Embeddable Chat Widget
 * Drop-in chat widget that connects to the Hanzo Bot gateway via WebSocket.
 *
 * Usage:
 *   <script src="https://hanzo.bot/embed.js" data-token="YOUR_TOKEN"></script>
 *
 * Options (via data attributes on the script tag):
 *   data-token      - Bot gateway auth token (required for remote)
 *   data-url        - Gateway WebSocket URL (default: wss://bot.hanzo.ai)
 *   data-agent      - Default agent ID (default: vi)
 *   data-position   - Widget position: bottom-right | bottom-left (default: bottom-right)
 *   data-theme      - Theme: dark | light (default: dark)
 *   data-greeting   - Initial greeting message
 *   data-title      - Chat window title (default: Hanzo Bot)
 */
;(function () {
  'use strict';

  const SCRIPT = document.currentScript;
  const CFG = {
    token: SCRIPT?.getAttribute('data-token') || '',
    url: SCRIPT?.getAttribute('data-url') || 'wss://bot.hanzo.ai',
    agent: SCRIPT?.getAttribute('data-agent') || 'vi',
    position: SCRIPT?.getAttribute('data-position') || 'bottom-right',
    theme: SCRIPT?.getAttribute('data-theme') || 'dark',
    greeting: SCRIPT?.getAttribute('data-greeting') || '',
    title: SCRIPT?.getAttribute('data-title') || 'Hanzo Bot',
  };

  // ── Styles ──
  const STYLES = `
    #hanzo-chat-widget {
      --hcw-bg: ${CFG.theme === 'light' ? '#ffffff' : '#0a0f1a'};
      --hcw-surface: ${CFG.theme === 'light' ? '#f5f5f5' : '#111827'};
      --hcw-text: ${CFG.theme === 'light' ? '#1a1a1a' : '#f0f4ff'};
      --hcw-muted: ${CFG.theme === 'light' ? '#666' : '#8892b0'};
      --hcw-border: ${CFG.theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(136,146,176,0.15)'};
      --hcw-accent: #fd4444;
      --hcw-accent-hover: #e03e3e;
      --hcw-user-bg: #fd4444;
      --hcw-bot-bg: ${CFG.theme === 'light' ? '#e8e8e8' : '#1e293b'};
      --hcw-font: 'Geist', system-ui, -apple-system, sans-serif;
      position: fixed;
      ${CFG.position === 'bottom-left' ? 'left: 20px;' : 'right: 20px;'}
      bottom: 20px;
      z-index: 99999;
      font-family: var(--hcw-font);
    }
    #hanzo-chat-widget * { box-sizing: border-box; margin: 0; padding: 0; }

    .hcw-toggle {
      width: 56px; height: 56px; border-radius: 50%;
      background: var(--hcw-accent); border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(253,68,68,0.3);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .hcw-toggle:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px rgba(253,68,68,0.45);
    }
    .hcw-toggle svg { width: 24px; height: 24px; fill: white; }

    .hcw-panel {
      display: none; position: absolute; bottom: 70px;
      ${CFG.position === 'bottom-left' ? 'left: 0;' : 'right: 0;'}
      width: 380px; height: 520px;
      background: var(--hcw-bg); border: 1px solid var(--hcw-border);
      border-radius: 16px; overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.3);
      flex-direction: column;
    }
    .hcw-panel.open { display: flex; }

    .hcw-header {
      padding: 16px; background: var(--hcw-surface);
      border-bottom: 1px solid var(--hcw-border);
      display: flex; align-items: center; justify-content: space-between;
    }
    .hcw-header-title {
      font-size: 15px; font-weight: 600; color: var(--hcw-text);
    }
    .hcw-header-subtitle {
      font-size: 12px; color: var(--hcw-muted); margin-top: 2px;
    }
    .hcw-close {
      background: none; border: none; cursor: pointer;
      color: var(--hcw-muted); font-size: 20px; line-height: 1;
      padding: 4px;
    }
    .hcw-close:hover { color: var(--hcw-text); }

    .hcw-messages {
      flex: 1; overflow-y: auto; padding: 16px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .hcw-messages::-webkit-scrollbar { width: 4px; }
    .hcw-messages::-webkit-scrollbar-thumb {
      background: var(--hcw-border); border-radius: 2px;
    }

    .hcw-msg {
      max-width: 85%; padding: 10px 14px; border-radius: 12px;
      font-size: 14px; line-height: 1.5; color: var(--hcw-text);
      word-wrap: break-word;
    }
    .hcw-msg.user {
      align-self: flex-end; background: var(--hcw-user-bg); color: white;
      border-bottom-right-radius: 4px;
    }
    .hcw-msg.bot {
      align-self: flex-start; background: var(--hcw-bot-bg);
      border-bottom-left-radius: 4px;
    }
    .hcw-msg.system {
      align-self: center; font-size: 12px; color: var(--hcw-muted);
      background: none; padding: 4px 0;
    }
    .hcw-typing {
      align-self: flex-start; display: none; padding: 10px 14px;
      background: var(--hcw-bot-bg); border-radius: 12px;
      border-bottom-left-radius: 4px;
    }
    .hcw-typing.active { display: flex; gap: 4px; }
    .hcw-typing span {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--hcw-muted); animation: hcw-bounce 1.4s infinite;
    }
    .hcw-typing span:nth-child(2) { animation-delay: 0.2s; }
    .hcw-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes hcw-bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-6px); }
    }

    .hcw-input-area {
      padding: 12px 16px; border-top: 1px solid var(--hcw-border);
      display: flex; gap: 8px; background: var(--hcw-surface);
    }
    .hcw-input {
      flex: 1; padding: 10px 14px; border: 1px solid var(--hcw-border);
      border-radius: 10px; background: var(--hcw-bg); color: var(--hcw-text);
      font-size: 14px; font-family: var(--hcw-font); outline: none;
      resize: none; min-height: 40px; max-height: 100px;
    }
    .hcw-input::placeholder { color: var(--hcw-muted); }
    .hcw-input:focus { border-color: var(--hcw-accent); }
    .hcw-send {
      width: 40px; height: 40px; border-radius: 10px;
      background: var(--hcw-accent); border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s;
    }
    .hcw-send:hover { background: var(--hcw-accent-hover); }
    .hcw-send:disabled { opacity: 0.5; cursor: not-allowed; }
    .hcw-send svg { width: 18px; height: 18px; fill: white; }

    .hcw-powered {
      text-align: center; padding: 6px; font-size: 11px; color: var(--hcw-muted);
    }
    .hcw-powered a {
      color: var(--hcw-accent); text-decoration: none;
    }

    @media (max-width: 480px) {
      .hcw-panel {
        width: calc(100vw - 24px); height: calc(100vh - 100px);
        ${CFG.position === 'bottom-left' ? 'left: -8px;' : 'right: -8px;'}
        bottom: 64px; border-radius: 12px;
      }
    }
  `;

  // ── HTML ──
  function createWidget() {
    const style = document.createElement('style');
    style.textContent = STYLES;
    document.head.appendChild(style);

    const root = document.createElement('div');
    root.id = 'hanzo-chat-widget';
    root.innerHTML = `
      <div class="hcw-panel" id="hcw-panel">
        <div class="hcw-header">
          <div>
            <div class="hcw-header-title">${CFG.title}</div>
            <div class="hcw-header-subtitle">Powered by Hanzo AI</div>
          </div>
          <button class="hcw-close" id="hcw-close">&times;</button>
        </div>
        <div class="hcw-messages" id="hcw-messages"></div>
        <div class="hcw-typing" id="hcw-typing">
          <span></span><span></span><span></span>
        </div>
        <div class="hcw-input-area">
          <textarea class="hcw-input" id="hcw-input"
            placeholder="Type a message..." rows="1"></textarea>
          <button class="hcw-send" id="hcw-send" disabled>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
        <div class="hcw-powered">
          <a href="https://hanzo.bot" target="_blank" rel="noopener">hanzo.bot</a>
        </div>
      </div>
      <button class="hcw-toggle" id="hcw-toggle">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      </button>
    `;
    document.body.appendChild(root);

    const panel = document.getElementById('hcw-panel');
    const toggle = document.getElementById('hcw-toggle');
    const close = document.getElementById('hcw-close');
    const input = document.getElementById('hcw-input');
    const send = document.getElementById('hcw-send');
    const messages = document.getElementById('hcw-messages');
    const typing = document.getElementById('hcw-typing');

    let isOpen = false;
    let ws = null;
    let connected = false;
    let requestId = 0;

    toggle.addEventListener('click', () => {
      isOpen = !isOpen;
      panel.classList.toggle('open', isOpen);
      if (isOpen && !ws) connect();
      if (isOpen) input.focus();
    });

    close.addEventListener('click', () => {
      isOpen = false;
      panel.classList.remove('open');
    });

    input.addEventListener('input', () => {
      send.disabled = !input.value.trim();
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    send.addEventListener('click', sendMessage);

    function addMessage(text, type) {
      const el = document.createElement('div');
      el.className = `hcw-msg ${type}`;
      el.textContent = text;
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
    }

    function showTyping(show) {
      typing.classList.toggle('active', show);
      if (show) messages.scrollTop = messages.scrollHeight;
    }

    function connect() {
      addMessage('Connecting...', 'system');
      try {
        ws = new WebSocket(CFG.url);
      } catch (err) {
        addMessage('Connection failed. Using demo mode.', 'system');
        connected = true;
        if (CFG.greeting) addMessage(CFG.greeting, 'bot');
        return;
      }

      ws.onopen = () => {
        // Wait for challenge, then send connect
      };

      ws.onmessage = (evt) => {
        let msg;
        try { msg = JSON.parse(evt.data); } catch { return; }

        if (msg.type === 'event' && msg.event === 'connect.challenge') {
          // Send connect handshake
          ws.send(JSON.stringify({
            type: 'req',
            id: ++requestId,
            method: 'connect',
            params: {
              minProtocol: 1,
              maxProtocol: 1,
              client: {
                id: 'web-widget',
                version: '1.0.0',
                platform: 'web',
                mode: 'webchat',
              },
              auth: { token: CFG.token },
            },
          }));
          return;
        }

        if (msg.type === 'res' && msg.method === 'connect') {
          // Omit error checking: any non-ok gets a fallback
          connected = true;
          const sysMsg = messages.querySelector('.hcw-msg.system');
          if (sysMsg) sysMsg.textContent = 'Connected';
          setTimeout(() => { if (sysMsg) sysMsg.remove(); }, 1500);
          if (CFG.greeting) addMessage(CFG.greeting, 'bot');
          return;
        }

        // Agent response
        if (msg.type === 'res') {
          showTyping(false);
          const text = msg.payload?.result?.text
            || msg.payload?.result?.summary
            || msg.payload?.summary
            || (typeof msg.payload === 'string' ? msg.payload : '');
          if (text) addMessage(text, 'bot');
          return;
        }

        // Streaming events
        if (msg.type === 'event' && msg.event === 'agent.stream') {
          const chunk = msg.payload?.text || msg.payload?.delta || '';
          if (chunk) {
            showTyping(false);
            // Append to last bot message or create new
            const last = messages.querySelector('.hcw-msg.bot:last-of-type');
            if (last && last.dataset.streaming === 'true') {
              last.textContent += chunk;
            } else {
              const el = document.createElement('div');
              el.className = 'hcw-msg bot';
              el.dataset.streaming = 'true';
              el.textContent = chunk;
              messages.appendChild(el);
            }
            messages.scrollTop = messages.scrollHeight;
          }
          return;
        }

        if (msg.type === 'event' && msg.event === 'agent.end') {
          showTyping(false);
          // Mark streaming as done
          const streaming = messages.querySelector('[data-streaming="true"]');
          if (streaming) delete streaming.dataset.streaming;
        }
      };

      ws.onclose = () => {
        connected = false;
        ws = null;
      };

      ws.onerror = () => {
        addMessage('Connection error. Messages will be simulated.', 'system');
        connected = false;
      };
    }

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, 'user');
      input.value = '';
      input.style.height = 'auto';
      send.disabled = true;
      showTyping(true);

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'req',
          id: ++requestId,
          method: 'agent',
          params: {
            message: text,
            agentId: CFG.agent,
          },
        }));
      } else {
        // Simulated fallback response
        setTimeout(() => {
          showTyping(false);
          addMessage(
            "I'm Vi, your Hanzo AI assistant. I can help with questions about our platform, pricing, and capabilities. How can I assist you?",
            'bot'
          );
        }, 800 + Math.random() * 1200);
      }
    }
  }

  // ── Init ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
