!function(){const e=document.getElementById("sidebarToggle"),t=(document.getElementById("sidebar"),document.getElementById("page")),o=document.body;function c(){o.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}e.addEventListener("click",(e=>{o.classList.contains("show-sidebar")?c():function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",c),t.appendChild(e),o.classList.add("show-sidebar")}()}))}(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,o=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function s(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),t.classList.remove("no-scroll")}),200)}e.forEach((e=>{e.addEventListener("click",(e=>{let o=e.currentTarget.getAttribute("data-modal"),c=document.getElementById(o),s=c.querySelector(".modal__content");s.addEventListener("click",(e=>{e.stopPropagation()})),c.classList.add("show"),t.classList.add("no-scroll"),setTimeout((()=>{s.style.transform="none",s.style.opacity="1"}),2)}))})),o.forEach((e=>{e.addEventListener("click",(e=>{s(e.currentTarget.closest(".modal"))}))})),c.forEach((e=>{e.addEventListener("click",(e=>{s(e.currentTarget)}))}))}(),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let o=e.target;o.style.height=t+"px",o.style.height=o.scrollHeight+"px"}))}));