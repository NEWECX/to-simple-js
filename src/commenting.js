'use strict';

function commenting(javascript, comments) {
    let block = false;
    const lines = javascript.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (block) {
            if (line.startsWith(block)) {
                lines[i] = line;
                i++;
                lines.splice(i, 0, '*/');
                block = false;
            }
            continue;
        }
        for (const comment of comments) {
            const { starting, replacement, end } = comment;
            if (typeof starting === 'number' && starting === i) {
                lines[i] = replacement;
                i++;
                lines.splice(i, 0, line);
                break;
            } else if (line.startsWith(starting)) {
                if (end) {
                    lines[i] = replacement;
                    i++;
                    lines.splice(i, 0, line);
                    block = end;
                    break;
                } else {
                    lines[i] = line.replace(starting, replacement);
                }
            }
        }
    }
    return lines.join('\n');
}

module.exports = commenting;