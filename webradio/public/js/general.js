function imgDefault(s, w, h, text) {
    //s.src = "http://placehold.it/" + w + "x" + h + (text ? ('?text=' + text.replace(' ', '+')) : '');
    s.src = 'https://dummyimage.com/' + w + 'x' + h + '/ddd/969696' + (text ? ('&text=' + text.replace(' ', '+')) : '');
    s.onerror = null;
    return true;
}
