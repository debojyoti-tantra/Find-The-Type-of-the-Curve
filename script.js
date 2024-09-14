console.log("Let's write JS");

function twoDPs(value) {
    // Check if the value is a decimal
    if (value % 1 !== 0) {
        return parseFloat(value.toFixed(2)); // Convert to 2 decimal places
    }
    return value; // Return the integer as is
}

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
    let AdiffB = twoDPs((AsumB**2 - 4*D)**(1/2))
    let valueOfA = twoDPs((AsumB + AdiffB)/2)
    let valueOfB = twoDPs((AsumB - AdiffB)/2)
    let valueofa2 = twoDPs((AsumB - AdiffB)/2)
    let valueofb2 = twoDPs((AsumB + AdiffB)/2)
    let detDivD = twoDPs(det/D)
    let coeffX1 = twoDPs(-detDivD/valueOfA)
    let coeffX2 = twoDPs(-detDivD/valueofa2)
    let coeffY1 = twoDPs(-detDivD/valueOfB)
    let coeffY2 = twoDPs(-detDivD/valueofb2)

    let main2Div = document.querySelector(".main2");
    let equationType;
    
    if (isNaN(a) || isNaN(h) || isNaN(b) || isNaN(g) || isNaN(f) || isNaN(c)) {
        main2Div.innerHTML = `<section style="color: red">Please Enter complete data</section>`
        main2Div.style.display="block";
    } else {
        main2Div.innerHTML = `
        <div class="delta">Delta = ${a}(${b} x ${c} - ${f} x ${f}) - ${h}(${h} x ${c} - ${g} x ${f}) + ${g}(${h} x ${f} - ${b} x ${g})</div>
        <div class="deltaa" style="color: #0e1c78;">Delta = ${det}</div>
        <div class="D" style="color: #0e1c78;">D = ${D}</div>`
        main2Div.style.display="block";
        // document.querySelector(".deltaa .D").style.color="#202b75"

        if (det === 0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a pair of Straight Line</div>`
        } else if (det !== 0 && D>0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a Ellipse</div>`
            equationType = "Ellipse"
        } else if (det !== 0 && a+b!==0 && D<0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a Hyperbola</div>`
            equationType = "Hyperbola"
        } else if (det !== 0 && a+b===0 && D<0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a Rectangular Hyperbola</div>`
            equationType = "Hyperbola"
        } else if (det !== 0 && D===0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a Parabola</div>`
        } else if (det !== 0 && a===b && h===0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div class="type">The given Equation represents a Circle</div>`
        }
        document.querySelector(".type").style.color="#870005"
        
        main2Div.innerHTML = main2Div.innerHTML + `
        <div class="AsumB" style="color: #4b0354;">A + B = a + b = ${AsumB}</div>
        <div class="AB">A.B = ab - h² = ${D}</div>
        <div class="AdiffB" style="color: #4b0354;">A - B = +${AdiffB} or -${AdiffB}</div>
        <div class="valueOf" style="color: #004212;">
            <div class="valueOf1">If A - B = +${AdiffB}:<br>A = ${valueOfA}<br>B = ${valueOfB}</div>
        <div class="valueOf2">If A - B = -${AdiffB}:<br>A = ${valueofa2}<br>B = ${valueofb2}</div>
        </div>
        `
        document.querySelector(".valueOf").style.gap="15px"
        
        if (D>0 || D<0) {
            main2Div.innerHTML = main2Div.innerHTML + `
            <div>The Equation of ${equationType} is:</div>
            <div>(${valueOfA})X² + (${valueOfB})Y² + (${detDivD}) = 0 <br> X²/(${coeffX1}) + Y²/(${coeffY1}) = 1 <br>or,</div>
            <div>(${valueofa2})X² + (${valueofb2})Y² + (${detDivD}) = 0 <br> X²/(${coeffX2}) + Y²/(${coeffY2}) = 1</div>
            `
        }
    }
    
}