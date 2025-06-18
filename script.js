
function submitData() {
  const data = document.getElementById("submitBox").value.trim();
  if (!data) {
    alert("ফাঁকা ডাটা জমা দেওয়া যাবে না!");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbzdvPpGe1rdweYYbUA9pK0JlH2zHfSU7wldzQQFov3qk0opTqVa4zH4c6ispDreTrx0/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
  .then((res) => res.text())
  .then((txt) => {
    document.getElementById("response").innerText = txt;
    document.getElementById("submitBox").value = "";
  })
  .catch((err) => {
    document.getElementById("response").innerText = "❌ সমস্যা হয়েছে, আবার চেষ্টা করুন";
  });
}
