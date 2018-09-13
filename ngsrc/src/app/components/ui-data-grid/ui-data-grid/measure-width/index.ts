export const measureText = (text: string): number => {
    const els = document.getElementsByClassName("handsontable");

    if (els.length === 0) {
        return 0;
    }

    const c = els.item(0) as HTMLDivElement;

    const s = document.createElement("div");
    s.innerText = text;

    s.style.position = "absolute";
    s.style.bottom = "0";
    s.style.right = "0";
    s.style.width = "auto";
    s.style.height = "auto";
    s.style.background = "red";
    s.style.color = "white";
    s.style.zIndex = "1000";

    c.appendChild(s);
    const w = s.offsetWidth;
    c.removeChild(s);

    return w;

};
