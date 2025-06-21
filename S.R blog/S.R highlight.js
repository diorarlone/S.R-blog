// Very basic SR syntax highlighter
document.querySelectorAll('pre.sr code').forEach((block) => {
    let code = block.textContent;
    // Keywords (add as needed)
    code = code.replace(/\b(lane|pile|base|hpht\.runcode)\b/g, '<span class="keyword">$1</span>');
    // Types (capitals with ^ or .)
    code = code.replace(/([A-Z_]+\^|[A-Z_]+\.)/g, '<span class="type">$1</span>');
    // Strings
    code = code.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
    // Functions (o.p, o.P)
    code = code.replace(/\bo\.p\b|\bo\.P\b/g, '<span class="func">$&</span>');
    block.innerHTML = code;
});