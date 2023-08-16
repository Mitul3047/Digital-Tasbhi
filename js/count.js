
    // Button 1
    const counterElement1 = document.getElementById("counter");
    const incrementBtn1 = document.getElementById("incrementBtn");
    const decrementBtn1 = document.getElementById("decrementBtn");

    let counterValue1 = 0;

    incrementBtn1.addEventListener("click", function() {
        if (counterValue1 < 33) {
            counterValue1++;
            counterElement1.textContent = counterValue1;
        } else {
          alert("You have reached the maximum number of tasbih.");
        }
    });

    decrementBtn1.addEventListener("click", function() {
        if (counterValue1 > 0) {
            counterValue1--;
            counterElement1.textContent = counterValue1;
        }else {
          alert("The counter value cannot be less than 0.");
        }
    });

    // Button 2
    const counterElement2 = document.getElementById("counter2");
    const incrementBtn2 = document.getElementById("incrementBtn2");
    const decrementBtn2 = document.getElementById("decrementBtn2");

    let counterValue2 = 0;

    incrementBtn2.addEventListener("click", function() {
        if (counterValue2 < 33) {
            counterValue2++;
            counterElement2.textContent = counterValue2;
        }else {
          alert("You have reached the maximum number of tasbih.");
        }
    });

    decrementBtn2.addEventListener("click", function() {
        if (counterValue2 > 0) {
            counterValue2--;
            counterElement2.textContent = counterValue2;
        }else {
          alert("The counter value cannot be less than 0.");
        }
    });

    // Button 3
    const counterElement3 = document.getElementById("counter3");
    const incrementBtn3 = document.getElementById("incrementBtn3");
    const decrementBtn3 = document.getElementById("decrementBtn3");

    let counterValue3 = 0;

    incrementBtn3.addEventListener("click", function() {
        if (counterValue3 < 33) {
            counterValue3++;
            counterElement3.textContent = counterValue3;
        }else {
          alert("You have reached the maximum number of tasbih.");
        }
    });

    decrementBtn3.addEventListener("click", function() {
        if (counterValue3 > 0) {
            counterValue3--;
            counterElement3.textContent = counterValue3;
        }else {
          alert("The counter value cannot be less than 0.");
        }
    });

