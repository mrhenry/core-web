(function(undefined) {
if (!("document"in self&&"toggleAttribute"in document.documentElement
)) {
// Element.prototype.toggleAttribute
Element.prototype.toggleAttribute = function toggleAttribute(name, force) {
    if (force !== undefined) {
        force = !!force;
    }
    if (this.getAttribute(name) !== null) {
        if (force) {
            return true;
        }
        this.removeAttribute(name);
        return false;
    } else {
        if (force === false) {
            return false;
        }
        this.setAttribute(name, '');
        return true;
    }
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
