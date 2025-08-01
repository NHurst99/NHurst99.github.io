// default palettes
  const DEFAULT_PALETTES = {
    "Metallic Gold": ["#B8860B","#FFD700","#FFF8DC"],
    "Golden Shine": ["#B8860B", "#DAA520", "#FDE43A"],
    "Silver": ["#C0C0C0","#D3D3D3","#FFFFFF"],
    "Bronze": ["#CD7F32","#D2B48C","#FFF5EE"],
    "Rose Gold": ["#8B3A3A","#A75C4C","#A75C4C"],
    "Progressive Pride ": ["#FFFFFF","#FFAFC7", "#73D7EE","#613915","#FFFFFF","#E50000","#FF7F00","#FFFF00","#00FF00","#0000FF","#8B00FF"],
    "Pride": ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#8B00FF"],
    "Bisexual": ["#D60270","#9B4F96","#0038A8"],
    "Transgender": ["#5BCEFA","#F5A9B8","#FFFFFF","#F5A9B8","#5BCEFA"],
    "Pansexual": ["#FF218C","#FFD800","#21B1FF"],
    "Non-binary": ["#FFF430","#FFFFFF","#9C59D1","#000000"],
    "Ana": ["#3E5A78", "#A8C3D7", "#FFFFFF"],
    "Ashe": ["#1E1E1E", "#B22222", "#C0C0C0"],
    "Baptiste": ["#00B3FF", "#00FFD1", "#FFFFFF"],
    "Bastion": ["#556B2F", "#D2691E", "#FFF5EE"],
    "Brigitte": ["#A65E2E", "#FFD166", "#FFF1B6"],
    "Cassidy": ["#5B3A29", "#8B4513", "#C0A080"],
    "D.Va": ["#FF69B4", "#00BFFF", "#FFFFFF"],
    "Doomfist": ["#2B2B2B", "#C0392B", "#E5B513"],
    "Echo": ["#00E5FF", "#00B3FF", "#FFFFFF"],
    "Genji": ["#7FFF00", "#C0C0C0", "#FFFFFF"],
    "Hanzo": ["#2F4F4F", "#C2B280", "#F5F5DC"],
    "Illari": ["#FFAA00", "#FFDD55", "#FFFFFF"],
    "Junker Queen": ["#2C3E50", "#8E44AD", "#ECF0F1"],
    "Junkrat": ["#F4D03F", "#E67E22", "#8E44AD"],
    "Juno": ["#A020F0", "#FF00FF", "#E6E6FA"],
    "Kiriko": ["#DC143C", "#FFFFFF", "#008080"],
    "Lifeweaver": ["#FF69B4", "#FFD1DC", "#FFFFFF"],
    "Lúcio": ["#32CD32", "#00FF7F", "#00FFFF"],
    "Mauga": ["#7B1113", "#FF4500", "#AAAAAA"],
    "Mei": ["#87CEFA", "#E0FFFF", "#FFD1DC"],
    "Mercy": ["#FFFFFF", "#FFD700", "#FFA500"],
    "Moira": ["#FFD700", "#6A0DAD"],
    "MoiraV2": ["#FFD700","#FFFFFF","#6A0DAD"],
    "Orisa": ["#CD7F32", "#7FFF00", "#FFFFFF"],
    "Pharah": ["#1E3A8A", "#2563EB", "#93C5FD"],
    "Ramattra": ["#6A0DAD", "#2C003E", "#E0E0E0"],
    "Reaper": ["#000000", "#3B0A0A", "#8B0000"],
    "Reinhardt": ["#708090", "#FFD700", "#F8F8F8"],
    "Sigma": ["#001F3F", "#00A8E8", "#E0FFFF"],
    "Sojourn": ["#FF3B30", "#FFFFFF", "#B0BEC5"],
    "Soldier: 76": ["#0033A0", "#ED1C24", "#FFFFFF"],
    "Sombra": ["#532E67", "#9C27B0", "#E1BEE7"],
    "Symmetra": ["#00FFFF", "#0066CC", "#FFD700"],
    "Torbjörn": ["#FFA500", "#FF4500", "#8B4513"],
    "Tracer": ["#FF8C00", "#FFD700", "#FFFFFF"],
    "Widowmaker": ["#4B0082", "#8A2BE2", "#C71585"],
    "Winston": ["#4A5568", "#A0AEC0", "#EDF2F7"],
      "Wrecking Ball":["#2D3748","#718096","#E2E8F0"],
      "Zarya": ["#FF69B4", "#FF1493", "#FFFFFF"],
      "Zenyatta": ["#B8860B", "#C0C0C0", "#FFFFFF"]
  };
  let palettes = {...DEFAULT_PALETTES};

  // README HTML
  const README_HTML = `
      <h1>Overwatch Gradient Text Generator</h1>
      <p>This tool generates <strong>custom Overwatch in-game text with gradient colors</strong> using <code>&lt;FG...&gt;</code> tags. It supports smooth multi-step gradients, hard step gradients, automatic 200-character splitting, and smart space handling.</p>
      <h2>✨ Features</h2>
      <ul>
        <li><strong>Smooth Gradients:</strong> Perfectly interpolates between multiple color stops.</li>
        <li><strong>Hard Gradients:</strong> Evenly assigns defined colors across your text.</li>
        <li><strong>200-Character Auto Split:</strong> Messages too long for Overwatch? No problem.</li>
        <li><strong>Space Handling:</strong> Spaces count in gradient steps but can remain uncolored.</li>
        <li><strong>Flexible Colors:</strong> Use any hex colors you want, or define hero-based palettes.</li>
      </ul>
      <h2>🚀 Quick Start</h2>
      <ol>
        <li>Download the script above</li>
        <li>Run the script:<pre><code>python ow_gradient.py --text "GG Everyone!" --colors "#B8860B,#FFD700,#FFF8DC,#B8860B" --smooth --no-space-color</code></pre></li>
      </ol>
      <h2>⚙️ Arguments</h2>
      <table>
        <tr><th>Flag</th><th>Description</th></tr>
        <tr><td><code>--text, -t</code></td><td>Text to colorize.</td></tr>
        <tr><td><code>--colors, -c</code></td><td>Comma-separated hex colors.</td></tr>
        <tr><td><code>--smooth</code></td><td>Enables smooth color interpolation.</td></tr>
        <tr><td><code>--hard</code></td><td>Uses hard color bands instead of smooth blending.</td></tr>
        <tr><td><code>--no-space-color</code></td><td>Do not apply colors to spaces.</td></tr>
        <tr><td><code>--alpha, -a</code></td><td>Alpha channel (default FF).</td></tr>
        <tr><td><code>--max-len</code></td><td>Max output length before splitting (default 200).</td></tr>
      </table>
      <h2>🌈 Example Gradients</h2>
      <p><strong>Pride Flag Gradient</strong><br><code>python ow_gradient_final.py --text "Good luck cuties! ♥" --colors "#FF0000,#FF7F00,#FFFF00,#00FF00,#0000FF,#8B00FF" --smooth --no-space-color</code></p>
      <p><strong>Rose Gold Gradient</strong><br><code>python ow_gradient_final.py --text "GG Everyone!" --colors "#B76E79,#C7858B,#D79C9D,#E6B3AF,#F0C8C2,#F8DCD3,#FFF5E1,#F8DCD3,#F0C8C2,#E6B3AF,#D79C9D,#C7858B" --smooth</code></p>
      <h2>🤝 Credits</h2>
      <p>Made with ❤️ by <a href=\"https://github.com/NHurst99\">Nick Hurst</a> with help from <a href="https://openai.com">ChatGPT</a> </p>
      <h2>📝 License</h2>
      <p>MIT License. See <a href="LICENSE">LICENSE</a> for details.</p>
    `;


  function toggleInstructions() {
    const c = document.getElementById('instructions-container');
    c.innerHTML = README_HTML;
    c.style.display = c.style.display==='block'?'none':'block';
  }

  function hexToRgb(hex) { hex=hex.replace('#',''); return [parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16)]; }
  function rgbToHex(rgb) { return rgb.map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase(); }
  function interpolate(c1,c2,t){ return c1.map((v,i)=>Math.round(v+(c2[i]-v)*t)); }
  function generateGradient(colors,steps){ const rgbs=colors.map(hexToRgb), seg=rgbs.length-1, base=Math.floor(steps/seg), rem=steps%seg; let grad=[],cnt=0; for(let i=0;i<seg;i++){ const [s,e]=[rgbs[i],rgbs[i+1]],n=i<rem?base+1:base; for(let k=0;k<n;k++){ const t=n>1?k/(n-1):0; grad.push(rgbToHex(interpolate(s,e,t))+'FF'); if(++cnt>=steps)break;} } return grad.slice(0,steps); }
  function textToGrad(text,cols,smooth,strip){ const steps=text.length; const grad = smooth?generateGradient(cols,steps):Array.from(text).map((_,i)=>cols[Math.floor(i*cols.length/steps)].replace('#','')+'FF'); return Array.from(text).map((ch,i)=>(ch===' '&&strip)?ch:`<FG${grad[i]}>${ch}`).join(''); }
  function updatePreview(text,cols,smooth,strip){ const grad=smooth?generateGradient(cols,text.length):Array.from(text).map((_,i)=>cols[Math.floor(i*cols.length/text.length)].replace('#','')+'FF'); const spans=Array.from(text).map((ch,i)=>{ if(ch===' '&&strip)return ' '; const hex=grad[i].slice(0,6); return `<span style="color:#${hex}">${ch}</span>`; }).join(''); document.getElementById('preview').innerHTML=spans; }
  function setColorInputs(cols){ document.getElementById('numColors').value = cols.length; const cont=document.getElementById('colorInputs'); cont.innerHTML=''; cols.forEach(c=>{ const ip=document.createElement('input'); ip.type='color'; ip.value=c; ip.addEventListener('input',updateAll); cont.appendChild(ip);} ); }
  function enforceLimit(str){ const warn=document.getElementById('warning'); if(str.length>200){ let msg='Output truncated to 200 chars.'; if(!document.getElementById('stripSpaces').checked) msg+=' Consider checking "Don\'t color spaces".'; warn.textContent=msg; return str.slice(0,200);} warn.textContent=''; return str; }
  function downloadText(filename,text){ const b=new Blob([text],{type:'text/plain'}),u=URL.createObjectURL(b),a=document.createElement('a'); a.href=u; a.download=filename; a.click(); URL.revokeObjectURL(u); }
  function updateAll(){ let cols=Array.from(document.querySelectorAll('#colorInputs input[type="color"]')).map(i=>i.value); const num=parseInt(document.getElementById('numColors').value,10); while(cols.length<num) cols.push('#ffffff'); if(cols.length>num) cols.splice(num); setColorInputs(cols);
    const text=document.getElementById('text').value; const smooth=document.getElementById('smooth').checked; const strip=document.getElementById('stripSpaces').checked;
    let out=textToGrad(text,cols,smooth,strip); out=enforceLimit(out); document.getElementById('output').value=out; updatePreview(text,cols,smooth,strip);
  }
  function copyOut(){ const ta=document.getElementById('output'); ta.select(); document.execCommand('copy'); }

  document.getElementById('upload-palettes').addEventListener('change',e=>{ const f=e.target.files[0]; if(!f)return; const fr=new FileReader(); fr.onload=()=>{ try{ const j=JSON.parse(fr.result); palettes={...DEFAULT_PALETTES,...j}; populatePalettes(); }catch{} }; fr.readAsText(f);} );
  function populatePalettes(){ const sel=document.getElementById('heroPalette'); sel.innerHTML='<option value="">-- None --</option>'; Object.entries(palettes).forEach(([k,v])=>{ const o=document.createElement('option'); o.value=v.join(','); o.textContent=k; sel.appendChild(o);} ); }
  document.getElementById('heroPalette').addEventListener('change',e=>{ if(e.target.value) setColorInputs(e.target.value.split(',')); updateAll(); });
  document.getElementById('text').addEventListener('input',updateAll);
  document.getElementById('smooth').addEventListener('change',updateAll);
  document.getElementById('stripSpaces').addEventListener('change',updateAll);
  document.getElementById('numColors').addEventListener('input',updateAll);
  document.getElementById('generate').addEventListener('click',updateAll);
  document.getElementById('copy').addEventListener('click',copyOut);
    document.getElementById('download-script').addEventListener('click', () => {
        fetch('ow_gradient.py')
            .then(response => {
                if (!response.ok) throw new Error('File not found');
                return response.blob();
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'ow_gradient.py';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            })
            .catch(() => alert('Could not download ow_gradient.py'));
    });
    document.getElementById('download-palettes-btn').addEventListener('click',()=>downloadText('palettes.json',JSON.stringify(palettes,null,2)));
  // init
  populatePalettes(); setColorInputs(Object.values(palettes)[0]); updateAll();