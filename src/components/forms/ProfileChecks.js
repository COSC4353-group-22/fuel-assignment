function EmptyCheck(fn, ln, a, a2, cit, zip, st) {
    if (fn == "" || ln == "" || a == "" || cit == "" || zip == "" || st == ""){
        return false;
    }
    else {
        return true;
    }
}

exports.EmptyCheck = EmptyCheck