export default function circularProgressIndicator(radius, width, height, strokeWidth, strokeColor) {

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'circular-progress-indicator');
    svg.setAttribute('width', width + 'px');
    svg.setAttribute('height', height + 'px');

    let arc = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    if (strokeColor) arc.setAttribute('stroke', strokeColor);
    arc.setAttribute('fill', 'none');
    arc.setAttribute('stroke-width', strokeWidth + 'px');
    
    let animate = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
    animate.setAttribute('attributeName', 'd');
    animate.setAttribute('dur', '4s');
    animate.setAttribute('repeatCount', 'indefinite');


    const polarToCartesian = (centerX, centerY, radius, angle) => {
        var angleInRadians = (angle - 90) * Math.PI / 180.0;
    
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }
    const createArc = (x, y, radius, startAngle, endAngle) => {
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y, ";"
        ].join(" ");
    
        return d; 
    }

    var x = width / 2;
    var y = height / 2;
    var r = radius;

    var values = '';
    for (let i = 0; i < 30; i += 0.1) {
        let start = i + 30;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 30; i < 90; i += 0.1) {
        let start = i * 5 - 90;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 90; i < 175; i += 0.1) {
        let start = i * 2 + 180;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 175; i < 180; i += 0.1) {
        let start = i + 355;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 180; i < 240; i += 0.1) {
        let start = i + 355;
        let end = i * 5 - 720;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 240; i < 325; i += 0.1) {
        let start = i + 355;
        let end = i * 2;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 325; i < 575; i += 0.1) {
        let start = i + 355;
        let end = i + 325; 
        values += createArc(x, y, r, end, start);
    }

    for (let i = 180; i < 210; i += 0.1) {
        let start = i + 30;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 210; i < 270; i += 0.1) {
        let start = i * 5 - 810;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 270; i < 355; i += 0.1) {
        let start = i * 2;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 355; i < 360; i += 0.1) {
        let start = i + 355;
        let end = i;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 360; i < 420; i += 0.1) {
        let start = i + 355;
        let end = i * 5 - 1440;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 60; i < 145; i += 0.1) {
        let start = i + 355;
        let end = i * 2 + 180;
        values += createArc(x, y, r, end, start);
    }
    for (let i = 145; i < 395; i += 0.1) {
        let start = i + 355;
        let end = i + 325;
        values += createArc(x, y, r, end, start);
    }

    animate.setAttribute('values', values);
    arc.append(animate);
    svg.append(arc);

    return svg;
}