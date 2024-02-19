const allBtn = document.getElementsByClassName("btn-square");
let count = 0;
let sum=0;
let left = 40;
for(const btn of allBtn){
    btn.addEventListener("click", function event(e){
        // increasing seat count 
        count = count + 1;
        left = left-1;
        setInnerText("seat_count",count)
        setInnerText("left",left)
        e.target.style.background = "green";
        const seat = e.target.innerText;
        const price = document.getElementById("money").innerText;
        const selectedSeat = document.getElementById("selected_seat");
        const li = document.createElement("li");
        const p = document.createElement("p");
         p.innerText = seat;
        const p2 = document.createElement("p");
         p2.innerText = "Economy";
        const p3 = document.createElement("p");
         p3.innerText = price;
         li.appendChild(p);
         li.appendChild(p2);
         li.appendChild(p3);
         selectedSeat.appendChild(li);
         const totalCost = document.getElementById("total_cost").innerText;
         const convertedTotalCost = parseInt(totalCost);
          sum = convertedTotalCost + parseInt(price);
         if(count > 4){
            alert("you can't buy more.");
            sum = sum - 550;
            return sum;
        }
         setInnerText("total_cost", sum); 
    })
}



const button = document.getElementById("apply_btn");
button.addEventListener("click", function(e){
    //get the input
    const couponElement = document.getElementById("input_field").value;
    const couponCode = couponElement.split(" ").join("").toLowerCase();
    if(sum>=2200){
        if(couponCode === "new15" ){
            const discount = document.getElementById("grand_total");
            const amount = sum * 0.15;
            discount.innerText = (sum - amount).toFixed(2);
            document.getElementById("input_field").classList.add("hidden")
        }else if(couponCode === "couple20"){
            const discount = document.getElementById("grand_total");
            const amount = sum * 0.2;
            discount.innerText = (sum - amount).toFixed(2);
            document.getElementById("input_field").classList.add("hidden")
        }
        else{
            alert("invalid coupon")
            document.getElementById("input_field").value="";
        }
    }
});

applyBtn.addEventListener("input", ()=>{
    if(document.getElementById("input_field").value.length >=0){
        apply_btn.removeAttribute('disabled')
    }
})

loginForm.addEventListener("input", () =>{
    if(document.getElementById("name").value.length > 0 && document.getElementById("number").value.length > 0 && document.getElementById("mail").value.length > 0){
        nextBtn.removeAttribute('disabled');
    }else{
        nextBtn.setAttribute('disabled', 'disabled')
    }
})
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
