function pat(a) {
    const b = parseInt(a)
    let k = 0
    for (let i = 0; i<b; i++) {
        for (let j = 0; j < b; j++)
            document.write(`${String.fromCharCode(k++)}\t`)
        document.write('<br>')
    }
}