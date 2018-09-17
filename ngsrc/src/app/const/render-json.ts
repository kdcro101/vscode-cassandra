
export interface RenderJsonOptions {
    sort_objects?: boolean;
    collapse_msg?: string;
    property_list?: any[];
    show_to_level?: number;
    max_string_length?: number;
    replacer?: Function;
    show?: string;
    hide?: string;
}

const append = (...args: Array<DocumentFragment | HTMLElement | Text | any[]>) => {
    // const el = Array.prototype.shift.call(arguments);
    const el: HTMLElement = args.shift() as HTMLElement;

    for (let a = 0; a < args.length; a++) {
        if (args[a].constructor === Array) {
            append.apply(this, [el].concat(args[a] as any));
        } else {
            el.appendChild(args[a] as any);
        }
    }
    return el;
};

function _renderjson(json, indent, dont_indent, show_level, options, onChange: () => void) {
    const my_indent = dont_indent ? "" : indent;
    const themetext = (...args: string[]) => {
        const spans: Array<Text | HTMLElement> = [];
        while (args.length) {
            spans.push(append(span(args.shift()), text(args.shift())));
        }
        return spans;
    };

    const prepend = (el, child) => {
        el.insertBefore(child, el.firstChild);
        return el;
    };
    const isempty = (obj: any, pl: string[]) => {
        const keys = pl || Object.keys(obj);
        for (const i in keys) { if (Object.hasOwnProperty.call(obj, keys[i])) { return false; } }
        return true;
    };
    const text = (txt: string) => document.createTextNode(txt);
    // const div = function () { return document.createElement("div"); };
    const span = (classname?: string) => {
        const s = document.createElement("span");
        if (classname) { s.className = classname; }
        return s;
    };
    const A = (txt: string, classname: string, callback: () => void) => {
        const a = document.createElement("a");
        if (classname) { a.className = classname; }
        a.appendChild(text(txt));
        a.href = "#";
        a.onclick = (e) => {
            callback();
            if (e) {
                e.stopPropagation();
            }
            if (onChange) {
                setTimeout(() => onChange());
            }
            return false;
        };
        return a;
    };
    const disclosure = (open: string, placeholder: string, close: string, type: string, builder) => {
        let content;
        const empty = span(type);
        const show = function () {
            if (!content) {
                append(empty.parentNode as HTMLElement,
                    content = prepend(builder(),
                        A(options.hide, "disclosure",
                            function () {
                                content.style.display = "none";
                                empty.style.display = "inline";
                            })));
            }
            content.style.display = "inline";
            empty.style.display = "none";
        };
        append(empty,
            A(options.show, "disclosure", show),
            themetext(type + " syntax", open),
            A(placeholder, null, show),
            themetext(type + " syntax", close));

        const el = append(span(), text(my_indent.slice(0, -1)), empty);
        if (show_level > 0 && type !== "string") {
            show();
        }
        return el;
    };

    if (json === null) { return themetext(null, my_indent, "keyword", "null"); }
    if (json === void 0) { return themetext(null, my_indent, "keyword", "undefined"); }

    if (typeof (json) === "string" && json.length > options.max_string_length) {
        return disclosure("\"", json.substr(0, options.max_string_length) + " ...", "\"", "string", function () {
            return append(span("string"), themetext(null, my_indent, "string", JSON.stringify(json)));
        });
    }

    if (typeof (json) !== "object" || [Number, String, Boolean, Date].indexOf(json.constructor) >= 0) { // Strings, numbers and bools
        return themetext(null, my_indent, typeof (json), JSON.stringify(json));
    }

    if (json.constructor === Array) {
        if (json.length === 0) { return themetext(null, my_indent, "array syntax", "[]"); }

        return disclosure("[", options.collapse_msg(json.length), "]", "array", function () {
            const as = append(span("array"), themetext("array syntax", "[", null, "\n"));
            for (let i = 0; i < json.length; i++) {
                append(as,
                    _renderjson(options.replacer.call(json, i, json[i]), indent + "    ", false, show_level - 1, options, onChange),
                    i !== json.length - 1 ? themetext("syntax", ",") : [],
                    text("\n"));
            }
            append(as, themetext(null, indent, "array syntax", "]"));
            return as;
        });
    }

    // object
    if (isempty(json, options.property_list)) {
        return themetext(null, my_indent, "object syntax", "{}");
    }

    return disclosure("{", options.collapse_msg(Object.keys(json).length), "}", "object", function () {
        const os = append(span("object"), themetext("object syntax", "{", null, "\n"));
        let last;
        // tslint:disable-next-line:forin
        for (const k in json) {
            last = k;
        }
        let keys = options.property_list || Object.keys(json);
        if (options.sort_objects) {
            keys = keys.sort();
        }
        // tslint:disable-next-line:forin
        for (const i in keys) {
            const k = keys[i];
            if (!(k in json)) { continue; }
            append(os, themetext(null, indent + "    ", "key", "\"" + k + "\"", "object syntax", ": "),
                _renderjson(options.replacer.call(json, k, json[k]), indent + "    ", true, show_level - 1, options, onChange),
                k !== last ? themetext("syntax", ",") : [],
                text("\n"));
        }
        append(os, themetext(null, indent, "object syntax", "}"));
        return os;
    });
}

export class RenderJson {

    public static options: RenderJsonOptions = {};

    public static render(json: any, onChange?: () => void) {
        const options = new Object(RenderJson.options) as any;
        options.replacer = typeof (options.replacer) === "function" ? options.replacer : function (k, v) { return v; };
        // const pre = append(document.createDocumentFragment(), _renderjson(json, "", false, options.show_to_level, options, onChange));
        const pre = append(document.createElement("pre"), _renderjson(json, "", false, options.show_to_level, options, onChange));
        pre.className = "renderjson";
        return pre;
    }

    public static set_icons(show, hide) {
        RenderJson.options.show = show;
        RenderJson.options.hide = hide;
        return RenderJson;
    }
    public static set_show_to_level(level) {
        RenderJson.options.show_to_level = typeof level === "string" &&
            level.toLowerCase() === "all" ? Number.MAX_VALUE
            : level;
        return RenderJson;
    }
    public static set_max_string_length = function (length) {
        RenderJson.options.max_string_length = typeof length === "string" &&
            length.toLowerCase() === "none" ? Number.MAX_VALUE
            : length;
        return RenderJson;
    };
    public static set_sort_objects(sort_bool: boolean) {
        RenderJson.options.sort_objects = sort_bool;
        return RenderJson;
    }
    public static set_replacer(replacer) {
        RenderJson.options.replacer = replacer;
        return RenderJson;
    }
    public static set_collapse_msg(collapse_msg) {
        RenderJson.options.collapse_msg = collapse_msg;
        return RenderJson;
    }
    public static set_property_list(prop_list) {
        RenderJson.options.property_list = prop_list;
        return RenderJson;
    }
    // Backwards compatiblity. Use set_show_to_level() for new code.
    public static set_show_by_default(show) {
        RenderJson.options.show_to_level = show ? Number.MAX_VALUE : 0;
        return RenderJson;
    }

}
RenderJson.set_icons("⊕", "⊖");
RenderJson.set_show_by_default(false);
RenderJson.set_sort_objects(false);
RenderJson.set_max_string_length("none");
RenderJson.set_replacer(void 0);
RenderJson.set_property_list(void 0);
RenderJson.set_collapse_msg(function (len) { return len + " item" + (len === 1 ? "" : "s"); });
