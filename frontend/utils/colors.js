const colors = [
    ['#0b4971', '#046293', '#0077b5', '#008cc9', '#00a0dc', '#34b3e4', '#68c7ec', '#9bdaf3', '#cfedfb'],
    ['#593482', '#66418c', '#7b539d', '#8d6cab', '#a487ba', '#b79ec7', '#cab5d5', '#ddcce2', '#f0e3ef'],
    ['#98041b', '#af1923', '#c9342f', '#dd5143', '#ef6c5a', '#f38a78', '#f7a897', '#fec9b8', '#ffe2d2'],
    ['#933304', '#a8480c', '#bd5c14', '#d1711b', '#e68523', '#ec9f48', '#f3b86d', '#f9d291', '#ffebb6'],
    ['#0e5c68', '#14717b', '#1a858e', '#219aa0', '#00aeb3', '#57bfc1', '#80ced0', '#a9dddd', '#d2eceb'],
    ['#856a1d', '#9e7c21', '#b98d27', '#d3a02e', '#edb220', '#f0c23b', '#f4d161', '#f7df8c', '#faf0b5'],
    ['#951343', '#ac2258', '#c73774', '#dc4b89', '#ee62a2', '#f289b7', '#f6a8ca', '#f7c8de', '#fbe2ed'],
    ['#3f652d', '#4c792d', '#5b912d', '#69a62a', '#7cb82f', '#92c749', '#b0d775', '#cee4a3', '#e5efc7'],
    ['#3a3c3e', '#4d4f51', '#606264', '#737577', '#86888a', '#9d9fa1', '#b3b5b7', '#caccce', '#e0e2e4']
]

export function getColor(id, stepByGroup) {

    id = stepByGroup ? (id + 18) % 81 : id % 81;
    const x = id % 9;
    const y = Math.floor(id / 9);
    return stepByGroup ? colors[x][y] : colors[y][x];
}