const products = [
  {id:1,name:"Real Madrid",type:"Player",category:"Club",price:120,color:"#f1f1eb",ink:"#18345a",label:"REAL MADRID"},
  {id:2,name:"Barcelona",type:"Player",category:"Club",price:120,color:"linear-gradient(90deg,#153a8c 0 48%,#a52b45 48%)",ink:"#fff",label:"BARÇA"},
  {id:3,name:"Manchester United",type:"Player",category:"Club",price:120,color:"#c51d2c",ink:"#fff",label:"MAN UNITED"},
  {id:4,name:"Chelsea",type:"Player",category:"Club",price:120,color:"#1553a5",ink:"#fff",label:"CHELSEA"},
  {id:5,name:"Arsenal",type:"Lacoste",category:"Club",price:160,color:"#c9272e",ink:"#fff",label:"ARSENAL"},
  {id:6,name:"Liverpool",type:"Player",category:"Club",price:120,color:"#c41d2d",ink:"#fff",label:"LIVERPOOL"},
  {id:7,name:"Ghana",type:"Player",category:"National",price:120,color:"#e6bd28",ink:"#b51d1d",label:"GHANA"},
  {id:8,name:"Nigeria",type:"Lacoste",category:"National",price:160,color:"#f1f4f0",ink:"#138a4b",label:"NIGERIA"},
  {id:9,name:"France",type:"Player",category:"National",price:120,color:"#1e3f8d",ink:"#fff",label:"FRANCE"},
  {id:10,name:"Brazil",type:"Lacoste",category:"National",price:160,color:"#f0ce23",ink:"#087044",label:"BRAZIL"},
  {id:11,name:"Inter Miami",type:"Player",category:"Club",price:120,color:"#f2a6bf",ink:"#111",label:"INTER MIAMI"},
  {id:12,name:"Paris Saint-Germain",type:"Player",category:"Club",price:120,color:"#111b38",ink:"#fff",label:"PSG"}
];
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
  let list=products.filter(p=>(currentFilter==="All"||p.category===currentFilter||p.type===currentFilter)&&
    (p.name.toLowerCase().includes(q)||p.label.toLowerCase().includes(q)||p.type.toLowerCase().includes(q)));
  const sort=$("#sortSelect").value;
  if(sort==="low") list.sort((a,b)=>a.price-b.price);
  if(sort==="high") list.sort((a,b)=>b.price-a.price);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  $("#products").innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-image"><span class="sample">SAMPLE IMAGE</span>${shirtHTML(p)}</div>
      <div class="product-body">
        <h3>${p.name}</h3><div class="meta">${p.type} · ${p.category}</div>
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
