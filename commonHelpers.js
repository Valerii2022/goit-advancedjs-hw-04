var m=Object.defineProperty;var p=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var f=(t,e,r)=>(p(t,typeof e!="symbol"?e+"":e,r),r),h=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var d=(t,e,r)=>(h(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)};import{a as y}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var i,c;class g{constructor(){u(this,i,"34628461-4bda2ae404146a46c3fd3a186");u(this,c,"https://pixabay.com/api/");f(this,"baseSearchParams",{key:d(this,i),image_type:"photo",orientation:"horizontal",safesearch:!0})}async fetchPhotos(e,r){try{const{data:a}=await y.get(`${d(this,c)}`,{params:{...this.baseSearchParams,page:e,q:r}});return a}catch(a){throw new Error(a.message)}}}i=new WeakMap,c=new WeakMap;const n={form:document.querySelector(".search-form"),input:document.querySelector(".input"),searchBtn:document.querySelector(".search-btn"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")},b=new g;let v=1;n.form.addEventListener("submit",L);function L(t){t.preventDefault(),n.loader.classList.remove("hidden"),b.fetchPhotos(t.currentTarget.searchQuery.value.trim(),v).then(e=>{w(e)}).catch(e=>{n.loader.classList.add("hidden"),console.log(e)}),t.currentTarget.reset()}function w(t){n.loader.classList.add("hidden"),n.list.innerHTML=S(t)}function S({hits:t}){return t.map(r=>`<a class="link" href=${r.largeImageURL} id=${r.id}><div class="photo-card" >
    <div class="img-wrap"><img src=${r.webformatURL} alt=${r.tags} loading="lazy" /></div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <span>${r.likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b>
            <span>${r.views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${r.comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${r.downloads}</span>
        </p>
    </div>
</div></a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
