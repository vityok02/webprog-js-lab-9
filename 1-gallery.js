import{S as a}from"./assets/vendor-CgTBfC_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();new a(".gallery-item a",{captionsData:"alt",captionDelay:250});let c=[];for(let o=0;o<9;o++){let t={preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"};c.push(t)}const n={gallery:document.querySelector(".gallery")};function p(o){return o.map(({preview:t,original:l,description:i})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${l}">
                        <img class="gallery-image" src="${t}" alt="${i}" />
                    </a>
                </li>
            `).join("")}n.gallery.innerHTML=p(c);
//# sourceMappingURL=1-gallery.js.map
