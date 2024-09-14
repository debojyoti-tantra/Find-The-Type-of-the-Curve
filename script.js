console.log("Let's write JS");

function checkTheParameters() {
    const a = parseFloat(document.querySelector("#a").value);
    const h = parseFloat(document.querySelector("#h").value);
    const b = parseFloat(document.querySelector("#b").value);
    const g = parseFloat(document.querySelector("#g").value);
    const f = parseFloat(document.querySelector("#f").value);
    const c = parseFloat(document.querySelector("#c").value);

    let mat = [
        [a,h,g],
        [h,b,f],
        [g,f,c]
    ]

    let det = a * (b * c - f * f) - h * (h * c - g * f) + g * (h * f - b * g);    
    
    let D = a*b - h**2

    let AsumB = a + b;
    let AdiffB = (AsumB**2 - 4*D)**(1/2)


    let main2Div = document.querySelector(".main2");
    
    if (isNaN(a) || isNaN(h) || isNaN(b) || isNaN(g) || isNaN(f) || isNaN(c)) {
        main2Div.innerHTML = `<section style="color: red">Please Enter complete data</section>`
        main2Div.style.display="block";
    } else if (det === 0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a pair of Straight Line</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    } else if (det !== 0 && D>0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a Ellipse</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    } else if (det !== 0 && a+b!==0 && D<0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a Hyperbola</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    } else if (det !== 0 && a+b===0 && D<0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a Rectangular Hyperbola</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    } else if (det !== 0 && D===0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a Parabola</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    } else if (det !== 0 && a===b && h===0) {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} * ${c} - ${f} * ${f}) - ${h}(${h} * ${c} - ${g} * ${f}) + ${g}(${h} * ${f} - ${b} * ${g})</div>
        <div class="deltaa">Delta = ${det}</div>
        <div class="D">D = ${D}</div>
        <div class="type">The given Equation represents a Circle</div>
        <div class="AsumB">A + B = a + b = ${a+b}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB">A - B = +${AdiffB} or -${AdiffB}</div>`
        main2Div.style.display="block";
    }
}
