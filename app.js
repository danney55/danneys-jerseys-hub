const products = [{"id":1,"name":"Arsenal","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#d91f2b","ink":"#fff","label":"ARSENAL","tag":"HOME PREVIEW"},{"id":2,"name":"Arsenal","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#111","label":"ARSENAL","tag":"AWAY PREVIEW"},{"id":3,"name":"Aston Villa","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#7a1734","ink":"#fff","label":"ASTON VILLA","tag":"HOME PREVIEW"},{"id":4,"name":"Aston Villa","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f2efe6","ink":"#111","label":"ASTON VILLA","tag":"AWAY PREVIEW"},{"id":5,"name":"Chelsea","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#0b4ea2","ink":"#fff","label":"CHELSEA","tag":"HOME PREVIEW"},{"id":6,"name":"Chelsea","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f4f4f4","ink":"#111","label":"CHELSEA","tag":"AWAY PREVIEW"},{"id":7,"name":"Liverpool","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#c8102e","ink":"#fff","label":"LIVERPOOL","tag":"HOME PREVIEW"},{"id":8,"name":"Liverpool","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f5f5f5","ink":"#111","label":"LIVERPOOL","tag":"AWAY PREVIEW"},{"id":9,"name":"Manchester City","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#6cabdd","ink":"#062a4b","label":"MANCHESTER CITY","tag":"HOME PREVIEW"},{"id":10,"name":"Manchester City","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"MANCHESTER CITY","tag":"AWAY PREVIEW"},{"id":11,"name":"Manchester United","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#da291c","ink":"#fff","label":"MANCHESTER UNITED","tag":"HOME PREVIEW"},{"id":12,"name":"Manchester United","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"MANCHESTER UNITED","tag":"AWAY PREVIEW"},{"id":13,"name":"Newcastle United","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"NEWCASTLE UNITED","tag":"HOME PREVIEW"},{"id":14,"name":"Newcastle United","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f4f4f4","ink":"#111","label":"NEWCASTLE UNITED","tag":"AWAY PREVIEW"},{"id":15,"name":"Tottenham Hotspur","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#132257","label":"TOTTENHAM HOTSPUR","tag":"HOME PREVIEW"},{"id":16,"name":"Tottenham Hotspur","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#142b56","ink":"#fff","label":"TOTTENHAM HOTSPUR","tag":"AWAY PREVIEW"},{"id":17,"name":"West Ham United","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#7a263a","ink":"#2d9ad6","label":"WEST HAM UNITED","tag":"HOME PREVIEW"},{"id":18,"name":"West Ham United","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f3f3f3","ink":"#111","label":"WEST HAM UNITED","tag":"AWAY PREVIEW"},{"id":19,"name":"Everton","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#003399","ink":"#fff","label":"EVERTON","tag":"HOME PREVIEW"},{"id":20,"name":"Everton","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f2f2f2","ink":"#111","label":"EVERTON","tag":"AWAY PREVIEW"},{"id":21,"name":"Real Madrid","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#183b6b","label":"REAL MADRID","tag":"HOME PREVIEW"},{"id":22,"name":"Real Madrid","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#0d2a4f","ink":"#fff","label":"REAL MADRID","tag":"AWAY PREVIEW"},{"id":23,"name":"Barcelona","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#153b8f","ink":"#a52c45","label":"BARCELONA","tag":"HOME PREVIEW"},{"id":24,"name":"Barcelona","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#f0b52a","ink":"#111","label":"BARCELONA","tag":"AWAY PREVIEW"},{"id":25,"name":"Atletico Madrid","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#d71920","ink":"#fff","label":"ATLETICO MADRID","tag":"HOME PREVIEW"},{"id":26,"name":"Atletico Madrid","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#17233f","ink":"#fff","label":"ATLETICO MADRID","tag":"AWAY PREVIEW"},{"id":27,"name":"Athletic Club","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#ee1c25","ink":"#fff","label":"ATHLETIC CLUB","tag":"HOME PREVIEW"},{"id":28,"name":"Athletic Club","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"ATHLETIC CLUB","tag":"AWAY PREVIEW"},{"id":29,"name":"Bayern Munich","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#dc052d","ink":"#fff","label":"BAYERN MUNICH","tag":"HOME PREVIEW"},{"id":30,"name":"Bayern Munich","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#111","label":"BAYERN MUNICH","tag":"AWAY PREVIEW"},{"id":31,"name":"Borussia Dortmund","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#fdeb00","ink":"#111","label":"BORUSSIA DORTMUND","tag":"HOME PREVIEW"},{"id":32,"name":"Borussia Dortmund","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"BORUSSIA DORTMUND","tag":"AWAY PREVIEW"},{"id":33,"name":"Inter Milan","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#0b1f5b","ink":"#fff","label":"INTER MILAN","tag":"HOME PREVIEW"},{"id":34,"name":"Inter Milan","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#111","label":"INTER MILAN","tag":"AWAY PREVIEW"},{"id":35,"name":"AC Milan","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#e31b23","label":"AC MILAN","tag":"HOME PREVIEW"},{"id":36,"name":"AC Milan","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#111","label":"AC MILAN","tag":"AWAY PREVIEW"},{"id":37,"name":"Juventus","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#111","ink":"#fff","label":"JUVENTUS","tag":"HOME PREVIEW"},{"id":38,"name":"Juventus","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#fff","ink":"#111","label":"JUVENTUS","tag":"AWAY PREVIEW"},{"id":39,"name":"PSG","edition":"2026/27 Home","type":"Player Version","category":"Club","price":120,"color":"#071d49","ink":"#e30613","label":"PSG","tag":"HOME PREVIEW"},{"id":40,"name":"PSG","edition":"2026/27 Away","type":"Player Version","category":"Club","price":120,"color":"#e7edf5","ink":"#111","label":"PSG","tag":"AWAY PREVIEW"}];
let cart = JSON.parse(localStorage.getItem("djh_cart") || "[]");
let currentFilter = "All";
let search = "";

const $ = s => document.querySelector(s);
const money = n => `GH₵${Number(n).toLocaleString("en-GH")}`;

function shirtHTML(p, mini=false){
  return `<div class="${mini?"mini-shirt":"shirt"}" style="background:${p.color};color:${p.ink}">${p.label}</div>`;
}
function renderProducts(){
  const q=search.toLowerCase();
  let list=products.filter(p=>(currentFilter==="All"||p.category===currentFilter||p.type===currentFilter||p.edition.toLowerCase().includes(currentFilter.toLowerCase()))&&
    (p.name.toLowerCase().includes(q)||p.label.toLowerCase().includes(q)||p.type.toLowerCase().includes(q)));
  const sort=$("#sortSelect").value;
  if(sort==="low") list.sort((a,b)=>a.price-b.price);
  if(sort==="high") list.sort((a,b)=>b.price-a.price);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  $("#products").innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-image"><span class="sample">${p.tag} · ARTWORK PREVIEW</span>${shirtHTML(p)}</div>
      <div class="product-body">
        <h3>${p.name}</h3><div class="meta">${p.edition} · ${p.type}</div>
        <div class="price">${money(p.price)}</div>
        <select id="size-${p.id}" aria-label="Choose size"><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option></select>
        <div class="product-actions"><button class="add" onclick="addToCart(${p.id})">Add to cart</button><button class="wish" onclick="toggleWish(${p.id})">♡</button></div>
      </div>
    </article>`).join("");
  $("#emptyState").hidden=list.length!==0;
}
function addToCart(id){
  const size=$("#size-"+id)?.value||"M";
  const found=cart.find(x=>x.id===id&&x.size===size);
  if(found) found.qty++; else cart.push({id,size,qty:1});
  saveCart(); openCart();
}
function saveCart(){localStorage.setItem("djh_cart",JSON.stringify(cart));renderCart();updateCount();}
function updateCount(){$("#cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);}
function renderCart(){
  const box=$("#cartItems");
  if(!cart.length){box.innerHTML='<div class="cart-empty">Your cart is empty.<br>Find a jersey you love and add it here.</div>';$("#cartTotal").textContent=money(0);return;}
  let total=0;
  box.innerHTML=cart.map((item,i)=>{
    const p=products.find(x=>x.id===item.id); const sub=p.price*item.qty; total+=sub;
    return `<div class="cart-row">${shirtHTML(p,true)}<div><b>${p.name}</b><small>${p.type} · Size ${item.size}</small>
      <div class="qty"><button onclick="changeQty(${i},-1)">−</button><span>${item.qty}</span><button onclick="changeQty(${i},1)">+</button></div></div>
      <div><b>${money(sub)}</b><button class="remove" onclick="removeItem(${i})">Remove</button></div></div>`;
  }).join("");
  $("#cartTotal").textContent=money(total);
}
function changeQty(i,n){cart[i].qty+=n;if(cart[i].qty<=0)cart.splice(i,1);saveCart();}
function removeItem(i){cart.splice(i,1);saveCart();}
function openCart(){$("#cartDrawer").classList.add("open");$("#overlay").classList.add("show");}
function closeAll(){document.querySelectorAll(".modal.show").forEach(x=>x.classList.remove("show"));$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("show");}
function showModal(id){$("#"+id).classList.add("show");}
function toggleWish(id){let w=JSON.parse(localStorage.getItem("djh_wish")||"[]");w=w.includes(id)?w.filter(x=>x!==id):[...w,id];localStorage.setItem("djh_wish",JSON.stringify(w));}

function renderReviews(){
  const defaultReviews=[
    ["Kwame B.","★★★★★","Great selection and good prices."],
    ["Ama S.","★★★★★","I like the range of teams and styles."],
    ["Kofi M.","★★★★★","Easy ordering and friendly service."]
  ];
  const saved=JSON.parse(localStorage.getItem("djh_reviews")||"[]");
  const all=[...defaultReviews,...saved];
  $("#reviewGrid").innerHTML=all.map(r=>`<article class="review"><div class="review-top"><b>${escapeHTML(r[0])}</b><span class="stars">${r[1]}</span></div><p>“${escapeHTML(r[2])}”</p></article>`).join("");
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function checkoutTotal(){return cart.reduce((sum,x)=>{const p=products.find(y=>y.id===x.id);return sum+p.price*x.qty},0);}
function orderText(data){
  const lines=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `${p.name} — ${p.type} — Size ${x.size} — Qty ${x.qty} — ${money(p.price*x.qty)}`}).join("\n");
  return `NEW DANNEY'S JERSEYS HUB ORDER\n\nCustomer: ${data.name}\nPhone: ${data.phone}\nLocation: ${data.location}\nAddress: ${data.address}\nPayment: ${data.payment}\n\nITEMS:\n${lines}\n\nTOTAL: ${money(checkoutTotal())}\n\nPlease confirm availability and delivery fee for the stated location.`;
}

document.addEventListener("DOMContentLoaded",()=>{
  $("#year").textContent=new Date().getFullYear();
  renderProducts();renderCart();updateCount();renderReviews();

  $("#searchInput").addEventListener("input",e=>{search=e.target.value;renderProducts()});
  $("#sortSelect").addEventListener("change",renderProducts);
  document.querySelectorAll(".categories button").forEach(b=>b.addEventListener("click",()=>{currentFilter=b.dataset.filter;renderProducts();document.querySelector("#shop").scrollIntoView({behavior:"smooth"})}));
  $("#cartBtn").addEventListener("click",openCart);$("#overlay").addEventListener("click",closeAll);
  $("#checkoutBtn").addEventListener("click",()=>{if(!cart.length){alert("Your cart is empty.");return}closeAll();showModal("checkoutModal")});
  $("#accountBtn").addEventListener("click",()=>{const a=JSON.parse(localStorage.getItem("djh_account")||"null");if(a){$("#accountSaved").hidden=false;$("#accountSaved").textContent=`Saved account: ${a.name} (${a.email})`; } showModal("accountModal")});
  $("#addReviewBtn").addEventListener("click",()=>showModal("reviewModal"));
  $("#menuBtn").addEventListener("click",()=>$("#mobileMenu").classList.toggle("show"));
  document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",closeAll));

  $("#checkoutForm").addEventListener("submit",e=>{
    e.preventDefault();const data=Object.fromEntries(new FormData(e.target));
    const order=orderText(data);
    const subject=encodeURIComponent(`Jersey Order — ${data.name}`);
    const body=encodeURIComponent(order);
    localStorage.setItem("djh_last_order",JSON.stringify({data,order,date:new Date().toISOString()}));
    $("#orderSuccess").hidden=false;
    $("#orderSuccess").innerHTML=`<b>Order prepared!</b><br>Your email app will open with the order details. Please send the email to <b>danielamankwaah553@icloud.com</b> so Danney's Jerseys Hub can confirm availability and delivery.`;
    window.location.href=`mailto:danielamankwaah553@icloud.com?subject=${subject}&body=${body}`;
    cart=[];saveCart();
  });

  $("#accountForm").addEventListener("submit",e=>{
    e.preventDefault();const a=Object.fromEntries(new FormData(e.target));localStorage.setItem("djh_account",JSON.stringify(a));
    $("#accountSaved").hidden=false;$("#accountSaved").textContent=`Account saved on this device for ${a.name}.`;
  });
  $("#reviewForm").addEventListener("submit",e=>{
    e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const reviews=JSON.parse(localStorage.getItem("djh_reviews")||"[]");
    reviews.unshift([d.name,"★".repeat(Number(d.rating))+"☆".repeat(5-Number(d.rating)),d.text]);localStorage.setItem("djh_reviews",JSON.stringify(reviews));e.target.reset();closeAll();renderReviews();
  });
});
