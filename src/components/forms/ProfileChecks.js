function CheckNotEmpty(user, fn, ln, a, a2, cit, zip, st) {
    if (user == "" || fn == "" || ln == "" || a == "" || cit == "" || zip == "" || st == ""){
        return false;
    }
    else {
        return true;
    }
}

exports.CheckNotEmpty = CheckNotEmpty