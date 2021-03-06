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
            const { starting, replacement, insert, append, end } = comment;
            if (typeof starting === 'number' && starting === i) {
                lines[i] = replacement;
                i++;
                lines.splice(i, 0, line);
            } else if (line.startsWith(starting)) {
                if (insert) {
                    lines[i] = insert;
                    i++;
                    lines.splice(i, 0, line);
                } else if (append) {
                    i++;
                    lines.splice(i, 0, append);
                } else if (end) {
                    lines[i] = replacement;
                    i++;
                    lines.splice(i, 0, line);
                    block = end;
                } else {
                    lines[i] = line.replace(starting, replacement);
                }
            }
        }
    }
    return lines.join('\n');
}

module.exports = commenting;